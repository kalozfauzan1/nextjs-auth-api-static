import { Controller, Body, Post } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { HttpException, HttpStatus } from '@nestjs/common';

@Controller('auth')
export class AppController {
  @Post('login')
  login(@Body() body): any {
    const { email, password } = body;
    console.log(body)
    if (email != 'admin@gmail.com' && password !== 'admin') {
      throw new HttpException(
        'Email or password is wron',
        HttpStatus.BAD_REQUEST,
      );
    }
    const data = {
      id: 1,
      email,
      name: 'admin',
    };
    return {
      ...data,
      accessToken: jwt.sign(data, 'kaloz'),
    };
  }
}
