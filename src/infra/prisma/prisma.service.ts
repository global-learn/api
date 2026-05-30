import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { EnvService } from '@/infra/env/env.service';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  readonly client: PrismaClient;

  constructor(envService: EnvService) {
    const adapter = new PrismaPg({
      connectionString: envService.get('DATABASE_URL'),
    });
    this.client = new PrismaClient({ adapter });
  }

  async onModuleInit() {
    await this.client.$connect();
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }
}
