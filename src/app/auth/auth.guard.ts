import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const toaster = inject(ToastrService);
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const isUserFound = users.some((user: Record<string, string | boolean>) => user['isLoggedIn'] === true);
  console.log(isUserFound)
  if (!isUserFound) {
    toaster.info("Please login to access this page")
    router.navigate(['/login']);
    return false;
  }
  return true;
};