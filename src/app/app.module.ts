import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AudiobookService } from './audiobooks/shared/audiobook.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CoreModule,
    AppRoutingModule
  ],
  providers: [AudiobookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
