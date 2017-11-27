import { Component, OnInit } from '@angular/core';

import { Audiobook } from './shared/audiobook.model';
import { AudiobookService } from './shared/audiobook.service';


@Component({
  selector: 'ac-audiobooks',
  templateUrl: './audiobooks.component.html',
  styleUrls: ['./audiobooks.component.css']
})
export class AudiobooksComponent implements OnInit {
  audiobooks: Audiobook[] = [];


  constructor(private audiobookService: AudiobookService) { }


  ngOnInit() {
    this.getAudiobooks();
  }


  getAudiobooks() {
    this.audiobookService.getAudiobookIdentifiers().subscribe(data => {
      this.audiobooks = data._body.response.docs;
      for (let _i = 0; _i < this.audiobooks.length; _i++) {
        this.audiobookService
          .getAudiobook(this.audiobooks[_i].identifier)
          .subscribe(audiobookDetail => this.audiobooks[_i] = audiobookDetail);
      }
    });
  }

}
