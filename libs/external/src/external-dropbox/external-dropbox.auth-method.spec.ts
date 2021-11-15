import { Test, TestingModule } from '@nestjs/testing';
import { ExternalDropboxAuthMethod } from './external-dropbox.auth-method';

describe('ExternalDropboxAuthMethod', () => {
  let provider: ExternalDropboxAuthMethod;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalDropboxAuthMethod],
    }).compile();

    provider = module.get<ExternalDropboxAuthMethod>(ExternalDropboxAuthMethod);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
