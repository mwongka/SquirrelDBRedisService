var bluebird = require('bluebird');
var redis = require('redis');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype); //<== what is this?

var client = redis.createClient({
  host: '127.0.0.1',
  port: 6379, //<=== default
});

module.exports = {
  client: client,
  redis: redis,
}

