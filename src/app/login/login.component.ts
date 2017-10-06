import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import * as $ from  "jquery";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginAs;

  constructor(private router: Router,private app:AppComponent) { }
  ngOnInit(){
    this.app.isEmployee=false;


    localStorage.setItem("isLoggedin","false");
    $(document).ready(function() {
      $('<link>').appendTo('head').attr({
        type: 'text/css',
        rel: 'stylesheet',
        href: '../../assets/vendor/bootstrap/css/bootstrap.min.css'
      });
    })
    }

  login=function () {
    this.app.isLogin=true;
    //localStorage.setItem('isLoggedin',"true");
    if(this.loginAs=="employee"){
      this.router.navigate(['./raiseIssues']);
    }else {
      this.router.navigate(['./customer']);
    }
  }

  changeDropDown=function () {

    this.loginAs=$("#loginAs").val();
    if(this.loginAs=="employee"){
      this.app.isEmployee=true;
      $("#depmartment").show();
    }else{
      this.app.isEmployee=false;
      $("#depmartment").hide();
    }
  }

}
