import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';

export class RequestInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler) {
    const httpContext = context.switchToHttp();
    const req = httpContext.getRequest();
    console.log(`method: ${req.method} url: ${req.originalUrl}`);
    if (req.method !== 'GET') {
      console.log(req.body);
    }
    return next.handle();
  }
}
