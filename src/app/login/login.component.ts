import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  private userData = {
    email: 'savri@gmail.com',
    password: '12345'
  }

  public loginForm = new FormGroup({
    email: new FormControl<string>('',[Validators.required,  Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.maxLength(8)])
  });

  constructor(
    private router: Router,
    private toastr: ToastrService) { }

  public logIn() {
    if(this.loginForm.controls.email.value === this.userData.email && this.loginForm.controls.password.value === this.userData.password) {
      this.router.navigate(['/home']);
      this.toastr.success('Login Successfully Completed!...', 'Done', {timeOut: 1000});
    }
    else {
      this.toastr.error(' Invalid Credentials..');
    }
  }
}