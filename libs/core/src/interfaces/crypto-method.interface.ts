export interface CryptoMethod {
  getRandomBase64(byteLength: number): Promise<Buffer>;
}
