import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // Castea la info de los inputs e infiere los tipos de datos
      transformOptions: {
        enableImplicitConversion: true,
      }
    }),
  );
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
