import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuthEntity } from './entities/userAuth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAuthEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
