import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserDto } from './user.dto';

@Entity()
export class User {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  static createUser(userDto: UserDto) {
    return new this(userDto.firstName, userDto.lastName);
  }
}
