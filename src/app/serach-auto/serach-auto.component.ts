import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-serach-auto',
  templateUrl: './serach-auto.component.html',
  styleUrls: ['./serach-auto.component.css']
})
export class SerachAutoComponent {
  // optionsControl = new FormControl<string>('');
  
  // allOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  // selectedOptions: string[] = [];
  // searchText = '';

  // get filteredOptions(): string[] {
  //   return this.allOptions.filter(option =>
  //     option.toLowerCase().includes(this.searchText.toLowerCase())
  //   );
  // }

  // onSelectionChange(event: any): void {
  //   console.log(this.selectedOptions);
  //   let newValue = event.value;
  //   console.log(this.selectedOptions, newValue);
  
  //   if (this.selectedOptions.includes(newValue)) {
  //     this.selectedOptions = this.selectedOptions.filter(value => value !== newValue);
  //   } else {
    
  //     // this.selectedOptions.push(newValue)
  //     this.selectedOptions = [...this.selectedOptions, newValue];
  //   }
  
  //   console.log("Selected Options:", this.selectedOptions);
  // }

  // name = 'Simple filter';

  // searchsText = '';

  // characters = [
  //   'Ironman',
  //   'Spiderman',
  //   'Thor',
  //   'Captain America',
  //   'Black widow',
  //   'Hulk',
  //   'Hawkeye',
  //   'Falcon',
  //   'Captain Marvel'
  // ];
  // filterdata : any[] =[...this.characters];


  // filterfun() {
  //  this.filterdata = this.filterdata.filter((value) => value.toLowerCase().includes(this.searchsText))
  //     console.log(this.filterdata)
  //  } 
 
  Data = [
    {
      id:1,
      name: 'rahul',
      age: 20,
      contact:1234567,
      post: 'student'
    },
    {
      id:2,
      name: 'ram',
      age: 20,
      contact:1234567,
      post: 'student'
    },
    {
      id:3,
      name: 'kiran',
      age: 20,
      contact:1234567,
      post: 'student'
    },
    {
      id:4,
      name: 'jyoti',
      age: 20,
      contact:1234567,
      post: 'student'
    },
    {
      id:5,
      name: 'priya',
      age: 20,
      contact:1234567,
      post: 'student'
    },
    {
      id:7,
      name: 'savri',
      age: 20,
      contact:1234567,
      post: 'student'
    },
    {
      id:8,
      name: 'siya',
      age: 20,
      contact:1234567,
      post: 'student'
    },
    {
      id:9,
      name: 'riya',
      age: 20,
      contact:1234567,
      post: 'student'
    },
    {
      id:10,
      name: 'arya',
      age: 20,
      contact:1234567,
      post: 'student'
    },
  ]
displayedColumns = ['id', 'name', 'age', 'contact', 'post', 'action']
 searchInput = '';
 isEdit = false
 inputId: number = 0;
 filterData = [...this.Data]
 searchFunc() {
  const input = this.searchInput.toLowerCase().trim();

  if (input) {
    this.filterData = this.Data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(input)
      )
    );
  } else {
    this.filterData = [...this.Data];
  }
}
 
  // console.log(this.filterData)
 

remove(id : number) {
  this.filterData = this.filterData.filter(item => item.id !== id);
}



}
