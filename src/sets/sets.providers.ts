import { DATA_SOURCE } from 'src/database/constant';
import { DataSource } from 'typeorm';
import { SETS_REPOSITORY } from './constant';
import { Set } from './entities/sets.entity';

export const setsProviders = [
  {
    provide: SETS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Set),
    inject: [DATA_SOURCE],
  },
];
