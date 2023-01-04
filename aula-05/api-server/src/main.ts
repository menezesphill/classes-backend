import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Não precisa importar a biblioteca Cors pois já é um recurso do NEST

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
