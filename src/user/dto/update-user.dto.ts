import { IsString, IsBoolean, Length, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @Length(2, 25)
  @IsString({ message: 'Please provide your first name' })
  @IsOptional()
  firstName?: string;

  @Length(2, 25)
  @IsString({ message: 'Please provide your last name' })
  @IsOptional()
  lastName?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
