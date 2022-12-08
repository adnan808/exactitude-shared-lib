import { BaseEntity, Column, CreateDateColumn, Entity } from 'typeorm';
import SupportModel from './support.abstract.model';

@Entity({ name: 'roles' })
export default class RoleModel extends SupportModel {
  @Column({
    unique: true,
  })
  name: string;
}
