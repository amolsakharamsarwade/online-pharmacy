import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProductListComponent} from "./pages/product-list/product-list.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {CartComponent} from "./pages/cart/cart.component";
import {OrderHistoryComponent} from "./pages/orders/order-history/order-history.component";
import {AuthGuard} from "../auth/guards/auth.guard";

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [AuthGuard],
  data: {role: 'customer'}
}, {
  path: 'products',
  component: ProductListComponent,
  canActivate: [AuthGuard],
  data: {role: 'customer'}
}, {
  path: 'products/:id',
  component: ProductDetailComponent,
  canActivate: [AuthGuard],
  data: {role: 'customer'}
}, {
  path: 'cart',
  component: CartComponent,
  canActivate: [AuthGuard],
  data: {role: 'customer'}
}, {
  path: 'orders',
  component: OrderHistoryComponent,
  canActivate: [AuthGuard],
  data: {role: 'customer'}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
