import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: 'auto-complete.component.html',
  styleUrls: ['auto-complete.component.css'],
})
export class AutoCompleteComponent {
  public removable = true;
  public fruitCtrl = new FormControl();
  public filteredFruits: Observable<string[]>;
  public fruits: string[] = [];
  private allFruits: string[] = [
    'Apple', 
    'Lemon', 
    'Lime', 
    'Orange', 
    'Strawberry',
    'Mango',
    'Pineapple',
    'Dragonfruit',
    'BlackBerry',
    'The Long Name of a Fruit That is Yet to be Discovered',
  ];

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string) => fruit ? this._filter(fruit) : this.allFruits.slice())
    );
  }

  public remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }    
  }

  public selected(fruit: string, event: Event): void {
    event.stopPropagation();
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    } else {
      this.fruits.push(fruit);
    }
    this.fruitCtrl.setValue('');
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) >= 0);
  }
};