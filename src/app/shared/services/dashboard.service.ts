import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() { }

  getSummary(): Observable<any> {
    return of({
      totalSales: 125000,
      totalOrders: 320,
      customerCount: 85
    });
  }

  getSalesTrend(): Observable<any> {
    return of({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      data: [15000, 20000, 18000, 22000, 25000]
    });
  }

  getOrdersByPayment(): Observable<any> {
    return of({
      labels: ['COD', 'Card', 'UPI'],
      data: [120, 150, 50]
    });
  }

  getDeliveryStatus(): Observable<any> {
    return of({
      labels: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
      data: [40, 120, 140, 20]
    });
  }

  getLowStockItems(): Observable<any> {
    return of({
      labels: ['Paracetamol', 'Cough Syrup', 'Vitamin C', 'Antibiotic'],
      data: [5, 3, 8, 2]
    });
  }

  getTopProducts(): Observable<any> {
    return of([
      { name: 'Paracetamol', sales: 520 },
      { name: 'Vitamin C', sales: 480 },
      { name: 'Cough Syrup', sales: 310 },
      { name: 'Antibiotic', sales: 280 }
    ]);
  }
}
