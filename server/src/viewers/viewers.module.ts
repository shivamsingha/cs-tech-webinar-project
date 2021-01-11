import { Module } from '@nestjs/common';
import { ViewersService } from './viewers.service';
import { ViewersResolver } from './viewers.resolver';

@Module({
  providers: [ViewersResolver, ViewersService],
})
export class ViewersModule {}
