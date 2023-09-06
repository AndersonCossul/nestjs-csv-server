import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from '../interfaces/cat.interface';
import { CatsService } from '../services/cats.service';
import { HttpExceptionFilter } from '../../../filters/http-exception.filter';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException('This is a custom message');
    // return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
