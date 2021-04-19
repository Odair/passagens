import Redis from 'ioredis'

class Cache {
    public redis;

    constructor () {
      this.redis = new Redis({
        host: 'localhost',
        port: 6379,
        keyPrefix: 'cache:'
      })
    }

    async get (key) {
      const value = await this.redis.get(key)
      return value != null ? JSON.parse(value) : null
    }

    set (key, value, timeExp) {
      return this.redis.set(key, JSON.stringify(value), 'EX', timeExp)
    }

    del (key) {
      return this.redis.del(key)
    }
}

export default new Cache()
