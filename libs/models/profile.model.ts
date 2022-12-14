import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { UserModel } from './user.model';
import BaseModel from './base.abstract.model';

@Entity({ name: 'profiles' })
export class ProfileModel extends BaseModel {
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

  @Column({ name: 'kyc' })
  kyc: number;

  @OneToOne(() => UserModel, (u: UserModel) => u.profile, {
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: UserModel;
}
