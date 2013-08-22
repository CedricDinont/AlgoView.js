var fs = require('fs');
var spawn = require('child_process').spawn;
var execFile = require('child_process').execFile;

function RemoteCClient(sessionID, clientSession) {
	this.id = sessionID;
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

RemoteCClient.prototype.sendCommandToGdb = function(command) {
	this.commandQueue.push(command);
	
	if (this.commandQueue.length == 1) {
		this.sendNextCommandToGdb();
	}
}

RemoteCClient.prototype.sendNextCommandToGdb = function() {
	if (this.commandQueue.length == 0) {
		return;
	}
	var command = this.commandQueue[0];
	console.log("Sending command to gdb: ", command.text);
	this.gdb.stdin.write(command.text + "\n");
}

RemoteCClient.prototype.compile = function() {
	var program = this.req.body;
	var source = program.sources[0];
	var filename = source.name;
	var fileContent = source.text;
	
	fs.writeFileSync(this.workingDirectory + filename, fileContent);

	var self = this;
	var gcc = execFile("gcc", [
		'-g', 
		'-Wall',
		'-v',
		'-Werror',
		'-o', this.workingDirectory + 'a.out',
		this.workingDirectory + filename
	], function(error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
		
		self.status = 'COMPILED';
		
		self.res.send({
			success: 'true',
			stdout: stdout,
			stderr: stderr
		});
	});
}

RemoteCClient.prototype.stepIn = function() {
	var command = new GdbCommand();
	command.text = "-exec-step";
	command.res = res;
	command.req = req;
	command.callback = stepInCallback;
	this.sendCommandToGdb(command);
}

module.exports = RemoteCClient;
