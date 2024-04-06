import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { StaffEntity } from '../../staff/entities/staff.entity';

@Entity('borrow')
export class BorrowEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  duration: number;

  @Column({
    type: 'date',
    nullable: true,
  })
  borrowData: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  returnData: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  lateDays: string;

  @ManyToOne(() => UserEntity, (user) => user.borrows)
  user: UserEntity;

  @ManyToOne(() => StaffEntity, (staff) => staff.borrows)
  staff: StaffEntity;
}
