import { Component, OnInit } from '@angular/core';
import { Data } from './student-Data';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls:  ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  public filterValue: {[key: string]: string | number | boolean}[] = [];
  public studentData = Data;
  public filterData = [
    {
      name: 'complete',
      value: false
    },
    {
      name: 'Incomplete',
      value: false
    },
  ]

  ngOnInit(): void {
    this.filterValue = this.studentData;
  }

  public onFilterData() {
    const isCheckData = this.filterData.find((data) => data.name === 'complete')?.value;
    const isUnCheckedData = this.filterData.find((data) => data.name === 'Incomplete')?.value;
    if(isCheckData && isUnCheckedData){
      this.filterValue = this.studentData;
    }
    else if(isCheckData) {
      this.filterValue = this.studentData.filter((data) => data.complete === true);
    }
    else if(isUnCheckedData) {
      this.filterValue = this.studentData.filter((data) => data.complete === false);
    }
    else {
      this.filterValue = this.studentData;
    }
  }   
}