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
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercises.entity';
import { ExercisesService } from './exercises.service';

@UseGuards(JwtAuthGuard)
@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Get()
  async findAll(): Promise<Exercise[]> {
    return this.exercisesService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param() params): Promise<Exercise> {
    const { id } = params;
    return this.exercisesService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateExerciseDto): Promise<Exercise> {
    return this.exercisesService.create(body);
  }

  @Post('/:id')
  async update(
    @Param() params,
    @Body() body: UpdateExerciseDto,
  ): Promise<Exercise> {
    const { id } = params;
    return this.exercisesService.update(id, body);
  }

  @Delete('/:id')
  async remove(@Param() params): Promise<void> {
    const { id } = params;
    return this.exercisesService.remove(id);
  }
}
