import { Module } from '@nestjs/common';
import { CryptoGenericCryptoMethod } from './crypto-generic.crypto-method';

@Module({
  providers: [CryptoGenericCryptoMethod],
  exports: [CryptoGenericCryptoMethod],
})
export class CryptoGenericModule {}
