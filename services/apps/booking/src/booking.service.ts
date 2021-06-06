import { IBookingService, IUsersService } from '@apps/common/interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookingInput } from './dto/create-booking.input';
import { Booking } from './booking.entity';

@Injectable()
export class BookingService implements IBookingService {
  constructor(@InjectModel(Booking.name) private userModel: Model<Booking>) {}
  create(data: CreateBookingInput) {
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
