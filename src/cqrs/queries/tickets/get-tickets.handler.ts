import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetTicketsQuery } from './get-tickets.query';
import { TicketsQueryRepository } from 'src/ticket/tickets.query-repository';

@QueryHandler(GetTicketsQuery)
export class GetTicketsQueryHandler implements IQueryHandler<GetTicketsQuery> {
  constructor(
    private readonly ticketsQueryRepository: TicketsQueryRepository,
  ) {}

  async execute() {
    return this.ticketsQueryRepository.find();
  }
}
