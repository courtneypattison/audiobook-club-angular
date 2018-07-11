import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AudiobooksRoutingModule } from './audiobooks-routing.module';
import { HttpInterceptorModule } from '../http-interceptors/http-interceptor.module';

import { AudiobooksComponent } from './audiobooks.component';
import { AudiobookDetailComponent } from './audiobook-detail/audiobook-detail.component';
import { AudiobookListComponent } from './audiobook-list/audiobook-list.component';
import { AudiobookHttpErrorComponent } from './audiobook-http-error/audiobook-http-error.component';

import { httpInterceptorProviders } from '../http-interceptors/index';
import { RequestCacheService } from '../core/cache/request-cache.service';

@NgModule({
  declarations: [
    AudiobooksComponent,
    AudiobookDetailComponent,
    AudiobookListComponent,
    AudiobookHttpErrorComponent
  ],
  imports: [
    CommonModule,
    HttpInterceptorModule,
    HttpClientModule,
    HttpClientJsonpModule,
    InfiniteScrollModule,
    AudiobooksRoutingModule
  ],
  providers: [
    RequestCacheService,
    httpInterceptorProviders
  ]
})
export class AudiobooksModule {

}
