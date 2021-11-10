import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Cctv } from 'src/cctv/cctv.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER || '1',
      password: process.env.DATABASE_PASSWORD || '1',
      database: 'test',
      entities: [User, Cctv],
      synchronize: true,
      logging: ["query"]
    };
  }
}
