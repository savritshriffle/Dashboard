import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit, OnChanges{
@ViewChild(MatSort) sort!: MatSort;
@ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
posts: any[] = [];   
pageIndex = 0;
filterData: any[] = []; 
searchData: string = '';
displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'Action'];
selectedPost:any = null;
dataSources = new MatTableDataSource<any>([]);
sortedData = new MatSort();

 
constructor(private service: ServiceService, public dialog: MatDialog, private cdr: ChangeDetectorRef, private router : ActivatedRoute) {}

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
    || user.title.startsWith('qui est esse'));
    this.dataSources.data = this.filterData 
}


getPostData() {
  this.service.getPosts().subscribe((data) => {
    this.posts = data; 
    data.forEach((element:any) => {
      element.isEdit = false;
    });
   
    this.dataSources = new MatTableDataSource(data);
    this.dataSources.paginator = this.paginator
  });
}

search(filtervalue: string){
  this.dataSources.filter = filtervalue.trim().toLowerCase();
}

Edit(post: any) {
    post.isEdit= true
  }
  
  save($event:any, post: any, key: any){
    post[key] = $event.target.value;
    this.dataSources.data.filter((value) => {
      if(value.id === key) {
        this.dataSources.data = post[key];
        
    }
  })
}

handleOnChnage(e: any, post: any, key: any) {
  post[key]= e.target.value
}
 
sortData(sort :Sort) {
    const data = this.posts.slice();

      if(!sort.active || sort.direction === '') {
        this.posts = data;
        return
      }

    const sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'userId':
            return compare(a.userId, b.userId, isAsc);
          case 'id':
            return compare(a.id, b.id, isAsc);
          case 'title':
            return compare(a.title, b.title, isAsc);
          case 'body':
            return compare(a.body, b.body, isAsc);
          default:
            return 0;
        }
    });
        this.dataSources.data = sortedData;
       
}
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
 
  

