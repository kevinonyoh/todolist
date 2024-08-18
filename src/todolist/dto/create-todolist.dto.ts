/* eslint-disable prettier/prettier */
import { IsDate, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Category, Status } from "../interfaces/todolist.interface";

export class CreateTodolistDto {
    
    @IsString()
    @IsNotEmpty()
    taskName: string;

    @IsString()
    @IsNotEmpty()
    taskDescription: string;

    @IsEnum(Category)
    @IsNotEmpty()
    category: string;
    
    @IsEnum(Status)
    @IsNotEmpty()
    status: string;
}


export class UpdateStatusDto {
    @IsEnum(Status)
    @IsNotEmpty()
    status: string;
}

