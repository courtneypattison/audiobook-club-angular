import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AudiobookService } from './audiobook.service';

describe('AudiobookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientJsonpModule,
      ],
      providers: [AudiobookService]
    });
  });

  it('should be created', inject([AudiobookService], (service: AudiobookService) => {
    expect(service).toBeTruthy();
  }));
});
