import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { JoinColumn } from 'typeorm/browser';
import UserModel from './user.model';

@Entity({ name: 'profiles' })
export default class ProfileModel extends BaseEntity {
  @Column()
  city: string;

  @Column()
  address: string;

  @Column({ name: 'postal_code' })
  postalCode: string;

  @Column()
  phone: string;

  @Column()
  nationality: string;

  @Column({ name: 'passport_number' })
  passportNumber: string;

  @Column({ name: 'tax_id' })
  taxId: string;

  @Column({ name: 'tax_id' })
  kyc: number;

  @OneToOne(() => UserModel, (u: UserModel) => u.profile, {
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: UserModel;
}
