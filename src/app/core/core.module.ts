import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoggerService } from './logger/logger.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [LoggerService]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
 }
