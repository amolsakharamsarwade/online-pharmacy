import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './pages/manage-products/product-list/product-list.component';
import { ProductFormComponent } from './pages/manage-products/product-form/product-form.component';
import { OrderListComponent } from './pages/manage-orders/order-list/order-list.component';
import { CustomerListComponent } from './pages/manage-customers/customer-list/customer-list.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import { OrderFormComponent } from './pages/manage-orders/order-form/order-form.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductListComponent,
    ProductFormComponent,
    OrderListComponent,
    CustomerListComponent,
    OrderStatusComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class AdminModule { }
