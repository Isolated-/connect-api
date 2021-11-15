import {
  Body,
  Controller,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
  Version,
} from '@nestjs/common';
import { HttpCreateConnectedAccount } from './dto/http-create-connected-account.dto';

@Controller('connected_accounts')
export class HttpConnectedAccountController {
  @Post()
  @Version('1')
  async createConnectedAccount(
    @Req() req,
    @Body() dto: HttpCreateConnectedAccount,
  ): Promise<any> {
    return;
  }
}
