import { PrismaService } from '@/infra/prisma/prisma.service';
import { BaseRepositoryPort } from '@/libs/application/repository.port';
import { RequestContextService } from '@/libs/application/context/app-request-context';

export abstract class PrismaRepositoryBase implements BaseRepositoryPort {
  constructor(protected readonly prismaService: PrismaService) {}

  protected get db() {
    const tx = RequestContextService.getTransactionConnection();
    return tx ?? this.prismaService.client;
  }

  async transaction<T>(handler: () => Promise<T>): Promise<T> {
    return this.prismaService.client.$transaction(async (tx) => {
      RequestContextService.setTransactionConnection(tx);

      try {
        return await handler();
      } finally {
        RequestContextService.cleanTransactionConnection();
      }
    });
  }
}
