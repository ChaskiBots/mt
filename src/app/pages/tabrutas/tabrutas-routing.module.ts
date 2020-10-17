import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabrutasPage } from './tabrutas.page';

const routes: Routes = [
  {
    path: '',
    component: TabrutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabrutasPageRoutingModule {}
