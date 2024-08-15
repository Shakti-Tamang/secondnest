import { Test, TestingModule } from '@nestjs/testing';
import { AnuService } from './anu.service';

describe('AnuService', () => {
  let service: AnuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnuService],
    }).compile();

    service = module.get<AnuService>(AnuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
