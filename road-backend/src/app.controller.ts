import {
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
// import { LocalAuthGuard } from './guard/local-auth-guard';
import { SocialAuthGuard } from './guard/social-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  home(): string {
    return 'ok';
  }

  @Get('/favicon.ico')
  @HttpCode(204)
  index(): void {
    return;
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(SocialAuthGuard)
  @Post('social')
  async socialLogin(@Request() req) {
    console.log('--------------------------');
    console.log(req.user);
    return this.authService.login(req.user);
  }
}
