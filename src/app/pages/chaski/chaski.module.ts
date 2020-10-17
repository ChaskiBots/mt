import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaskiPageRoutingModule } from './chaski-routing.module';

import { ChaskiPage } from './chaski.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaskiPageRoutingModule
  ],
  declarations: [ChaskiPage]
})
export class ChaskiPageModule {}
