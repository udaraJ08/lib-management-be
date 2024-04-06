import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GenreDetailsEntity } from './genreDetails.entity';

@Entity('genre')
export class GenreEntity {
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
    nullable: false,
  })
  description: string;

  @OneToMany(() => GenreDetailsEntity, (details) => details.genre)
  genreDetails: GenreDetailsEntity[];
}
