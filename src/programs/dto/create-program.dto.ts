import { Exclude } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  isNotEmpty,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { CreateExerciseDto } from 'src/exercises/dto/create-exercise.dto';
import { Exercise } from 'src/exercises/entities/exercises.entity';

export class CreateProgramDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  active: boolean;

  @IsNotEmpty()
  @IsArray()
  exercises: CreateExerciseDto[];
}
