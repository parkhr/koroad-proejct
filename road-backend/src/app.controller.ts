import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/favicon.ico')
  @HttpCode(204)
  index(): void {
    return;
  }
}
