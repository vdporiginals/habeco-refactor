import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMaintainPagePageRoutingModule } from './detail-maintain-page-routing.module';

import { DetailMaintainPagePage } from './detail-maintain-page.page';
import { BaseListLayoutComponentModule } from 'src/app/layout/base-list-layout/base-list-layout.component';
import { BaseListDetailComponentModule } from 'src/app/ui/base-list-detail/base-list-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseListLayoutComponentModule,
    BaseListDetailComponentModule,
    DetailMaintainPagePageRoutingModule,
  ],
  declarations: [DetailMaintainPagePage],
})
export class DetailMaintainPagePageModule {}
