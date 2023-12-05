import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './dtos/cat.dto';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendCatData(@Body() body: Cat) {
    console.log(body);
    return this.appService.getCatName(body.name);
  }
}
