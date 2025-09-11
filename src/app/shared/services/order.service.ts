import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: any[] = [];
  private ordersSubject = new BehaviorSubject<any[]>([]);

  orders$: Observable<any[]> = this.ordersSubject.asObservable();

  constructor() {
  }

  // Place a new order
  placeOrder(order: any): void {
    const newOrder = {
      ...order,
      id: this.orders.length + 1,
      date: new Date(),
      status: 'Pending'
    };
    this.orders.push(newOrder);
    this.ordersSubject.next([...this.orders]);
  }

  // Get all orders
  getOrders(): any[] {
    return [...this.orders];
  }

  // (Optional) Get orders as observable
  getOrdersStream(): Observable<any[]> {
    return this.orders$;
  }
}
