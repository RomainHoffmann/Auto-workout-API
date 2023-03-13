import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UpdateProgramDto } from './dto/update-program.dto';
import { CreateProgramDto } from './dto/create-program.dto';
import { Program } from './entities/programs.entity';
import { ProgramsService } from './programs.service';

@Controller('programs')
export class ProgramsController {
  constructor(private programsService: ProgramsService) {}

  @Get()
  async findAll(): Promise<Program[]> {
    return this.programsService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param() params): Promise<Program> {
    const { id } = params;
    return this.programsService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateProgramDto): Promise<Program> {
    return this.programsService.create(body);
  }

  @Post('/:id')
  async update(
    @Param() params,
    @Body() body: UpdateProgramDto,
  ): Promise<Program> {
    const { id } = params;
    return this.programsService.update(id, body);
  }

  @Delete('/:id')
  async remove(@Param() params): Promise<void> {
    const { id } = params;
    return this.programsService.remove(id);
  }
}
