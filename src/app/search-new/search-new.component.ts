import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search-new',
  templateUrl: './search-new.component.html',
  styleUrls: ['./search-new.component.css']
})

export class SearchNewComponent implements OnInit{
  filterData: any;
  data: any;
  
  constructor(private service : ServiceService) {

  }
  ngOnInit(): void {
    this.dynamic();
  }
  // array =['a','b','c',['1',['2',['3', ['4', ['5']]]]]];

  // obj = [{id:'1',name:'aa'},{'id':'2',name:'bb'},{id:'3',name:'cc'},
  //   [{id:'4',name:'aa'},{'id':'5',name:'bb'},{id:'6',name:'cc'}],
  //   [{id:'7',name:'aa'},{'id':'8',name:'bb'},{id:'9',name:'cc'}],
  // ]

  dynamic() {
    // let val = this.array.length+1;
    // let value = this.array.flat(val)
    // console.log(value, val)
    // console.log(this.obj)
    // let len = this.obj.length+1;
    // let value = this.obj.flat(len)
    // let data = value.map((val) =>{
    //   console.log(val)
    // })
    this.service.getProducts().subscribe((data) => {
      this.filterData = data.products;
      // console.log(this.filterData);

    //   this.filterData.filter((value: any) => {
    //     Object.keys(value).forEach((key: any) => {  
    //       Object.values(value).filter((value) =>{  
    //         console.log(key, value, typeof value) 
    //            if(typeof value === 'object') {
    //              for(let val in value) {
    //                console.log(typeof val)
    //              }
    //            }
    //       })
    //     })
    //   })

    this.filterData.forEach((value: any) => {
        for(let val in value) {
          console.log(val, typeof value[val])

          if(typeof value[val] === 'object') {
              Object.entries(value[val]).forEach((value) =>{
                console.log( typeof value)
              })
          }
           
        }
    })
    })
  } 
}

