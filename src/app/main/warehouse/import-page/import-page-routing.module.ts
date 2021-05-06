import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportPagePage } from './import-page.page';

const routes: Routes = [
  {
    path: '',
    component: ImportPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportPagePageRoutingModule {}
