import { Inject, Injectable } from '@nestjs/common';
import { EXERCISE_REPOSITORY } from 'src/exercises/constant';
import { Exercise } from 'src/exercises/entities/exercises.entity';
import { MOVE_REPOSITORY } from 'src/moves/constant';
import { Move } from 'src/moves/entities/moves.entity';
import { Repository } from 'typeorm';
import { SETS_REPOSITORY } from './constant';
import { CreateSetDto } from './dto/create-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';
import { Set } from './entities/sets.entity';

@Injectable()
export class SetsService {
  constructor(
    @Inject(SETS_REPOSITORY)
    private setsRepository: Repository<Set>,
  ) {}

  async create(createSetDto: CreateSetDto): Promise<Set> {
    const set = new Set();

    set.weight = createSetDto.weight;
    set.reps = createSetDto.reps;

    return await this.setsRepository.save(set);
  }

  async findAll(): Promise<Set[]> {
    return await this.setsRepository.find({});
  }

  async findOne(id: number): Promise<Set> {
    return (
      await this.setsRepository.find({
        where: { id: id },
      })
    )[0];
  }

  async update(id: number, updateSetDto: UpdateSetDto): Promise<Set> {
    let set = await this.findOne(id);

    set.weight = updateSetDto.weight;
    set.reps = updateSetDto.reps;

    return this.setsRepository.save(set);
  }

  async remove(id: number): Promise<void> {
    await this.setsRepository.delete(id);
  }
}
