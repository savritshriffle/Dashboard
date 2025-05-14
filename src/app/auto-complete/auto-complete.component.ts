import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'auto-complete.component',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent {
  public removable = true;
  public fruitCtrl = new FormControl();
  public filteredFruits: Observable<string[]>;
  public fruits: string[] = [];
  public allFruits: string[] = [
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

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  @ViewChild('autoTrigger') autocompleteTrigger!: MatAutocompleteTrigger;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(''),
      map((fruit: string) => fruit ? this._filter(fruit) : this.allFruits.slice())
    ); 
  }
  
  public remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  public openAutocomplete(): void {
    this.autocompleteTrigger.openPanel();
  }

  public closeAutocomplete(): void {
    this.autocompleteTrigger.closePanel();
  }
  
  selected(event: MatCheckboxChange, fruit: string): void {
    if (event.checked) {
      if (!this.fruits.includes(fruit)) {
        this.fruits.push(fruit);
      }
    } else {
        this.fruits = this.fruits.filter(f => f !== fruit);
        this.fruitCtrl.setValue(null);
    }
  }
}