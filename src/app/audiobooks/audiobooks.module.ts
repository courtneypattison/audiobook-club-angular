import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';

import { AudiobooksRoutingModule } from './audiobooks-routing.module';

import { AudiobooksComponent } from './audiobooks.component';
import { AudiobookService } from './shared/audiobook.service';
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
    JsonpModule,
    AudiobooksRoutingModule
  ],
  providers: [ AudiobookService ]
})
export class AudiobooksModule {

}
