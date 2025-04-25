import { Component } from '@angular/core';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent {
    arrData = [
      {
        id:1,
        name:'Aadi',
        contect:10235,
        compete: true
      },
      {
        id:2,
        name:'Book',
        contect:10235,
        compete: true
      },
      {
        id:3,
        name:'Cat',
        contect:10235,
        compete: true
      },
      {
        id:4,
        name:'diya',
        contect:10235,
        compete: false
      },
      {
        id:5,
        name:'Siva',
        contect:10235,
        compete: false
      },
      {
        id:6,
        name:'Ram',
        contect:10235,
        compete: true
      },
      {
        id:7,
        name:'Raghav',
        contect:10235,
        compete: false
      },
      {
        id:8,
        name:'Siya',
        contect:10235,
        compete: false
      },
      {
        id:9,
        name:'Riya',
        contect:10235,
        compete: true
      },
      {
        id:10,
        name:'Priya',
        contect:10235,
        compete: true
      },
    ]

  completeFun() {
    this.arrData.forEach((value) =>{
      if(value.compete === true)
         console.log(value)
    })
  }
  unCompleteFun() {
    this.arrData.forEach((value) =>{
      if(value.compete === false)
         console.log(value)
    })
  }
}
