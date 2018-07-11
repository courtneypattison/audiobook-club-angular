import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AudiobookService } from './audiobooks/shared/audiobook.service';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AudiobookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
