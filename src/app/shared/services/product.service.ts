import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Paracetamol',
      description: 'Pain reliever',
      price: 50,
      category: 'Painkiller',
      imageUrl: 'assets/images/products/paracetamol.jpg'
    },
    {
      id: 2,
      name: 'Amoxicillin',
      description: 'Antibiotic',
      price: 120,
      category: 'Antibiotic',
      imageUrl: 'assets/images/products/amoxicillin.jpg'
    },
    {
      id: 3,
      name: 'Cetirizine',
      description: 'Anti-allergic',
      price: 80,
      category: 'Allergy',
      imageUrl: 'assets/images/products/cetirizine.jpg'
    },
    {
      id: 1,
      name: 'Paracetamol',
      description: 'Pain reliever',
      price: 50,
      category: 'Painkiller',
      imageUrl: 'assets/images/products/paracetamol.jpg'
    },
    {
      id: 2,
      name: 'Amoxicillin',
      description: 'Antibiotic',
      price: 120,
      category: 'Antibiotic',
      imageUrl: 'assets/images/products/amoxicillin.jpg'
    },
    {
      id: 3,
      name: 'Cetirizine',
      description: 'Anti-allergic',
      price: 80,
      category: 'Allergy',
      imageUrl: 'assets/images/products/cetirizine.jpg'
    },
    {
      id: 1,
      name: 'Paracetamol',
      description: 'Pain reliever',
      price: 50,
      category: 'Painkiller',
      imageUrl: 'assets/images/products/paracetamol.jpg'
    },
    {
      id: 2,
      name: 'Amoxicillin',
      description: 'Antibiotic',
      price: 120,
      category: 'Antibiotic',
      imageUrl: 'assets/images/products/amoxicillin.jpg'
    },
    {
      id: 3,
      name: 'Cetirizine',
      description: 'Anti-allergic',
      price: 80,
      category: 'Allergy',
      imageUrl: 'assets/images/products/cetirizine.jpg'
    },
    {
      id: 3,
      name: 'Cetirizine',
      description: 'Anti-allergic',
      price: 80,
      category: 'Allergy',
      imageUrl: 'assets/images/products/cetirizine.jpg'
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products); // later replace with HttpClient.get
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
