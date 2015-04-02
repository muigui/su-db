var copy = require('useful-copy');
var iter = require('super-iter');

var create = require('./lib/create');

var reduce = iter.reduce;

module.exports = function* su_db(config) {
    var db_config, i = -1, l;
    var dbs = {};
    var type = Object.prototype.toString.call(config);

    //noinspection FallThroughInSwitchStatementJS
    switch (type) {
        case '[object Object]' :
            config = [config];
        case '[object Array]' :
            config = copy.merge([], config);
            l = config.length;

            while (++i < l) {
                db_config = config[i];

                if (db_config.alias in dbs) {
                    throw new Error('su-db duplicate database alias found: ' + db_config.alias + '. A database alias must be unique.');
                }

                dbs[db_config.alias] = yield create(db_config);
            }

            return dbs;
        default :
            throw new TypeError('su-db expects at least one database configuration as [object Object], received:' + type);
    }
};
