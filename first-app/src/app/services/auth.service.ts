import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated: boolean = false;

  onLogin(username: string, password: string) {
    // Authentication has to be done on backend server
    localStorage.setItem("userinfo", JSON.stringify({ username, password }))
    this.isAuthenticated = true;
    this.router.navigate(["/users"])
  }

  onLogout() {
    this.isAuthenticated = false;
    this.router.navigate(["/login"])
  }

  isUserAuthenticated() {
    return this.isAuthenticated;
  }
}
