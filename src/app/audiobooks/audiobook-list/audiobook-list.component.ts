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

  constructor(private audiobookService: AudiobookService) { }

  ngOnInit() {
    this.getAudiobooks();
  }

  getAudiobooks() {
    this.audiobookService.getAudiobookIdentifiers().subscribe(data => {
      this.audiobooks = data.response.docs;
      for (let _i = 0; _i < this.audiobooks.length; _i++) {
        this.audiobookService
          .getAudiobook(this.audiobooks[_i].identifier)
          .subscribe(audiobookDetail => this.audiobooks[_i] = audiobookDetail);
      }
    });
  }
}
