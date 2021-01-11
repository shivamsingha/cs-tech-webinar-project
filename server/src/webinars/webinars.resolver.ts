import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WebinarsService } from './webinars.service';
import { Webinar } from './entities/webinar.entity';
import { CreateWebinarInput } from './dto/create-webinar.input';
import { UpdateWebinarInput } from './dto/update-webinar.input';

@Resolver(() => Webinar)
export class WebinarsResolver {
  constructor(private readonly webinarsService: WebinarsService) {}

  @Mutation(() => Webinar)
  createWebinar(
    @Args('createWebinarInput') createWebinarInput: CreateWebinarInput,
  ) {
    return this.webinarsService.create(createWebinarInput);
  }

  @Query(() => [Webinar], { name: 'webinars' })
  findAll() {
    return this.webinarsService.findAll();
  }

  @Query(() => Webinar, { name: 'webinar' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.webinarsService.findOne(id);
  }

  @Mutation(() => Webinar)
  updateWebinar(
    @Args('updateWebinarInput') updateWebinarInput: UpdateWebinarInput,
  ) {
    return this.webinarsService.update(
      updateWebinarInput.id,
      updateWebinarInput,
    );
  }

  @Mutation(() => Webinar)
  removeWebinar(@Args('id', { type: () => Int }) id: number) {
    return this.webinarsService.remove(id);
  }
}
