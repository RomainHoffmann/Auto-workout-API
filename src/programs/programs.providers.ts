import { DATA_SOURCE } from 'src/database/constant';
import { DataSource } from 'typeorm';
import { PROGRAM_REPOSITORY } from './constant';
import { Program } from './entities/programs.entity';

export const programsProviders = [
  {
    provide: PROGRAM_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Program),
    inject: [DATA_SOURCE],
  },
];
