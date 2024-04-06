import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserAuthDto } from './dto/create-user-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('register')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/user')
  createUserAuth(@Body() createUserAuthDto: CreateUserAuthDto) {
    return this.authService.createUserAuth(createUserAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
