import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehousePage } from './warehouse.page';

const routes: Routes = [
  {
    path: '',
    component: WarehousePage
  },  {
    path: 'export-page',
    loadChildren: () => import('./export-page/export-page.module').then( m => m.ExportPagePageModule)
  },
  {
    path: 'import-page',
    loadChildren: () => import('./import-page/import-page.module').then( m => m.ImportPagePageModule)
  },
  {
    path: 'detail-page',
    loadChildren: () => import('./detail-page/detail-page.module').then( m => m.DetailPagePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehousePageRoutingModule {}
