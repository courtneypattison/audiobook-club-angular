import { Component, OnInit, Input } from '@angular/core';


import { Audiobook } from '../shared/audiobook.model';


@Component({
  selector: 'ac-audiobook-detail',
  templateUrl: './audiobook-detail.component.html',
  styleUrls: ['./audiobook-detail.component.css']
})
export class AudiobookDetailComponent implements OnInit {
  @Input() audiobook: Audiobook;

  constructor() { }

  ngOnInit() {
  }

}
