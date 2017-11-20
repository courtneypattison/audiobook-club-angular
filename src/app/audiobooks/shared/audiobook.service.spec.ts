import { TestBed, inject } from '@angular/core/testing';

import { AudiobookService } from './audiobook.service';

describe('AudiobookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudiobookService]
    });
  });

  it('should be created', inject([AudiobookService], (service: AudiobookService) => {
    expect(service).toBeTruthy();
  }));
});
