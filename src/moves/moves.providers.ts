import { DATA_SOURCE } from 'src/database/constant';
import { DataSource } from 'typeorm';
import { MOVE_REPOSITORY } from './constant';
import { Move } from './entities/moves.entity';

export const movesProviders = [
  {
    provide: MOVE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Move),
    inject: [DATA_SOURCE],
  },
];
