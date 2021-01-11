import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateViewerInput } from './dto/create-viewer.input';

@Injectable()
export class ViewersService {
  constructor(private prisma: PrismaService) {}

  create(createViewerInput: CreateViewerInput) {
    return this.prisma.viewer.create({ data: createViewerInput });
  }

  findAll() {
    return this.prisma.viewer.findMany();
  }

  findOne(id: number) {
    return this.prisma.viewer.findFirst({ where: { id } });
  }
}
