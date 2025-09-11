import {Component, OnInit} from '@angular/core';
import {CartItem} from "../../../shared/models/cart-item.model";
import {Observable} from "rxjs";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  cartItems$ = this.cartService.cart$;
  total$!: Observable<number>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cart$;
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getTotal(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }
}
