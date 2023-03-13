import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MovesController } from './moves.controller';
import { movesProviders } from './moves.providers';
import { MovesService } from './moves.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MovesController],
  providers: [...movesProviders, MovesService],
})
export class MovesModule {}
