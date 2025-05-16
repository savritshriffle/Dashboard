import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginAuthService } from './login-auth.service';

export const authGuard: CanActivateFn = () => {
  const login = inject(LoginAuthService);
  const route = inject(Router)

  if(login.isLogin) {
    return true;
  }
  else {
    alert("something want wrong")
    return false;
  }
};