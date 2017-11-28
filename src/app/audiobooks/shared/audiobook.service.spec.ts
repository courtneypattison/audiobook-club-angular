import { TestBed, inject } from '@angular/core/testing';
import { JsonpModule } from '@angular/http';

import { AudiobookService } from './audiobook.service';

describe('AudiobookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [AudiobookService]
    });
  });

  it('should be created', inject([AudiobookService], (service: AudiobookService) => {
    expect(service).toBeTruthy();
  }));
});
