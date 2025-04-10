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
  searchInput: any[] = [];
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
 

  selected(event: any): void {
      // this.searchInput = event.value;
      // console.log(this.searchInput, "searchInput")
      const newValue = event.value;
      console.log(newValue, "newValue")
      if (this.searchInput.includes(newValue)) {
        this.searchInput = [...this.searchInput.filter(val=> val !== newValue)];
        let index = this.searchInput.indexOf(event.value)
        this.searchInput.splice(index, 1)
        console.log(this.searchInput, "inside condition")
      }

      else {
      this.searchInput = [...this.searchInput,  newValue]
      console.log(this.searchInput, 'add data fruits')
      
     }

     this.searchInput = this.searchInput.map(value => value) 
     
  
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

    let myObject = {
      name: 'firstName',
      age: 100,
      contact: 123456798,
      address: {
        state: 'm.p',
        city: 'Indore'
      }
    }
    console.log(myObject)
    let {name, contact, address : {city}} = myObject 
    console.log(contact=10000) 
    console.log(name, contact, city) 
    
  }

  

}
