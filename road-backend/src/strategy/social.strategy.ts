import { Strategy } from 'passport-custom';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import axios from 'axios';

@Injectable()
export class SocialStrategy extends PassportStrategy(Strategy, 'custom') {
  // kakao
  // 1. code로 kakao access token, kakao refresh token 가져오기
  // 2. kakao access token이 있다면 kakao access token으로 user 정보 가져오기
  async validate(req: any): Promise<any> {
    try{
      const code: string = req.body.code;

      let tokens:any = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=http://localhost:8080/kakao/oauth&code=${code}`,
        {
          headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        },
      );

      let user:any = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${tokens.data.access_token}`,
          'Content-type': 'application/x-www-form-urlencoded',
        },
      });
      
      let nickname = user.data.properties.nickname;
      let email = user.data.kakao_account.email;

      return { email, nickname };
    }catch(err){
      throw new UnauthorizedException();
    }
  }
}
