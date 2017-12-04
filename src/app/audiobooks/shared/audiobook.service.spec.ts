import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AudiobookService } from './audiobook.service';

describe('AudiobookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [AudiobookService]
    });
  });

  it('should be created', inject([AudiobookService], (service: AudiobookService) => {
    expect(service).toBeTruthy();
  }));
});
