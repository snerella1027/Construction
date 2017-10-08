import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {CustomerComponent} from "./customer/customer.component";
import {LoginComponent} from "./login/login.component";
import {IssuesComponent} from "./issues/issues.component";
import {MeterialdashboardComponent} from "./meterialdashboard/meterialdashboard.component";

const routes: Routes = [
  { path: 'customer', component: CustomerComponent},
  { path: 'login', component: LoginComponent},
  { path: 'raiseIssues', component: IssuesComponent},
  { path: 'meterialDashBoard', component: MeterialdashboardComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
