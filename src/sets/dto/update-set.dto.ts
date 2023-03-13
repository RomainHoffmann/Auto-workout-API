import { Exclude } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { Exercise } from 'src/exercises/entities/exercises.entity';

export class UpdateSetDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsNumber()
  reps: number;
}
