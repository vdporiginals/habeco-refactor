import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPagePageRoutingModule } from './detail-page-routing.module';

import { DetailPagePage } from './detail-page.page';
import { BaseListLayoutComponentModule } from 'src/app/layout/base-list-layout/base-list-layout.component';
import { BaseListDetailComponentModule } from 'src/app/ui/base-list-detail/base-list-detail.component';
import { DetailMaintainPagePageRoutingModule } from '../../maintain/detail-maintain-page/detail-maintain-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseListLayoutComponentModule,
    BaseListDetailComponentModule,
    DetailMaintainPagePageRoutingModule,
    DetailPagePageRoutingModule
  ],
  declarations: [DetailPagePage]
})
export class DetailPagePageModule {}
