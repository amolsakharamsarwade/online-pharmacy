# Online Pharmacy - Angular Project Structure

This document outlines the folder, module, and component structure for the **Online Pharmacy** application, including descriptions of modules, services, and shared resources.

---

## Folder / Module / Component Structure

online-pharmacy/
│
├── src/
│ ├── app/
│ │ ├── app-routing.module.ts
│ │ ├── app.component.ts
│ │ ├── app.module.ts
│ │ ├── shared/ # Shared components, pipes, directives, models
│ │ │ ├── components/
│ │ │ │ ├── header/
│ │ │ │ │ ├── header.component.ts
│ │ │ │ │ └── header.component.html
│ │ │ │ ├── footer/
│ │ │ │ │ ├── footer.component.ts
│ │ │ │ │ └── footer.component.html
│ │ │ │ ├── navbar/
│ │ │ │ │ └── navbar.component.ts
│ │ │ │ └── notification/ # Snackbar / Toast notifications
│ │ │ │ └── notification.component.ts
│ │ │ ├── directives/
│ │ │ │ └── highlight.directive.ts
│ │ │ ├── pipes/
│ │ │ │ └── filter.pipe.ts
│ │ │ ├── models/
│ │ │ │ ├── user.model.ts
│ │ │ │ ├── product.model.ts
│ │ │ │ └── order.model.ts
│ │ │ └── services/
│ │ │ ├── auth.service.ts
│ │ │ ├── product.service.ts
│ │ │ ├── cart.service.ts
│ │ │ └── order.service.ts
│ │ │
│ │ ├── customer/ # Customer portal module
│ │ │ ├── customer.module.ts
│ │ │ ├── customer-routing.module.ts
│ │ │ ├── pages/
│ │ │ │ ├── dashboard/
│ │ │ │ │ └── dashboard.component.ts
│ │ │ │ ├── product-list/
│ │ │ │ │ └── product-list.component.ts
│ │ │ │ ├── product-detail/
│ │ │ │ │ └── product-detail.component.ts
│ │ │ │ ├── cart/
│ │ │ │ │ └── cart.component.ts
│ │ │ │ └── orders/
│ │ │ │ └── order-history.component.ts
│ │ │ └── components/
│ │ │ └── cart-summary/
│ │ │ └── cart-summary.component.ts
│ │ │
│ │ ├── admin/ # Admin portal module
│ │ │ ├── admin.module.ts
│ │ │ ├── admin-routing.module.ts
│ │ │ ├── pages/
│ │ │ │ ├── dashboard/
│ │ │ │ │ └── admin-dashboard.component.ts
│ │ │ │ ├── manage-products/
│ │ │ │ │ ├── product-list.component.ts
│ │ │ │ │ └── product-form.component.ts
│ │ │ │ ├── manage-orders/
│ │ │ │ │ └── order-list.component.ts
│ │ │ │ └── manage-customers/
│ │ │ │ └── customer-list.component.ts
│ │ │ └── components/
│ │ │ └── order-status/
│ │ │ └── order-status.component.ts
│ │ │
│ │ ├── auth/ # Authentication module
│ │ │ ├── auth.module.ts
│ │ │ ├── login/
│ │ │ │ └── login.component.ts
│ │ │ ├── register/
│ │ │ │ └── register.component.ts
│ │ │ └── guards/
│ │ │ └── auth.guard.ts
│ │ │
│ │ └── core/ # Core module (singleton services)
│ │ └── interceptors/
│ │ └── http.interceptor.ts
│ │
│ └── assets/
│ ├── images/
│ └── i18n/ # Multi-language JSON files
│
└── angular.json



online-pharmacy/
│
├── src/
│ ├── app/
│ │ ├── app-routing.module.ts
│ │ ├── app.component.ts
│ │ ├── app.module.ts
│ │
│ │ ├── shared/                 # Shared components, pipes, directives, models
│ │ │   ├── shared.module.ts
│ │ │   ├── components/
│ │ │   │   ├── header/
│ │ │   │   │   ├── header.component.ts
│ │ │   │   │   └── header.component.html
│ │ │   │   ├── footer/
│ │ │   │   │   ├── footer.component.ts
│ │ │   │   │   └── footer.component.html
│ │ │   │   ├── navbar/
│ │ │   │   │   └── navbar.component.ts
│ │ │   │   └── notification/
│ │ │   │       └── notification.component.ts
│ │ │   ├── directives/
│ │ │   │   └── highlight.directive.ts
│ │ │   ├── pipes/
│ │ │   │   └── filter.pipe.ts
│ │ │   ├── models/
│ │ │   │   ├── user.model.ts
│ │ │   │   ├── product.model.ts
│ │ │   │   └── order.model.ts
│ │ │   └── services/
│ │ │       ├── auth.service.ts
│ │ │       ├── product.service.ts
│ │ │       ├── cart.service.ts
│ │ │       └── order.service.ts
│ │
│ │ ├── customer/               # Customer portal module
│ │ │   ├── customer.module.ts
│ │ │   ├── customer-routing.module.ts
│ │ │   ├── pages/
│ │ │   │   ├── dashboard/
│ │ │   │   │   └── dashboard.component.ts
│ │ │   │   ├── product-list/
│ │ │   │   │   └── product-list.component.ts
│ │ │   │   ├── product-detail/
│ │ │   │   │   └── product-detail.component.ts
│ │ │   │   ├── cart/
│ │ │   │   │   └── cart.component.ts
│ │ │   │   └── orders/
│ │ │   │       └── order-history.component.ts
│ │ │   └── components/
│ │ │       └── cart-summary/
│ │ │           └── cart-summary.component.ts
│ │
│ │ ├── admin/                  # Admin portal module
│ │ │   ├── admin.module.ts
│ │ │   ├── admin-routing.module.ts
│ │ │   ├── pages/
│ │ │   │   ├── dashboard/
│ │ │   │   │   └── admin-dashboard.component.ts
│ │ │   │   ├── manage-products/
│ │ │   │   │   ├── product-list.component.ts
│ │ │   │   │   └── product-form.component.ts
│ │ │   │   ├── manage-orders/
│ │ │   │   │   └── order-list.component.ts
│ │ │   │   └── manage-customers/
│ │ │   │       └── customer-list.component.ts
│ │ │   └── components/
│ │ │       └── order-status/
│ │ │           └── order-status.component.ts
│ │
│ │ ├── auth/                   # Authentication module
│ │ │   ├── auth.module.ts
│ │ │   ├── auth-routing.module.ts
│ │ │   ├── login/
│ │ │   │   └── login.component.ts
│ │ │   ├── register/
│ │ │   │   └── register.component.ts
│ │ │   └── guards/
│ │ │       └── auth.guard.ts
│ │
│ │ └── core/                   # Core module (singleton services)
│ │     ├── core.module.ts
│ │     └── interceptors/
│ │         └── http.interceptor.ts
│ │
│ └── assets/
│     ├── images/
│     └── i18n/                 # Multi-language JSON files
│
└── angular.json

---

## Notes on Structure

### Modules
- **SharedModule**: reusable components, pipes, directives, and services.
- **CustomerModule**: all customer portal pages & components.
- **AdminModule**: all admin portal pages & components.
- **AuthModule**: login/register & route guards.
- **CoreModule**: singleton services like HTTP interceptors.

### Routing
- Each module has its own routing module.
- **Lazy load** `CustomerModule` and `AdminModule` in `AppRoutingModule`.

### Services
- **AuthService** → login, register, token storage.
- **ProductService** → get/add/edit/delete products.
- **CartService** → manage shopping cart.
- **OrderService** → create & track orders.

### Shared Components
- **Header, Footer, Navbar** → used in both portals.
- **Notification** → snackbar/toast messages.
- **Pipes & Directives** → reusable across modules.

### Models
- **User, Product, Order** → TypeScript interfaces or classes.
