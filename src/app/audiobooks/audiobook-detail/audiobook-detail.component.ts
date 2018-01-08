import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Audiobook } from '../shared/audiobook.model';
import { AudiobookService } from '../shared/audiobook.service';

@Component({
  selector: 'ac-audiobook-detail',
  templateUrl: './audiobook-detail.component.html',
  styleUrls: ['./audiobook-detail.component.css']
})
export class AudiobookDetailComponent implements OnInit {
  @Input() audiobook: Audiobook;
  httpError = false;

  constructor(
    private route: ActivatedRoute,
    private audiobookService: AudiobookService
  ) { }

  ngOnInit() {
    this.getAudiobook();
  }

  getAudiobook() {
    const identifier = this.route.snapshot.paramMap.get('identifier');
    this.audiobookService.getAudiobookDetails(new Audiobook(identifier))
      .subscribe(
        audiobook => this.audiobook = audiobook,
        error => this.httpError = true
    );
  }
}
