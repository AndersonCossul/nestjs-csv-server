import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }
}
