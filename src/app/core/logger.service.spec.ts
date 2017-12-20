import { TestBed, inject } from '@angular/core/testing';

import { LoggerService } from './logger.service';

import { environment } from '../../environments/environment';

describe('LoggerService', () => {
  let logger: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });

    logger = TestBed.get(LoggerService);
  });

  it('should be created', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));

  describe('#log', () => {
    it('should log', () => {
      const logMsg = 'Test log';

      spyOn(console, 'log');
      logger.log(logMsg);
      expect(console.log).toHaveBeenCalledWith(logMsg);
    });

    it('shouldn\'t log', () => {
      const logMsg = 'Test log';
      environment.production = true;

      spyOn(console, 'log');
      logger.log(logMsg, logMsg);
      expect(console.log).not.toHaveBeenCalledWith(logMsg, logMsg);
    });
  });

  describe('#error', () => {
    it('should error', () => {
      const errorMsg = 'Test error';

      spyOn(console, 'error');
      logger.error(errorMsg, errorMsg);
      expect(console.error).toHaveBeenCalledWith(errorMsg, errorMsg);
    });
  });

  describe('#warn', () => {
    it('should warn', () => {
      const warnMsg = 'Test warn';

      spyOn(console, 'warn');
      logger.warn(warnMsg, warnMsg);
      expect(console.warn).toHaveBeenCalledWith(warnMsg, warnMsg);
    });
  });
});
