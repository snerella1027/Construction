import { Component } from '@angular/core';
import {Router} from "@angular/router";
import * as $ from  "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLogin:boolean;
  isEmployee=false;
  constructor(private router: Router) { }
  ngOnInit() {
    $(document).ready(function() {
          });
  }
  goToCustomer=function () {
    this.isLogin=true;
    this.router.navigate(['./customer']);
  }
  logout=function () {
    $('[data-dismiss=modal]').trigger({ type: 'click' });
    $('#dataToggle').click();
    //$("#navbarResponsive").toggle("collapse");
    //localStorage.setItem('isLoggedin',"false");
    this.isLogin=false;
    //this.app.isEmployee=false;
    this.router.navigate(['./login']);
  }
  goToIssues=function () {
    this.isLogin=true;
    this.router.navigate(['./raiseIssues']);
  }

  goToMeterialDashBoard=function () {
    this.isLogin=true;
    this.router.navigate(['./meterialDashBoard']);
  }
}
