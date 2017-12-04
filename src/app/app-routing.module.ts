import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudiobooksModule } from './audiobooks/audiobooks.module';

import { AudiobooksComponent } from './audiobooks/audiobooks.component';
import { AudiobookDetailComponent } from './audiobooks/audiobook-detail/audiobook-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'audiobooks', pathMatch: 'full' }
];

@NgModule({
  imports: [
    AudiobooksModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
