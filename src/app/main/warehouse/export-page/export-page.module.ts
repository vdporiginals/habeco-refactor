import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExportPagePageRoutingModule } from './export-page-routing.module';

import { ExportPagePage } from './export-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExportPagePageRoutingModule
  ],
  declarations: [ExportPagePage]
})
export class ExportPagePageModule {}
