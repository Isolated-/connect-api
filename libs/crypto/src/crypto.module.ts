import { Module } from '@nestjs/common';
import { CryptoGenericModule } from './crypto-generic/crypto-generic.module';

@Module({
  imports: [CryptoGenericModule],
})
export class CryptoModule {}
