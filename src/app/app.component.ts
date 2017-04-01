import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments: Array<string>;
  newComment: string;

  constructor() {
    this.comments = [];
  }

  add(comment:string) {
    console.log(comment);
    let commentObj:any = {title: comment, likes: 0};
    this.comments.unshift(commentObj);
  }

  like(comment) {
      comment.likes++;
  }
}
