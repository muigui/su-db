var path = require('path');

var chai = require('chai');
var cothunkify = require('co-thunkify');

var su_db = require(path.resolve());

var expect = chai.expect;

suite('su-db', function() {
    test('cristian is a...', cothunkify(function* () {
        expect('guy').to.be.a.string;
    }));
});
