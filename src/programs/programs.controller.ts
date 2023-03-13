import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { UpdateProgramDto } from './dto/update-program.dto';
import { CreateProgramDto } from './dto/create-program.dto';
import { Program } from './entities/programs.entity';
import { ProgramsService } from './programs.service';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('programs')
export class ProgramsController {
  constructor(private programsService: ProgramsService) {}

  @Get()
  async findAll(@Req() request): Promise<Program[]> {
    const userId = request.user.id;
    return this.programsService.findAll(userId);
  }

  @Get('/:id')
  async findOneById(@Param() params, @Req() request): Promise<Program> {
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
