import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 inputField: any; 
constructor(private fb: FormBuilder) {}

  ngOnInit() {
     this.inputField = this.fb.group({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required,Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.min(6)]),
      address:  new FormArray([
       
      ])
     })
  }

  onSubmit() {
    console.log(this.inputField)
   const value =  this.inputField.get('address')['controls']
   console.log(value)
   
  }
  get settings(): FormArray {
    return <FormArray>this.inputField.get('address');
  }

  addAddress() {
    
    this.inputField.address.push(new FormGroup({
        newAddress: new FormControl('',Validators.required)
    }))
    this.inputField.get('address').push(new FormControl())
    
  }
  remove(index : number) {
    this.inputField.get('address').removeAt(index);
  }
 
}
