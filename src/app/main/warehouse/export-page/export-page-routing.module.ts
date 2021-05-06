import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportPagePage } from './export-page.page';

const routes: Routes = [
  {
    path: '',
    component: ExportPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExportPagePageRoutingModule {}
