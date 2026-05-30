import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { type Request } from 'express';
import { RequestContextService } from '@/libs/application/context/app-request-context';
import { nanoid } from 'nanoid';

@Injectable()
export class ContextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest<Request>();

      const headerId = request.headers['x-request-id'];
      const headerRequestId = Array.isArray(headerId) ? headerId[0] : headerId;
      const bodyRequestId =
        request.body &&
        typeof request.body === 'object' &&
        'requestId' in request.body
          ? (request.body as { requestId: unknown }).requestId
          : undefined;
      const requestId =
        (typeof bodyRequestId === 'string' ? bodyRequestId : undefined) ??
        headerRequestId ??
        nanoid(6);

      RequestContextService.setRequestId(requestId);
    }

    return next.handle();
  }
}
