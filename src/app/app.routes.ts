import {Routes} from "@angular/router";
import {View2Component} from "./view/view2/view2.component";
import {View1Component} from "./view/view1/view1.component";
import {MembersComponent} from "./members/members.component";
import {PersonComponent} from "./person/person.component";

export const rootRouterConfig:Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    component: View1Component
  },
  {
    path: 'view2',
    component: View2Component
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'person/:id',
    component: PersonComponent
  }
];
