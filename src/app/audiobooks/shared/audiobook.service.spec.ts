import { TestBed, inject } from '@angular/core/testing';
import { HttpClientJsonpModule, HttpBackend, JsonpClientBackend } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Audiobook } from './audiobook.model';
import { AudiobookService } from './audiobook.service';

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
      const dummyIdentifiers = {
        'response': {
          'docs': [
            {'identifier': 'tom_sawyer_librivox'},
            {'identifier': 'moby_dick_librivox'},
            {'identifier': 'adventures_holmes'},
            {'identifier': 'alice_in_wonderland_librivox'},
            {'identifier': 'art_of_war_librivox'}
          ]
        }
      };

      audiobookService.getAudiobooks().subscribe(audiobooks => {
        expect(audiobooks.length).toBe(5);
        expect(audiobooks[0].identifier).toEqual(dummyIdentifiers['response']['docs'][0]['identifier']);
      });

      const req = httpMock.expectOne(request => request.url === audiobookService.getAudiobooksUrl());
      expect(req.request.method).toBe('JSONP');
      req.flush(dummyIdentifiers);
    });
  });
});
