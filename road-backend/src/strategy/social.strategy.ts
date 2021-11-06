import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class SocialStrategy extends PassportStrategy(Strategy, 'custom') {
  async validate(): Promise<any> {
    // kakao
    // 1. code로 kakao access token, kakao refresh token 가져오기
    // 2. kakao access token이 있다면 kakao access token으로 user 정보 가져오기
    // 3. kakao access token이 없다면 throw
    // 4. user가 있다면 return
    // 5. user가 없다면 throw

    return { id: '1', firtName: 'kong' };
  }
}
