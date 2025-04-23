import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true, // Optional: if you use cookies or auth headers
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
