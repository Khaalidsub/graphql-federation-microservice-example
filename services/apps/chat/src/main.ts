import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ChatModule } from './chat.module';


async function bootstrap() {
  const app = await NestFactory.create(ChatModule);
  const microservice = app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: {
        host: process.env.BOOKING_HOST,
        port: 3001,
      },
    },
  );
  const microserviceRedis = app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.REDIS,
      options: {
          url:`redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
      },
    },
  );
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();

