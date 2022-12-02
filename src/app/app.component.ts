import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
  title = 'MesProduits';
  constructor (public authService: AuthService,private router: Router) {}
  ngOnInit () {
  let isloggedin: string;
  let loggedUser:string;
  isloggedin = localStorage.getItem('isloggedIn') || "{}";
  loggedUser = localStorage.getItem('loggedUser') || "{}";
  if (isloggedin!="true" || !loggedUser)
  this.router.navigate(['/login']);
  else
  this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }


}
