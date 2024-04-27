const redis = require('redis');
const redisClient = redis.createClient({
  url: process.env.REDIS_URI,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.connect().then(() => {
  console.log('Redis Connected!');
});

module.exports = redisClient;
