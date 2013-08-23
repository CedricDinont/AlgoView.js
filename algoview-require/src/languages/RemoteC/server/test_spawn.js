var spawn = require('child_process').spawn;

var grep = spawn('grep', ['coucou']);

console.log('Spawned child pid: ' + grep.pid);

grep.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

grep.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

grep.on('close', function (code, signal) {
  console.log('child process terminated due to receipt of signal '+ signal);
  console.log('child process exited with code ' + code);
});

grep.stdin.write('toto\n');
grep.stdin.write('coucou\n');
grep.stdin.write('toto\n');
grep.stdin.write('coucou\n');
grep.stdin.end();
