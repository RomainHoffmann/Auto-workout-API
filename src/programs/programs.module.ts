import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ExercisesModule } from 'src/exercises/exercises.modulte';
import { exercisesProviders } from 'src/exercises/exercises.providers';
import { ExercisesService } from 'src/exercises/exercises.service';
import { movesProviders } from 'src/moves/moves.providers';
import { MovesService } from 'src/moves/moves.service';
import { setsProviders } from 'src/sets/sets.providers';
import { SetsService } from 'src/sets/sets.service';
import { ProgramsController } from './programs.controller';
import { programsProviders } from './programs.providers';
import { ProgramsService } from './programs.service';

@Module({
  imports: [DatabaseModule, ExercisesModule],
  controllers: [ProgramsController],
  providers: [
    ...programsProviders,
    ProgramsService,
    ...exercisesProviders,
    ExercisesService,
    ...movesProviders,
    MovesService,
    ...setsProviders,
    SetsService,
  ],
})
export class ProgramsModule {}
