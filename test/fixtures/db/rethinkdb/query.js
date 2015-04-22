var iter = require('super-iter');

var pluck = iter.pluck;

module.exports = function* query(db, params) {
    var r = yield db.connection();

    var res = yield r.table('test').orderBy('id').pluck('value');

    return pluck(res, 'value').join(' ');
};
