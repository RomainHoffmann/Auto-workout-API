import { DATA_SOURCE } from 'src/database/constant';
import { DataSource } from 'typeorm';
import { USERS_REPOSITORY } from './constant';
import { User } from './entities/users.entity';

export const usersProviders = [
  {
    provide: USERS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];
