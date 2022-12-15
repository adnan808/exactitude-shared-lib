import { DataSourceOptions } from 'typeorm';
import {
  UserModel,
  RoleModel,
  ProfileModel,
  InvestorModel,
} from '../../models';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();
export const typeOrmModuleOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [UserModel, RoleModel, ProfileModel, InvestorModel],
  synchronize: false,
  logging: 'all',
};

const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../../models/migrations/*.js'],
};
export default OrmConfig;
