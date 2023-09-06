import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from '../config/env.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: validationSchema(),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT!, 10) || 3000,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
    }),
    CatsModule,
    UsersModule,
  ],
})
export class AppModule {}
