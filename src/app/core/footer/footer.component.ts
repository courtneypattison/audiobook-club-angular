import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  creator = 'Courtney Pattison';
  currentYear = new Date().getUTCFullYear();
  licenseURL = 'https://github.com/courtneypattison/audiobook-club-angular/blob/master/LICENSE';
  licenseName = 'MIT';
}
