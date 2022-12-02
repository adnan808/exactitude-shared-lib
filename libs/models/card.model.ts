import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user_cards' })
export default class UserCard extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'card_peach_id',
    unique: true,
    nullable: true,
  })
  cardPeachId: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column()
  brand: string;

  @Column()
  country: string;

  @Column()
  bin: string;

  @Column()
  holder: string;

  @Column({ name: 'last_4_digits' })
  last4Digits: string;

  @Column({ name: 'expiry_month' })
  expiryMonth: string;

  @Column({ name: 'expiry_year' })
  expiryYear: string;

  @Column({ name: 'card_mode' })
  cardMode: string;

  @Column({ name: 'initial_transaction_id', nullable: true })
  initialTransactionId?: string;

  @Column({ default: false })
  deleted: boolean;

  @Column({ default: null, nullable: true })
  service: string;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt: Date;

  constructor() {
    super();
  }
}
