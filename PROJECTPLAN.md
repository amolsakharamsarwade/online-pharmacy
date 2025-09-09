# Online Pharmacy Application (Angular 15.2.0)

An **Online Pharmacy Application** with **Customer Portal** and **Admin Portal**, built with Angular 15.2.0.  
This project is designed to help learn **Angular concepts by building a real-world application**.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Portals](#portals)
- [Angular Features Used](#angular-features-used)
- [Development Phases](#development-phases)
- [Future Enhancements](#future-enhancements)

---

## Project Overview
The Online Pharmacy Application allows customers to browse medicines, place orders, and track order history. Admins can manage products, orders, and view sales dashboards. The project emphasizes hands-on learning of Angular concepts.

---

## Portals
1. **Customer Portal**
  - Browse products
  - Add products to cart & checkout
  - View order history
  - Profile management

2. **Admin Portal**
  - Manage products (CRUD)
  - Manage orders
  - View dashboard & reports
  - Manage customers (optional)

---

## Angular Features Used
| Feature | Where/Phase |
|---------|-------------|
| Components & Modules | Phase 0 – Project Setup |
| Routing & Nested Routes | Phase 0 & 1 |
| Angular Material | Phase 0 & UI Enhancements |
| Template & Reactive Forms | Phase 1, 2, 3, 4 |
| Directives (`*ngIf`, `*ngFor`, `ngClass`, `ngStyle`) | Phase 0–4 |
| Services & Dependency Injection | Phase 1–4 |
| Observables & Async Pipe | Phase 2–3 |
| RxJS Operators (`map`, `filter`, `switchMap`) | Phase 2–3 |
| Route Guards (`CanActivate`) | Phase 1 |
| Interceptors | Phase 1, optional Phase 6 |
| Pipes & Custom Pipes | Phase 2, Phase 5 |
| Material Table, Pagination, Sorting | Phase 4 |
| Charts (NgCharts/Chart.js) | Phase 5 |
| Lazy Loading Modules | Phase 6 |
| Internationalization (i18n) | Phase 6 |
| Responsive Design (Flex Layout / Grid) | Phase 6 |
| Testing (Jasmine/Karma, Cypress) | Phase 6 |

---

## Development Phases

### **Phase 0 – Setup & Project Structure**
**Goal:** Scaffold project & layout  
**Tasks:**
- Install Angular CLI 15.2.0
- Create project with routing (`ng new online-pharmacy --routing`)
- Install Angular Material & setup theme
- Create folders/modules: `admin`, `customer`, `shared`
- Layout: Header, Sidebar, Footer, Router Outlet

**Deliverable:** Basic app shell with navigation

---

### **Phase 1 – Authentication & Guards**
**Goal:** Login/Register with role-based access  
**Tasks:**
- Login & Register pages (Reactive Forms)
- Authentication service (login/logout, localStorage)
- Route Guards (`CanActivate`) for Admin/Customer
- Conditional navigation menu

**Deliverable:** Users can login/register & access correct portal

**Angular Features:** Reactive Forms, Services, Route Guards, Conditional Rendering (`*ngIf`)

---

### **Phase 2 – Customer Portal: Product Catalog**
**Goal:** Browse, search, filter products  
**Tasks:**
- Product model & ProductService
- Display products in grid (`*ngFor`)
- Search by name & filter by category (Custom Pipe + RxJS)
- Product detail page

**Deliverable:** Customer can view, search & filter products

**Angular Features:** Services, Observables, Async Pipe, Custom Pipes, Input/Output decorators

---

### **Phase 3 – Customer Portal: Shopping Cart & Orders**
**Goal:** Cart management & checkout flow  
**Tasks:**
- Cart service with `BehaviorSubject`
- Add to cart button, cart summary
- Checkout form (Reactive Forms)
- Save orders in backend
- Order History page

**Deliverable:** Customer can add to cart, checkout & view orders

**Angular Features:** State management via Services & RxJS, Reactive Forms, Observables + Async Pipe

---

### **Phase 4 – Admin Portal: Product & Order Management**
**Goal:** Admin can manage inventory & orders  
**Tasks:**
- Product CRUD (Add/Edit/Delete, validation, image upload)
- Order Management: update status
- Optional: Customer Management

**Deliverable:** Admin can manage products & orders

**Angular Features:** Reactive Forms, HttpClient, Role-based Guards, Material Table + Pagination + Sorting

---

### **Phase 5 – Dashboard & Reports**
**Goal:** Admin can view sales, inventory, low-stock alerts  
**Tasks:**
- Dashboard components: total sales, orders, low stock items
- Charts using NgCharts / Chart.js

**Deliverable:** Visual admin dashboard

**Angular Features:** Third-party libraries (Charts), Pipes, Component interaction

---

### **Phase 6 – Advanced Features**
**Goal:** Production-ready app  
**Tasks:**
- Notifications (Snackbar / Toast)
- Lazy loading modules (Admin & Customer)
- Internationalization (i18n)
- Responsive Design
- Unit tests (Jasmine/Karma), e2e tests (Cypress)

**Deliverable:** Fully functional, responsive, multi-language app

**Angular Features:** Lazy Loading, Standalone Components, i18n, Testing

---

## Future Enhancements
- Prescription upload & verification
- Payment gateway integration
- Real-time notifications (WebSocket)
- Coupons & discounts
- Advanced analytics & reporting

---

**Notes:**
- Start with **JSON-server** for backend, later replace with Spring Boot or Node.js API
- Follow **phase-by-phase approach** to gradually learn Angular while building real features
