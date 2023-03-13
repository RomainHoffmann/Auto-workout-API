import { CreateMoveDto } from 'src/moves/dto/create-move.dto';
import { UpdateMoveDto } from 'src/moves/dto/update-move.dto';
import { CreateSetDto } from 'src/sets/dto/create-set.dto';

export class CreateExerciseDto {
  move: UpdateMoveDto;
  sets: CreateSetDto[];
}
