import { IsNumber, Min } from 'class-validator';

export class AssignTicketToUserDto {
  @Min(1)
  @IsNumber()
  userId: number;

  @Min(1)
  @IsNumber()
  ticketId: number;
}
