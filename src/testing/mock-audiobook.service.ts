import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Audiobook } from '../app/audiobooks/shared/audiobook.model';

import { mockIdentifier } from './mock-audiobooks';

@Injectable()
export class MockAudiobookService {
  getAudiobooks(): Observable<Audiobook[]> {
    return of([new Audiobook(mockIdentifier)]);
  }

  getAudiobookDetails(audiobook: Audiobook): Observable<Audiobook> {
    return of(audiobook);
  }
}
