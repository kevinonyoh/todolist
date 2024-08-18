/* eslint-disable prettier/prettier */

import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, PrimaryKey, Table, Unique, Model } from "sequelize-typescript";
import { Category, Status } from "../interfaces/todolist.interface";
import { UserModel } from "src/user/models/user.model";


@Table({
    tableName: 'todolist',
    modelName: 'todolistModel',
    underscored: true,
    freezeTableName: true
})
export class todolistModel extends Model<todolistModel>{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @Unique
    @AllowNull(false)
    @Column
    taskName: string;

    @Unique
    @AllowNull(false)
    @Column
    taskDescription: string;

    @AllowNull(false)
    @Column(DataType.ENUM(Category.PERSONAL, Category.WORK))
    category: Category;

    @AllowNull(false)
    @Column(DataType.ENUM(Status.COMPLETE, Status.INCOMPLETE, Status.INPROGESS))
    status: Status;

    @ForeignKey(() => UserModel)
    @Column(DataType.UUID)
    userId: string;

    @BelongsTo(() => UserModel)
    user: UserModel;

}
