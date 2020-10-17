import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabrutasPageRoutingModule } from './tabrutas-routing.module';

import { TabrutasPage } from './tabrutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabrutasPageRoutingModule
  ],
  declarations: [TabrutasPage]
})
export class TabrutasPageModule {}
