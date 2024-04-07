import { IsDateString, IsString, Length } from 'class-validator';

export class CreateTicketDto {
  @Length(2, 25)
  @IsString({ message: 'Please provide event name' })
  event: string;

  @IsDateString({}, { message: 'Please provide event date' })
  date: Date;
}
