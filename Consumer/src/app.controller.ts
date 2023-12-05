import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './cat.entity';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'cats' })
  async createCat(name: string): Promise<Cat> {
    return this.appService.saveCat(name);
  }
}
