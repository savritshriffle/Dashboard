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
  localData: any;
  loginForm = new FormGroup({
    email: new FormControl<string>('',[Validators.required]),
    password: new FormControl<string>('', [Validators.required, Validators.maxLength(8)])
   })

  constructor(private router: Router, private toastr: ToastrService) { }

  logIn() {
      localStorage.setItem('userData', JSON.stringify(this.loginForm.value)) 
      this.localData = localStorage.getItem('userData');
      const data= JSON.parse(this.localData)
      if(data != null) {
        this.toastr.success('Login Successfully Completed!...', 'Done', {
          timeOut: 1000,
        });
        this.router.navigate(['/dashboard/home']);
      }
      else {
        this.toastr.error('Invalid Inputs..');
    }
  }
}