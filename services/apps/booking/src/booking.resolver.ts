import { BaseResolver, IUser } from '@apps/common/interfaces';
import { Inject, Logger, OnApplicationBootstrap } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateBookingInput } from './dto/create-booking.input';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Resolver(() => Booking, {})
export class BookingResolver extends BaseResolver(Booking) {
  constructor(
    private eventEmitter: EventEmitter2,
    private readonly bookingService: BookingService,
  ) {
    super(bookingService);
  }

  @Mutation(() => Booking)
  async createBooking(
    @Args('createBookingInput') createUserInput: CreateBookingInput,
  ) {
    try {
      const booking = await this.bookingService.create(createUserInput);
      this.eventEmitter.emit('booking.created', booking);
      return booking;
    } catch (error) {
      this.logger.error(error);
      throw new Error(error);
    }
  }

  @ResolveField(() => IUser)
  student(@Parent() booking: Booking): any {
    return { __typename: 'User', id: booking.student };
  }
  @ResolveField(() => IUser)
  tutor(@Parent() booking: Booking): any {
    return { __typename: 'User', id: booking.tutor };
  }
}
