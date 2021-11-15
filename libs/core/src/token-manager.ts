import { Injectable } from '@nestjs/common';
import { AuthMethod } from './interfaces/auth-method.interface';
import { ITokenManager } from './interfaces/token-manager.interface';

@Injectable()
export class TokenManager implements ITokenManager {
  getAuthMethod(provider: string): Promise<AuthMethod> {
    throw new Error('Method not implemented.');
  }

  getAuthenticationUrl(provider: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  getAccessToken(provider: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
