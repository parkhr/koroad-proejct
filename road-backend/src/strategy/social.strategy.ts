import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bodyParser from 'body-parser';

@Injectable()
export class SocialStrategy extends PassportStrategy(Strategy, 'custom') {
  async validate(req: any): Promise<any> {
    const code = req.body.code;

    // kakao
    // 1. code로 kakao access token, kakao refresh token 가져오기
    // 2. kakao access token이 있다면 kakao access token으로 user 정보 가져오기
    // 3. kakao access token이 없다면 throw
    // 4. user가 있다면 mysql db 조회
    // 5. mysql 에 없다면 회원가입 절차로
    // 6. mysql 에 있는데 비밀번호가 틀리면 로그인 실패
    // 7. mysql 에 있고 비밀번호도 맞다면 로그인 진행
    // 5. user가 없다면 throw

    return { id: '1', firtName: 'kong' };
  }
}
