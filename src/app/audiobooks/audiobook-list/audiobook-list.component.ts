import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Audiobook } from '../shared/audiobook.model';
import { AudiobookService } from '../shared/audiobook.service';

@Component({
  selector: 'ac-audiobook-list',
  templateUrl: './audiobook-list.component.html',
  styleUrls: ['./audiobook-list.component.css']
})
export class AudiobookListComponent implements OnInit {
  audiobooks: Audiobook[] = [];

  constructor(private audiobookService: AudiobookService) { }

  ngOnInit() {
    this.getAudiobooks();
  }

  getAudiobooks() {
    this.audiobookService.getAudiobookIdentifiers().subscribe(identifiers => {
      this.audiobooks = identifiers;
      for (let i = 0; i < this.audiobooks.length; i++) {
        this.audiobookService
          .getAudiobook(this.audiobooks[i].identifier)
          .subscribe(audiobook => {
            this.audiobooks[i] = audiobook;
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('An error occurred:', err.error.message);
            } else {
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          });
      }
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
      } else {
        console.log(`Backend returned code ${err.message}, body was: ${err.error}`);
      }
    });
  }
}
