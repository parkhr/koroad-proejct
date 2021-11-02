import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users.module';
import { CctvModule } from './cctv/cctv.module';
import { TypeOrmConfig } from './config/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
    UsersModule,
    CctvModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
