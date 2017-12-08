import { TestBed, inject } from '@angular/core/testing';
import { HttpClientJsonpModule, HttpBackend, JsonpClientBackend } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Audiobook } from './audiobook.model';
import { AudiobookService } from './audiobook.service';
import { mockIdentifiers, mockAudiobookDetails } from './mock-audiobooks';

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
      const audiobook = new Audiobook(identifier);

      audiobookService.getAudiobookDetails(audiobook).subscribe(audiobookDetails => {
        expect(audiobookDetails.identifier).toEqual(identifier);
      });

      const audiobookDetailsUrl = audiobookService.getAudiobookDetailsUrl(identifier);
      console.log(audiobookDetailsUrl);
      const req = httpMock.expectOne(request => request.url === audiobookDetailsUrl);
      expect(req.request.method).toBe('JSONP');
      req.flush(mockAudiobookDetails);
    });
  });
});
