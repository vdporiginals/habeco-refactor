import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarehousePageRoutingModule } from './warehouse-routing.module';

import { WarehousePage } from './warehouse.page';
import { MainLayoutComponentModule } from 'src/app/layout/main-layout/main-layout.component';
import { ListMenuComponentModule } from 'src/app/ui/list-menu/list-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarehousePageRoutingModule,
    MainLayoutComponentModule,
    ListMenuComponentModule,
  ],
  declarations: [WarehousePage],
})
export class WarehousePageModule {}
