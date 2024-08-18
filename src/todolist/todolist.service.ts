/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTodolistDto, UpdateStatusDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import {TodolistRepository} from './repositories/todolist.repository'
import { Transaction } from 'sequelize';
import { filter } from 'rxjs';
import { IUser } from './interfaces/todolist.interface';

@Injectable()
export class TodolistService {
  constructor(private readonly todolistRepository: TodolistRepository){}
 async create(createTodolistDto: CreateTodolistDto, data:IUser, transaction: Transaction) {

     const {...rest} = createTodolistDto;
     const val = {
      userId: data.id,
      ...rest
     }

     await this.todolistRepository.create(val, transaction);
  }

  async findAll(data: IUser){
    return await this.todolistRepository.findAll({userId: data.id});
  }

  async findOne(id: string, data: IUser){
    return await this.todolistRepository.findOne({id, userId: data.id});
  }

  async updateStatus(data: UpdateStatusDto, id: string, user:IUser, transaction: Transaction){
      return await this.todolistRepository.update({id, userId: user.id}, data, transaction);
  }

  async remove(id: string, transaction: Transaction){
    return await this.todolistRepository.delete({id}, transaction)
  }
  
}


