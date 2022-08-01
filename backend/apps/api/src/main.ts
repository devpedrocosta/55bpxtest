import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.enableCors();
  await app.listen(3000);
  Logger.log(`🚀 Application is running on: http://localhost:3333/`);
}

bootstrap();
