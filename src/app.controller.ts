import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('blocking')
  blocking(){
    return this.appService.blocking();
  }

  @Get('non-blocking')
  nonblocking(){
    return this.appService.nonblocking();
  }

  @Get('parallel-promises')
  parallelpromis(){
    return this.appService.promiseParallel();
  }


}
