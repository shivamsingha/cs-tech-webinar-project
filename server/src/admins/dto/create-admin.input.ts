import { InputType } from '@nestjs/graphql';
import { IsEmail, IsAlphanumeric, MinLength } from 'class-validator';

@InputType()
export class CreateAdminInput {
  @IsAlphanumeric()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
