import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerMiddleware);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
