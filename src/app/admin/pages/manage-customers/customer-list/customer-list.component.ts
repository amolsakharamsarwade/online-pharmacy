import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../../../../shared/models/customer.model";
import {CustomerService} from "../../../../shared/services/customer.service";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'actions'];
  dataSource = new MatTableDataSource<Customer>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to customers observable
    this.customerService.getCustomersObservable().subscribe(customers => {
      this.dataSource.data = customers;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Edit customer */
  editCustomer(customer: Customer): void {
    this.router.navigate(['/admin/customers/edit', customer.id]);
  }

  /** Delete customer */
  deleteCustomer(id: number): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id);
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

  addCustomer(): void {
    this.router.navigate(['/admin/customers/new']);
  }
}
