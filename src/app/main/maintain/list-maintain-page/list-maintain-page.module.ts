import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMaintainPagePageRoutingModule } from './list-maintain-page-routing.module';

import { ListMaintainPagePage } from './list-maintain-page.page';
import { BaseListLayoutComponentModule } from 'src/app/layout/base-list-layout/base-list-layout.component';
import { BaseListWarehouseComponentModule } from 'src/app/ui/base-list-warehouse/base-list-warehouse.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseListWarehouseComponentModule,
    BaseListLayoutComponentModule,
    ListMaintainPagePageRoutingModule,
  ],
  declarations: [ListMaintainPagePage],
})
export class ListMaintainPagePageModule {}
