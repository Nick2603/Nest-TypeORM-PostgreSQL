import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class TicketsRepository {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketsRepository: Repository<Ticket>,
  ) {}

  async create(dto: CreateTicketDto): Promise<Ticket> {
    try {
      return this.ticketsRepository.save(dto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    try {
      return this.ticketsRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async assignTicketToUser(user: User, ticket: Ticket): Promise<Ticket> {
    try {
      ticket.holder = user;

      return this.ticketsRepository.save(ticket);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async unassignTicketFromUser(ticket: Ticket): Promise<Ticket> {
    try {
      ticket.holder = null;

      return this.ticketsRepository.save(ticket);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
