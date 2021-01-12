import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebinarsModule } from './webinars/webinars.module';
import { PrismaService } from './prisma/prisma.service';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      ...AppService.graphQLModuleConfig(),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    WebinarsModule,
    AdminsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
