import { AuthMethod } from '@core/core/interfaces/auth-method.interface';
import { Token } from '@core/core/interfaces/token.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalGoogleAuthMethod implements AuthMethod {
  getAuthenticationUrl(state?: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  getAccessToken(code: string, state?: string): Promise<Token> {
    throw new Error('Method not implemented.');
  }

  refreshAccessToken(token: Token): Promise<Token> {
    throw new Error('Method not implemented.');
  }
}
