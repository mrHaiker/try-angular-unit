import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { NavbarComponent } from './navbar/navbar.component';
import { View1Component } from './view/view1/view1.component';
import { View2Component } from './view/view2/view2.component';
import { MembersComponent } from './members/members.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    View1Component,
    View2Component,
    MembersComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
