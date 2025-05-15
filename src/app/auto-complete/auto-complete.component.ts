import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteTrigger} from '@angular/material/autocomplete';
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
  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  @ViewChild('autocompleteTrigger') matACTrigger!: MatAutocompleteTrigger;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string) => fruit ? this._filter(fruit) : this.allFruits.slice()));
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

    requestAnimationFrame(() =>{
      this.openAuto(this.matACTrigger)
    })
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) >= 0);
  }
 
  private openAuto(trigger: MatAutocompleteTrigger) {
    trigger.openPanel();
    this.fruitInput.nativeElement.focus();
  }
};