import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrmConfig from '../config/orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(OrmConfig)],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
