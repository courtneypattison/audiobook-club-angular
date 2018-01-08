import { TestBed, inject } from '@angular/core/testing';
import { HttpClientJsonpModule, HttpBackend, JsonpClientBackend } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Audiobook } from './audiobook.model';
import { AudiobookService } from './audiobook.service';
import { LoggerService } from '../../core/logger/logger.service';
import { MockLoggerService } from '../../../testing/mock-logger.service';
import {
  mockIdentifiers,
  mockAudiobookDetails,
  mockAudiobookWithoutDetails,
  mockAudiobookShortLength,
  mockAudiobookNanLength,
  mockAudiobookLongLength,
  mockAudiobookWithoutRating
} from '../../../testing/mock-audiobooks';

describe('AudiobookService', () => {
  let service: AudiobookService;
  let httpMock: HttpTestingController;
  const mockError = new ErrorEvent('test error');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AudiobookService,
        { provide: JsonpClientBackend, useExisting: HttpBackend },
        { provide: LoggerService, useClass: MockLoggerService }
      ]
    });

    service = TestBed.get(AudiobookService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAudiobooks', () => {
    it('should return an Observable<Audiobook[]>', () => {
      service.getAudiobooks().subscribe(audiobooks => {
        expect(audiobooks.length).toBe(5);
        expect(audiobooks[0].identifier).toEqual(mockIdentifiers['response']['docs'][0]['identifier']);
      });
      httpMock.expectOne(request => request.url === service.getAudiobooksUrl()).flush(mockIdentifiers);
    });

    it(`should return an Observable<HttpErrorResponse>`, () => {
      service.getAudiobooks().subscribe(() => undefined, error => expect(error.error).toBe(mockError));
      httpMock.expectOne(request => request.url === service.getAudiobooksUrl()).error(mockError);
    });
  });

  describe('#getAudiobookDetails', () => {
    it('should return an Observable<Audiobook>', () => {
      const identifier = mockAudiobookDetails['metadata']['identifier'][0];

      service.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => expect(audiobook.identifier).toEqual(identifier));
      httpMock.expectOne(request => request.url === service.getAudiobookDetailsUrl(identifier)).flush(mockAudiobookDetails);
    });

    it(`should return an Observable<HttpErrorResponse>`, () => {
      const identifier = mockAudiobookDetails['metadata']['identifier'][0];

      service.getAudiobookDetails(new Audiobook(identifier)).subscribe(() => undefined, (error) => {
        expect(error.error).toBe(mockError);
      });
      httpMock.expectOne(request => request.url === service.getAudiobookDetailsUrl(identifier)).error(mockError);
    });

    it('should return an Observable<Audiobook> without details', () => {
      const identifier = mockAudiobookWithoutDetails['metadata']['identifier'][0];

      service.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => {
        expect(audiobook.author).toEqual('Unknown author(s)');
        expect(audiobook.length).toEqual('Length unavailable');
      });
      httpMock.expectOne(request => request.url === service.getAudiobookDetailsUrl(identifier)).flush(mockAudiobookWithoutDetails);
    });

    it('should return an Observable<Audiobook> with short length', () => {
      const identifier = mockAudiobookShortLength['metadata']['identifier'][0];

      service.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => expect(audiobook.length).toEqual('46m 12s'));
      httpMock.expectOne(request => request.url === service.getAudiobookDetailsUrl(identifier)).flush(mockAudiobookShortLength);
    });

    it('should return an Observable<Audiobook> with unavailable length due to string as length', () => {
      const identifier = mockAudiobookNanLength['metadata']['identifier'][0];

      service.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => expect(audiobook.length).toEqual('Length unavailable'));
      httpMock.expectOne(request => request.url === service.getAudiobookDetailsUrl(identifier)).flush(mockAudiobookNanLength);
    });

    it('should return an Observable<Audiobook> with unavailable length due to long length', () => {
      const identifier = mockAudiobookLongLength['metadata']['identifier'][0];

      service.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => expect(audiobook.length).toEqual('Length unavailable'));
      httpMock.expectOne(request => request.url === service.getAudiobookDetailsUrl(identifier)).flush(mockAudiobookLongLength);
    });

    it('should return an Observable<Audiobook> with rating as 0.00', () => {
      const identifier = mockAudiobookWithoutRating['metadata']['identifier'][0];

      service.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => expect(audiobook.rating).toEqual('0.00'));
      httpMock.expectOne(request => request.url === service.getAudiobookDetailsUrl(identifier)).flush(mockAudiobookWithoutRating);
    });
  });
});
