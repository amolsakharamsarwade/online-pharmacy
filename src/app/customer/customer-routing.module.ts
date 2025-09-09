import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProductListComponent} from "./pages/product-list/product-list.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {CartComponent} from "./pages/cart/cart.component";
import {OrderHistoryComponent} from "./pages/orders/order-history/order-history.component";

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'products',
  component: ProductListComponent
}, {
  path: 'products/:id',
  component: ProductDetailComponent
}, {
  path: 'cart',
  component: CartComponent
}, {
  path: 'orders',
  component: OrderHistoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
