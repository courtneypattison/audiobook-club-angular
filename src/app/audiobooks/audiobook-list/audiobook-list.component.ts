import { Component, OnInit } from '@angular/core';

import { Audiobook } from '../shared/audiobook.model';
import { AudiobookService, httpErrorIdentifier } from '../shared/audiobook.service';

@Component({
  selector: 'ac-audiobook-list',
  templateUrl: './audiobook-list.component.html',
  styleUrls: ['./audiobook-list.component.css']
})
export class AudiobookListComponent implements OnInit {
  audiobooks: Audiobook[] = [];
  httpError = false;

  constructor(private audiobookService: AudiobookService) { }

  ngOnInit() {
    this.getAudiobooks();
  }

  getAudiobooks() {
    this.audiobookService.getAudiobooks().subscribe(audiobooks => {
      this.audiobooks = audiobooks;
      if (this.audiobooks[0].identifier === httpErrorIdentifier) {
        this.httpError = true;
        return;
      }

      for (let i = 0; i < this.audiobooks.length; i++) {
        this.audiobookService
          .getAudiobookDetails(this.audiobooks[i])
          .subscribe(audiobook => {
            if (audiobook.identifier === httpErrorIdentifier) {
              this.httpError = true;
            } else {
              this.audiobooks[i] = audiobook;
            }
          });
      }
    });
  }
}
