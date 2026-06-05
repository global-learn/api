import { Module } from '@nestjs/common';
import { PrismaModule } from '@/infra/prisma/prisma.module';
import { UserService } from '@/modules/identity/user/application/user.service';

@Module({
  imports: [PrismaModule],
  providers: [UserService],
})
export class UserModule {}
