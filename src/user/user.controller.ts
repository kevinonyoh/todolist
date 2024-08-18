/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { Public } from 'src/common/decorators/public.decorator';
import { TransactionParam } from 'src/common/decorators/transaction-param.decorator';
import { Transaction } from 'sequelize';

@Public()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  @ResponseMessage("Sign up successful")
  async create(@Body() Body: CreateUserDto, @TransactionParam() transaction: Transaction) {
    return this.userService.create(Body, transaction);
  }
 
}
