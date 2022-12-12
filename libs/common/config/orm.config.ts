import { DataSourceOptions } from 'typeorm';
import UserModel from '../../models/user.model';
import RoleModel from '../../models/role.model';
import ProfileModel from '../../models/profile.model';
import InvestorModel from '../../models/investor.model';
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
  migrations: ['dist/models/migrations/*.js'],
};
export default OrmConfig;
