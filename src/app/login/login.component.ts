import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  userData = {
    email: 'savri@gmail.com',
    password: '12345'
  }

  localData: any;
  loginForm = new FormGroup({
    email: new FormControl<string>('',[Validators.required,  Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.maxLength(8)])
   })
  data: any;

  constructor(private router: Router, private toastr: ToastrService) { }

  logIn() {
    if(this.loginForm.controls.email.value === this.userData.email && this.loginForm.controls.password.value === this.userData.password) {
      this.router.navigate(['/dashboard/home']);
      this.toastr.success('Login Successfully Completed!...', 'Done', {
            timeOut: 1000,
      });
    }
    else {
      this.toastr.error('Invalid Inputs..');
    }
  }
}