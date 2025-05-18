import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn & CanActivateChildFn = () => {
  const router = inject(Router);
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const isUserFound = users.some((user: any) => user.isLoggedIn === true);
  console.log(isUserFound)
  if (!isUserFound) {
    alert('Please login to access this page');
    router.navigate(['/login']);
    return false;
  }
  return true;
};
