var path = require('path');

var chai = require('chai');
var cothunkify = require('co-thunkify');

var su_db = require(path.resolve());

var dbs = require('./fixtures/db');

var expect = chai.expect;

suite('su-db', function() {
    var db;

    suiteSetup(cothunkify(function* () {
        db = yield su_db(dbs);
    }));

    suite('mongodb', function() {
        test('query', cothunkify(function* () {
            var res = yield db.test_mongo.query();

            expect(res).to.equal('your time is up I no longer want to play for you !');
        }));
    });

    suite('rethinkdb', function() {
        test('query', cothunkify(function* () {
            var res = yield db.test_rethink.query();

            expect(res).to.equal('your time is up I no longer want to play for you !');
        }));
    });

    suite('postgresql', function() {
        test('query', cothunkify(function* () {
            var res = yield db.test_pg.query();

            expect(res).to.equal('your time is up I no longer want to play for you !');
        }));
    });

    suite('redis', function() {
        test('query', cothunkify(function* () {
            var res = yield db.test_redis.query('foo');

            expect(res).to.equal('bar');
        }));
    });
});
