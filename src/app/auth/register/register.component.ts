import {Component} from '@angular/core';
import {User} from "../../shared/models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['customer', Validators.required] // default: customer
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const newUser = new User(this.registerForm.value);
    this.authService.register(newUser);

    // auto-login after register
    if (newUser.role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/customer']);
    }
  }
}
