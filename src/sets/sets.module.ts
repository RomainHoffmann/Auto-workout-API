import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { SetsController } from './sets.controller';
import { setsProviders } from './sets.providers';
import { SetsService } from './sets.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SetsController],
  providers: [...setsProviders, SetsService],
  exports: [SetsService],
})
export class SetsModule {}
