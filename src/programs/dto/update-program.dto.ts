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
import { UpdateExerciseDto } from 'src/exercises/dto/update-exercise.dto';
import { Exercise } from 'src/exercises/entities/exercises.entity';

export class UpdateProgramDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  active: boolean;

  @IsNotEmpty()
  @IsArray()
  exercises: UpdateExerciseDto[];
}
