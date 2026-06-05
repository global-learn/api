import { Module } from '@nestjs/common';
import { TokenModule } from '@/modules/identity/token/token.module';

@Module({
  imports: [TokenModule],
})
export class AuthModule {}
