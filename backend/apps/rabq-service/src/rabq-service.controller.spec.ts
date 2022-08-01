import { Test, TestingModule } from '@nestjs/testing';
import { RabqServiceController } from './rabq-service.controller';
import { RabqServiceService } from './rabq-service.service';

describe('RabqServiceController', () => {
  let rabqServiceController: RabqServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RabqServiceController],
      providers: [RabqServiceService],
    }).compile();

    rabqServiceController = app.get<RabqServiceController>(RabqServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rabqServiceController.getHello()).toBe('Hello World!');
    });
  });
});
