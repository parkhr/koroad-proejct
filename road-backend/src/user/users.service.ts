import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: UserRepository,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  save(userDto: UserDto): Promise<User> {
    return this.usersRepository.save(User.createUser(userDto));
  }
}
