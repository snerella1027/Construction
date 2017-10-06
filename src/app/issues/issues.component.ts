import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import * as $ from 'jquery';
import * as toastr from 'toastr';
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  tempIssueId;
  updateIssueIndex;
  issues=[];
  issueStatus=[];
  constructor() { }
  issueForm:FormGroup;
  selectedStatus;
  ngOnInit() {
    this.issueStatus = [{ 'status': 'Open'},{ 'status': 'ReOpen'},{ 'status': 'Close'},{ 'status': 'InProgress'},
      { 'status': 'Complete'}, { 'status': 'Assigned'}];
    this.selectedStatus="Open";
    $(document).ready(function() {
      $('<link>').appendTo('head').attr({
        type: 'text/css',
        rel: 'stylesheet',
        href: '../../assets/vendor/bootstrap/css/bootstrap.min.css'
      });
    });
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
    this.tempIssueId=1;
    var issueDet={
      issueId:this.tempIssueId,
      issueType:"Water Leakage",
      block:"2",
      buildingNumber:"5",
      customerName:"Shankaraiah Varma",
      customerEmail:"shankaraiah@gmail.com",
      mobileNumber:"8000980009"
    }
    this.issues.push(issueDet);
    this.issueForm=this.getInitialIssueForm();
  }


  getInitialIssueForm=function () {
    return new FormGroup({
      issueId:new FormControl(''),
      issueType:new FormControl(''),
      block:new FormControl(""),
      buildingNumber:new FormControl(''),
      customerName:new FormControl(''),
      customerEmail:new FormControl(''),
      mobileNumber:new FormControl('')
    });
  }

  openNewIssueForm=function () {
    this.isIssueUpdate=false;
    this.issueForm=this.getInitialIssueForm();
  }
  saveIssue=function (issueObject) {
    var issueDet={
      issueId:this.tempIssueId+1,
      issueType:issueObject.issueType,
      block:issueObject.block,
      buildingNumber:issueObject.buildingNumber,
      customerName:issueObject.customerName,
      customerEmail:issueObject.customerEmail,
      mobileNumber:issueObject.mobileNumber
    }
    if(this.isIssueUpdate==true){
      this.issues[this.updateIssueIndex] = issueDet;
      this.isIssueUpdate=false;
      toastr.success("Issue Updated Successfully..");
    }else {
      toastr.success('Issue Raised Successfully...');
      this.issues.push(issueDet);
    }
    $('[data-dismiss=modal]').trigger({ type: 'click' });
  }
  updateIsuue=function (issue,index) {
    this.updateIssueIndex=index;
    this.isIssueUpdate=true;
    this.issueForm= new FormGroup({
      issueId:new FormControl(issue.issueId),
      issueType:new FormControl(issue.issueType),
      block:new FormControl(issue.block),
      buildingNumber:new FormControl(issue.buildingNumber),
      customerName:new FormControl(issue.customerName),
      customerEmail:new FormControl(issue.customerEmail),
      mobileNumber:new FormControl(issue.mobileNumber)

    });

  }
}
