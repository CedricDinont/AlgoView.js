//TODO protections :
// - stack overflow : http://stackoverflow.com/questions/742200/how-to-detect-the-point-of-a-stack-overflow
// - ulimit sur le programme à exécuter mais pas gdb (http://www.ss64.com/bash/ulimit.html)


var fs = require('fs');
var spawn = require('child_process').spawn;
var execFile = require('child_process').execFile;

var remoteCClients = new Array();

function RemoteCClient(clientSession) {
	this.status = 'CREATED';
	this.commandState = 'OUT';
	this.gdb;
	this.gdbStdout = "";
	this.gdbStderr = "";
	this.programStdout = "";
	this.programStdin = "";
	this.clientSession = clientSession;
	this.workingDirectory;
	
	this.commandQueue = new Array();
}

RemoteCClient.prototype.sendCommandToGdb = function() {
	
}

RemoteCClient.prototype.compile = function() {
	
}


function GdbCommand() {
	this.text;
	this.callback;
	this.req;
	this.res;
}

if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function(str) {
		return this.substring(0, str.length) === str;
	}
};

if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function(str) {
		return this.substring(this.length - str.length, this.length) === str;
	}
};


function sendCommandToGdb(session, command) {
	session.commandQueue.push(command);
	
	if (session.commandQueue.length == 1) {
		sendNextCommand(session);
	}
}

function sendNextCommand(session) {
	if (session.commandQueue.length == 0) {
		return;
	}
	var command = session.commandQueue[0];
	console.log("Sending command to gdb: ", command.text);
	session.gdb.stdin.write(command.text + "\n");
}

function checkSession(req, res) {
	var session = remoteCClients[req.session.sid];
	
	if (session == undefined) {
		session = new Session(req.session);
		remoteCClients[req.session.sid] = session;
	}
	
	if (session.workingDirectory == undefined) {
		console.log("Creating working directory for session", req.session.sid);
		session.workingDirectory = '/tmp/' + req.session.sid + '/';
		fs.mkdirSync(session.workingDirectory);
		mkfifo(session.workingDirectory + "stdout.fifo");
		mkfifo(session.workingDirectory + "stderr.fifo");
	}
	
	if (session.commandState == 'IN') {
		
	}
}

function getSession(req, res) {
	checkSession(req);
	return remoteCClients[req.session.sid];
}

function reportErrorToClient(error) {
	
}

exports.compile = function(req, res) {
	var session = getSession(req);

	var program = req.body;
	var source = program.sources[0];
	var filename = source.name;
	var fileContent = source.text;
	
	fs.writeFileSync(session.workingDirectory + filename, fileContent);

	var gcc = execFile("gcc", [
		'-g', 
		'-Wall',
		'-v',
		'-Werror',
		'-o', session.workingDirectory + 'a.out',
		session.workingDirectory + filename
	], function(error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
		
		session.status = 'COMPILED';
		
		res.send({
			success: 'true',
			stdout: stdout,
			stderr: stderr
		});
	});
};

function onGdbStdout(session, data) {
	console.log('gdb stdout: ' + data);
	session.gdbStdout += data;
	
	if (session.gdbStdout.endsWith("(gdb) \n")) {
		console.log("Found end of gdb output.");
		if (session.commandQueue.length == 0) {
			console.log("No associated command with output. Discarding");
			session.gdbStdout = "";
			return;
		}
		var currentCommand = session.commandQueue[0];
		var commandOutputFinished;
		if (currentCommand.callback != undefined) {
			commandOutputFinished = currentCommand.callback(session, currentCommand);
		}
		if ((currentCommand.callback == undefined) || commandOutputFinished) {
			session.commandQueue.shift();
			sendNextCommand(session);
		}
		session.gdbStdout = "";
	}
}

exports.startGdb = function(req, res) {
	var session = getSession(req);
	
	if (session.status != 'COMPILED') {
		res.send({
			success: 'false',
			message: 'Programme non compilé',
		});
		return;
	}
	
	var gdb = spawn("gdb", [
		'--interpreter=mi', 
		'-statistics',
		'-cd',
		session.workingDirectory,
		session.workingDirectory + 'a.out'
	]);

	session.gdb = gdb;

	gdb.stdout.on('data', function(data) { onGdbStdout(session, data) });

	gdb.stderr.on('data', function (data) {
		console.log('gdb stderr: ' + data);
		session.gdbStderr += data;
	});
	
	gdb.on('close', function (code, signal) {
		console.log('gdb child process terminated due to receipt of signal '+ signal);
		console.log('gdb child process exited with code ' + code);
	});
	
	var programStdoutReadStream = fs.createReadStream("/tmp/stdout.fifo", {encoding: 'utf8'});
	programStdoutReadStream.on('data', function(data) {
		console.log("Program output: ", data);
		session.programStdout += data;
	});

	var programStderrReadStream = fs.createReadStream("/tmp/stderr.fifo", {encoding: 'utf8'});
	programStderrReadStream.on('data', function(data) {
		console.log("Program err: ", data);
		session.programStderr += data;
	});
	
	res.send({
		success: 'true',
	});
}

exports.startProgram = function(req, res) {
	var session = getSession(req);
	
	var command = new GdbCommand();
	command.text = "start > /tmp/stdout.fifo";
	command.res = res;
	command.req = req;
	command.callback = function(session, command) {
		command.res.send({
			success: 'true',
		});
		
		return true;
	}
	sendCommandToGdb(session, command);
	
	command = new Command();
	command.text = 'call setbuf(stdout, 0)';
	sendCommandToGdb(session, command);

	command = new Command();
	command.text = 'call setbuf(stderr, 0)';
	sendCommandToGdb(session, command);
}

exports.stop = function(req, res) {
	var session = getSession(req);

	gdb.stdin.end();
	
	res.send({
		success: 'true',
		output: gdb.gdbOutput
	});
}

exports.continueToNextBreakpoint = function(req, res) {
	var session = getSession(req);
	
	var command = new GdbCommand();
	command.text = "-exec-continue";
	command.res = res;
	command.req = req;
	command.callback = function(session, command) {
		command.res.send({
			success: 'true',
		});
	}
	
	sendCommandToGdb(session, command);
}

function stepInCallback2(session, command) {
	command.res.send({
		success: 'true',
	});
	
	return true;
}

function stepInCallback(session, command) {
	command.callback = stepInCallback2;
	
	// TODO: Create a callback to kill process if reached a timeout
	
	return false;
}

exports.stepIn = function(req, res) {
	var session = getSession(req);
	
	var command = new GdbCommand();
	command.text = "-exec-step";
	command.res = res;
	command.req = req;
	command.callback = stepInCallback;
	
	sendCommandToGdb(session, command);
}

exports.stepOver = function(req, res) {
	var session = getSession(req);
	
	var command = new GdbCommand();
	command.text = "-exec-next";
	command.res = res;
	command.req = req;
	command.callback = function(session, command) {
		command.res.send({
			success: 'true',
		});
		
		return true;
	}
	
	sendCommandToGdb(session, command);
}

exports.stepOut = function(req, res) {
	var session = getSession(req);
	
	var command = new GdbCommand();
	command.text = "-exec-finish";
	command.res = res;
	command.req = req;
	command.callback = function(session, command) {
		command.res.send({
			success: 'true',
		});
		
		return true;
	}
	
	sendCommandToGdb(session, command);
}

exports.setBreakpoint = function(req, res) {
	var session = getSession(req);

	var breakpoint = req.body;

	var command = new GdbCommand();
	command.text = "break " + breakpoint.line;
	command.res = res;
	command.req = req;
	command.callback = function(session, command) {
		command.res.send({
			success: 'true',
		});
		
		return true;
	}
	
	sendCommandToGdb(session, command);
}

exports.getMemory = function(req, res) {
	var session = getSession(req);
	
	// info local
	// info args
	
	var command = new GdbCommand();
	command.text = "-stack-list-variables --simple-values";  // --all-values
	command.res = res;
	command.req = req;
	command.callback = function(session, command) {
		command.res.send({
			success: 'true',
			output: session.gdbStdout
		});
		
		return true;
	}
	
	sendCommandToGdb(session, command);
}


exports.getProgramOutput = function(req, res) {
	var session = getSession(req);
	
	var output = session.programStdout;
	session.programStdout = "";
	
	res.send({
		success: 'true',
		output: output
	});
}
