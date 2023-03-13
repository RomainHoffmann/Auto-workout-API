import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateMoveDto } from './dto/create-move.dto';
import { UpdateMoveDto } from './dto/update-move.dto';
import { Move } from './entities/moves.entity';
import { MovesService } from './moves.service';

@UseGuards(JwtAuthGuard)
@Controller('moves')
export class MovesController {
  constructor(private movesService: MovesService) {}

  @Get()
  async findAll(): Promise<Move[]> {
    return this.movesService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param() params): Promise<Move> {
    const { id } = params;
    return this.movesService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateMoveDto): Promise<Move> {
    return this.movesService.create(body);
  }

  @Post('/:id')
  async update(@Param() params, @Body() body: UpdateMoveDto): Promise<Move> {
    const { id } = params;
    return this.movesService.update(id, body);
  }

  @Delete('/:id')
  async remove(@Param() params): Promise<void> {
    const { id } = params;
    return this.movesService.remove(id);
  }
}
