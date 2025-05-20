import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auto-search',
  templateUrl: './auto-search.component.html',
  styleUrls: ['./auto-search.component.css']
})
export class AutoSearchCompoent implements OnInit{
  public displayedColumns = [
    'Id',
    'Name',
    'Age',
    'Contact',
    'Post',
    'Delete', 
    'Action'
  ]
  public searchInput = '';
  private studentData = Data;
  public filterData: {
    id: number,
    name: string,
    age: number,
    contact: number,
    post: string
  }[] = [];

  constructor(private toaster: ToastrService) { }

  ngOnInit(): void {
    this.filterData = this.studentData;
  }

  public search() {
    const input = this.searchInput.toLowerCase().trim();
    if (input) {
      this.filterData = this.studentData.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(input)
        )
      );
    } 
    else {
      this.filterData = this.studentData;
    }
  }

  public removeData(id: number) {
    const isConfirm = confirm("Are You Sure ?");
    if(isConfirm) {
      this.filterData = this.filterData.filter(item => item.id !== id);
      this.toaster.success("Deleted Data" + id);
    }
  }

  public editData(post: {[key: string]: boolean}) {
    post['isEdit'] = true;
  }

  public handleOnChange(event: any , post:{[key: string]: string | number}, key: string) {
    post[key] = event.target.value;
    this.filterData = this.filterData;
  }

  public saveData(post: {[key: string]: boolean}) {
    post['isEdit'] = false;
    this.toaster.success("Data Changes Save Successfully...");
  }
};