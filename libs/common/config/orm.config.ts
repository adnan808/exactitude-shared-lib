import { DataSourceOptions } from 'typeorm';

export const typeOrmModuleOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: false,
  logging: 'all',
};

const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: ['models/migrations/*.ts'],
  cli: {
    migrationsDir: 'models/migrations',
  },
};
export default OrmConfig;
