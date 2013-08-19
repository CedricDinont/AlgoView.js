var fs = require('fs');

exports.load = function(req, res) {
	//console.log(req);
		
	var fileContent = fs.readFileSync(req.files.program.path, 'utf8');
	
	res.setHeader('Content-Type', 'text/html'); // Pour ExtJS
	
	res.send({
		success: 'true',
		command: 'algoview-load-program-text',
		programName: req.files.program.name,
		programText: fileContent
	});
};
