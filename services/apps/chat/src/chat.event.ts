import { Injectable } from '@nestjs/common';
import { ChatService } from './chat.service';
@Injectable()
export class ChatEvent {
  constructor(private readonly chatService: ChatService) {}
}
