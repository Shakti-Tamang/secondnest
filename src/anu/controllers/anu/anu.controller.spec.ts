import { Test, TestingModule } from '@nestjs/testing';
import { AnuController } from './anu.controller';

describe('AnuController', () => {
  let controller: AnuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnuController],
    }).compile();

    controller = module.get<AnuController>(AnuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
