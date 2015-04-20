var iter = require('super-iter');

var pluck = iter.pluck;

module.exports = function* query(db, params) {
    var conn = yield db.connection();
    var client = conn[0];
    var done = conn[1];

    var res = yield client.queryPromise('select * from test.test');

    done();

    return pluck(res.rows, 'value').join(' ');
};
