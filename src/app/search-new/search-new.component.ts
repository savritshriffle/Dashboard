import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-new',
  templateUrl: './search-new.component.html',
  styleUrls: ['./search-new.component.css']
})
export class SearchNewComponent {
   inputGroup = new FormGroup({
      domain : new FormControl([]),
      subdomain: new FormArray([]),
})

selectionChange() {
  console.log('hellooo');
  console.log('hellooo');
  console.log('hellooo');
  console.log('hellooo');
  console.log('hellooo');
  
}
}
