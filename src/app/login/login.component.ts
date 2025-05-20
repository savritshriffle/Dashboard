import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required])
  });

  constructor(
    private router: Router,
    private toaster: ToastrService
  ) {}

  public onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const matchingUserIndex = users.findIndex((u: {[key: string]: string | number}) => u['email'] === this.loginForm.value.email && u['password'] === this.loginForm.value.password);

    if (matchingUserIndex !== -1) {
      users[matchingUserIndex].isLoggedIn = true;
      localStorage.setItem('users', JSON.stringify(users)); 
      this.toaster.success('Login Successfully Done...');
      this.router.navigate(['/home']);
    } 
    else {
      this.toaster.error('Invalid email or password');
      this.router.navigate(['/user-registration']);
    }
  }
};
