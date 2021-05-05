import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintainPageRoutingModule } from './maintain-routing.module';

import { MaintainPage } from './maintain.page';
import { MainLayoutComponentModule } from 'src/app/layout/main-layout/main-layout.component';
import { ListMenuComponentModule } from 'src/app/ui/list-menu/list-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintainPageRoutingModule,
    MainLayoutComponentModule,
    ListMenuComponentModule
  ],
  declarations: [MaintainPage],
})
export class MaintainPageModule {}
