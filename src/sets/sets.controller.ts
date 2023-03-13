import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateSetDto } from './dto/create-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';
import { Set } from './entities/sets.entity';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(private setsService: SetsService) {}

  @Get()
  async findAll(): Promise<Set[]> {
    return this.setsService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param() params): Promise<Set> {
    const { id } = params;
    return this.setsService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateSetDto): Promise<Set> {
    return this.setsService.create(body);
  }

  @Post('/:id')
  async update(@Param() params, @Body() body: UpdateSetDto): Promise<Set> {
    const { id } = params;
    return this.setsService.update(id, body);
  }

  @Delete('/:id')
  async remove(@Param() params): Promise<void> {
    const { id } = params;
    return this.setsService.remove(id);
  }
}
