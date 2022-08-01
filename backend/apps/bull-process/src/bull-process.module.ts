import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { BullProcessController } from './bull-process.controller';
import { ImageProcessor } from './bull.processor';

@Module({
  imports: [
    BullModule.forRoot({ redis: { host: 'localhost', port: 6379 } }),
    BullModule.registerQueue({ name: 'image_process' }),
  ],
  controllers: [BullProcessController],
  providers: [ImageProcessor],
})
export class BullProcessModule {}
