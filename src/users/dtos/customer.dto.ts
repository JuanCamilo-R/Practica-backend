import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The name of the user' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
