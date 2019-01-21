import 'antd/dist/antd.min.css'
import 'antd/dist/antd.min'
import 'frappe-gantt/dist/frappe-gantt.min'
import 'frappe-gantt/dist/frappe-gantt.css'
import './main.css'
import $ from "jquery"
import React from "react";

var loginFunction = function () {
  var data = JSON.stringify({
    // "j_username": this.state.userId,
    // "j_password": this.state.password,
    "j_username": "******",
    "j_password": "******",
    "appId": "rqp"
  });

  var defer = $.Deferred();
  $.ajax({
    method: 'POST',
    url: '/hwe/services/awpf/platform/authentication/login',
    data: data,
    dataType: "json",
    contentType: "application/json",
    xhrFields: {
      withCredentials: true // 携带跨域cookie
    },
    crossDomain:true,
  }).done(function (data,textStatus,request) {
    // console.log(request.getResponseHeader("Set-Cookie"));
    // console.log(request.getResponseHeader("JSESSIONID"));
    defer.resolve(data);

  }).fail(function (response) {
    defer.reject({error: true, msg: response.responseText});

  });
  return defer.promise();

};

var processList =null;

var getTemplateDetail =function () {

  var defer = $.Deferred();
  $.ajax({
    method: 'GET',
    url: '/hwe/services/epm/rest/process/processtemplates',
    // data: data,
    dataType: "json",
    contentType: "application/json",
    xhrFields: {
      withCredentials: true // 携带跨域cookie
    },
    crossDomain:true,
  }).done(function (data,textStatus,request) {
    console.log("hello")
    if(data!=null ){

      console.log(data)
      processList =data;
      // const processDetail = JSON.parse(data);
      // console.log(processDetail)
    }
  }).fail(function (response) {
    defer.reject({error: true, msg: response.responseText});

  });
  return defer.promise();
};

// loginFunction();
// getTemplateDetail();
