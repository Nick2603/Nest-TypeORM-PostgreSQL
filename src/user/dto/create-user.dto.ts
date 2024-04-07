import { IsString, IsBoolean, Length, IsOptional } from 'class-validator';

export class CreateUserDto {
  @Length(2, 25)
  @IsString({ message: 'Please provide your first name' })
  firstName: string;

  @Length(2, 25)
  @IsString({ message: 'Please provide your last name' })
  lastName: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
