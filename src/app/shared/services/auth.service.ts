import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8080';
  private userKey: string = 'currentUser';

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<AuthService>(`${this.apiUrl}/login`, {email, password});
  }

  logout(): void {
    localStorage.removeItem(this.userKey);
  }

  setSession(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getSession(): any {
    return JSON.parse(localStorage.getItem(this.userKey) || '{}');
  }

  isAuthenticated(): boolean {
    return !!this.getSession().token;
  }

  getUserRole(): string {
    const user = this.getSession();
    return user?.role || '';
  }
}
