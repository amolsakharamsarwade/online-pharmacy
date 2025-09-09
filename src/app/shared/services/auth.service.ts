import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserKey = 'online-pharmacy-user';

  constructor(private router: Router) {}

  // Mock Login (replace with API later)
  login(username: string, password: string): boolean {
    const mockUsers: User[] = [
      new User({ id: 1, username: 'admin', email: 'admin@pharmacy.com', role: 'admin', token: 'admin-token' }),
      new User({ id: 2, username: 'customer', email: 'customer@pharmacy.com', role: 'customer', token: 'customer-token' })
    ];

    const user = mockUsers.find(u => u.username === username && password === '1234');
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  register(user: User): void {
    // For demo, just save to localStorage
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
    this.router.navigate(['/auth/login']);
  }

  getCurrentUser(): User | null {
    const userData = localStorage.getItem(this.currentUserKey);
    return userData ? new User(JSON.parse(userData)) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  getUserRole(): 'admin' | 'customer' | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }
}
