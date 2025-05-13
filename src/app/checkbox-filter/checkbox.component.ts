import { Component, OnInit } from '@angular/core';

@Component({
  selector:  'app-checkbox',
  templateUrl:  './checkbox.component.html',
  styleUrls:  ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  filterValue:  any[] = [];
  filterData = [
    {
      name:  'complete',
      value: false
    },
    {
      name:  'Incomplete',
      value: false
    },
  ]
  studentData = [
    {
      id: 1,
      name: 'Aadi',
      contect: 10235,
      complete: true,
    },
    {
      id: 2,
      name: 'Book',
      contect: 10235,
      complete: true
    },
    {
      id: 3,
      name: 'Cat',
      contect: 10235,
      complete: true
    },
    {
      id: 4,
      name: 'diya',
      contect: 10235,
      complete: false
    },
    {
      id: 5,
      name: 'Siva',
      contect: 10235,
      complete: false
    },
    {
      id: 6,
      name: 'Ram',
      contect: 10235,
      complete: true
    },
    {
      id: 7,
      name: 'Raghav',
      contect: 10235,
      complete: false
    },
    {
      id: 8,
      name: 'Siya',
      contect: 10235,
      complete: false
    },
    {
      id: 9,
      name: 'Riya',
      contect: 10235,
      complete: true
    },
    {
      id: 10,
      name: 'Priya',
      contect: 10235,
      complete: true
    },
    {
      id: 10,
      name: 'Priya',
      contect: 10235,
      complete: true
    },
    {
      id: 11,
      name: 'Tiya',
      contect: 10235,
      complete: true
    },
  ]
  
 ngOnInit(): void {
   this.filterValue = this.studentData
 }

  onFilterData() {
    const isCheckData = this.filterData.find((value) => value.name === 'complete')?.value;
    const isInCheckedData = this.filterData.find((value) => value.name === 'Incomplete')?.value;
    const trueValue = this.studentData.filter((val) => val.complete === true);
    const falseValue = this.studentData.filter((val) => val.complete === false);
    
    if(isCheckData && isInCheckedData){
     this.filterValue = this.studentData;
    }
    else if(isCheckData){
      this.filterValue = trueValue
    }
    else if(isInCheckedData){
      this.filterValue = falseValue
    }
    else {
      this.filterValue = this.studentData
    }
  }   
}