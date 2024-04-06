import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  address: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  dob: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
