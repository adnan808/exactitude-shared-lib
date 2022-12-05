import { Module, CacheModule } from '@nestjs/common';
import RedisConfig from '../config/redis.config';
import type { ClientOpts } from 'redis';

@Module({
  imports: [CacheModule.register<ClientOpts>(RedisConfig)],
  exports: [CacheModule],
})
export class RedisModule {}
