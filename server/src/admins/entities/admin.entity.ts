import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Admin {
  @Field(() => ID)
  ID: number;

  name: string;
  email: string;
  password: string;
}
