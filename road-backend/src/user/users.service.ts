import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) {}

  findOneByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneByEmail(email);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  save(userDto: UserDto): Promise<User> {
    return this.usersRepository.save(User.createUser(userDto));
  }
}
