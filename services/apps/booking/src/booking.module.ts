import { IUser } from '@apps/common';
import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
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
  ],

  providers: [BookingService,BookingResolver],
})
export class BookingModule {}
