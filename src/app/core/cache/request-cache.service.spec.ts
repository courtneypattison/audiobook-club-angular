import { TestBed, inject } from '@angular/core/testing';

import { RequestCacheService } from './request-cache.service';

import { LoggerService } from '../../core/logger/logger.service';
import { MockLoggerService } from '../../../testing/mock-logger.service';

describe('RequestCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestCacheService,
        { provide: LoggerService, useClass: MockLoggerService }
      ]
    });
  });

  it('should be created', inject([RequestCacheService], (service: RequestCacheService) => {
    expect(service).toBeTruthy();
  }));
});
