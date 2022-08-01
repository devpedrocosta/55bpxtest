import { NestFactory } from '@nestjs/core';
import { BullProcessModule } from './bull-process.module';

async function bootstrap() {
  const app = await NestFactory.create(BullProcessModule);
  await app.listen(3000);
}
bootstrap();
