import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { EnvService } from '@/infra/env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const envService = app.get(EnvService);
  await app.listen(envService.get('PORT'), '0.0.0.0');
}
bootstrap();
