import { Module } from '@nestjs/common';
import { ProgramsModule } from '../programs/programs.module';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, UsersModule, ProgramsModule],
  controllers: [AppController],
})
export class AppModule {}
