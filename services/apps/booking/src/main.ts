import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { BookingModule } from './booking.module';


async function bootstrap() {
  const app = await NestFactory.create(BookingModule);
  const microservice = app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: {
        host: process.env.BOOKING_HOST,
        port: 3001,
      },
    },
  );
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();

