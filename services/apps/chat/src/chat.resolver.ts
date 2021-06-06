import { BaseResolver, IUser } from '@apps/common/interfaces';
import { Inject, Logger, OnApplicationBootstrap } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateChatInput } from './dto/create-chat.input';
import { Chat } from './chat.entity';
import { ChatService } from './chat.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Resolver(() => Chat, {})
export class ChatResolver extends BaseResolver(Chat) {
  constructor(
    private eventEmitter: EventEmitter2,
    private readonly chatService: ChatService,
  ) {
    super(chatService);
  }

  @ResolveField(() => [IUser])
  users(@Parent() chat: Chat): any {
    return { __typename: 'User', ids: chat.users };
  }
}
