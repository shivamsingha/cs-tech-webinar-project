import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Viewer {
  @Field(() => ID)
  id: number;
  name?: string;
  email: string;
  phone?: string;
}
