import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';

@Injectable()
export class AdminsService {
  constructor(private prisma: PrismaService) {}

  create(createAdminInput: CreateAdminInput) {
    return this.prisma.admin.create({ data: createAdminInput });
  }

  findAll() {
    return this.prisma.admin.findMany();
  }

  findOne(id: number) {
    return this.prisma.admin.findUnique({ where: { id } });
  }

  update(id: number, oldPassword: string, updateAdminInput: UpdateAdminInput) {
    return this.prisma.admin.updateMany({
      where: { AND: { id, password: oldPassword } },
      data: updateAdminInput,
    });
  }
}
