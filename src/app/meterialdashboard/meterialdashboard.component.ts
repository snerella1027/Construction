import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as toastr from 'toastr';
@Component({
  selector: 'app-meterialdashboard',
  templateUrl: './meterialdashboard.component.html',
  styleUrls: ['./meterialdashboard.component.css']
})
export class MeterialdashboardComponent implements OnInit {

  constructor() { }
  steelAvailableStock=10;
  steelUsedStock:any=5;
  amount=0;
  steelAvailableInfo='(Available Stock)';
  steelUsedInfo='(Used Stock)';
  customerSteelOrderInfo=[];
  ngOnInit() {
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
      $.getScript( './../../assets/drag/draggable-cards.js' );
      $.getScript( './../../assets/drag/jquery-ui.min.js' );

      $('.close').click("on",function(){
        debugger;
        //$(this).parent('li:first-child').remove();
        //var $target = $(this).parents('li');
        var $target = $(this).closest('li');
        $target.hide('slow', function(){ $target.remove(); });

        //$(this).hide('slow', function(){ $(this).('.col-md-12').remove();});

      });


      $('.imgSmile').width(50);
      $('.imgSmile').mouseover(function()
      {
        $(this).css("cursor","pointer");
        $(this).animate({width: "200px"}, 'slow');
      });

      $('.imgSmile').mouseout(function()
      {
        $(this).animate({width: "50px"}, 'slow');
      });
    });

  }
  showAmount=function () {
    this.amount=$("#quantity").val()*50;
  }
  saveSteelInforMation=function () {
toastr.success($("#stellType").val()+" "+$("#size").val()+" Assgined To Customer From Stock ")
var changeAvailableStock=$("#quantity").val();
this.steelAvailableStock=this.steelAvailableStock-changeAvailableStock;
this.steelUsedStock=parseFloat(this.steelUsedStock)+parseFloat(changeAvailableStock);

var tempSteelOrderInfo={
  stellType:$("#stellType").val(),
  size:$("#size").val(),
  quantity:$("#quantity").val(),
  amount:$("#amount").val()
}
this.customerSteelOrderInfo.push(tempSteelOrderInfo);
  }




}
