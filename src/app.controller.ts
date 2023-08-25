import { Controller, Get } from '@nestjs/common';
import { AppService, InitialPath } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): InitialPath {
    return this.appService.getHello();
  }
}
