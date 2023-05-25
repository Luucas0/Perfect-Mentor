import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthGuard } from './auth.guard';
import { ValidationPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Registering a new User
  @Post('register')
  registerUser(@Body(new ValidationPipe()) RegisterAuthDto: RegisterAuthDto) {
    return this.authService.register(RegisterAuthDto);
  }

  //User login
  @HttpCode(HttpStatus.OK)
  @Post('login')
  loginUser(@Body(new ValidationPipe()) LoginAuthDto: LoginAuthDto) {
    return this.authService.login(LoginAuthDto);
  }

  //Route to check protected routes
  @UseGuards(AuthGuard)
  @Get('/')
  findAll() {
    return this.authService.findAll();
  }
}
