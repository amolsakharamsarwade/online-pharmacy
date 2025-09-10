import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../models/product.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[] | null, searchTerm: string, category: string): Product[] {
    if (!products) return [];
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    return filtered;
  }
}
