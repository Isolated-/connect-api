import { Module } from '@nestjs/common';
import { HttpConnectedAccountModule } from './http-connected-account/http-connected-account.module';

@Module({
  imports: [HttpConnectedAccountModule]
})
export class AppModule {}
