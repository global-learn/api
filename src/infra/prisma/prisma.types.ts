import { PrismaClient } from '@generated/client';

export type PrismaTransactionClient = Parameters<
  Parameters<PrismaClient['$transaction']>[0]
>[0];
