import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWebinarInput } from './dto/create-webinar.input';
import { UpdateWebinarInput } from './dto/update-webinar.input';

@Injectable()
export class WebinarsService {
  constructor(private prisma: PrismaService) {}

  create(createWebinarInput: CreateWebinarInput) {
    return this.prisma.webinar.create({
      data: createWebinarInput,
    });
  }

  findAll() {
    return this.prisma.webinar.findMany();
  }

  findOne(id: number) {
    return this.prisma.webinar.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateWebinarInput: UpdateWebinarInput) {
    return this.prisma.webinar.update({
      where: { id },
      data: updateWebinarInput,
    });
  }

  remove(id: number) {
    return this.prisma.webinar.delete({
      where: { id },
    });
  }
}
