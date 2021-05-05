import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MainLayoutComponentModule } from 'src/app/layout/main-layout/main-layout.component';
import { ListMenuComponentModule } from 'src/app/ui/list-menu/list-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MainLayoutComponentModule,
    ListMenuComponentModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
