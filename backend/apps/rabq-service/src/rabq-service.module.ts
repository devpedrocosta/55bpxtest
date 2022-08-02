import { Module } from '@nestjs/common';
import { RabqServiceController } from './rabq-service.controller';
import { RabqServiceService } from './rabq-service.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule, RmqModule } from '@app/common';
import * as Joi from 'joi';
import { WSService } from './ socket-client';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';
import { OrdersRepository } from './repository/repository';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
       envFilePath: './apps/rabq-service/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    RmqModule,
  ],
  controllers: [RabqServiceController],
  providers: [RabqServiceService, WSService,OrdersRepository],
})
export class RabqServiceModule {}
