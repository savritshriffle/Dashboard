import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  posts: {[key : string] : string | number}[] = [];   
  pageIndex = 1;
  filterData: {[key : string] : string | number}[] = []; 
  searchData: string = '';
  searchText: string = '';
  displayedColumns: string[] = [
    'userId',
    'id',
    'title',
    'body',
    'Action',
    'Delete'
  ];
  dataSources = new MatTableDataSource<any>();
  sortedData = new MatSort();
  currentPage = 0;

  constructor(
    private service: ServiceService,
    public dialog: MatDialog,
    private toastr: ToastrService) {  }

  ngOnInit(): void { 
    this.filterData = this.posts.filter(user =>
      user['userId'].toString() === this.searchData || user['id'].toString() === this.searchData.trim() ||user['title']);
      this.dataSources.data = this.filterData;    

      this.getData(); 
  }

  getData() {
    this.service.getData().subscribe((data) => {
      this.posts = data; 
        data.forEach((element: {[key: string] : boolean}) => {
          element['isEdit'] = false;
        });
      this.dataSources = new MatTableDataSource(data);
      this.dataSources.paginator = this.paginator;

      localStorage.setItem('apiData', JSON.stringify(data));
      const indexData = localStorage.getItem('paginatorIndex');
      const sizeData = localStorage.getItem('paginatorSize');
      
      this.dataSources.paginator['pageIndex']= Number(indexData);
      this.dataSources.paginator['pageSize']= Number(sizeData);
        
      this.dataSources.paginator = this.paginator; 
      this.dataSources.sort = this.sort;            
    });
  }

  search(filtervalue: string){
    this.dataSources.filter = filtervalue.trim().toLowerCase();
  }

  editData(post: {[key: string] : string | number | boolean}) {
    post['isEdit'] = true
  }
    
  onSaveData(post: {[key: string] : string | number | boolean}){
    post['isEdit'] = false;
    this.dataSources.data = this.dataSources.data;
    this.toastr.success("Data Changes Save Successfully...");
  }

  handleOnChange(e: any, post: {[key: string] : string | number}, key: string) {
    post[key] = e.target.value;
    this.dataSources.data = this.dataSources.data;
  }

  onPaginateChange() {
    let index = this.dataSources.paginator?.pageIndex;
    let size = this.dataSources.paginator?.pageSize;

    localStorage.setItem('paginatorIndex', JSON.stringify(index));
    localStorage.setItem('paginatorSize', JSON.stringify(size));
  }

  deleteData(id: string) {
    const isConfirm = confirm("are you sure...")
    if(isConfirm){
      let index = this.dataSources.data.find((value) =>value['id'] === id) 
      this.dataSources.data.splice(index, 1);
      this.dataSources.data = this.dataSources.data;
      this.toastr.info("Deleted Data   " + id);
    }
  }     
}
  

