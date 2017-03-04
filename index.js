require('shelljs/global');
config.fatal = true;

exec('docker run --rm -ti mariadb');

echo('Done');
