import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart-item.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemCount$!: Observable<number>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItemCount$ = this.cartService.cart$.pipe(
      map((items: CartItem[]) =>
        items.reduce((total: number, item: CartItem) => total + item.quantity, 0)
      )
    );
  }
}
