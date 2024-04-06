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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_DEV_HOST,
      port: Number.parseInt(process.env.DB_PORT),
      password: 'root',
      username: 'postgres',
      entities: [BookEntity],
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
