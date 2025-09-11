import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../../../shared/services/cart.service";
import {OrderService} from "../../../shared/services/order.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService
  ) {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      paymentMethod: ['COD', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const order = {
        customer: this.checkoutForm.value,
        items: this.cartService.getCartItems(),
        total: this.cartService.getTotal()
      };

      this.orderService.placeOrder(order);
      alert('Order placed successfully!');
      this.cartService.clearCart();
    }
  }
}
