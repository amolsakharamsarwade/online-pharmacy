import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './pages/manage-products/product-list/product-list.component';
import { ProductFormComponent } from './pages/manage-products/product-form/product-form.component';
import { OrderListComponent } from './pages/manage-orders/order-list/order-list.component';
import { CustomerListComponent } from './pages/manage-customers/customer-list/customer-list.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductListComponent,
    ProductFormComponent,
    OrderListComponent,
    CustomerListComponent,
    OrderStatusComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
