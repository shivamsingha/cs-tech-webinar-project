import { CreateViewerInput } from './create-viewer.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateViewerInput extends PartialType(CreateViewerInput) {
  @Field(() => ID)
  id: number;
}
