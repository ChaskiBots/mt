import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from '../components/menu/menu.component';
import { CmComponent } from './cm/cm.component';





@NgModule({

  declarations: [
    MenuComponent,
    CmComponent

  ],
  exports: [
    MenuComponent,
    CmComponent

  ],
  imports: [
    CommonModule,
    IonicModule,

  ]
})
export class ComponentModule { }
