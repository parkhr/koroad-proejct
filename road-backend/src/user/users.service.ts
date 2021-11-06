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

  private readonly users = [
    {
      id: 1,
      firstName: 'john',
      lastName: 'changeme',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'maria',
      lastName: 'guess',
      isActive: true,
    },
  ];

  async findOne(firstName: string): Promise<User | undefined> {
    return this.users.find((user) => user.firstName === firstName);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  save(userDto: UserDto): Promise<User> {
    return this.usersRepository.save(User.createUser(userDto));
  }
}
