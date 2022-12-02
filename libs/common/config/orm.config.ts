import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import type {} from 'typeorm/driver/mysql/MysqlConnectionCredentialsOptions';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'library',
  entities: [],
  synchronize: false,
  logging: 'all',
};

export const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
export default OrmConfig;
