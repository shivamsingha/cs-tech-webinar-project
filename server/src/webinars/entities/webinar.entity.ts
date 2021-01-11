import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Webinar {
  @Field(() => ID)
  id: number;
  title: string;
  description?: string;
  presentedBy?: string;
  startTime: Date;
  endTime?: Date;
  concurrentViewers?: number;
  stream: string;
}
