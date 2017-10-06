import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import * as $ from 'jquery';
import * as toastr from 'toastr';
import {AppComponent} from "../app.component";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor(private app:AppComponent) {
  }
customers=[];
  isCustomerUpdate=false;
  updateCustomerIndex;
  customerForm: FormGroup;
  ngOnInit() {
    this.app.isLogin=true;
    toastr.options = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-top-right',
      'preventDuplicates': false,
      'onclick': null,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    }
    $(document).ready(function() {
      $('<link>').appendTo('head').attr({
        type: 'text/css',
        rel: 'stylesheet',
        href: '../../assets/vendor/bootstrap/css/bootstrap.min.css'
      });
      $('<link>').appendTo('head').attr({type: 'text/css', rel: 'stylesheet', href: './../../assets/datepicker/datepicker.min.css'});
      $.getScript( './../../assets/datepicker/datepicker.min.js' );
      $.getScript( './../../assets/datepicker/datepicker.en.js' );



    });
    this.customerForm=this.resetCusgtomerForm();
    var customer={
      block:"1",
      buildingNumber:"5",
      ownerName:"Vinayaka Varma",
      ownerEmail:"vinayakavarma@gmail.com",
      mobileNumber:"8000980009"
    }
    this.customers.push(customer);
  }
  openNewCustomerForm=function () {
    this.isCustomerUpdate=false;
    this.customerForm=this.resetCusgtomerForm();
  }
  saveCustomer=function (customerObj) {
    var customer={
      block:customerObj.block,
      buildingNumber:customerObj.buildingNumber,
      ownerName:customerObj.ownerName,
      ownerEmail:customerObj.ownerEmail,
      mobileNumber:customerObj.mobileNumber,
    }
    if(this.isCustomerUpdate==true){
      this.customers[this.updateCustomerIndex] = customerObj;
      this.isCustomerUpdate=false;
      toastr.success('Customer Updated Successfully...');
    }else {
      toastr.success('Customer Saved Successfully...');
      this.customers.push(customer);
    }
    $('[data-dismiss=modal]').trigger({ type: 'click' });

  }
  updateCustomer=function (updateCustomerObj,index) {
    this.updateCustomerIndex=index;
    this.isCustomerUpdate=true;
   this.customerForm= new FormGroup({
      block:new FormControl(updateCustomerObj.block),
      buildingNumber:new FormControl(updateCustomerObj.buildingNumber),
      ownerName:new FormControl(updateCustomerObj.ownerName),
      ownerEmail:new FormControl(updateCustomerObj.ownerEmail),
      registraionNumber:new FormControl(updateCustomerObj.registraionNumber),
      registrationDate:new FormControl(updateCustomerObj.registrationDate),
      mobileNumber:new FormControl(updateCustomerObj.mobileNumber)
  })
  }
  deleteCustomer=function (index) {
    this.customers.splice(index,1);
    toastr.success('Customer Deleted Successfully...');
  }
resetCusgtomerForm=function () {
  return  new FormGroup({
    block:new FormControl(''),
    buildingNumber:new FormControl(''),
    ownerName:new FormControl(''),
    ownerEmail:new FormControl(''),
    registraionNumber:new FormControl(''),
    registrationDate:new FormControl(''),
    mobileNumber:new FormControl('')
  });
}

}
