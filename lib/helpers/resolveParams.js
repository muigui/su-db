var copy = require('useful-copy');
var func = require('super-func');
var iter = require('super-iter');

var identity = func.identity;
var filter = iter.filter;
var forEach = iter.forEach;
var map = iter.map;
var some = iter.some;

module.exports = function resolve(config, defaults) {
    var type = Object.prototype.toString.call(config);

    //noinspection FallThroughInSwitchStatementJS
    switch (type) {
        case '[object Object]' :
            break;
        default :
            throw new TypeError('su-db expecting [object Object], received: ' + type);
    }

    if (defaults && typeof defaults === 'object') {
    // run this first as that way we can have default environment variables
    // — e.g. docker environment variables — and we will only need to resolve
    // the connection's parameters once.
        forEach(defaults, defaultValue.bind(config));
    }

    return filter(map(config, resolveParam), identity);
};

function defaultValue(val, key) {
    if (!(key in this)) { //noinspection FallThroughInSwitchStatementJS
        switch (Object.prototype.toString.call(val)) {
            case '[object Array]' :
            case '[object Object]' :
                this[key] = copy.merge(val);
                break;
            default :
                this[key] = val;
        }
    }
}

function resolveParam(val, key) {
    switch (Object.prototype.toString.call(val)) {
        case '[object Array]' :
            some(val, function(v) {
                val = resolveParam(v, key);

                return !!val;
            });

            break;
        case '[object String]' :
            if (val.startsWith('$')) {
                val = process.env[val.substring(1)];
            }

            break;
    }

    return val;
}
