# Phase 0 – Angular CLI Commands

## 1️⃣ Create the project

`ng new online-pharmacy --routing --style=scss`

`cd online-pharmacy`

## 2️⃣ Install Angular Material

`ng add @angular/material`

- Choose a theme (e.g., Indigo/Pink)
- Enable global typography & animations

## 3️⃣ Create Shared Module & Components

`ng g module shared`

`ng g component shared/components/header`

`ng g component shared/components/footer`

`ng g component shared/components/navbar`

`ng g component shared/components/notification`

`ng g directive shared/directives/highlight`

`ng g pipe shared/pipes/filter`

## 4️⃣ Create Core Module & Interceptor

`ng g module core`

`ng g class core/interceptors/http.interceptor --type=ts`

## 5️⃣ Create Auth Module & Components

`ng g module auth --routing`

`ng g component auth/login`

`ng g component auth/register`

`ng g guard auth/auth`

## 6️⃣ Create Customer Module & Components

`ng g module customer --routing`

`ng g component customer/pages/dashboard`

`ng g component customer/pages/product-list`

`ng g component customer/pages/product-detail`

`ng g component customer/pages/cart`

`ng g component customer/pages/orders/order-history`

`ng g component customer/components/cart-summary`

## 7️⃣ Create Admin Module & Components

`ng g module admin --routing`

`ng g component admin/pages/dashboard/admin-dashboard`

`ng g component admin/pages/manage-products/product-list`

`ng g component admin/pages/manage-products/product-form`

`ng g component admin/pages/manage-orders/order-list`

`ng g component admin/pages/manage-customers/customer-list`

`ng g component admin/components/order-status`

## 8️⃣ Create Services

`ng g service shared/services/auth`

`ng g service shared/services/product`

`ng g service shared/services/cart`

`ng g service shared/services/order`

## 9️⃣ Run the App

`ng serve`


1. Modules

shared/ → SharedModule with Header, Footer, Navbar

auth/ → AuthModule (Login/Register pages + guards)

customer/ → CustomerModule (Customer portal pages)

admin/ → AdminModule (Admin portal pages)

core/ → CoreModule (for singleton services like HTTP interceptors)

✅ Matches your structure exactly.

2. Components

Shared components (header, footer, navbar) → created under shared/components/

AppComponent (app.component.ts) contains <app-header>, <router-outlet>, <app-footer>

Skeletons for pages in customer/pages/ and admin/pages/ exist but are not yet populated — Phase 0 focuses on modules & layout.

3. Services

AuthService, ProductService, CartService, OrderService → planned under shared/services/

In Phase 0, services can be stubbed or created later in Phase 1/2.

4. Routing

AppRoutingModule implements lazy loading for Admin, Customer, Auth modules — matches your structure.

5. Directives / Pipes

directives/highlight.directive.ts and pipes/filter.pipe.ts exist in structure; can be added in Phase 2/3.

6. Assets

assets/images/ and assets/i18n/ directories are ready for UI assets and translations.

