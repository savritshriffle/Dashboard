import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent {
  fb = new FormBuilder();
  formData: FormGroup;
  genderData = [
    {
      name: 'Female',
      value: 'female',
    },
    {
      name: 'Male',
      value: 'male',
    }
  ]
  subjectData =['Maths',
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
    'Chemistry'];

  hobbiesData = [
    { id: 1, name: 'Reading' },
    { id: 2, name: 'Traveling' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Cooking' }
  ];

    
  constructor() {
    this.formData = this.fb.group({
        firstName:  ['', Validators.required],
        lastName:  ['', Validators.required],
        email:  ['', Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') ],
        password:  ['', Validators.required, Validators.minLength(6)],
        address: this.fb.array([
          this.fb.control('')
        ]),
        subjects: this.fb.array([
          this.fb.control('')
        ]),
        gender: ['', Validators.required],
        hobbies: this.fb.array([
          this.fb.control('')
        ])
      })
  }

  onSubmit() {
    console.log(this.formData, "form Data")
  }

  get address() {
    return this.formData.get('address') as FormArray;
  }
  addAddress() {
    const address = this.address.push(this.fb.control(''));
    console.log(address);
  }
  removeAddress(index: number) {
    this.address.removeAt(index);
  }

  get subjects() {
    return this.formData.get('subjects') as FormArray;
  }

  addSubjects(event: any) {
    const selectedSubjects = event.value;  
    this.subjects.clear();
    selectedSubjects.forEach((subject: any) => {
      this.subjects.push(this.fb.control(subject));
    });
  }

  get gender() {
    return this.formData.get('gender')?.value;
  }

  addGender(event: any) {
    this.genderData.filter((val) =>{
      if(event.value === val.value) {
        console.log(val)
        console.log(event.value)
        this.gender.push(event.value);    
      }
    })
  }

  get hobbies() {
    return this.formData.get('hobbies') as FormArray;
  }

  onHobbyChange(event: any, hobby: any) {
    if (event.checked) {
      this.hobbies.push(this.fb.control(hobby)); 
    } 
    else {
      const index = this.hobbies.controls.findIndex(x => x.value.id === hobby.id);
      if (index !== -1) {
        this.hobbies.removeAt(index); 
      }
    }
  }
}