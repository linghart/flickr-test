(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["48be1ea9"],{4798:function(t,e,n){"use strict";var s=n("e07f"),i=n.n(s);i.a},"5fe0":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[t.user?n("table",{staticClass:"table"},[n("tr",[n("td",[t._v("User name")]),n("td",[t._v(t._s(t.user.username))])]),n("tr",[n("td",[t._v("Email")]),n("td",[t._v(t._s(t.user.email))])]),n("tr",[n("td",[t._v("Role")]),n("td",[t._v(t._s(t.user.role))])]),n("tr",[n("td",[t._v("Created at")]),n("td",[t._v(t._s(t.user.created_at))])])]):t._e()])},i=[];s._withStripped=!0;var r={props:["id"],name:"ViewUser",data:function(){return{user:null}},methods:{init:function(){var t=this,e="admin/get-user",n={id:this.id};this.axios.post(e,n).then(function(e){console.log("user",e),t.user=e.data}).catch(function(t){console.log(t)})}},mounted:function(){this.init()}},a=r,u=(n("4798"),n("2877")),o=Object(u["a"])(a,s,i,!1,null,null,null);o.options.__file="view_user.vue";e["default"]=o.exports},e07f:function(t,e,n){}}]);