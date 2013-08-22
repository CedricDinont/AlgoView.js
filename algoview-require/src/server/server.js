var express = require('express');
var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

app.configure(function () {
    app.use(express.logger('dev')); /* Possible values: 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

// Configuration of static content
app.use(express.static('static'));

var local_files = require('./routes/local_files/local_files');
local_files.configureApp(app);

var remote_c = require('./routes/remote_c/remote_c');
remote_c.configureApp(app);

var tests = require('./routes/tests/test_simultaneous_queries');
tests.configureApp(app);

// All configuration done. Start listening
app.listen(8080);
console.log("Accepting connections");
