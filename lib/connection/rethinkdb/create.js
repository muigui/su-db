var path = require('path');

var r = require('rethinkdbdash');

module.exports = function* create(connection) {
    var auth = connection.auth;
    var db_name = connection.name;
    var port = connection.port;
    var server = connection.server;

    if (Array.isArray(connection.servers) && connection.servers.length) {
        return r({
            servers : connection.servers
        });
    }

    return r({
        authKey : auth,
        db : db_name,
        host : server,
        port : port
    });
};
