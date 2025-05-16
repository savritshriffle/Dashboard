import { Component, OnInit, ViewChild } from '@angular/core';
import { tableService } from '../table.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  public searchText: string = '';
  public dataSources = new MatTableDataSource<any>();
  public displayedColumns: string[] = [
    'UserId',
    'Id',
    'Title',
    'Body',
    'Action',
    'Delete'
  ];

  constructor(
    private service: tableService,
    private toaster: ToastrService) {  }

  ngOnInit(): void { 
    this.getData(); 
  }

  private getData() {
    this.service.getData().subscribe((data) => { 
      data.forEach((element: {[key: string]: boolean}) => {
        element['isEdit'] = false;
      });
      this.dataSources = new MatTableDataSource(data)  
      this.dataSources.paginator = this.paginator;
      this.dataSources.sort = this.sort;         
    });
  }

  public search(searchText: string){
    this.dataSources.filter = searchText.trim().toLowerCase();
  }

  public editData(post: {[key: string]: string | number | boolean}) {
    post['isEdit'] = true;
  }
    
  public onSaveData(post: {[key: string]: string | number | boolean}){
    post['isEdit'] = false;
    this.dataSources.data = this.dataSources.data;
    this.toaster.success("Data Changes Save Successfully...");
  }

  public handleOnChange(e: any, post: {[key: string]: string | number}, key: string) {
    post[key] = e.target.value;
    this.dataSources.data = this.dataSources.data;
  }

  public deleteData(id: string) {
    const isConfirm = confirm("Are You Sure ?");
    if(isConfirm){
      let index = this.dataSources.data.find((data) =>data['id'] === id); 
      this.dataSources.data.splice(index, 1);
      this.dataSources.data = this.dataSources.data;
      this.toaster.success("Deleted Data" + id);
    }
  }     
};