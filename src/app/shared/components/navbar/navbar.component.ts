import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User | null = null;

  constructor(private authService: AuthService, private router: Router) {
    //this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit() {
    this.authService.getCurrentUserObservable().subscribe(user => {
      this.currentUser = user;
    });
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentUser?.isAdmin() ?? false;
  }

  isCustomer(): boolean {
    return this.currentUser?.isCustomer() ?? false;
  }

  logout(): void {
    this.authService.logout();
    this.currentUser = null;
  }
}
