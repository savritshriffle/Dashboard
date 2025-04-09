import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-serach-auto',
  templateUrl: './serach-auto.component.html',
  styleUrls: ['./serach-auto.component.css']
})
export class SerachAutoComponent {
  optionsControl = new FormControl<string>('');
  
  allOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  searchText = '';

  get filteredOptions(): string[] {
    return this.allOptions.filter(option =>
      option.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

 
}
