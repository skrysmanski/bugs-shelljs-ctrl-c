require('shelljs/global');

exec('docker run --rm -ti krys/ctrl-c-test');

console.log();
console.log('==> child process finished');
