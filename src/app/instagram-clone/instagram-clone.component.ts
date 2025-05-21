import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-instagram-clone',
  templateUrl: './instagram-clone.component.html',
  styleUrls: ['./instagram-clone.component.css']
})
export class InstagramCloneComponent implements OnInit{
  public posts: [] = [];
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.posts = data;
      console.log(this.posts)
    })
  }
}
