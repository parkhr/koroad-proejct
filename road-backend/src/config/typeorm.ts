import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Cctv } from 'src/cctv/cctv.entity';
import { User } from 'src/user.entity';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, Cctv],
      synchronize: true,
    };
  }
}
