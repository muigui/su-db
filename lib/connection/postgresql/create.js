var pg = require('pg');
var co_pg = require('co-pg');

module.exports = function* create(connection) {
	var db_name  = connection.name;
	var password = encodeURIComponent(connection.pwd);
	var port     = connection.port;
	var server   = connection.server;
	var user     = connection.user;

	var db_conn = 'postgres://';

	if ( typeof user === 'string' && typeof password === 'string' ) {
	    db_conn += user + ':' + password + '@';
	}

    db_conn += server + ':' + port + '/' + db_name;

    var db = co_pg(pg);

    return yield db.connectPromise(db_conn);
};
