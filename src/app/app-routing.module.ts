import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivacyComponent} from "./shared/pages/privacy/privacy.component";
import {TermsComponent} from "./shared/pages/terms/terms.component";
import {HomeRedirectGuard} from "./auth/guards/home-redirect.guard";
import {
  HomeRedirectPlaceholderComponent
} from "./shared/components/home-redirect-placeholder/home-redirect-placeholder.component";

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
  path: 'privacy',
  component: PrivacyComponent,
}, {
  path: 'terms',
  component: TermsComponent,
}, {
  path: '',
  component: HomeRedirectPlaceholderComponent,
  canActivate: [HomeRedirectGuard],
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
