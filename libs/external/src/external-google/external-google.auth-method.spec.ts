import { Test, TestingModule } from '@nestjs/testing';
import { ExternalGoogleAuthMethod } from './external-google.auth-method';

describe('ExternalGoogleAuthMethod', () => {
  let provider: ExternalGoogleAuthMethod;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalGoogleAuthMethod],
    }).compile();

    provider = module.get<ExternalGoogleAuthMethod>(ExternalGoogleAuthMethod);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
