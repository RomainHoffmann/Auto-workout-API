import { Exercise } from 'src/exercises/entities/exercises.entity';
import { Move } from 'src/moves/entities/moves.entity';
import { Program } from 'src/programs/entities/programs.entity';
import { Set } from 'src/sets/entities/sets.entity';
import { User } from 'src/users/entities/users.entity';
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from './constant';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'app.db',
        entities: [Program, Move, Exercise, Set, User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
