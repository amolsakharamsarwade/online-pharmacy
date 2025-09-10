import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserKey = 'online-pharmacy-user';
  private currentUserSubject: BehaviorSubject<User | null>;

  constructor(private router: Router) {
    const user = this.getCurrentUserFromStorage();
    this.currentUserSubject = new BehaviorSubject<User | null>(user);
  }

  // Observable for components to subscribe
  getCurrentUserObservable(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  private getCurrentUserFromStorage(): User | null {
    const userData = localStorage.getItem(this.currentUserKey);
    return userData ? new User(JSON.parse(userData)) : null;
  }

  private setCurrentUser(user: User | null): void {
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.currentUserKey);
    }
    this.currentUserSubject.next(user);
  }

  login(username: string, password: string): boolean {
    const mockUsers: User[] = [
      new User({id: 1, username: 'admin', email: 'admin@pharmacy.com', role: 'admin', token: 'admin-token'}),
      new User({id: 2, username: 'customer', email: 'customer@pharmacy.com', role: 'customer', token: 'customer-token'})
    ];

    const user = mockUsers.find(u => u.username === username && password === '1234');
    if (user) {
      this.setCurrentUser(user);
      return true;
    }
    return false;
  }

  register(user: User): void {
    this.setCurrentUser(user);
  }

  logout(): void {
    this.setCurrentUser(null);
    this.router.navigate(['/auth/login']);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  getUserRole(): 'admin' | 'customer' | null {
    return this.currentUserSubject.value?.role ?? null;
  }
}
