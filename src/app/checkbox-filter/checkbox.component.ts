import { Component, OnInit } from '@angular/core';
import { studentData } from './student-Data';
@Component({
  selector:  'app-checkbox',
  templateUrl:  './checkbox.component.html',
  styleUrls:  ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  filterValue:{[key: string] : string | number | boolean}[] = [] ;
  studentData = studentData;
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

  ngOnInit(): void {
    this.filterValue = this.studentData;
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
      this.filterValue = trueValue;
    }
    else if(isInCheckedData){
      this.filterValue = falseValue;
    }
    else {
      this.filterValue = this.studentData;
    }
  }   
}