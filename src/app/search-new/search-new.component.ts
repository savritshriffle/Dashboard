import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-search-new',
  templateUrl: './search-new.component.html',
  styleUrls: ['./search-new.component.css']
})

export class SearchNewComponent implements OnInit{
  filterData: any;
 
  
  constructor(private service : ServiceService) {

  }
  ngOnInit(): void {
    // debugger;
    // this.dynamic();
    this.filterData = this.service.getProducts().subscribe((data) => {
       this.withoutFlat(data.products, (key, value)=>{
        console.log(key,   value);
        
      })
    })
        console.log(this.filterData);
  }

  // getData() {
  //   return new Promise<void>((resolve, reject) => {
  //     this.service.getProducts().subscribe((data) =>{
  //       this.filterData = this.withoutFlat(data.products, (key, value)=>{
       
  //       })
  //       resolve(this.filterData)
  //     })
  //   })
  // }
 
      
    
  
  
  // array =['a','b','c',['1',['2',['3', ['4', ['5']]]]]];

  // obj = [{id:'1',name:'aa'},{'id':'2',name:'bb'},{id:'3',name:'cc'},
  //   [{id:'4',name:'aa'},{'id':'5',name:'bb'},{id:'6',name:'cc'}],
  //   [{id:'7',name:'aa'},{'id':'8',name:'bb'},{id:'9',name:'cc'}],
  // ]

  // dynamic() {
  //   // let val = this.array.length+1;
  //   // let value = this.array.flat(val)
  //   // console.log(value, val)
  //   // console.log(this.obj)
  //   // let len = this.obj.length+1;
  //   // let value = this.obj.flat(len)
  //   // let data = value.map((val) =>{
  //   //   console.log(val)
  //   // })
  //   this.service.getProducts().subscribe((data) => {
  //     this.filterData = data.products;
  //     // console.log(this.filterData);

  //   //   this.filterData.filter((value: any) => {
  //   //     Object.keys(value).forEach((key: any) => {  
  //   //       Object.values(value).filter((value) =>{  
  //   //         console.log(key, value, typeof value) 
  //   //            if(typeof value === 'object') {
  //   //              for(let val in value) {
  //   //                console.log(typeof val)
  //   //              }
  //   //            }
  //   //       })
  //   //     })
  //   //   })

  //   type Data = {

  //   }
  //   this.filterData.forEach((value: any) => {
//       for(let val in value) {
//        console.log(val, typeof value[val])
//         if(typeof value[val] === 'object') {
//          Object.entries(value[val]).forEach((value) =>{
//            console.log( typeof value)
//             })
  //         }
           
  //       }
  //   })
  //   })
  // } 

 deepTraverse(data: any): void {
    if (Array.isArray(data)) {
      for (const item of data) {
        // console.log(item,  typeof item)
        this.deepTraverse(item); 
    }
    } 
    else if (typeof data === 'object' && data !== null) {
      for (const key in data) {
        if (typeof data[key] === 'object'){
          console.log(key, typeof data[key]);
          this.deepTraverse(data[key]); 
        } 
        else {
          console.log(key, typeof data[key]);
        }
      }
    }
  }

testRecursive(n: number): number {
  if(n == 0) {
    return 1;
  }
  else{
    const d = n * this.testRecursive(n-1);
    // console.log(n * this.testRecursive(n-1))
    console.log(d)
    return d
  }
}
  
// nestedData(products: any, target: string, type: 'key' | 'value'): any [] {

//   let result: any[] = [];
//   function recurse(current: any) {
//     if(typeof current !== 'object' || current === null) {
//       return ;
//     }
//     if(Array.isArray(current)) {
//       for(let item of current) {
//         recurse(item)
//       }
//     }else {
//       for(let key of current) {
//         // if(current.hasOwnProperty(key)) {
//           if(type == 'key' && type == target) {
//             result.push(key)
//           } else if (type == 'value' && current[key] == target) {
//               result.push(current[key])
//           }
//           recurse(current[key])
//         }
//       // }
//     }
//   }
//   recurse(products);
//   return result

// }

//  getKeyValues(root: any) {
//   const keyValues = []
//   const visited = new Set()

//   const targets = [root]
//   while(targets.length) {
//     const target = targets.shift()

//     if (visited.has(target)) {
//       continue 
//     }
//     visited.add(target)

//     const pairs = Object.entries(target)
//     keyValues.push(...pairs) 
    

//     for (const [key, value] of pairs) {
//       if (value && typeof value === 'object') {
//         targets.push(value) 
//         console.log(typeof key, value)
       
//       }
//     }
//   }
    
//   return keyValues
// }


withoutFlat(data: any, callback:(key: string, value:any)=> void) {
  if(typeof data !== 'object' || data === null) {
    return;
  }
  for(let item in data) {
    if(data.hasOwnProperty(item)) {
      const value = data[item]
      callback(item , value)

      if(typeof value === 'object') {
        this.withoutFlat(value, callback);
      }
    }
  }

}

  
}



