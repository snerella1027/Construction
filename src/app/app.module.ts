import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import {routing} from "./app.routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { IssuesComponent } from './issues/issues.component';
import { MeterialdashboardComponent } from './meterialdashboard/meterialdashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    IssuesComponent,
    MeterialdashboardComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
