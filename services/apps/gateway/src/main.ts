import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { GatewayModule } from './gateway.module';


async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  const microservice = app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: {
        host: process.env.GATEWAY_HOST,
        port: 3001,
      },
    },
  );
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
