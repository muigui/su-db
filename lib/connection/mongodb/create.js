var path = require('path');

var co_mongo = require('co-mongo');

module.exports = function* create(connection) {
    var db_name = connection.name;
    var port = connection.port;
    var server = connection.server;

    return yield co_mongo.connect('mongodb://' + server + ':' + port + '/' + db_name);
};
