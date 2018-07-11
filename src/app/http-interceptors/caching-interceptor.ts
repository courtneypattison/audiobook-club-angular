import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpResponse,
  HttpInterceptor, HttpHandler
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RequestCacheService } from '../core/cache/request-cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!isCachable(req)) { return next.handle(req); }

    const cachedResponse = this.cache.get(req);
    return cachedResponse ? of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}

function isCachable(req: HttpRequest<any>) {
  return req.method === 'JSONP';
}

function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCacheService): Observable<HttpEvent<any>> {

  return next.handle(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        cache.put(req, event);
      }
    })
  );
}
