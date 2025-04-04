import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    addressValue : string[] = [];
    formaddress: string[] =[];
    isActive = false;
    isDeactive = true;

    // formInput = new FormGroup ({
    //   firstName : new FormControl<string>('',[Validators.required]),
    //   lastName : new FormControl<string>('',[Validators.required]),
    //   email : new FormControl('',[Validators.email]),
    //   password : new FormControl('',[Validators.required, Validators.minLength(6)]),
    //   address : 
    // })

   fb = new FormBuilder();

   form = this.fb.group({
     firstName : '',
     lastName : '',
     email : '',
     password : '',
     address : ['']
   })


    
    constructor() { 
     
     }


  submit() {
    console.log(this.form)
  }

  save() {
    const value = this.form.controls.address.value
    if(value) {
      this.addressValue.push(value)
      this.isActive = true;
    }
    else{
      this.addressValue = ['']
    }
  }
  
 delete() {
  this.isDeactive = false;
}
}
