import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnvModule } from '@/infra/env/env.module';
import { PrismaModule } from '@/infra/prisma/prisma.module';
import { UserModule } from '@/modules/user/user.module';

@Module({
  imports: [EnvModule, PrismaModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
