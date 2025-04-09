import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-serach-auto',
  templateUrl: './serach-auto.component.html',
  styleUrls: ['./serach-auto.component.css']
})
export class SerachAutoComponent {
  optionsControl = new FormControl<string>('');
  removeble = true;
  allOptions = ['Red', 'Green', 'Orenge', 'Blue', 'Pink', 'Black', 'Cat', 'Dog'];

  searchText = '';

  get filteredOptions(): string[] {
    return this.allOptions.filter(option =>
      option.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  remove(option: string){
    const index = this.allOptions.indexOf(option);
    if (index >= 0) {
      this.allOptions.splice(index, 1);
    }   
  }
 


  getObject() {
    const arr =  ['num1', 'num2'];
    let [car, bike]= new Set([12, 10])
    // console.log(car , bike);

    let data = {data: [car, 2, bike, 4]}
    console.log(data.data)

    let obj: any = {obj : [
      1, 2, 3, 4, 5,
      {
        name: 'sss',
        age: 'ddd',
        array: [10, 20, 30, 40]
      },
      {
        name: 's0s0s',
        age: 'd0d0d',
        array: [100, 200, 300, 400]
      }
    ]}

    for(let ele in obj){
      obj[ele].filter((value: any)=> (value)).map((data: any) => console.log(data.array))
    }
  }

  

}
