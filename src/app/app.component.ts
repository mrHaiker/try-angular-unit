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
    this.comments.unshift('a sample comment');
  }
}
