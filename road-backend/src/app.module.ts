import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users.module';
import { TypeOrmConfig } from './config/typeorm';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AllExceptionsFilter } from './filter/exception.filter';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
