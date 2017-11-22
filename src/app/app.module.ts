import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AudiobooksComponent } from './audiobooks/audiobooks.component';
import { AudiobookService } from './audiobooks/shared/audiobook.service';
import { AudiobookDetailComponent } from './audiobooks/audiobook-detail/audiobook-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AudiobooksComponent,
    AudiobookDetailComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    NgbModule.forRoot()
  ],
  providers: [AudiobookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
