import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersQuery } from 'src/cqrs/queries/users/get-users.query';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async getUsers(
    @Query('firstName') firstName: string,
    @Query('lastName') lastName: string,
    @Query('isActive') isActive: boolean,
  ) {
    return this.queryBus.execute(
      new GetUsersQuery(firstName, lastName, isActive),
    );
  }

  @Get(':id')
  async getUser(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.findById(id);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.remove(id);
  }
}
