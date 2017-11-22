import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AudiobooksComponent } from './audiobooks/audiobooks.component';
import { AudiobookService } from './audiobooks/shared/audiobook.service';


@NgModule({
  declarations: [
    AppComponent,
    AudiobooksComponent
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
