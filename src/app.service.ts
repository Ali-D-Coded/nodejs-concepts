import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {

  private logger = new Logger()
  getHello(): string {
    return 'Hello World!';
  }

   blocking() {
    const now = new Date().getTime()
    while (new Date().getTime() < now + 10000) { }
    return  {}
  }

  async nonblocking() {
    return new Promise(async (res) => {
      setTimeout(() => {
        res({})
      },10000)
    } )
  }

  async promiseParallel() {
    const promises = []
    for (let i = 0; i < 10; i++){
      promises.push(this.sleep())
    }
    return Promise.all(promises)
  }

  
  private async sleep() {
    return new Promise(res => {
      this.logger.log("start Sleep")
      setTimeout(() => {
        this.logger.log("Sleep complete")
        res({})
      },1000)
    })
  }
}
