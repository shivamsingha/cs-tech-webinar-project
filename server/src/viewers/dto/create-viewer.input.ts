import { InputType } from '@nestjs/graphql';
import { IsEmail, IsPhoneNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateViewerInput {
  @IsOptional()
  name?: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsPhoneNumber(null)
  phone?: string;
}
