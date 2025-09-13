import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../../../shared/services/order.service";
import {Order} from '../../../../shared/models/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  orderForm!: FormGroup;
  orderId!: number;
  order!: Order;
  statuses: ('Pending' | 'Shipped' | 'Delivered')[] = ['Pending', 'Shipped', 'Delivered'];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    // 1️⃣ Get order ID from route
    const idParam = this.route.snapshot.paramMap.get('id');
    if (!idParam) {
      alert('Invalid Order ID');
      this.router.navigate(['/admin/orders']);
      return;
    }
    this.orderId = +idParam;

    // 2️⃣ Get order from service
    this.order = this.orderService.getOrdersSnapshot().find(o => o.id === this.orderId)!;
    if (!this.order) {
      alert('Order not found');
      this.router.navigate(['/admin/orders']);
      return;
    }

    // 3️⃣ Initialize form
    this.orderForm = this.fb.group({
      customer: this.fb.group({
        name: [this.order.customer.name, Validators.required],
        email: [this.order.customer.email, [Validators.required, Validators.email]]
      }),
      items: this.fb.array([]),
      total: [this.order.total, Validators.required],
      status: [this.order.status, Validators.required]
    });

    // 4️⃣ Populate items
    this.order.items.forEach(item => {
      console.log('item:', item);
      this.items.push(
        this.fb.group({
          id: [item.id],
          name: [item.name, Validators.required],
          price: [item.price, Validators.required],
          quantity: [item.quantity, [Validators.required, Validators.min(1)]]
        })
      );
    });
  }

  /** Getter for items FormArray */
  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  /** Update total when quantities change */
  updateTotal(): void {
    const total = this.items.controls.reduce((sum, ctrl) => {
      return sum + ctrl.value.price * ctrl.value.quantity;
    }, 0);
    this.orderForm.get('total')?.setValue(total);
  }

  /** Submit updated order */
  onSubmit(): void {
    if (this.orderForm.valid) {
      const updatedOrder: Order = {
        ...this.order,
        customer: this.orderForm.value.customer,
        items: this.orderForm.value.items,
        total: this.orderForm.value.total,
        status: this.orderForm.value.status
      };
      this.orderService.updateOrder(updatedOrder);
      alert('Order updated successfully!');
      this.router.navigate(['/admin/orders']);
    }
  }
}
