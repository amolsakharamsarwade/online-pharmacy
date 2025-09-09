import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'auth',
  loadChildren: () =>
    import('./auth/auth.module').then((m) => m.AuthModule),
}, {
  path: 'customer',
  loadChildren: () =>
    import('./customer/customer.module').then((m) => m.CustomerModule),
}, {
  path: 'admin',
  loadChildren: () =>
    import('./admin/admin.module').then((m) => m.AdminModule),
}, {
  path: '',
  redirectTo: '/auth/login',
  pathMatch: 'full',
}, {
  path: '**',
  redirectTo: '/auth/login',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
