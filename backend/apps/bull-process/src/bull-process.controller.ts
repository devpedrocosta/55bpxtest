import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';

import { Queue } from 'bull';

@Controller()
export class BullProcessController {
  constructor(@InjectQueue('image') private readonly imageQueue: Queue) {}

  @Post('transcode')
  async transcode() {
    const files = { name: 2 };
    const job = await this.imageQueue.add('optimize', {
      files,
    });

    return {
      jobId: job.id,
    };
  }
}
