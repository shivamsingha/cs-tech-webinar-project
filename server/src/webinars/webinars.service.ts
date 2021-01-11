import { Injectable } from '@nestjs/common';
import { CreateWebinarInput } from './dto/create-webinar.input';
import { UpdateWebinarInput } from './dto/update-webinar.input';

@Injectable()
export class WebinarsService {
  create(createWebinarInput: CreateWebinarInput) {
    console.log(createWebinarInput);
    return 'This action adds a new webinar';
  }

  findAll() {
    return `This action returns all webinars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webinar`;
  }

  update(id: number, updateWebinarInput: UpdateWebinarInput) {
    console.log(updateWebinarInput);
    return `This action updates a #${id} webinar`;
  }

  remove(id: number) {
    return `This action removes a #${id} webinar`;
  }
}
