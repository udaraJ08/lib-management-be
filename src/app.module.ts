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

@Module({
  imports: [UserModule, AuthModule, RoleModule, BorrowModule, BookModule, AuthorModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
