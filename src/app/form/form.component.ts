import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public formData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: this.fb.array([
        this.fb.control('')
      ]), 
    });
  }
  public onSubmit(): void {
    console.log(this.formData, "formdata"); 
  }
};