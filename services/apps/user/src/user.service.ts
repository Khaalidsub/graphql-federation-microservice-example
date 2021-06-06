import { IUsersService } from "@apps/common/interfaces";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserInput } from "./dto/create-user.input";
import { User } from "./user.entity";

@Injectable()
export class UsersService implements IUsersService{
    constructor(@InjectModel(User.name) private userModel: Model<User>){}
    create(data: CreateUserInput) {
      return new this.userModel(data).save();
    }
    findOne(query: any) {
        throw new Error("Method not implemented.");
    }
    findById(id: string) {
        throw new Error("Method not implemented.");
    }
    findAll() {
        throw new Error("Method not implemented.");
    }
    findAllByQuery(query: any) {
        throw new Error("Method not implemented.");
    }
    updateById(id: any, query: any) {
        throw new Error("Method not implemented.");
    }
    deleteById(id: any) {
        throw new Error("Method not implemented.");
    }
}