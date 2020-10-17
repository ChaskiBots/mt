import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaskiPage } from './chaski.page';

const routes: Routes = [
  {
    path: '',
    component: ChaskiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaskiPageRoutingModule {}
