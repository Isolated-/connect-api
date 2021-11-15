import { IsString, IsIn } from 'class-validator';

export class HttpCreateConnectedAccount {
  @IsString()
  @IsIn(['google_oauth2', 'dropbox_oauth2'])
  provider: string;
}
