import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MejiaPageRoutingModule } from './mejia-routing.module';

import { MejiaPage } from './mejia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MejiaPageRoutingModule
  ],
  declarations: [MejiaPage]
})
export class MejiaPageModule {}
