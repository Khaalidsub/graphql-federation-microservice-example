import { IUsersService } from '@apps/common/interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UsersService implements IUsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  create(data: CreateUserInput) {
    return new this.userModel(data).save();
  }
  findOne(query: any) {
    return this.userModel.findOne(query);
  }
  findById(id: string) {
    return this.userModel.findById(id);
  }
  findAll() {
    return this.userModel.find();
  }
  findAllByQuery(query: any) {
    return this.userModel.find(query);
  }
  updateById(id: string, query: any) {
    return this.userModel.findByIdAndUpdate(id, query, {
      new: true,
      useFindAndModify: true,
    });
  }
  deleteById(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
