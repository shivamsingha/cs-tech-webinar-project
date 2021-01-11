import { Module } from '@nestjs/common';
import { WebinarsService } from './webinars.service';
import { WebinarsResolver } from './webinars.resolver';

@Module({
  providers: [WebinarsResolver, WebinarsService],
})
export class WebinarsModule {}
