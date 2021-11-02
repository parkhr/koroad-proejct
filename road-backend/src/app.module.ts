import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users.module';
import { TypeOrmConfig } from './config/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
