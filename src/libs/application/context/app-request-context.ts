import { PrismaTransactionClient } from '@/infra/prisma/prisma.types';
import { RequestContext } from 'nestjs-request-context';

export class AppRequestContext {
  requestId: string;
  prismaTransaction?: PrismaTransactionClient;
}

export class RequestContextService {
  private static getContext() {
    return RequestContext.currentContext?.req as AppRequestContext;
  }

  static setRequestId(requestId: string) {
    const ctx = this.getContext();
    if (ctx) ctx.requestId = requestId;
  }

  static getRequestId() {
    const ctx = this.getContext();
    return ctx?.requestId || 'unknown-request';
  }

  static setTransactionConnection(transaction: PrismaTransactionClient) {
    const ctx = this.getContext();
    if (ctx) ctx.prismaTransaction = transaction;
  }

  static getTransactionConnection() {
    const ctx = this.getContext();
    return ctx?.prismaTransaction;
  }

  static cleanTransactionConnection() {
    const ctx = this.getContext();
    if (ctx) ctx.prismaTransaction = undefined;
  }
}
