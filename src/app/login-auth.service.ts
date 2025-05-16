import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  public isLogin = true;

  constructor() { }

  public login() {
    this.isLogin = false;
  }

  public logout() {
    this.isLogin = false;
  }
};