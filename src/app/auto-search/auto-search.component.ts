import { Component } from '@angular/core';
import { Data } from './Data';

@Component({
  selector: 'app-auto-search',
  templateUrl: './auto-search.component.html',
  styleUrls: ['./auto-search.component.css']
})
export class AutoSearchCompoent {
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

  editData(post : {[key: string] : boolean}) {
    post['isEdit'] = true
  }

  handleOnChange(event:any , post:{[key: string] : string | number} , key:any) {
    post[key] = event.target.value;
  }

  saveData(post: {[key: string] : boolean}) {
    post['isEdit'] = false;
  }
}
