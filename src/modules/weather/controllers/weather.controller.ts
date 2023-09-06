import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { WeatherService } from '../services/weather.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Weather } from '../entities/weather.entity';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async index(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<Weather>> {
    limit = limit > 100 ? 100 : limit;
    return this.weatherService.paginate({
      page,
      limit,
    });
  }
}
