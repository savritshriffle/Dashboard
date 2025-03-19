import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[] = [];   
  filterData: any[] = []; 
  searchData: string = '';

  currentPage: number = 1;
  Pages: number = 5;

  selectedPost:any = null;

  constructor(private service: ServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe((data) => {
      this.posts = data; 
      this.filterData = data;
    });
  }
  Search(): void {
    if (this.searchData.trim() === '' || isNaN(Number(this.searchData))) 
      {
      return alert("Enter Valid Data");
      }
      this.filterData = this.posts.filter(user =>
      user.userId.toString() === this.searchData || user.id.toString() === this.searchData
    );
  }

  editTask(post: any) {
    const dialogRef = this.dialog.open(ContactComponent, {
      width: '700px',
      height: '50px',
      data: {...post}
    });

    dialogRef.afterClosed().subscribe(updatePost => {
      if(updatePost) {
        const index = this.posts.findIndex(p => p.id === updatePost.id);
        if(index !== -1) {
          this.posts[index] = updatePost;
          this.filterData = [...this.posts];
        }
      }
    })
  }

  
}
