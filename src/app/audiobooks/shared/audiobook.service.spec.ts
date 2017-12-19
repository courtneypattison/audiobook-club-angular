import { TestBed, inject } from '@angular/core/testing';
import { HttpClientJsonpModule, HttpBackend, JsonpClientBackend } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Audiobook } from './audiobook.model';
import { AudiobookService } from './audiobook.service';
import {
  mockIdentifiers,
  mockAudiobookDetails,
  mockAudiobookWithoutDetails,
  mockAudiobookShortLength,
  mockAudiobookNanLength,
  mockAudiobookLongLength,
  mockAudiobookWithoutRating
} from './testing/mock-audiobooks';

describe('AudiobookService', () => {
  let audiobookService: AudiobookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AudiobookService,
        { provide: JsonpClientBackend, useExisting: HttpBackend }
      ]
    });

    audiobookService = TestBed.get(AudiobookService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([AudiobookService], (service: AudiobookService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAudiobooks', () => {
    it('should return an Observable<Audiobook[]>', () => {
      audiobookService.getAudiobooks().subscribe(audiobooks => {
        expect(audiobooks.length).toBe(5);
        expect(audiobooks[0].identifier).toEqual(mockIdentifiers['response']['docs'][0]['identifier']);
      });

      const req = httpMock.expectOne(request => request.url === audiobookService.getAudiobooksUrl());
      expect(req.request.method).toBe('JSONP');
      req.flush(mockIdentifiers);
    });
  });

  describe('#getAudiobookDetails', () => {
    it('should return an Observable<Audiobook>', () => {
      const identifier = mockAudiobookDetails['metadata']['identifier'][0];

      audiobookService.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => {
        expect(audiobook.identifier).toEqual(identifier);
      });

      const req = httpMock.expectOne(request => request.url === audiobookService.getAudiobookDetailsUrl(identifier));
      expect(req.request.method).toBe('JSONP');
      req.flush(mockAudiobookDetails);
    });

    it('should return an Observable<Audiobook> without details', () => {
      const identifier = mockAudiobookWithoutDetails['metadata']['identifier'][0];

      audiobookService.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => {
        expect(audiobook.author).toEqual('Unknown author(s)');
        expect(audiobook.length).toEqual('Length unavailable');
      });

      const req = httpMock.expectOne(request => request.url === audiobookService.getAudiobookDetailsUrl(identifier));
      expect(req.request.method).toBe('JSONP');
      req.flush(mockAudiobookWithoutDetails);
    });

    it('should return an Observable<Audiobook> with short length', () => {
      const identifier = mockAudiobookShortLength['metadata']['identifier'][0];

      audiobookService.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => {
        expect(audiobook.length).toEqual('46m 12s');
      });

      const req = httpMock.expectOne(request => request.url === audiobookService.getAudiobookDetailsUrl(identifier));
      expect(req.request.method).toBe('JSONP');
      req.flush(mockAudiobookShortLength);
    });

    it('should return an Observable<Audiobook> with unavailable length due to string as length', () => {
      const identifier = mockAudiobookNanLength['metadata']['identifier'][0];

      audiobookService.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => {
        expect(audiobook.length).toEqual('Length unavailable');
      });

      const req = httpMock.expectOne(request => request.url === audiobookService.getAudiobookDetailsUrl(identifier));
      expect(req.request.method).toBe('JSONP');
      req.flush(mockAudiobookNanLength);
    });

    it('should return an Observable<Audiobook> with unavailable length due to long length', () => {
      const identifier = mockAudiobookLongLength['metadata']['identifier'][0];

      audiobookService.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => {
        expect(audiobook.length).toEqual('Length unavailable');
      });

      const req = httpMock.expectOne(request => request.url === audiobookService.getAudiobookDetailsUrl(identifier));
      expect(req.request.method).toBe('JSONP');
      req.flush(mockAudiobookLongLength);
    });

    it('should return an Observable<Audiobook> with rating as 0.00', () => {
      const identifier = mockAudiobookWithoutRating['metadata']['identifier'][0];

      audiobookService.getAudiobookDetails(new Audiobook(identifier)).subscribe(audiobook => {
        expect(audiobook.rating).toEqual('0.00');
      });

      const req = httpMock.expectOne(request => request.url === audiobookService.getAudiobookDetailsUrl(identifier));
      expect(req.request.method).toBe('JSONP');
      req.flush(mockAudiobookWithoutRating);
    });
  });
});
