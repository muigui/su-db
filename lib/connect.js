var connection = require('require-all')(__dirname + '/connection');
var resolveParams = require('./helpers/resolveParams');

module.exports = function* connect(db_type, config) {
    var db_connection = connection[db_type];

    if (!db_connection) {
        throw new TypeError('su-db non-existent database connection type: ' + db_type);
    }

    var conn = resolveParams(config, db_connection.defaults);

    return yield db_connection.create(conn);
};
