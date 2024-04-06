import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { BorrowModule } from './borrow/borrow.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book/entities/book.entity';
import { UserEntity } from './user/entities/user.entity';
import { AuthorEntity } from './author/entities/author.entity';
import { GenreModule } from './genre/genre.module';
import { GenreEntity } from './genre/entities/genre.entity';
import { GenreDetailsEntity } from './genre/entities/genreDetails.entity';
import { PublisherModule } from './publisher/publisher.module';
import { PublisherEntity } from './publisher/entities/publisher.entity';
import { StaffModule } from './staff/staff.module';
import { StaffEntity } from './staff/entities/staff.entity';
import { BorrowEntity } from './borrow/entities/borrow.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_DEV_HOST,
      port: Number.parseInt(process.env.DB_PORT),
      password: 'root',
      username: 'postgres',
      entities: [
        UserEntity,
        AuthorEntity,
        BookEntity,
        GenreEntity,
        GenreDetailsEntity,
        PublisherEntity,
        StaffEntity,
        BorrowEntity,
      ],
      database: 'lib_management_db',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
    RoleModule,
    BorrowModule,
    BookModule,
    AuthorModule,
    PaymentModule,
    GenreModule,
    PublisherModule,
    StaffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
