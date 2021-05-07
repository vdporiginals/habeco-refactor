import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BaseListLayoutComponentModule } from 'src/app/layout/base-list-layout/base-list-layout.component';
import { BaseListDetailComponentModule } from 'src/app/ui/base-list-detail/base-list-detail.component';
import { BaseListWarehouseComponentModule } from 'src/app/ui/base-list-warehouse/base-list-warehouse.component';
import { DetailModalComponent } from '../modal/detail-modal/detail-modal.component';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    BaseListWarehouseComponentModule,
    BaseListLayoutComponentModule,
    BaseListDetailComponentModule,
  ],
  declarations: [ListPage, DetailModalComponent],
})
export class ListPageModule {}
