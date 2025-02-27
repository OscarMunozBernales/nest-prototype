import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CriptoJsInterceptor } from '@interceptors/cripto-js.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalInterceptors(new CriptoJsInterceptor());
  await app.listen(3000);
}
bootstrap();
