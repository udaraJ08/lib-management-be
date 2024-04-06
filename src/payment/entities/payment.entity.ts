import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { StaffEntity } from '../../staff/entities/staff.entity';

@Entity('payment')
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.payments)
  user: UserEntity;

  @ManyToOne(() => StaffEntity, (staff) => staff.payments)
  createdBy: StaffEntity;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  subscriptionFee: number;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  lateFee: number;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
