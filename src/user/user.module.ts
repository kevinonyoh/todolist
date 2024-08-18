/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserModel } from './models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})

export class UserModule {}
