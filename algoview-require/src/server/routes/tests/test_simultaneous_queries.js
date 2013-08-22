var fs = require('fs');

exports.longQuery = function(req, res) {
	console.log(req.sessionID, req.session);
	
	var status = fs.readFileSync("/tmp/status", {encoding: 'utf8'});
	console.log("File status: ", status);
	if (status == 'IN') {
		res.send('KO');
		return;
	}

	fs.writeFileSync("/tmp/status", "IN");
	
	req.session.status = 'IN';
	req.session.timestamp = (new Date()).getTime();
	console.log('New timestamp', req.session.timestamp);
	setTimeout(function() {
		req.session.status = 'OUT';
		fs.writeFileSync("/tmp/status", "OUT");
		res.send('OK');
	}, 4000);
}

exports.configureApp = function(app) {
	app.get('/tests/longQuery', module.exports.longQuery);
}
