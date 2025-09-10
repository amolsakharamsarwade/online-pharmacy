import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProductListComponent} from './pages/product-list/product-list.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {CartComponent} from './pages/cart/cart.component';
import {OrderHistoryComponent} from './pages/orders/order-history/order-history.component';
import {CartSummaryComponent} from './components/cart-summary/cart-summary.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    OrderHistoryComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CustomerModule {
}
