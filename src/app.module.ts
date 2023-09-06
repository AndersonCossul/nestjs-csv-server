import { Module } from '@nestjs/common';
import { CatsController } from './cats/controllers/cats.controller';
import { CatsService } from './cats/services/cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
