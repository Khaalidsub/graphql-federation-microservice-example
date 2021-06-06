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
        debug:true,
        serviceList: [
          { name: 'users', url: 'http://localhost/user-service/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class GatewayModule {}
