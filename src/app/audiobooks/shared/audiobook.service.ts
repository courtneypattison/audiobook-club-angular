import { Injectable } from '@angular/core';


import { AUDIOBOOKS } from './mock-audiobooks';


@Injectable()
export class AudiobookService {
  getAudiobooks() {
    return Promise.resolve(AUDIOBOOKS);
  }


  constructor() { }
}
