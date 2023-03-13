import { DATA_SOURCE } from 'src/database/constant';
import { DataSource } from 'typeorm';
import { EXERCISE_REPOSITORY } from './constant';
import { Exercise } from './entities/exercises.entity';

export const exercisesProviders = [
  {
    provide: EXERCISE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Exercise),
    inject: [DATA_SOURCE],
  },
];
