import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExportPagePageRoutingModule } from './export-page-routing.module';

import { ExportPagePage } from './export-page.page';
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
    ExportPagePageRoutingModule
  ],
  declarations: [ExportPagePage]
})
export class ExportPagePageModule {}
