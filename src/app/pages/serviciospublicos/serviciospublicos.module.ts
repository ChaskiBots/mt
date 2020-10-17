import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciospublicosPageRoutingModule } from './serviciospublicos-routing.module';

import { ServiciospublicosPage } from './serviciospublicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciospublicosPageRoutingModule
  ],
  declarations: [ServiciospublicosPage]
})
export class ServiciospublicosPageModule {}
