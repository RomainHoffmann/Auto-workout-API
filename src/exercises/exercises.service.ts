import { Inject, Injectable } from '@nestjs/common';
import { MovesService } from 'src/moves/moves.service';
import { CreateSetDto } from 'src/sets/dto/create-set.dto';
import { Set } from 'src/sets/entities/sets.entity';
import { SetsService } from 'src/sets/sets.service';
import { Repository } from 'typeorm';
import { EXERCISE_REPOSITORY } from './constant';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercises.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @Inject(EXERCISE_REPOSITORY)
    private exerciseRepository: Repository<Exercise>,

    private movesService: MovesService,
    private setsService: SetsService,
  ) {}

  async create(exerciseDto: CreateExerciseDto): Promise<Exercise> {
    let exercise = new Exercise();
    let sets: Set[] = [];

    exercise.move = await this.movesService.findOne(exerciseDto.move.id);

    for (const _set of exerciseDto.sets) {
      let set = await this.setsService.create(_set);
      sets.push(set);
    }

    exercise.sets = sets;

    return await this.exerciseRepository.save(exercise);
  }

  async findAll(): Promise<Exercise[]> {
    return await this.exerciseRepository.find({
      relations: {
        move: true,
        sets: true,
      },
    });
  }

  async findOne(id: number): Promise<Exercise> {
    return (
      await this.exerciseRepository.find({
        where: { id: id },
        relations: {
          move: true,
          sets: true,
        },
      })
    )[0];
  }

  async update(id: number, exerciseDto: UpdateExerciseDto): Promise<Exercise> {
    let exercise = await this.findOne(id);
    let sets: Set[] = [];
    exercise.move = exerciseDto.move;

    for (const _sets of exerciseDto.sets) {
      if (_sets.id) {
        let set = await this.setsService.update(_sets.id, _sets);
        sets.push(set);
      } else {
        let createSetDto: CreateSetDto = {
          weight: _sets.weight,
          reps: _sets.reps,
        };
        let set = await this.setsService.create(createSetDto);
        sets.push(set);
      }
    }

    for (const _set of exercise.sets) {
      if (!exerciseDto.sets.find((set) => set.id === _set.id)) {
        await this.setsService.remove(_set.id);
      }
    }

    exercise.sets = sets;

    return this.exerciseRepository.save(exercise);
  }

  async remove(id: number): Promise<void> {
    await this.exerciseRepository.delete(id);
  }
}
