import { CreateWebinarInput } from './create-webinar.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWebinarInput extends PartialType(CreateWebinarInput) {
  @Field(() => Int)
  id: number;
}
