import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from "./pages/dashboard/admin-dashboard/admin-dashboard.component";
import {ProductListComponent} from "./pages/manage-products/product-list/product-list.component";
import {ProductFormComponent} from "./pages/manage-products/product-form/product-form.component";
import {OrderListComponent} from "./pages/manage-orders/order-list/order-list.component";
import {CustomerListComponent} from "./pages/manage-customers/customer-list/customer-list.component";
import {AuthGuard} from "../auth/guards/auth.guard";

const routes: Routes = [{
  path: '',
  component: AdminDashboardComponent,
  canActivate: [AuthGuard],
  data: {role: 'admin'}
}, {
  path: 'products',
  component: ProductListComponent,
  canActivate: [AuthGuard],
  data: {role: 'admin'}
}, {
  path: 'products/new',
  component: ProductFormComponent,
  canActivate: [AuthGuard],
  data: {role: 'admin'}
}, {
  path: 'orders',
  component: OrderListComponent,
  canActivate: [AuthGuard],
  data: {role: 'admin'}
}, {
  path: 'customers',
  component: CustomerListComponent,
  canActivate: [AuthGuard],
  data: {role: 'admin'}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
