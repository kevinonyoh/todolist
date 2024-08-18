import { Module } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { TodolistController } from './todolist.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { todolistModel } from './models/todolist.model';
import { TodolistRepository } from './repositories/todolist.repository';

@Module({
  imports: [SequelizeModule.forFeature([todolistModel])],
  controllers: [TodolistController],
  providers: [TodolistService, TodolistRepository],
})
export class TodolistModule {}
