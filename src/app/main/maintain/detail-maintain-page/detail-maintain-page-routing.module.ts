import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMaintainPagePage } from './detail-maintain-page.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMaintainPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMaintainPagePageRoutingModule {}
