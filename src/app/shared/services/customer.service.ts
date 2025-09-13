import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private storageKey = 'online-pharmacy-customers';
  private customersSubject: BehaviorSubject<Customer[]>;

  constructor() {
    // Initialize with hardcoded customers
    const initialCustomers: Customer[] = [
      {id: 1, name: 'John Doe', email: 'john@example.com', phone: '9876543210', address: '123 Main St'},
      {id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876501234', address: '456 Market Rd'},
      {id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '9876512345', address: '789 Elm St'}
    ];

    // Save to localStorage if nothing exists yet
    const stored = localStorage.getItem(this.storageKey);
    if (!stored) {
      localStorage.setItem(this.storageKey, JSON.stringify(initialCustomers));
    }

    const customers = this.getCustomersFromStorage();
    this.customersSubject = new BehaviorSubject<Customer[]>(customers);
  }

  // Observable to subscribe for live updates
  getCustomersObservable(): Observable<Customer[]> {
    return this.customersSubject.asObservable();
  }

  // Snapshot
  getCustomersSnapshot(): Customer[] {
    return this.customersSubject.value;
  }

  getCustomerById(id: number): Customer | undefined {
    return this.customersSubject.value.find(c => c.id === id);
  }

  addCustomer(customer: Customer): void {
    const customers = [...this.customersSubject.value];
    customer.id = this.generateNextId(customers);
    customers.push(customer);
    this.saveToStorage(customers);
  }

  updateCustomer(updated: Customer): void {
    const customers = this.customersSubject.value.map(c =>
      c.id === updated.id ? updated : c
    );
    this.saveToStorage(customers);
  }

  deleteCustomer(id: number): void {
    const customers = this.customersSubject.value.filter(c => c.id !== id);
    this.saveToStorage(customers);
  }

  // PRIVATE HELPERS
  private getCustomersFromStorage(): Customer[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(customers: Customer[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
    this.customersSubject.next(customers);
  }

  private generateNextId(customers: Customer[]): number {
    return customers.length > 0
      ? Math.max(...customers.map(c => c.id)) + 1
      : 1;
  }
}
