import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudiobooksModule } from './audiobooks/audiobooks.module';

import { AudiobooksComponent } from './audiobooks/audiobooks.component';
import { AudiobookDetailComponent } from './audiobooks/audiobook-detail/audiobook-detail.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'audiobooks', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
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
