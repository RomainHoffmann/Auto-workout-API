import { Exercise } from 'src/exercises/entities/exercises.entity';
import { User } from 'src/users/entities/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @OneToMany(() => Exercise, (exercise) => exercise.program, {
    onDelete: 'CASCADE',
  })
  exercises: Exercise[];

  @ManyToOne(() => User, (user) => user.programs, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  userId: number;
}
