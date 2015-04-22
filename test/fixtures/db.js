var server = require('url').parse(process.env.DOCKER_HOST).hostname;

module.exports = [{
    alias : 'test_pg',
    type : 'postgresql',
    connection : {
        name : 'test',
        pool : false, // turn off connection pooling
        port : 5433,
        pwd : 'test',
        server : server,
        user : 'test'
    },
    queries : {
        test : require('../postgresql.test'),
        query : require('./db/postgresql/query')
    }
}, {
    alias : 'test_mongo',
    type : 'mongodb',
    connection : {
        name : 'test',
        port : 27018,
        server : server
    },
    queries : {
        test : require('../mongodb.test'),
        query : require('./db/mongodb/query')
    }
}, {
    alias : 'test_rethink',
    type : 'rethinkdb',
    connection : {
        name : 'test',
        port : 28016,
        server : server
    },
    queries : {
        test : require('../rethinkdb.test'),
        query : require('./db/rethinkdb/query')
    }
}, {
    alias : 'test_redis',
    type : 'redis',
    connection : {
        port : 6380,
        server : server
    },
    queries : {
        test : require('../redis.test'),
        query : require('./db/redis/query')
    }
}];
