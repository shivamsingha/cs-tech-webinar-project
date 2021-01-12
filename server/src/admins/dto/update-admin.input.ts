import { CreateAdminInput } from './create-admin.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsEmail,
  IsOptional,
  MinLength,
} from 'class-validator';

@InputType()
export class UpdateAdminInput extends PartialType(CreateAdminInput) {
  @Field(() => ID)
  id: number;

  @IsOptional()
  @IsAlphanumeric()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  oldPassword: string;

  @IsOptional()
  @MinLength(8)
  password?: string;
}
