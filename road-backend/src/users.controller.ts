import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('1')
  getUsers(): Promise<User[]> {
    // throw new BadRequestException();
    return this.usersService.findAll();
  }

  @Get('2')
  insert() {
    // throw new NotFoundException();
    return this.usersService.save(new User());
  }
}
