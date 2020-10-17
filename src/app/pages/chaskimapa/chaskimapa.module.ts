import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaskimapaPageRoutingModule } from './chaskimapa-routing.module';

import { ChaskimapaPage } from './chaskimapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaskimapaPageRoutingModule
  ],
  declarations: [ChaskimapaPage]
})
export class ChaskimapaPageModule {}
