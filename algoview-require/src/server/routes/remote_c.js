var fs = require('fs');
var spawn = require('child_process').spawn;
var execFile = require('child_process').execFile;

var gdbs = new Array();


if ( typeof String.prototype.startsWith != 'function' ) {
  String.prototype.startsWith = function( str ) {
    return this.substring( 0, str.length ) === str;
  }
};

if ( typeof String.prototype.endsWith != 'function' ) {
  String.prototype.endsWith = function( str ) {
    return this.substring( this.length - str.length, this.length ) === str;
  }
};


function parseGdbOutput(gdb, gdbOutput) {
	gdb.flag = false;
	gdb.stdin.write("call fflush(0)\n");
	
	gdb.res.send({
		success: 'true',
		output: gdbOutput
	});
}


exports.compile = function(req, res) {
	
	if (req.session.workingDirectory == undefined) {
		console.log("Creating working directory");
		req.session.workingDirectory = '/tmp/';
	}
	
	var program = req.body;
	var source = program.sources[0];
	var filename = source.name;
	var fileContent = source.text;
	
	fs.writeFileSync(req.session.workingDirectory + filename, fileContent);

	var gcc = execFile("gcc", [
		'-g', 
		'-Wall',
		'-v',
		'-Werror',
		'-o', req.session.workingDirectory + 'a.out',
		req.session.workingDirectory + filename
	], function(error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
		
		req.session.status = 'compiled';
		
		res.send({
			success: 'true',
			stdout: stdout,
			stderr: stderr
		});
	});
};

exports.start = function(req, res) {
	console.log(req.session.status);
	
	if (req.session.status != 'compiled') {
		res.send({
			success: 'false',
			message: 'Programme non compilé',
		});
	}
	
	var gdb = spawn("gdb", [
		'--interpreter=mi', 
		'-statistics',
		'-cd',
		req.session.workingDirectory,
		req.session.workingDirectory + 'a.out'
	]);
	
	gdbs[req.session.sid] = gdb;

	gdb.stdout.on('data', function (data) {
		console.log('gdb stdout: ' + data);
		gdbs[req.session.sid].gdbOutput += data;
		
		if (gdbs[req.session.sid].gdbOutput.endsWith("(gdb) \n")) {
			console.log("Found end of gdb output.");
			if (gdb.flag) {
				parseGdbOutput(gdb, gdbs[req.session.sid].gdbOutput);
			}
			gdbs[req.session.sid].gdbOutput = "";
		}
	});

	gdb.stderr.on('data', function (data) {
		console.log('gdb stderr: ' + data);
		//gdbs[req.session.sid].gdbOutput += data;
	});
	
	gdb.on('close', function (code, signal) {
		console.log('gdb child process terminated due to receipt of signal '+ signal);
		console.log('gdb child process exited with code ' + code);
	});
	
	gdb.stdin.write("start\n");
	gdb.flag = true;
	gdb.res = res;
	gdb.req = req;
		
	/*res.send({
		success: 'true',
		output: gdb.gdbOutput
	});*/
}

exports.stop = function(req, res) {
	var gdb = gdbs[req.session.sid];

	gdb.stdin.end();
	
	res.send({
		success: 'true',
		output: gdb.gdbOutput
	});
}

exports.continueToNextBreakpoint = function(req, res) {
	var gdb = gdbs[req.session.sid];
	
	gdb.stdin.write("-exec-continue\n");
	gdb.flag = true;
	gdb.res = res;
	gdb.req = req;
}

exports.stepIn = function(req, res) {
	var gdb = gdbs[req.session.sid];
	
	gdb.stdin.write("-exec-next\n");
	//gdb.stdin.write("next\n");
	gdb.flag = true;
	gdb.res = res;
	gdb.req = req;
}

exports.stepOver = function(req, res) {
	
}

exports.stepOut = function(req, res) {
	var gdb = gdbs[req.session.sid];
	
	gdb.stdin.write("-exec-finish\n");
	gdb.flag = true;
	gdb.res = res;
	gdb.req = req;	
}

exports.setBreakpoint = function(req, res) {
	
}

exports.getMemory = function(req, res) {
	var gdb = gdbs[req.session.sid];
	
	//gdb.stdin.write("info local\n");
	//gdb.stdin.write("info args\n");	

	gdb.stdin.write("-stack-list-variables --simple-values\n"); // --all-values
	gdb.flag = true;
	gdb.res = res;
	gdb.req = req;
	/*res.send({
		success: 'true',
		output: gdb.gdbOutput
	}); */
}
