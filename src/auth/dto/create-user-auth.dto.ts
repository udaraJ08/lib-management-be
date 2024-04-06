import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserAuthDto {
  @IsString()
  @IsNotEmpty()
  staff: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  role?: string;
}
