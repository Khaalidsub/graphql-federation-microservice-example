import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ClientProxy } from '@nestjs/microservices';
import { Booking } from './booking.entity';

@Injectable()
export class BookingSignals implements OnApplicationBootstrap {
  constructor(@Inject('BOOKING_SERVICE') private client: ClientProxy) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @OnEvent('booking.created')
  onBookingCreate(data: Booking) {
    this.client.emit('booking_created', data);
  }
}
