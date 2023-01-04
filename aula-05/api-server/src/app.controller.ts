import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Declara quais são os endpoints da sua api e qual método eles implementam
// GET - POST - PUT - DEL

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatus(): string {
    return this.appService.getStatus();
  }
}
