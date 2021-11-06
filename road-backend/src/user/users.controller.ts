import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
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

  @Post('2')
  insert(@Body() userDto: UserDto): Promise<UserDto> {
    // throw new NotFoundException();
    return this.usersService.save(userDto);
  }
}
