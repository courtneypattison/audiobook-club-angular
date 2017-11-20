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
    this.audiobookService.getAudiobooks()
      .then(audiobooks => this.audiobooks = audiobooks);
  }

}
