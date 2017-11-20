import { Component } from '@angular/core';


import { AudiobookService } from './audiobooks/shared/audiobook.service';


@Component({
  selector: 'ac-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AudiobookService]
})
export class AppComponent {
}
