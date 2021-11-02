import { Controller, Get } from '@nestjs/common';
import { Cctv } from './cctv.entity';
import { CctvService } from './cctv.service';

@Controller('cctv')
export class CctvController {
  constructor(private readonly cctvService: CctvService) {}

  @Get('1')
  getUsers(): any {
    return this.cctvService.findAll();
  }
}
