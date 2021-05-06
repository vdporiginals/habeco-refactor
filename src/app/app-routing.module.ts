import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./main/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'maintain',
    loadChildren: () =>
      import('./main/maintain/maintain.module').then(
        (m) => m.MaintainPageModule
      ),
  },
  {
    path: 'warehouse',
    loadChildren: () =>
      import('./main/warehouse/warehouse.module').then(
        (m) => m.WarehousePageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./main/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./main/list/list.module').then((m) => m.ListPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
