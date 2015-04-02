var sentinel = require('redis-sentinel');
var co_redis = require('co-redis');

module.exports = function* create(connection) {
    // todo: this needs to be configurable!!! HOW!!!?
    var Sentinel = sentinel.Sentinel(connection.sentinels);

    redisClient = Sentinel.createClient(connection.name, {
      retry_max_delay : 20,
      connect_timeout : 200,
      max_attempts : 3
    });

    return co_redis(redisClient);
};
