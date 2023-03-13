import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ExercisesModule } from 'src/exercises/exercises.modulte';
import { exercisesProviders } from 'src/exercises/exercises.providers';
import { ExercisesService } from 'src/exercises/exercises.service';
import { movesProviders } from 'src/moves/moves.providers';
import { MovesService } from 'src/moves/moves.service';
import { SetsController } from './sets.controller';
import { setsProviders } from './sets.providers';
import { SetsService } from './sets.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SetsController],
  providers: [...setsProviders, SetsService],
})
export class SetsModule {}
