import { Module } from '@nestjs/common';
import { HttpConnectedAccountController } from './http-connected-account.controller';

@Module({
  controllers: [HttpConnectedAccountController],
})
export class HttpConnectedAccountModule {}
