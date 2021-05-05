import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { MainLayoutComponentModule } from 'src/app/layout/main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MainLayoutComponentModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
