import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabcontactoPage } from './tabcontacto.page';

const routes: Routes = [
  {
    path: '',
    component: TabcontactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabcontactoPageRoutingModule {}
