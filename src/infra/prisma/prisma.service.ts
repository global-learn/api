import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { EnvService } from '@/infra/env/env.service';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private readonly envService: EnvService) {
    const adapter = new PrismaPg({
      connectionString: envService.get('DATABASE_URL'),
    });
    super({ adapter });
  }
}
