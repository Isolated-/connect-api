import { Module } from '@nestjs/common';
import { TokenManager } from './token-manager';

@Module({
  providers: [TokenManager]
})
export class CoreModule {}
