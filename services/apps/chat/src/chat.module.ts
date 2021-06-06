import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ChatResolver } from './chat.resolver';

import { ChatService } from './chat.service';
import { Rethink } from './rethink';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [],
  providers: [
    ChatService,
    ChatResolver,
    
    {
      provide: 'CHAT_DB',
      useValue: require('rethinkdb').db,
    },
    {
      provide: 'RETHINK_CLIENT',
      useClass: Rethink,
    },
  ],
})
export class ChatModule {}
