import { InputType } from '@nestjs/graphql';
import { IsOptional, MaxLength, IsDate, IsNumber } from 'class-validator';

@InputType()
export class CreateWebinarInput {
  title: string;

  @MaxLength(320)
  @IsOptional()
  desc?: string;

  @IsOptional()
  presentedBy?: string;

  @IsDate()
  startTime: Date;

  @IsOptional()
  @IsDate()
  endTime?: Date;

  @IsOptional()
  @IsNumber()
  concurrentViewers?: number;
}
