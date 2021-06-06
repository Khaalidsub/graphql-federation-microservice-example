import { IUser } from '@apps/common';
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, BookingSchema } from './booking.entity';
import { BookingResolver } from './booking.resolver';
import { BookingService } from './booking.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [IUser],
      },
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_MONGODB_USER}:${process.env.DB_MONGODB_PASS}@${process.env.DB_MONGODB_BOOKING_HOST}:${process.env.DB_MONGODB_PORT}/${process.env.DB_MONGODB_BOOKING_NAME}?authSource=admin`,
      {
        useFindAndModify: false,
        connectionFactory: (connection) => {
          // connection.plugin(require('mongoose-paginate-v2'));
          return connection;
        },
      },
    ),
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
    EventEmitterModule.forRoot(),
    ClientsModule.register([
      {
        name: 'BOOKING_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
        },
      },
    ]),
  ],

  providers: [BookingService, BookingResolver],
})
export class BookingModule {}
