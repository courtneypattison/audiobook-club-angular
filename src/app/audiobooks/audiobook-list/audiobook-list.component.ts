import { Component, OnInit } from '@angular/core';

import { Audiobook } from '../shared/audiobook.model';
import { AudiobookService } from '../shared/audiobook.service';

@Component({
  selector: 'ac-audiobook-list',
  templateUrl: './audiobook-list.component.html',
  styleUrls: ['./audiobook-list.component.css']
})
export class AudiobookListComponent implements OnInit {
  audiobooks: Audiobook[] = [];
  httpError = false;
  pageCount = 1;

  constructor(private audiobookService: AudiobookService) { }

  ngOnInit() {
    this.getAudiobooks();
  }

  getAudiobooks() {
    this.audiobookService.getAudiobooks(this.pageCount).subscribe(
      audiobooks => {
        const audiobooksLength = this.audiobooks.length;
        for (let i = audiobooksLength; i < (audiobooksLength + audiobooks.length); i++) {
          this.audiobooks[i] = audiobooks[i - audiobooksLength];

          this.audiobookService
            .getAudiobookDetails(audiobooks[i - audiobooksLength])
            .subscribe(
              audiobook => this.audiobooks[i] = audiobook,
              error => this.httpError = true
          );
        }
      },
      error => this.httpError = true
    );
  }

  onScroll() {
    this.pageCount++;
    this.getAudiobooks();
  }
}
