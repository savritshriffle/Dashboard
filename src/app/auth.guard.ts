import { Inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const authGuard: CanActivateFn = (route, state) => {
  const login = Inject(LoginComponent);

  if(!login.isLogin) {
    alert('Successfully Completed!');
    return true;
  }
  else {
    alert("something want wrong")
    return false;
  }
  return true;
};


