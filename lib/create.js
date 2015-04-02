var func = require('super-func');
var iter = require('super-iter');

var connect = require('./connect');
var resolveParams = require('./helpers/resolveParams');

var partial = func.partial;
var map = iter.map;

module.exports = function* create(config) {
    var type = Object.prototype.toString.call(config);

    //noinspection FallThroughInSwitchStatementJS
    switch (type) {
        case '[object Object]' :
            break;
        default :
            throw new TypeError('su-db expecting database configuration as [object Object], received: ' + type);
    }

    config = resolveParams(config);

    var conn = config.pool !== false
             ? yield connect(config.type, config.connection)
             : null;

    if (!config.alias) {
        if (config.connection.name) {
            config.alias = config.connection.name;
        }
        else if (config.type) {
            config.alias = config.type;
        }
    }

    var db = config.queries && typeof config.queries === 'object' ? config.queries : {};

    db = map(db, partial(wrap, db));

    db.connection = function* (force_new) {
        if (force_new === true || conn === null) {
            return yield connect(config.type, config.connection);
        }

        return conn;
    };

    return db;
};

function wrap(db, query) {
    return partial(query, db);
}
