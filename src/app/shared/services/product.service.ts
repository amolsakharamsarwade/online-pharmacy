import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private initialProducts: Product[] = [
    {
      id: 1,
      name: 'Paracetamol',
      sku: 'PCM-100',
      description: 'Pain reliever and fever reducer',
      category: 'Painkiller',
      price: 50,
      stock: 120,
      imageUrl: 'assets/images/products/paracetamol.jpg'
    },
    {
      id: 2,
      name: 'Amoxicillin',
      sku: 'AMX-200',
      description: 'Antibiotic for bacterial infections',
      category: 'Antibiotic',
      price: 120,
      stock: 60,
      imageUrl: 'assets/images/products/amoxicillin.jpg'
    },
    {
      id: 3,
      name: 'Cetirizine',
      sku: 'CTZ-300',
      description: 'Anti-allergic for cold and skin allergies',
      category: 'Allergy',
      price: 80,
      stock: 90,
      imageUrl: 'assets/images/products/cetirizine.jpg'
    }
  ];

  // ✅ BehaviorSubject for reactive state
  private productsSubject = new BehaviorSubject<Product[]>(this.initialProducts);

  products$ = this.productsSubject.asObservable();

  // --- CRUD METHODS ---

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.productsSubject.getValue().find(p => p.id === id));
  }

  addProduct(product: Product): void {
    const products = this.productsSubject.getValue();
    product.id = this.generateId();
    this.productsSubject.next([...products, product]);
  }

  updateProduct(updatedProduct: Product): void {
    const products = this.productsSubject.getValue().map(p =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    this.productsSubject.next(products);
  }

  deleteProduct(id: number): void {
    const products = this.productsSubject.getValue().filter(p => p.id !== id);
    this.productsSubject.next(products);
  }

  /*getProductsSync(): Product[] {
    return this.products$;
  }*/

  private generateId(): number {
    const products = this.productsSubject.getValue();
    return products.length > 0
      ? Math.max(...products.map(p => p.id)) + 1
      : 1;
  }
}
