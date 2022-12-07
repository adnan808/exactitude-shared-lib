import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

export * from './common/config';
export * from './common/enum';
export * from './common/exceptions';
export * from './common/interceptors';
export * from './common/database';
