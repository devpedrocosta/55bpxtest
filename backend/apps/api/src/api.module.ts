import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule, RmqModule } from '@app/common';
import { ApiGateway } from './api.gateway';
import { RQL_QUEE } from './dto/create-image.request';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './repository/schemas/order.schema';
import { OrdersRepository } from './repository/repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/api/.env',
    }),
    RmqModule.register({
      name: RQL_QUEE,
    }),
     DatabaseModule,
     MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [ApiController],
  providers: [ApiService, ApiGateway,OrdersRepository],
})
export class ApiModule {}
