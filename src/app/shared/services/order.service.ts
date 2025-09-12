import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Order} from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // initial empty orders
  private orders: Order[] = [
    {
      id: 1,
      customer: { name: 'John Doe', email: 'john@example.com' },
      items: [
        { id: 1, name: 'Paracetamol', price: 50, quantity: 2 },
        { id: 3, name: 'Cetirizine', price: 80, quantity: 1 }
      ],
      total: 180,
      date: new Date('2025-09-01'),
      status: 'Pending'
    },
    {
      id: 2,
      customer: { name: 'Jane Smith', email: 'jane@example.com' },
      items: [
        { id: 2, name: 'Amoxicillin', price: 120, quantity: 1 }
      ],
      total: 120,
      date: new Date('2025-09-02'),
      status: 'Shipped'
    },
    {
      id: 3,
      customer: { name: 'Mike Johnson', email: 'mike@example.com' },
      items: [
        { id: 1, name: 'Paracetamol', price: 50, quantity: 1 },
        { id: 2, name: 'Amoxicillin', price: 120, quantity: 2 }
      ],
      total: 290,
      date: new Date('2025-09-03'),
      status: 'Delivered'
    }
  ];

  private ordersSubject = new BehaviorSubject<Order[]>(this.orders);

  // Observable stream for reactive updates
  orders$: Observable<Order[]> = this.ordersSubject.asObservable();

  constructor() {}

  /** Place a new order */
  placeOrder(order: Omit<Order, 'id' | 'date' | 'status'>): void {
    const newOrder: Order = {
      ...order,
      id: this.getNextId(),
      date: new Date(),
      status: 'Pending'
    };
    this.orders.push(newOrder);
    this.ordersSubject.next([...this.orders]); // emit new state
  }

  /** Update an existing order */
  updateOrder(order: Order): void {
    const index = this.orders.findIndex(o => o.id === order.id);
    if (index > -1) {
      this.orders[index] = order;
      this.ordersSubject.next([...this.orders]);
    }
  }

  /** Delete an order */
  deleteOrder(id: number): void {
    this.orders = this.orders.filter(o => o.id !== id);
    this.ordersSubject.next([...this.orders]);
  }

  /** Get synchronous snapshot of all orders */
  getOrdersSnapshot(): Order[] {
    return [...this.orders];
  }

  /** Generate next unique ID */
  private getNextId(): number {
    return this.orders.length ? Math.max(...this.orders.map(o => o.id)) + 1 : 1;
  }
}
