import { Column, Entity } from 'typeorm';
import SupportModel from './support.abstract.model';

@Entity({ name: 'roles' })
export class RoleModel extends SupportModel {
  @Column({
    unique: true,
  })
  name: string;
}