import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudiobooksComponent } from './audiobooks/audiobooks.component';
import { AudiobookDetailComponent } from './audiobooks/audiobook-detail/audiobook-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/audiobooks', pathMatch: 'full' },
  { path: 'audiobooks', component: AudiobooksComponent },
  { path: 'detail/:identifier', component: AudiobookDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
