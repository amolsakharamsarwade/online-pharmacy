import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const {email, password} = this.loginForm.value;
    this.authService.login(email, password).subscribe(
      (res: any): void => {
        // Redirect or set user session here
      },
      (err: any): void => {
        this.errorMessage = 'Invalid login credentials';
      }
    );
  }
}
