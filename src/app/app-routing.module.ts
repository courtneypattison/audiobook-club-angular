import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudiobooksComponent } from './audiobooks/audiobooks.component';

const routes: Routes = [
  { path: '', redirectTo: '/audiobooks', pathMatch: 'full' },
  { path: 'audiobooks', component: AudiobooksComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
