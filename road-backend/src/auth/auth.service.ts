import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UsersService } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
    try{
      const findUser:User = await this.usersService.findOneByEmail(user.email);
      let payload;

      if(findUser) {
        console.log(findUser);
        payload = { email: findUser.email, nickname: findUser.nickname };
      }else {
        const savedUser = await this.usersService.save({email: user.email, nickname: user.nickname, isActive: true});

        console.log(savedUser);
        payload = { email: savedUser.email, nickname: savedUser.nickname}
      }

      return {
        access_token: this.jwtService.sign(payload),
      };
    }catch(err){
      throw new UnauthorizedException();
    }
  }
}
