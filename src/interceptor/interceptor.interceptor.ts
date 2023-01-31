import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap, map } from 'rxjs';
import { Request, Response } from 'express'
import * as _ from 'lodash';

@Injectable()
export class TestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const startRequest = Date.now();
    const ctx = context.switchToHttp()

    const request = ctx.getRequest<Request>()
    const response = ctx.getResponse<Response>();

    console.log(`Who is calling me: ${context.getClass().name}`)
    console.log(`Which method is being called: ${context.getHandler().name}`)
    return next.handle().pipe(map((data) => ({
      meta: {
        url: request.url,
        method: request.method,
        statusCode: response.statusCode
      },
      data: ((_.has(data, 'meta') && _.has(data, 'data') &&  _.has(data, 'errors'))) ? data.data : data,
      errors: data?.errors
    })))
  }
}
