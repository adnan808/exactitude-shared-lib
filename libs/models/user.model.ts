import { Column, Entity, ManyToMany, OneToOne } from 'typeorm';
import InvestorModel from './investor.model';
import ProfileModel from './profile.model';
import BaseModel from './base.abstract.model';
import RoleModel from './role.model';
import { JoinTable } from 'typeorm/browser';

@Entity({ name: 'users' })
export default class UserModel extends BaseModel {
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({
    name: 'login_attempts',
    type: 'tinyint',
  })
  loginAttempts: number;

  @Column({
    name: 'last_login_at',
  })
  lastLoginAt: Date;

  @Column({ name: 'is_test_user' })
  isTestUser: boolean;

  @Column({
    name: 'referral_token',
  })
  referralToken: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @OneToOne(() => InvestorModel, (inv: InvestorModel) => inv.user)
  investor: InvestorModel;

  @OneToOne(() => ProfileModel, (p: ProfileModel) => p.user)
  profile: ProfileModel;

  @ManyToMany(() => RoleModel)
  @JoinTable()
  roles: RoleModel[];
}
