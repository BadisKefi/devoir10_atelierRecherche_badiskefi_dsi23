import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  erreur=0;
  user = new User();
  onLoggedin()
  {
    console.log(this.user);
 let isValidUser: Boolean = this.authService.SignIn(this.user);
if (isValidUser)
this.router.navigate(['/']);
else
this.erreur = 1;
  }
  constructor(private authService : AuthService,
    private router: Router) { }
  ngOnInit(): void {
  }

}
