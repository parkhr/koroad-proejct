import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CctvService } from './cctv.service';
import { CctvController } from './cctv.controller';
import { Cctv } from './cctv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cctv])],
  providers: [CctvService],
  controllers: [CctvController],
})
export class CctvModule {}
