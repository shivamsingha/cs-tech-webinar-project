import { Module } from '@nestjs/common';
import { WebinarsService } from './webinars.service';
import { WebinarsResolver } from './webinars.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [WebinarsResolver, WebinarsService, PrismaService],
})
export class WebinarsModule {}
