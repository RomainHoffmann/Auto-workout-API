import { Inject, Injectable } from '@nestjs/common';
import { CreateExerciseDto } from 'src/exercises/dto/create-exercise.dto';
import { Exercise } from 'src/exercises/entities/exercises.entity';
import { ExercisesService } from 'src/exercises/exercises.service';
import { Repository } from 'typeorm';
import { PROGRAM_REPOSITORY } from './constant';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from './entities/programs.entity';

@Injectable()
export class ProgramsService {
  constructor(
    @Inject(PROGRAM_REPOSITORY)
    private programRepository: Repository<Program>,

    private exercisesService: ExercisesService,
  ) {}

  async create(programDto: CreateProgramDto): Promise<Program> {
    let exercises: Exercise[] = [];
    const program = new Program();

    program.name = programDto.name;
    program.active = programDto.active;

    for (const _exercise of programDto.exercises) {
      let exercise = await this.exercisesService.create(_exercise);
      exercises.push(exercise);
    }

    program.exercises = exercises;

    return await this.programRepository.save(program);
  }

  async findAll(userId: number): Promise<Program[]> {
    return await this.programRepository.find({
      where: { userId: userId },
      relations: {
        exercises: {
          move: true,
          sets: true,
        },
      },
    });
  }

  async findOne(id: number): Promise<Program> {
    return (
      await this.programRepository.find({
        where: { id: id },
        relations: {
          exercises: {
            move: true,
            sets: true,
          },
        },
      })
    )[0];
  }

  async update(id: number, programDto: UpdateProgramDto): Promise<Program> {
    let program = await this.findOne(id);
    let exercises: Exercise[] = [];

    program.name = programDto.name;
    program.active = programDto.active;

    for (const _exercise of programDto.exercises) {
      if (_exercise.id) {
        let exercise = await this.exercisesService.update(
          _exercise.id,
          _exercise,
        );
        exercises.push(exercise);
      } else {
        let createExerciseDto: CreateExerciseDto = {
          move: _exercise.move,
          sets: _exercise.sets,
        };
        let exercise = await this.exercisesService.create(createExerciseDto);
        exercises.push(exercise);
      }
    }

    for (const _exercise of program.exercises) {
      if (
        !programDto.exercises.find((exercise) => exercise.id === _exercise.id)
      ) {
        await this.exercisesService.remove(_exercise.id);
      }
    }

    program.exercises = exercises;

    return this.programRepository.save(program);
  }

  async remove(id: number): Promise<void> {
    await this.programRepository.delete(id);
  }
}
