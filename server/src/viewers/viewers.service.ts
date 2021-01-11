import { Injectable } from '@nestjs/common';
import { CreateViewerInput } from './dto/create-viewer.input';
import { UpdateViewerInput } from './dto/update-viewer.input';

@Injectable()
export class ViewersService {
  create(createViewerInput: CreateViewerInput) {
    console.log(createViewerInput);
    return 'This action adds a new viewer';
  }

  findAll() {
    return `This action returns all viewers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} viewer`;
  }

  update(id: number, updateViewerInput: UpdateViewerInput) {
    console.log(updateViewerInput);
    return `This action updates a #${id} viewer`;
  }

  remove(id: number) {
    return `This action removes a #${id} viewer`;
  }
}
