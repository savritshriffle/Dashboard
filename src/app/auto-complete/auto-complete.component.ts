import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title 
 */
@Component({
  selector: 'auto-complete.component',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent {
  selectable = true;
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
    'The Long Name of a Fruit That is Yet to be Discovered',
  ];
  opened = false;
  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement> ;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  @ViewChild('autocompleteTrigger') matACTrigger!: MatAutocompleteTrigger ;
  @ViewChild('matselect') matselect!: MatSelect

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(''),
        map((fruit: string) => fruit ? this._filter(fruit) : this.allFruits.slice()));
        // console.log(this.filteredFruits)
        
  }

  add(event: any): void {
   
    const input = event.input;
    const value = event.value;
   if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }
   if (input) {
      input.value = '';
    }
    this.fruitCtrl.setValue(null);
  //  setTimeout(()=>{
  //     this.selectClose();
  //   },3000)
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }    
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    // console.log(event.source)
    const newValue = event.option.viewValue;
    if (this.fruits.includes(newValue)) {
      this.fruits = [...this.fruits.filter(fruit=>fruit !== newValue)];
    } else {
      this.fruits.push(event.option.viewValue);
    }
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue('');
  requestAnimationFrame(()=>{
    return this.openAuto(this.matACTrigger);
    })
   

  }

  private _filter(value: string): string[] {
    // console.log(value)
    const filterValue = value.toLowerCase();
    // console.log(filterValue)
    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
   
  }

  openAuto(trigger: MatAutocompleteTrigger) {
    // debugger
    trigger.openPanel();
    this.fruitInput.nativeElement.focus();
    console.log(trigger );
    
  }

  selectClose() {
    this.fruitCtrl.setValue('')
    this.matselect.close();
    this.matselect.value = ''
  }
}