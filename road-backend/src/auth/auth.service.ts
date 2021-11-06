import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(firstName: string, lastName: string): Promise<any> {
    const user = await this.usersService.findOne(firstName);
    if (user && user.lastName === lastName) {
      const { lastName, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { firstName: user.firstName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
