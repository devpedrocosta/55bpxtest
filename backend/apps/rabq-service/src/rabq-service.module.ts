import { Module } from '@nestjs/common';
import { RabqServiceController } from './rabq-service.controller';
import { RabqServiceService } from './rabq-service.service';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common';
import * as Joi from 'joi';
import { WSService } from './ socket-client';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule,
  ],
  controllers: [RabqServiceController],
  providers: [RabqServiceService, WSService],
})
export class RabqServiceModule {}
