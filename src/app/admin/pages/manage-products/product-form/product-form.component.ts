import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../shared/models/product.model";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  isEditMode = false;
  productId!: number;
  imagePreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.buildForm();

    // check if route has "id" param → edit mode
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.productId = +id;
        this.loadProduct(this.productId);
      }
    });
  }

  private buildForm(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      sku: [''],
      description: [''],
      category: [''],
      price: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      imageUrl: ['']
    });
  }

  private loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe(product => {
      if (product) {
        this.productForm.patchValue(product);
        this.imagePreview = product.imageUrl || null;
      }
    });
  }

  updateImagePreview(): void {
    const url = this.productForm.get('imageUrl')?.value;
    this.imagePreview = url ? url : null;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.productForm.patchValue({ imageUrl: this.imagePreview });
      };
      reader.readAsDataURL(file); // convert to base64
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    const formValue: Product = {
      id: this.isEditMode ? this.productId : 0,
      ...this.productForm.value
    };

    if (this.isEditMode) {
      this.productService.updateProduct(formValue);
    } else {
      this.productService.addProduct(formValue);
    }

    this.router.navigate(['/admin/products']);
  }

  cancel(): void {
    this.router.navigate(['/admin/products']);
  }
}
