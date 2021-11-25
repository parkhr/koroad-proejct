import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
    console.log(await this.usersService.findOneByEmail(user.email));

    const payload = { id: user.id, ...user };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
