import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map, startWith, Subject, Subscription } from 'rxjs';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  inputField: FormGroup;
  constructor(private fb: FormBuilder, private service: ServiceService) {

    this.inputField = this.fb.group({
      firstName: this.fb.control<string>('', Validators.required),
      lastName: this.fb.control<string>('', Validators.required),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      password: this.fb.control<string>('', [Validators.required, Validators.minLength(6)]),
      address: this.fb.array([
        this.fb.control<string>('', Validators.required)
      ])
    });


  }

  ngOnInit(): void {
    
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
    console.log(this.inputField.value)
    this.service.customApi(this.inputField.value).subscribe((data) => {
      const payload = data.firstName.value 

      console.log(payload) 
    })
  }
 
}