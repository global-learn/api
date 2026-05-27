import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnvModule } from '@/infra/env/env.module';

@Module({
  imports: [EnvModule],
  controllers: [AppController],
})
export class AppModule {}
