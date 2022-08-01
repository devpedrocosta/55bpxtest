import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, RmqContext, Payload } from '@nestjs/microservices';
import { RabqServiceService } from './rabq-service.service';
import { RmqService } from '@app/common';

@Controller()
export class RabqServiceController {
  constructor(
    private readonly rabqServiceService: RabqServiceService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('image_processed')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    await this.rabqServiceService.createProcessJob(data);
    this.rmqService.ack(context);
  }
}
