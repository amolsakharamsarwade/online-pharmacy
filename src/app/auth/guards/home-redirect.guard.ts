import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "../../shared/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class HomeRedirectGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.getCurrentUser();

    if (!user) {
      // Not logged in → go to login page
      this.router.navigate(['/auth/login']);
      return false;
    }

    // Redirect based on role
    if (user.role === 'admin') {
      this.router.navigate(['/admin']); // admin dashboard module
    } else if (user.role === 'customer') {
      this.router.navigate(['/customer']); // customer dashboard module
    }

    return false;
  }
}
