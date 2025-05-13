import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'auto-complete.component',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent {
  removable = true;
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = [
    'Apple', 
    'Lemon', 
    'Lime', 
    'Orange', 
    'Strawberry',
    'Mango',
    'Pineapple',
    'Dragonfruit',
    'BlackBerry',
    'Blueberry',
    'The Long Name of a Fruit That is Yet to be Discovered',
  ];
  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement> ;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
 

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(''),
        map((fruit: string) => fruit ? this._filter(fruit) : this.allFruits.slice())); 

        
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }    
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const newValue = event.option.viewValue;
    if (this.fruits.includes(newValue)) {
        this.fruits = this.fruits.filter(fruit=>fruit !== newValue);
    } 
    else {
      this.fruits.push(event.option.viewValue);
    }
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue('');
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}