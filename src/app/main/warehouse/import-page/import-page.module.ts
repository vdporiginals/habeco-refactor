import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportPagePageRoutingModule } from './import-page-routing.module';

import { ImportPagePage } from './import-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportPagePageRoutingModule
  ],
  declarations: [ImportPagePage]
})
export class ImportPagePageModule {}
