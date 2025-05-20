import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-student',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationForm {
  public formData: FormGroup;
  public genderData = [
    {
      name: 'Female',
      value: 'female',
    },
    {
      name: 'Male',
      value: 'male',
    }
  ]
  public subjectData = [
    'Maths',
    'Science',
    'English',
    'Hindi',
    'Telugu',
    'Tamil',
    'Sanskrit',
    'History',
    'Geography',
    'Civics',
    'Computer Science',
    'Biology',
    'Physics',
    'Chemistry'
  ];

  public hobbiesData = [
    { id: 1, name: 'Reading' },
    { id: 2, name: 'Traveling' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Cooking' }
  ];
 
  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      firstName:  ['', Validators.required],
      lastName:  ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      password:  ['', Validators.required ],
      address: this.fb.array([
        this.fb.control([], Validators.required)
      ]), 
      subjects: this.fb.array([
        this.fb.control([],[Validators.required])
      ]),
      gender: ['', Validators.required],
      hobbies: this.fb.array([], Validators.required)
    })
  }

  public onSubmit() {
    console.log(this.formData, 'formdata');
  }

  get address() {
    return this.formData.get('address') as FormArray;
  }

  public addAddress() {
    this.address.push(this.fb.control('', Validators.required));
  }
  
  public removeAddress(index: number) {
    this.address.removeAt(index);
  }
  
  get subjects() {
    return this.formData.get('subjects') as FormArray;
  }

  public addSubjects(event: MatSelectChange) {
    const selectedSubjects = event.value;  
    this.subjects.clear();
    selectedSubjects.forEach((subject: string) => {
      this.subjects.push(this.fb.control(subject));
    });
  }

  get gender() {
    return this.formData.get('gender')?.value;
  }

  public addGender(event: MatRadioChange) {
    this.genderData.filter((data) =>{
      if(event.value === data.value) {
        this.formData.get('gender')?.setValue(data.value);
      }
    })
  }

  get hobbies() {
    return this.formData.get('hobbies') as FormArray;
  }

  public onHobbyChange(event: MatCheckboxChange, hobby: Record<string, string | number>) {
    if(event.checked) {
      this.hobbies.push(this.fb.control(hobby)); 
    }
    else{
      const index = this.hobbies.controls.findIndex(data => data.value.id === hobby['id']);
      if(index !== -1) {
        this.hobbies.removeAt(index); 
      }
    }
  }
};