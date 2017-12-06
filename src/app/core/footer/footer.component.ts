import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  creator = 'Courtney Pattison';
  date = Date.now();
  licenseURL = 'https://github.com/courtneypattison/audiobook-club-angular/blob/master/LICENSE';

  constructor() { }

  ngOnInit() {
  }

}
