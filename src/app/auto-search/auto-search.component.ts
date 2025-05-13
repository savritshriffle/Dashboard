import { Component } from '@angular/core';
import { Data } from './Data';

@Component({
  selector: 'app-auto-search',
  templateUrl: './auto-search.component.html',
  styleUrls: ['./auto-search.component.css']
})
export class AutoSearchCompoent {
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
 
    
  displayedColumns = [
    'id',
    'name',
    'age',
    'contact',
    'post',
    'Delete', 
    'action'
  ]
  searchInput = '';
  inputId: number = 0;
  Data = Data;
  filterData = this.Data;
  
  search() {
    const input = this.searchInput.toLowerCase().trim();
    if (input) {
      this.filterData = this.Data.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(input)
        )
      );
    } 
    else {
      this.filterData = this.Data;
    }
  }

  removeData(id : number) {
    this.filterData = this.filterData.filter(item => item.id !== id);
  }

  editData(post : any) {
    post.isEdit = true
  }

  handleOnChange(event:any , post:any , key:any) {
    post[key] = event.target.value;
  }

  saveData(post: any) {
    post.isEdit = false;
  }
}
