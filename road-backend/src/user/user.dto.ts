import { IsString } from 'class-validator';

export class UserDto {
  @IsString()
  nickname: string;

  @IsString()
  email: string;

  isActive: boolean;
}
