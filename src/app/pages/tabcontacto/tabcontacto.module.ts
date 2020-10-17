import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabcontactoPageRoutingModule } from './tabcontacto-routing.module';

import { TabcontactoPage } from './tabcontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabcontactoPageRoutingModule
  ],
  declarations: [TabcontactoPage]
})
export class TabcontactoPageModule {}
