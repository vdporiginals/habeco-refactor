import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMaintainPagePageRoutingModule } from './detail-maintain-page-routing.module';

import { DetailMaintainPagePage } from './detail-maintain-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMaintainPagePageRoutingModule
  ],
  declarations: [DetailMaintainPagePage]
})
export class DetailMaintainPagePageModule {}
