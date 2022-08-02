import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  public getAll() {
    return this.apiService.getAll();
  }

  @Post('process')
  public create(@Body() data: { url: string }) {
    return this.apiService.createOrder(data);
  }
}
