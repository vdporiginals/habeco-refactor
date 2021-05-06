import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportPagePageRoutingModule } from './import-page-routing.module';

import { ImportPagePage } from './import-page.page';
import { BaseListLayoutComponentModule } from 'src/app/layout/base-list-layout/base-list-layout.component';
import { BaseListWarehouseComponentModule } from 'src/app/ui/base-list-warehouse/base-list-warehouse.component';
import { ListMaintainPagePageRoutingModule } from '../../maintain/list-maintain-page/list-maintain-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseListWarehouseComponentModule,
    BaseListLayoutComponentModule,
    ListMaintainPagePageRoutingModule,
    ImportPagePageRoutingModule
  ],
  declarations: [ImportPagePage]
})
export class ImportPagePageModule {}
