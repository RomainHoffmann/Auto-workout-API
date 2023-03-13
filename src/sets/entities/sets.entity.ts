import { Exercise } from 'src/exercises/entities/exercises.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Set {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  reps: number;

  @Column()
  weight: number;

  @ManyToOne(() => Exercise, (exercise) => exercise.sets, {
    onDelete: 'CASCADE',
  })
  exercise: Exercise;
}
