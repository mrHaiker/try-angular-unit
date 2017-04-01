import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {Person} from "../person/person.component";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {
  memberList: Array<Person> = [];
  query: string;

  constructor(private http:Http, private router:Router) { }

  ngOnInit() {
    this.search();
  }

  getData() {
      return this.http.get('app/data/people.json')
      .toPromise()
      .then(response => response.json());
  }

  searchQuery(q:string) {
      if (!q || q === '*') {
        q = '';
      } else {
        q = q.toLowerCase();
      }
      return this.getData()
        .then(data => {
        let results:Array<Person> = [];
        data.map(item => {
          if (JSON.stringify(item).toLowerCase().includes(q)) {
            results.push(item);
          }
        });
        return results;
      });
  }

  search(): void {
    this.searchQuery(this.query)
    .then(results => this.memberList = results);
  }
  viewDetails(id:number) {
    this.router.navigate(['/person', id]);
  }
}
