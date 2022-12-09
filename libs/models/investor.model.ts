import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import UserModel from './user.model';
import BaseModel from './base.abstract.model';

export enum Type {
  INDIVIDUAL = 'individual',
  ENTITY = 'entity',
}

@Entity({ name: 'investors' })
export default class InvestorModel extends BaseModel {
  @Column()
  type: Type;

  @OneToOne(() => UserModel, (u: UserModel) => u.investor, {
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: UserModel;
}
