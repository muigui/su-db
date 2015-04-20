var iter = require('super-iter');

var pluck = iter.pluck;

module.exports = function* query(db, params) {
    var conn = yield db.connection();

    var coll = yield conn.collection('test');

    var res = yield coll.find().sort({ id : 1 }).toArray();

    return pluck(res, 'value').join(' ');
};
