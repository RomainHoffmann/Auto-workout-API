import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { Exercise } from 'src/exercises/entities/exercises.entity';

export class UpdateMoveDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  name: string;
}
