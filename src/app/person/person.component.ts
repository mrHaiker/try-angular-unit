import {ActivatedRoute, Params, Router} from "@angular/router";
import {Http} from "@angular/http";
import {Component, OnInit} from "@angular/core";
import 'rxjs/add/operator/toPromise';

export class Person {
  id:number;
  name:string;
  phone:string;
  address:Address;

  constructor(obj?:any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.phone = obj && obj.phone || null;
    this.address = obj && obj.address || null;
  }
}

export class Address {
  street:string;
  city:string;
  state:string;
  zip:string;

  constructor(obj?:any) {
    this.street = obj && obj.street || null;
    this.city = obj && obj.city || null;
    this.state = obj && obj.state || null;
    this.zip = obj && obj.zip || null;
  }
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {
  person: Person;
  constructor(private http:Http, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = +params['id'];
       this.getPerson(id).then(person => {
         this.person = person;
       });
     });
  }

  getPerson(id:number) {
    return this.getData().then(data => data.find(member => member.id === id));
  }

  getData() {
    return this.http.get('app/data/people.json')
      .toPromise()
      .then(response => response.json());
  }
}

