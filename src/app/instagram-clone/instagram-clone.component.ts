import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-instagram-clone',
  templateUrl: './instagram-clone.component.html',
  styleUrls: ['./instagram-clone.component.css']
})
export class InstagramCloneComponent implements OnInit{
  public post: any;
  public user: any;
  public commentInput: string = '';
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.post = data;
    });

    this.service.getUsreData().subscribe((data) => {
      this.user = data;
    });
  }

  public onLike(id: number) {
    const post = this.post.find((value: {[key: string]: number}) => value['id'] === id);
    post.liked =!post.liked
    post.likes += post.liked ? 1: -1;
    this.service.updateData(id, {likes: post.likes}).subscribe();
  }

  public openText(id: number) {
    const post = this.post.find((value: {[key: string]: number}) => value['id'] === id);
    for(let p of post.comments) {
      post.comments[0].commentLength = [p.text].length;
      console.log("opentext", post)
    }
  }

  public onComment(id: number) {
    const post = this.post.find((value: {[key: string]: number}) => value['id'] === id);
    for(let p of post.comments){
      p.commentInput = [];
      p.commentInput = this.commentInput;
      console.log(this.commentInput)
      this.service.updateData(id, {comment :p.commentInput}).subscribe();
    }
  } 
}
