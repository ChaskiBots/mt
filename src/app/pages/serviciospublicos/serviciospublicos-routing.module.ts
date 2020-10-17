import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciospublicosPage } from './serviciospublicos.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciospublicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciospublicosPageRoutingModule {}
