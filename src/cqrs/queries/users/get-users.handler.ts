import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetUsersQuery } from './get-users.query';
import { UsersQueryRepository } from 'src/user/users.query-repository';

@QueryHandler(GetUsersQuery)
export class GetUsersQueryHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly usersQueryRepository: UsersQueryRepository) {}

  async execute(query: GetUsersQuery) {
    return this.usersQueryRepository.find(query);
  }
}
