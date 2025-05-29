import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-instagram-clone',
  templateUrl: './instagram-clone.component.html',
  styleUrls: ['./instagram-clone.component.css']
})
export class InstagramCloneComponent implements OnInit{
  public post: any = [];
  public user: any = [];
  public commentInput: {[key: string]: string | {}} = {};
  public showComments: {[key: string]: string | {}} = {};
  public isShow!: boolean;
  public getCommentIndex!: number;
  
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
  }

  public onComment(postIndex: number, id: number) {
    const post = this.post.find((value: {[key: string]: number}) => value['id'] === id);
    const user = this.user.username;
    const text = this.commentInput[postIndex];

    if(!this.isShow) {
      post.comments.push({
        id: Date.now(),
        username: user,
        text: text
    });
    }
    else {
    
      post.comments[this.getCommentIndex].text = text;
      // console.log(post.comments[this.getCommentIndex].text)
    }
    
    this.service.updateData(id, {comments :post.comments}).subscribe();
    this.commentInput[postIndex] = '';
    this.isShow = false;
  } 

  public onEdit(id: number, commentIndex: number, postIndex: number) {
    this.getCommentIndex = commentIndex;

    const post = this.post.find((value: {[key: string]: number}) => value['id'] === id);
    const updateText = post.comments[commentIndex].text;
    // console.log(updateText)
    this.isShow = !this.isShow;
  
    this.commentInput[postIndex] = updateText;
    const newComment = this.commentInput[postIndex];

    post.comments[commentIndex].text = newComment;
  }

  public onDelete(id: number, index: number) {
    const post = this.post.find((value: {[key: string]: number}) => value['id'] === id);
    post.comments.splice(index, 1);
    this.service.updateData(id, {comments :post.comments}).subscribe();
  }

}
