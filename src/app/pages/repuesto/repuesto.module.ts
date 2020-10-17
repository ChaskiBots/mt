import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepuestoPageRoutingModule } from './repuesto-routing.module';

import { RepuestoPage } from './repuesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepuestoPageRoutingModule
  ],
  declarations: [RepuestoPage]
})
export class RepuestoPageModule {}
