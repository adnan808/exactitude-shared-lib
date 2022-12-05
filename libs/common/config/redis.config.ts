import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';

const RedisConfig: ClientOpts = {
  store: redisStore,
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

export default RedisConfig;
