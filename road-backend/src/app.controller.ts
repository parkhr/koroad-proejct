import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
// import { LocalAuthGuard } from './guard/local-auth-guard';
import { SocialAuthGuard } from './guard/social-auth.guard';

@ApiTags('app')
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
  @ApiOperation({summary: "로그인", description: "소셜로그인을 진행한다."})
  @ApiOkResponse({
    description: 'response jwttoken', type:'string'
  })
  @ApiUnauthorizedResponse({
    description: '로그인 실패'
  })
  async socialLogin(@Request() req, @Param('code') code:string) {
    return this.authService.login(req.user);
  }
}
