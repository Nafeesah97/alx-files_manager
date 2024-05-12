import redis from 'redis'

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.client.on('error', (err) => {
      console.error('Redis client not connected to the server:', err);
    });
  }

  async isAlive() {
    try {
      await this.client.ping();
      return true;
    } catch (err) {
      return false;
    }
  }

  async get(key) {
    return await this.client.get(key);
  }

  async set(key, value, durationInSeconds) {
    await this.client.set(key, value, 'EX', durationInSeconds);
  }

  async del(key) {
    await this.client.del(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;