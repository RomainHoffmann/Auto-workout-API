import { Exclude } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  isNotEmpty,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { Exercise } from 'src/exercises/entities/exercises.entity';

export class CreateMoveDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  name: string;
}
