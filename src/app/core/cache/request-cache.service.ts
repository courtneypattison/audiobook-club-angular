import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class RequestCacheService {

  constructor(private logger: LoggerService) { }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    if (storageAvailable('localStorage')) {
      const url = req.urlWithParams;
      const cached = localStorage.getItem(url);
      this.logger.log(`Getting cached response for "${url}".`);

      return cached ? new HttpResponse(JSON.parse(cached)) : undefined;
    } else {
      this.logger.log('localStorage unavailable');
      return undefined;
    }
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    if (storageAvailable('localStorage')) {
      const url = req.urlWithParams;
      this.logger.log(`Caching response from "${url}".`);

      localStorage.setItem(url, JSON.stringify(response));
    } else {
      this.logger.log('localStorage unavailable');
    }
  }
}

function storageAvailable(type) {
  try {
    const storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}
