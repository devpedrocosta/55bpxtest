import { Module } from '@nestjs/common';
import { ApiGateway } from './api.gateway';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ApiGateway]
})
export class AppModule {}
