import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  filterData = [
    {
      name: 'complete',
      value: false
    },
    {
      name: 'Incomplete',
      value: false
    },
  ]
  arrData = [
    {
      id:1,
      name:'Aadi',
      contect:10235,
      complete: true,
    },
    {
      id:2,
      name:'Book',
      contect:10235,
      complete: true
    },
    {
      id:3,
      name:'Cat',
      contect:10235,
      complete: true
    },
    {
      id:4,
      name:'diya',
      contect:10235,
      complete: false
    },
    {
      id:5,
      name:'Siva',
      contect:10235,
      complete: false
    },
    {
      id:6,
      name:'Ram',
      contect:10235,
      complete: true
    },
    {
      id:7,
      name:'Raghav',
      contect:10235,
      complete: false
    },
    {
      id:8,
      name:'Siya',
      contect:10235,
      complete: false
    },
    {
      id:9,
      name:'Riya',
      contect:10235,
      complete: true
    },
    {
      id:10,
      name:'Priya',
      contect:10235,
      complete: true
    },
  ]
  data1: any;
  data: any;

  completeFun() {
    
  }
    


   
  
  }



