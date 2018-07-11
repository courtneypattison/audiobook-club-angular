import { NgModule } from '@angular/core';

import { httpInterceptorProviders } from './index';

@NgModule({
  providers: [
    httpInterceptorProviders
  ]
})
export class HttpInterceptorModule {

}
