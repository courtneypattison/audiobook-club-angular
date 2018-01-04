import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Audiobook } from '../app/audiobooks/shared/audiobook.model';

@Injectable()
export class MockActivatedRoute {
  getAudiobooks(): Observable<Audiobook[]> {
    return of([new Audiobook('mock-identifier')]);
  }

  getAudiobookDetails(audiobook: Audiobook): Observable<Audiobook> {
    return of(audiobook);
  }
}
