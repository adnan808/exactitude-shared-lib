import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { JoinColumn } from 'typeorm/browser';
import UserModel from './user.model';

export enum Type {
  INDIVIDUAL = 'individual',
  ENTITY = 'entity',
}

@Entity({ name: 'investors' })
export default class InvestorModel extends BaseEntity {
  @Column()
  type: Type;

  @OneToOne(() => UserModel, (u: UserModel) => u.investor, {
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: UserModel;
}
