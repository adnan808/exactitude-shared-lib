import { DataSource } from 'typeorm';
import OrmConfig from '../config/orm.config';

export default new DataSource(OrmConfig);
