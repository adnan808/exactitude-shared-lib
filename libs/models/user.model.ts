import { Column, Entity, JoinTable, ManyToMany, OneToOne } from 'typeorm';
import { InvestorModel } from './investor.model';
import { ProfileModel } from './profile.model';
import BaseModel from './base.abstract.model';
import { RoleModel } from './role.model';

@Entity({ name: 'users' })
export class UserModel extends BaseModel {
  @Column({
    unique: true,
  })
  sub: string;

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
    default: 0,
  })
  loginAttempts: number;

  @Column({
    name: 'last_login_at',
    nullable: true,
  })
  lastLoginAt: Date;

  @Column({ name: 'is_test_user', default: false })
  isTestUser: boolean;

  @Column({
    name: 'referral_token',
    nullable: true,
  })
  referralToken: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @OneToOne(() => InvestorModel, (inv: InvestorModel) => inv.user)
  investor: InvestorModel;

  @OneToOne(() => ProfileModel, (p: ProfileModel) => p.user)
  profile: ProfileModel;

  @ManyToMany(() => RoleModel)
  @JoinTable()
  roles: RoleModel[];
}
