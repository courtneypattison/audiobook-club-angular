import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AudiobooksComponent } from './audiobooks.component';
import { AudiobookListComponent } from './audiobook-list/audiobook-list.component';
import { AudiobookDetailComponent } from './audiobook-detail/audiobook-detail.component';

const routes = [
    { path: '',
    component: AudiobooksComponent,
    children: [
      { path: '', component: AudiobookListComponent },
      { path: 'detail/:identifier', component: AudiobookDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiobooksRoutingModule {

}
