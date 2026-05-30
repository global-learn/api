import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EnvModule } from '@/infra/env/env.module';
import { PrismaModule } from '@/infra/prisma/prisma.module';
import { UserModule } from '@/modules/user/user.module';
import { RequestContextModule } from 'nestjs-request-context';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ContextInterceptor } from '@/libs/application/context/context.interceptor';

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: ContextInterceptor,
  },
];

@Module({
  imports: [RequestContextModule, EnvModule, PrismaModule, UserModule],
  controllers: [AppController],
  providers: [...interceptors],
})
export class AppModule {}
