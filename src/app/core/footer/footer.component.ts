import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  creator = 'Courtney Pattison';
  currentYear = 2017;
  licenseURL = 'https://github.com/courtneypattison/audiobook-club-angular/blob/master/LICENSE';
  licenseName = 'MIT';
}
