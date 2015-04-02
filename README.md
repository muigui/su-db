# su-db

is a wrapper around — currently only a few — existing **standard** database connection modules, `mongodb`, `postgresql`, `redis` and `redis-sentinel`, providing a single configuration style for creating database connections and encapsulating all things database.

## initial spec

### example config

```javascript

    module.exports = [{
        alias : 'eg_pg',
        type : 'postgresql',
        connection : {
            name : 'example_pg',
            pool : false, // turn off connection pooling
            port : '$POSTGRES_PORT_5432_TCP_PORT',
            pwd : '$PG_PASS',
            server : '$POSTGRES_PORT_5432_TCP_ADDR',
            user : '$PG_USER'
        },
        queries : {
            query_1 : require('./path/to/pg/query_1'),
            query_2 : require('./path/to/pg/query_2'),
            // ...
            query_N : require('./path/to/pg/query_N')
        }
    }, {
        alias : 'eg_mongo',
        type : 'mongodb',
        connection : {
            name : 'example_mongo',
            port : '$MONGODB_PORT_27017_TCP_PORT',
            pwd : '$MONGODB_PASSWORD',
            server : '$MONGODB_PORT_27017_TCP_ADDR',
            user : '$MONGODB_PASSWORD',
        },
        queries : {
            query_1 : require('./path/to/mongo/query_1'),
            query_2 : require('./path/to/mongo/query_2'),
            // ...
            query_N : require('./path/to/mongo/query_N')
        }
    }, {
        alias : 'eg_redis',
        type : 'redis',
        connection : {
            name : 'example_redis',
            port : '$REDIS_PORT_6379_TCP_PORT',
            server : '$REDIS_PORT_6379_TCP_ADDR'
        }
    }];


```

### creating connections

```javascript

    var su_db = require('su-db');

    var db = yield su_db(require('./path/to/above/config'));

```

this would return an Object where `db` looks something like this:

```javascript

    {
        eg_pg : {
            connection : [object GeneratorFunction],
            query_1 : [object GeneratorFunction],
            query_2 : [object GeneratorFunction],
            // ...
            query_N : [object GeneratorFunction]
        },
        eg_mongo : {
            connection : [object GeneratorFunction],
            query_1 : [object GeneratorFunction],
            query_2 : [object GeneratorFunction],
            // ...
            query_N : [object GeneratorFunction]
        },
        eg_redis : {
            connection : [object GeneratorFunction]
        }
    }

```

### calling an assigned query

since you're in charge of your queries you can pass your query whatever you like

```javascript

    var data = yield db.DATABASE_ALIAS.REGISTERED_QUERY({
        param_1 : Object,
        param_2 : Object,
        param_N : Object
    });

```

the first argument passed to your query is the database that query belongs to. so inside your query generator function you can do:

```javascript

    module.exports = function* query_1(db, params) {
        var conn = yield db.connection(); // return a connection from the current pool

    // what type of connection is returned is based on the type of database you are connecting to.
    // this example uses mongodb
        var collection = yield conn.collection('example_collection');

        return yield collection.find(params).stream();
    };

```
