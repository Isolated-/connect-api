import { Token } from './token.interface';

export interface AuthMethod {
  getAuthenticationUrl(state?: string): Promise<string>;
  getAccessToken(code: string, state?: string): Promise<Token>;
  refreshAccessToken(token: Token): Promise<Token>;
}
