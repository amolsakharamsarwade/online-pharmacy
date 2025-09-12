import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../../shared/services/order.service";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.orders$.subscribe(data => {
      this.orders = data;
    });
  }
}
