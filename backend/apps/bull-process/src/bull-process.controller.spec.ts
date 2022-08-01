import { Test, TestingModule } from '@nestjs/testing';
import { BullProcessController } from './bull-process.controller';
import { BullProcessService } from './bull-process.service';

describe('BullProcessController', () => {
  let bullProcessController: BullProcessController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BullProcessController],
      providers: [BullProcessService],
    }).compile();

    bullProcessController = app.get<BullProcessController>(BullProcessController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bullProcessController.getHello()).toBe('Hello World!');
    });
  });
});
