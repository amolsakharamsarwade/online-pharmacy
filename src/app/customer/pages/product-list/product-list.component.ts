import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Product} from "../../../shared/models/product.model";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  searchTerm: string = '';
  categoryFilter: string = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts().pipe(
      map(products => products || []) // convert null to empty array
    );
  }


}
