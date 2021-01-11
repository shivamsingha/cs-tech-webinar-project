import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public static graphQLModuleConfig() {
    if (process.env.NODE_ENV === 'production')
      return {
        debug: false,
        playground: false,
      };
    return {
      debug: true,
      playground: true,
    };
  }
  getHello(): string {
    return 'Hello World!';
  }
}
