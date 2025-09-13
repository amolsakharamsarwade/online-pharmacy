import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../../shared/services/customer.service";
import {Customer} from "../../../../shared/models/customer.model";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm!: FormGroup;
  customerId!: number;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    // 1️⃣ Get ID from route
    const idParam = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!idParam;
    if (idParam) this.customerId = +idParam;

    // 2️⃣ Initialize form
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: ['']
    });

    // 3️⃣ If edit mode, patch form with existing customer
    if (this.isEditMode) {
      const customer = this.customerService.getCustomerById(this.customerId);
      if (!customer) {
        alert('Customer not found');
        this.router.navigate(['/admin/customers']);
        return;
      }
      this.customerForm.patchValue(customer);
    }
  }

  onSubmit(): void {
    if (this.customerForm.invalid) return;

    const formValue = this.customerForm.value as Customer;

    if (this.isEditMode) {
      const { id, ...rest } = formValue; // ignore any id in formValue
      const updatedCustomer: Customer = { id: this.customerId, ...rest };
      this.customerService.updateCustomer(updatedCustomer);
      alert('Customer updated successfully!');
    } else {
      this.customerService.addCustomer(formValue);
      alert('Customer added successfully!');
    }

    this.router.navigate(['/admin/customers']);
  }

  onCancel(): void {
    this.router.navigate(['/admin/customers']);
  }
}
