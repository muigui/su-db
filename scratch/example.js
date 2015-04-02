var co = require('co');
var copy = require('useful-copy');
var su_db = require('../');

copy(process.env, {
    //MONGO_PASSWORD : 'mongoenergy',
    //MONGO_PORT_27017_TCP_PORT : 28017,
    //MONGO_PORT_27017_TCP_ADDR : 'localhost',
    //MONGO_USER : 'mongoenergy',
    PG_PASS : 'myenergy',
    PG_USER : 'myenergy',
    //POSTGRES_PORT_5432_TCP_PORT : 5432,
    POSTGRES_PORT_5432_TCP_ADDR : '10.40.255.151'//,
    //REDIS_PORT_6379_TCP_PORT : 6378,
    //REDIS_PORT_6379_TCP_ADDR : 'localhost'
});

co.wrap(function* () {
    try {
        var dbs = yield su_db(require('./db'));
    }
    catch (e) {
        console.log(e.stack);
        throw e;
    }

    console.log(dbs);

    process.exit(0);
})();
