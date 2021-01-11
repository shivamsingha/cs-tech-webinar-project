import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ViewersService } from './viewers.service';
import { Viewer } from './entities/viewer.entity';
import { CreateViewerInput } from './dto/create-viewer.input';
import { UpdateViewerInput } from './dto/update-viewer.input';

@Resolver(() => Viewer)
export class ViewersResolver {
  constructor(private readonly viewersService: ViewersService) {}

  @Mutation(() => Viewer)
  createViewer(
    @Args('createViewerInput') createViewerInput: CreateViewerInput,
  ) {
    return this.viewersService.create(createViewerInput);
  }

  @Query(() => [Viewer], { name: 'viewers' })
  findAll() {
    return this.viewersService.findAll();
  }

  @Query(() => Viewer, { name: 'viewer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.viewersService.findOne(id);
  }

  @Mutation(() => Viewer)
  updateViewer(
    @Args('updateViewerInput') updateViewerInput: UpdateViewerInput,
  ) {
    return this.viewersService.update(updateViewerInput.id, updateViewerInput);
  }

  @Mutation(() => Viewer)
  removeViewer(@Args('id', { type: () => Int }) id: number) {
    return this.viewersService.remove(id);
  }
}
