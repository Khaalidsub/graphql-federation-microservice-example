import { BaseResolver, IUser } from "@apps/common/interfaces";
import { Logger } from "@nestjs/common";
import { Args, Mutation, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { CreateBookingInput } from "./dto/create-booking.input";
import { Booking } from "./booking.entity";
import { BookingService } from "./booking.service";

@Resolver(() => Booking,{})
export class BookingResolver extends BaseResolver(Booking){

    constructor(
        private readonly bookingService: BookingService,
      ) {
          super(bookingService)
      }
    
      @Mutation(() => Booking)
      async createBooking(
        @Args('createBookingInput') createUserInput: CreateBookingInput,
      ) {
        try {
          return this.bookingService.create(createUserInput)
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