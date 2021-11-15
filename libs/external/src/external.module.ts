import { Module } from '@nestjs/common';
import { ExternalGoogleModule } from './external-google/external-google.module';
import { ExternalDropboxModule } from './external-dropbox/external-dropbox.module';

@Module({
  imports: [ExternalGoogleModule, ExternalDropboxModule],
})
export class ExternalModule {}
