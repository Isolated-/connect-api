import { Module } from '@nestjs/common';
import { ExternalDropboxAuthMethod } from './external-dropbox.auth-method';

@Module({
  providers: [ExternalDropboxAuthMethod],
  exports: [ExternalDropboxAuthMethod],
})
export class ExternalDropboxModule {}
