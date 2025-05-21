import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-instagram-clone',
  templateUrl: './instagram-clone.component.html',
  styleUrls: ['./instagram-clone.component.css']
})
export class InstagramCloneComponent implements OnInit{
  public post: [key: string] | any;
  public comment: string = '';
  public showComment: boolean = false;
  public data!: number;
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.post = data;
    });
  }

  public onLike(id: number) {
    for(let like of this.post){
      if(like.id === id) {
        this.data = like.likes+1;
        console.log(this.data);
      }
    }
    this.service.updateData(id, this.data);
  }

  public onComment() {
    this.showComment = true;
    console.log(this.comment)
  } 
}
