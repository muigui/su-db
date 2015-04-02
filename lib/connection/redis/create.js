var redis = require('redis');
var co_redis = require('co-redis');

module.exports = function* create(connection) {
    var redisClient = redis.createClient(connection.port, connection.host);

    return co_redis(redisClient);
};
