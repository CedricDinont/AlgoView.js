var express = require('express');
var local_files = require('./routes/local_files');
var remote_c = require('./routes/remote_c');

var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

app.configure(function () {
    app.use(express.logger('dev')); /* Possible values: 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

// Configuration of static content
app.use(express.static('static'));

app.post('/load_local_file', local_files.load);

app.post('/remote_c/compile', remote_c.compile);
app.get('/remote_c/start', remote_c.start);
app.get('/remote_c/stop', remote_c.stop);
app.get('/remote_c/continueToNextBreakpoint', remote_c.continueToNextBreakpoint);
app.get('/remote_c/stepIn', remote_c.stepIn);
app.get('/remote_c/stepOver', remote_c.stepOver);
app.get('/remote_c/stepOut', remote_c.stepOut);
app.get('/remote_c/setBreakpoint', remote_c.setBreakpoint);
app.get('/remote_c/getMemory', remote_c.getMemory);

// All configuration done. Start listening
app.listen(8080);
console.log("Accepting connections");
