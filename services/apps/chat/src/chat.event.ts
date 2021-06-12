import { IBooking } from '@apps/common';
import { Injectable, Logger } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';
import { ChatService } from './chat.service';
@Injectable()
export class ChatEvent {
  protected readonly logger = new Logger(ChatEvent.name);
  constructor(private readonly chatService: ChatService) {}
  @EventPattern('booking_created')
  onBookingCreate(@Payload() data: IBooking, ) {
    this.logger.log(`booking of id ${data.id}`)
    // schedule the chat state an event
  // console.log(`Channel: ${context.getChannel()}`);
}
}
