import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ILike, Repository } from 'typeorm';
import { QuerySearchParams } from './interfaces';

@Injectable()
export class UsersQueryRepository {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async find({
    firstName,
    lastName,
    isActive,
  }: QuerySearchParams): Promise<User[]> {
    const firstNameFilter = firstName ? ILike(`%${firstName}%`) : undefined;
    const lastNameFilter = lastName ? ILike(`%${lastName}%`) : undefined;
    const isActiveFilter = typeof isActive === 'boolean' ? isActive : undefined;

    try {
      return this.usersRepository.find({
        where: {
          firstName: firstNameFilter,
          lastName: lastNameFilter,
          isActive: isActiveFilter,
        },
        order: { lastName: 'asc', firstName: 'asc' },
        relations: ['tickets'],
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findById(id: number): Promise<User> {
    try {
      const foundUser = await this.usersRepository.findOne({
        where: { id },
        relations: ['tickets'],
      });

      if (!foundUser) throw new NotFoundException('User not found');

      return foundUser;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
