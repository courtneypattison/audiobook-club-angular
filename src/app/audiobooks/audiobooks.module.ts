import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AudiobooksRoutingModule } from './audiobooks-routing.module';

import { AudiobooksComponent } from './audiobooks.component';
import { AudiobookDetailComponent } from './audiobook-detail/audiobook-detail.component';
import { AudiobookListComponent } from './audiobook-list/audiobook-list.component';

@NgModule({
  declarations: [
    AudiobooksComponent,
    AudiobookDetailComponent,
    AudiobookListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AudiobooksRoutingModule
  ]
})
export class AudiobooksModule {

}
