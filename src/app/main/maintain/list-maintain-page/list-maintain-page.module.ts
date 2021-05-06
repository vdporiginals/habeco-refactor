import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMaintainPagePageRoutingModule } from './list-maintain-page-routing.module';

import { ListMaintainPagePage } from './list-maintain-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMaintainPagePageRoutingModule
  ],
  declarations: [ListMaintainPagePage]
})
export class ListMaintainPagePageModule {}
