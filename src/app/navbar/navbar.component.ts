import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isLogged(): boolean {
    return this.authService.isLoggedIn();
  }

  isAdmin(): boolean  {
    const result = this.authService.hasRole();
    if (result === 'ADMIN') {
      return true;
    }
    return false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
