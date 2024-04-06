import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AuthorEntity } from '../../author/entities/author.entity';

@Entity('book')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    unique: true,
  })
  isbn: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  language: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  pages: number;

  @Column({
    type: 'decimal',
    nullable: false,
  })
  price: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  coverImage: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => AuthorEntity, (author) => author.books)
  author: AuthorEntity;
}
