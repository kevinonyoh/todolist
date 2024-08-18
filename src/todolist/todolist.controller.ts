/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Put } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { CreateTodolistDto, UpdateStatusDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { Transaction } from 'sequelize';
import { TransactionParam } from 'src/common/decorators/transaction-param.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { IUser } from './interfaces/todolist.interface';

@Controller('todolist')
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}
  
  
  @Post("create")
  @ResponseMessage("Task added successfully")
  create(@Body() createTodolistDto: CreateTodolistDto, @User() user:IUser, @TransactionParam() transaction: Transaction) {
    return this.todolistService.create(createTodolistDto, user, transaction);
  }

  @Get("")
  @ResponseMessage("data retrieve successfully")
  findAll(@User() user: IUser){
     return this.todolistService.findAll(user);
  }

  @Get("/:id")
  @ResponseMessage("data retrieve successfully")
  findOne(@Param('id') todoId: string,  @User() user:IUser){
      return this.todolistService.findOne(todoId, user);
  }

  @Put("/:id")
  @ResponseMessage("todo status update successfully")
  updateStatus(@Param('id') todoId: string, @Body() body: UpdateStatusDto, @User() user: IUser, @TransactionParam() transaction: Transaction){
      return this.todolistService.updateStatus(body, todoId, user, transaction);
  }

  @Delete("/:id")
  @ResponseMessage("todo deleted successfully")
  remove(@Param("id") todoId: string, @TransactionParam() transaction: Transaction){
    return this.todolistService.remove(todoId, transaction);
  }


 }
