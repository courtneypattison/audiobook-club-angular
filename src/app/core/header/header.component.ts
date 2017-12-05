import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Audiobook Club';
  menuItems = [
    'Audiobooks'
  ];

  constructor() { }

  ngOnInit() {
  }

}
