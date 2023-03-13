import { Exercise } from 'src/exercises/entities/exercises.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Move {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;
}
