import { Move } from 'src/moves/entities/moves.entity';
import { Program } from 'src/programs/entities/programs.entity';
import { Set } from 'src/sets/entities/sets.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Program, (program) => program.exercises, {
    onDelete: 'CASCADE',
  })
  program: Program;

  @ManyToOne(() => Move, {
    onDelete: 'CASCADE',
  })
  move: Move;

  @OneToMany(() => Set, (set) => set.exercise, { onDelete: 'CASCADE' })
  sets: Set[];
}
