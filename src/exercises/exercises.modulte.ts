import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MovesModule } from 'src/moves/moves.module';
import { movesProviders } from 'src/moves/moves.providers';
import { MovesService } from 'src/moves/moves.service';
import { SetsModule } from 'src/sets/sets.module';
import { setsProviders } from 'src/sets/sets.providers';
import { SetsService } from 'src/sets/sets.service';
import { ExercisesController } from './exercises.controller';
import { exercisesProviders } from './exercises.providers';
import { ExercisesService } from './exercises.service';

@Module({
  imports: [DatabaseModule, MovesModule, SetsModule],
  controllers: [ExercisesController],
  providers: [
    ...exercisesProviders,
    ExercisesService,
    ...movesProviders,
    MovesService,
    ...setsProviders,
    SetsService,
  ],
})
export class ExercisesModule {}
