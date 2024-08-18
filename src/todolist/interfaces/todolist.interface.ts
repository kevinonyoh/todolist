/* eslint-disable prettier/prettier */

export enum Category{
    WORK = 'Work',
    PERSONAL = 'Personal'
}

export enum Status{
    COMPLETE = 'Complete',
    INPROGESS = 'In Progress',
    INCOMPLETE = 'Incomplete'
}

export interface IUser {
    id: string;
    email: string;
}