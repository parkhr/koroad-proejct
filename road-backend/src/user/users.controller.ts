import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({
    summary: '유저 정보',
    description: '해당 유저 정보를 가져온다.',
  })
  @ApiOkResponse({
    description: 'user info',
    type: 'object',
  })
  @ApiUnauthorizedResponse({
    description: '유저 정보 불러오기 실패',
  })
  getUser(@Request() req): Promise<User> {
    return this.usersService.findOne(req.user.id);
  }
}
