require('shelljs/global');
config.fatal = true;

exec('docker run --rm -ti krys/ctrl-c-test');

echo('Done');
