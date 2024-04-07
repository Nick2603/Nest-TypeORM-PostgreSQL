import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    try {
      return this.usersRepository.save(dto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    try {
      let userToUpdate = await this.usersRepository.findOneBy({
        id,
      });

      if (!userToUpdate) throw new NotFoundException('User not found');

      userToUpdate = { ...userToUpdate, ...dto };

      return this.usersRepository.save(userToUpdate);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    try {
      return this.usersRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
