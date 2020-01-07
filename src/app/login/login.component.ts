import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  errorPlace: string = '';

  ngOnInit() {
  }

  login(formData: NgForm) {

    let authInfo = this.authService;
    this.authService.getAuth(formData.form.value.username, formData.form.value.password).subscribe
      (jwt => {
        authInfo.userJwtInfo.jwtToken = jwt.jwtToken;
        authInfo.setInfoFromToken(jwt.jwtToken);
        this.router.navigate(['/products']);
      },
      err => {
        this.errorPlace = 'Nie udało się zalogować, błędne login lub hasło';
      });
  }


}
