import { Test, TestingModule } from '@nestjs/testing';
import { HttpConnectedAccountController } from './http-connected-account.controller';

describe('HttpConnectedAccountController', () => {
  let controller: HttpConnectedAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpConnectedAccountController],
    }).compile();

    controller = module.get<HttpConnectedAccountController>(HttpConnectedAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
