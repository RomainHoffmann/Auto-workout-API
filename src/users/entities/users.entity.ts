import { Exercise } from 'src/exercises/entities/exercises.entity';
import { Program } from 'src/programs/entities/programs.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Program, (program) => program.user, {
    onDelete: 'CASCADE',
  })
  programs: Program[];
}
