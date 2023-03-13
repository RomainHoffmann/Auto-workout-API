import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateMoveDto } from 'src/moves/dto/create-move.dto';
import { UpdateMoveDto } from 'src/moves/dto/update-move.dto';
import { UpdateSetDto } from 'src/sets/dto/update-set.dto';

export class UpdateExerciseDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  move: UpdateMoveDto;
  sets: UpdateSetDto[];
}
