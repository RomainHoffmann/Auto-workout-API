import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MOVE_REPOSITORY } from './constant';
import { Move } from './entities/moves.entity';

@Injectable()
export class MovesService {
  constructor(
    @Inject(MOVE_REPOSITORY)
    private moveRepository: Repository<Move>,
  ) {}

  async create(moveDto: Move): Promise<Move> {
    return await this.moveRepository.save({
      name: moveDto.name,
    });
  }

  async findAll(): Promise<Move[]> {
    return await this.moveRepository.find();
  }

  async findOne(id: number): Promise<Move> {
    return await this.moveRepository.findOneBy({
      id,
    });
  }

  async update(id: number, moveDto: Move): Promise<Move> {
    let move = await this.findOne(id);

    move.name = moveDto.name;

    return this.moveRepository.save(move);
  }

  async remove(id: number): Promise<void> {
    await this.moveRepository.delete(id);
  }
}
