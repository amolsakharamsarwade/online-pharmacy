import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../../shared/models/product.model";
import {ProductService} from "../../../../shared/services/product.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'image', 'name', 'sku', 'category', 'price', 'stock', 'actions'];
  dataSource = new MatTableDataSource<Product>();
  categories: string[] = [];
  selectedCategory: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.products$.subscribe(products => {
      // Extract unique categories (TypeScript-safe)
      this.categories = Array.from(
        new Set(products.map(p => p.category).filter((c): c is string => !!c))
      );

      // Apply category filter
      const filtered = this.selectedCategory
        ? products.filter(p => p.category === this.selectedCategory)
        : products;

      this.dataSource.data = filtered;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addProduct(): void {
    this.router.navigate(['/admin/products/new']);
  }

  editProduct(product: Product): void {
    this.router.navigate(['/admin/products/edit', product.id]);
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id);
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onCategoryChange(): void {
    // Triggered when category dropdown changes
    this.productService.products$.subscribe(products => {
      const filtered = this.selectedCategory
        ? products.filter(p => p.category === this.selectedCategory)
        : products;
      this.dataSource.data = filtered;
    });
  }
}
