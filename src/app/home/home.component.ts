import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
export class HomeComponent implements OnInit, OnChanges {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  posts: any[] = [];   
  pageIndex = 1;
  filterData: any[] = []; 
  searchData: string = '';
  displayedColumns: string[] = [
    'userId',
    'id',
    'title',
    'body',
    'Action',
    'Delete'
  ];
  selectedPost:any = null;
  dataSources = new MatTableDataSource<any>([]);
  sortedData = new MatSort();
  currentPage = 0;
  currentSize = 0;
  constructor(private service: ServiceService, public dialog: MatDialog, private cdr: ChangeDetectorRef, private router : ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit(): void { 
      this.getPostData();    
  }



  ngOnChanges(changes: SimpleChanges): void {
      if (this.searchData.trim() === ''  ) 
      {
        return alert("Enter Valid Data"+" "+ changes);
      }
      this.filterData = this.posts.filter(user =>
          user.userId.toString() === this.searchData || user.id.toString() === this.searchData
      ||  user.title.startsWith('qui est esse'));
          this.dataSources.data = this.filterData;
         
  }


  getPostData() {
    this.service.getData().subscribe((data) => {
    this.posts = data; 
      data.forEach((element:any) => {
        element.isEdit = false;
      });
    this.dataSources = new MatTableDataSource(data);
    this.dataSources.paginator = this.paginator

    localStorage.setItem('apiData', JSON.stringify(data));
    
    
    const indexData  =  localStorage.getItem('paginatorIndex');
    const sizeData = localStorage.getItem('paginatorSize')
    
    this.dataSources.paginator['pageIndex']= Number(indexData) 
    this.dataSources.paginator['pageSize']= Number(sizeData)
      
    this.dataSources.paginator = this.paginator; 
    this.dataSources.sort = this.sort;        
        
    });
  }

  search(filtervalue: string){
    this.dataSources.filter = filtervalue.trim().toLowerCase();
  }

  editData(post: any) {
    post.isEdit= true
    }
    
  onSaveData(post: any){
    post.isEdit = false;
    this.dataSources.data = [...this.dataSources.data]
  }
  handleOnChange(e: any, post: any, key: any) {
    post[key]= e.target.value;
    this.dataSources.data = [...this.dataSources.data];
    console.log(this.dataSources)
  }


  onPaginateChange(e: any) {
    let index = this.dataSources.paginator?.pageIndex
    let size  = this.dataSources.paginator?.pageSize

    localStorage.setItem('paginatorIndex', JSON.stringify(index))
    localStorage.setItem('paginatorSize', JSON.stringify(size))
  }


  deleteData(id: string) {
    const con = confirm("are you sure...")
    if(con){
      let index = this.dataSources.data.find((value) =>value.id === id) 
      this.dataSources.data.splice(index, 1)
      this.dataSources.data = [...this.dataSources.data]
      this.toastr.info("deleted Data   " + id)
    }
    
  }     
}
  

