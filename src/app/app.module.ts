import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AudiobooksComponent } from './audiobooks/audiobooks.component';


@NgModule({
  declarations: [
    AppComponent,
    AudiobooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }