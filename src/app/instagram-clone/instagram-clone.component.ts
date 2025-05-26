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
  public commentInput: {[key: string]: string | {}} = {};
  public showComments: {[key: string]: string | {}} = {};
  public isEdit: {[key: string]: string | boolean} = {};

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
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    this.service.updateData(id, {likes: post.likes}).subscribe();
  }

  public openText(i: number) {
    this.showComments[i] = !this.showComments[i];
    this.isEdit[i] = !this.isEdit[i];
  }

  public onComment(i: number, id: number) {
    const post = this.post.find((value: {[key: string]: number}) => value['id'] === id);
    const user = this.user.username;
    const text = this.commentInput[i];

    post.comments.push({
      id: Date.now(),
      username: user,
      text: text
    });
     
    this.service.updateData(id, {comments :post.comments}).subscribe();
    this.commentInput[i] = '';
  } 

  onEditComment(data: any, index: number) {
    this.isEdit[index] = true;
    this.commentInput[index] = data.comments[index].text;
    console.log(data.comments[index].text);
    console.log(this.commentInput[index]);
    console.log(index)
    // this.service.updateData(index, {comments: data.comments[index].text}).subscribe();
  }

}
