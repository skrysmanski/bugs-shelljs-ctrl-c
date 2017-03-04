require('shelljs/global');
config.fatal = true;

exec('docker run --rm -ti -e MYSQL_RANDOM_ROOT_PASSWORD=1 mariadb');

echo('Done');
