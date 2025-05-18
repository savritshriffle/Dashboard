import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  public formData: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.formData = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public onRegistration() {
    let users = [];
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (Array.isArray(storedUsers)) {
        users = storedUsers;
      } 
    }
    catch (error) {
        console.error('Error parsing users from localStorage:', error);
    }
    const newUser = {
      ...this.formData.value,
      isLoggedIn: false,
    };

    const isAlreadyRegistered = users.some((user: any) => user.email === newUser.email);
    if (isAlreadyRegistered) {
      alert('User with this email already exists.');
      return;
    }
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registration is successfully done.');
    this.router.navigate(['/login']);
  }
};