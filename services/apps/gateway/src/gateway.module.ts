import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
        playground:true
      },
      gateway: {
        serviceHealthCheck:true,
        serviceList: [
          { name: 'users', url: `http://userservice:3000/graphql` },
          { name: 'booking', url: `http://bookingservice:3000/graphql` },
          { name: 'chats', url: `http://chatservice:3000/graphql` },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class GatewayModule {}
