import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inputField: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inputField = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    });
  }

  get address(): FormArray {
    return this.inputField.get('address') as FormArray;
  }

  addAddress(): void {
    this.address.push(this.fb.control('', Validators.required));
  }

  removeAddress(index: number): void {
    this.address.removeAt(index);
  }

  onSubmit(): void {
    // if (this.inputField.valid) {
      console.log(this.inputField); 
      // console.log('Form is invalid');
    }
  // }
}
