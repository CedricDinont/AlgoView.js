var fs = require('fs');
var execFile = require('child_process').execFile;

var filename = '/tmp/stdout.fifo';
execFile("mkfifo", [filename], function(error, stdout, stderr) {
	console.log(error, stdout, stderr);
	
	var readStream = fs.createReadStream(filename);
	readStream.on('data', function(chunk) {
		console.log('got %d bytes of data', chunk.length, chunk);
	});
});


