import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from "./pages/dashboard/admin-dashboard/admin-dashboard.component";
import {ProductListComponent} from "./pages/manage-products/product-list/product-list.component";
import {ProductFormComponent} from "./pages/manage-products/product-form/product-form.component";
import {OrderListComponent} from "./pages/manage-orders/order-list/order-list.component";
import {CustomerListComponent} from "./pages/manage-customers/customer-list/customer-list.component";

const routes: Routes = [{
  path: '',
  component: AdminDashboardComponent
}, {
  path: 'products',
  component: ProductListComponent
}, {
  path: 'products/new',
  component: ProductFormComponent
}, {
  path: 'orders',
  component: OrderListComponent
}, {
  path: 'customers',
  component: CustomerListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
