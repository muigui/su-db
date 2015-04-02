module.exports = [{
    alias : 'eg_pg',
    type : 'postgresql',
    connection : {
        name : 'myenergy'//,
        //port : '$POSTGRES_PORT_5432_TCP_PORT',
        //pwd : '$PG_PASS',
        //server : '$POSTGRES_PORT_5432_TCP_ADDR',
        //user : '$PG_USER'
    }/*,
    queries : {
        query_1 : require('./path/to/pg/query_1'),
        query_2 : require('./path/to/pg/query_2'),
        // ...
        query_N : require('./path/to/pg/query_N')
    }*/
}, {
    alias : 'eg_mongo',
    type : 'mongodb',
    connection : {
        name : 'example_mongo',
        //port : '$MONGO_PORT_27017_TCP_PORT',
        pwd : '$MONGO_PASSWORD',
        //server : '$MONGO_PORT_27017_TCP_ADDR',
        user : '$MONGO_USER'
    }/*,
    queries : {
        query_1 : require('./path/to/mongo/query_1'),
        query_2 : require('./path/to/mongo/query_2'),
        // ...
        query_N : require('./path/to/mongo/query_N')
    }*/
}, {
    alias : 'eg_redis',
    type : 'redis',
    connection : {
        name : 'example_redis'/*,
        port : '$REDIS_PORT_6379_TCP_PORT',
        server : '$REDIS_PORT_6379_TCP_ADDR'*/
    }
}];
