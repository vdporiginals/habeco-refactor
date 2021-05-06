import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintainPage } from './maintain.page';

const routes: Routes = [
  {
    path: '',
    component: MaintainPage,
  },
  {
    path: 'list-maintain',
    loadChildren: () =>
      import('./list-maintain-page/list-maintain-page.module').then(
        (m) => m.ListMaintainPagePageModule
      ),
  },
  {
    path: 'detail-maintain/:id',
    loadChildren: () =>
      import('./detail-maintain-page/detail-maintain-page.module').then(
        (m) => m.DetailMaintainPagePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintainPageRoutingModule {}
