import { NestFactory } from '@nestjs/core';
import { RabqServiceModule } from './rabq-service.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(RabqServiceModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('PROCESS_IMAGE'));
  await app.startAllMicroservices();
}
bootstrap();
