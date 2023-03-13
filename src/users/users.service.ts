import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USERS_REPOSITORY } from './constant';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private usersRepository: Repository<User>,
  ) {}
  async findOne(username: string): Promise<User> {
    return (
      await this.usersRepository.find({
        where: { username: username },
      })
    )[0];
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.username = userDto.username;
    user.password = userDto.password;

    return await this.usersRepository.save(user);
  }
}
