import { Module } from '@nestjs/common';
import { ExternalGoogleAuthMethod } from './external-google.auth-method';

@Module({
  providers: [ExternalGoogleAuthMethod],
  exports: [ExternalGoogleAuthMethod],
})
export class ExternalGoogleModule {}
