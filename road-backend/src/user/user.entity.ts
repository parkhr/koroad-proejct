import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { UserDto } from './user.dto';

@Entity()
@Unique(['email'])
export class User {
  constructor(email: string, nickname: string) {
    this.email = email;
    this.nickname = nickname;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  nickname: string;

  @Column({ default: true })
  isActive: boolean;

  static createUser(userDto: UserDto) {
    return new this(userDto.email, userDto.nickname);
  }
}
