import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GenreEntity } from './genre.entity';
import { BookEntity } from '../../book/entities/book.entity';

@Entity('genre_details')
export class GenreDetailsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => GenreEntity, (genre) => genre.genreDetails)
  genre: GenreEntity;

  @ManyToOne(() => BookEntity, (book) => book.genreDetails)
  book: BookEntity;
}
