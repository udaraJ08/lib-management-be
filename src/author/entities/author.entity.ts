import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BookEntity } from '../../book/entities/book.entity';

@Entity('author')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  biography: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  dob: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  nationality: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity[];
}
