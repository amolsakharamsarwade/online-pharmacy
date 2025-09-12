import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {OrderService} from "../../../../shared/services/order.service";
import {Router} from "@angular/router";
import {Order} from '../../../../shared/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'customerName', 'date', 'total', 'status', 'actions'];
  dataSource = new MatTableDataSource<Order>();
  statuses: string[] = [];
  selectedStatus: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to orders$ observable for reactive updates
    this.orderService.orders$.subscribe(orders => {
      // Extract unique statuses
      this.statuses = Array.from(new Set(orders.map(o => o.status).filter(s => s)));

      // Apply status filter
      const filtered = this.selectedStatus
        ? orders.filter(o => o.status === this.selectedStatus)
        : orders;

      this.dataSource.data = filtered;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Edit order */
  editOrder(order: Order): void {
    this.router.navigate(['/admin/orders/edit', order.id]);
  }

  /** Delete order */
  deleteOrder(id: number): void {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(id);
    }
  }

  /** Global search */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Status filter dropdown change */
  onStatusChange(): void {
    this.orderService.orders$.subscribe(orders => {
      const filtered = this.selectedStatus
        ? orders.filter(o => o.status === this.selectedStatus)
        : orders;
      this.dataSource.data = filtered;
    });
  }
}
