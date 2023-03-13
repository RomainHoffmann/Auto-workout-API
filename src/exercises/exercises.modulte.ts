import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MovesModule } from 'src/moves/moves.module';
import { SetsModule } from 'src/sets/sets.module';
import { ExercisesController } from './exercises.controller';
import { exercisesProviders } from './exercises.providers';
import { ExercisesService } from './exercises.service';

@Module({
  imports: [DatabaseModule, MovesModule, SetsModule],
  controllers: [ExercisesController],
  providers: [...exercisesProviders, ExercisesService],
  exports: [ExercisesService],
})
export class ExercisesModule {}
