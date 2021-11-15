import { AuthMethod } from './auth-method.interface';

export interface ITokenManager {
  getAuthMethod(provider: string): Promise<AuthMethod>;
  getAuthenticationUrl(provider: string): Promise<string>;
  getAccessToken(provider: string): Promise<any>;
}
