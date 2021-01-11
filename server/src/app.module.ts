import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebinarsModule } from './webinars/webinars.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      ...AppService.graphQLModuleConfig(),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    WebinarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
