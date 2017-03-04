require('shelljs/global');

console.log('==> Running NodeJS ' + process.version);
console.log();

exec('docker run --rm -ti krys/ctrl-c-test');

console.log();
console.log('==> child process finished');
