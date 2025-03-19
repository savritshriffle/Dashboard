import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  posts: any[] = [];
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
      this.service.getPosts().subscribe((data) =>{
        // console.log(data)
        this.posts = data;
      })
    
  }
}
