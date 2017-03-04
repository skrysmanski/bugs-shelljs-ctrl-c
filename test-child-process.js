const child_process = require('child_process');

child_process.spawnSync('docker', [ 'run', '--rm', '-ti', 'krys/ctrl-c-test' ], {
	//cwd: options.cwd || process.cwd(),
	stdio: 'inherit'
});

console.log();
console.log('==> child process finished');
