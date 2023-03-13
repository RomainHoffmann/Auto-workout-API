import { DATA_SOURCE } from 'src/database/constant';
import { APP_GUARD } from './constant';
import { JwtAuthGuard } from './jwt-auth.guard';

export const authProviders = [
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
];
