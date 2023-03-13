import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ExercisesModule } from 'src/exercises/exercises.modulte';
import { SetsModule } from 'src/sets/sets.module';
import { ProgramsController } from './programs.controller';
import { programsProviders } from './programs.providers';
import { ProgramsService } from './programs.service';

@Module({
  imports: [DatabaseModule, ExercisesModule],
  controllers: [ProgramsController],
  providers: [...programsProviders, ProgramsService],
  exports: [ProgramsService],
})
export class ProgramsModule {}
