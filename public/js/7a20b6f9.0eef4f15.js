(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7a20b6f9"],{"0ae9":function(t,e,a){},"7b3d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$store.state.auth.loggedIn?a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-layout-header",[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"mdi-menu"}})],1),"home"!=t.$route.name?a("q-btn",{attrs:{flat:"",dense:"",round:"",label:"back"},on:{click:t.back}},[a("q-icon",{attrs:{name:"mdi-arrow-left"}})],1):t._e(),a("q-toolbar-title",{staticClass:"gt-sm hidden-sm"},[t._v("\n        QL Platform\n        ")]),a("q-tabs",{staticClass:"float-right"},[a("q-route-tab",{attrs:{slot:"title",to:"/",icon:"mdi-home"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",to:"profile",icon:"mdi-face"},slot:"title"}),a("q-tab",{attrs:{slot:"title",icon:"mdi-logout-variant"},on:{click:function(e){t.logout()}},slot:"title"})],1)],1)],1),a("q-layout-drawer",{attrs:{"content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("q-item",{nativeOn:{click:function(e){t.$router.push({name:"home"})}}},[a("q-item-side",{attrs:{icon:"mdi-home"}}),a("q-item-main",{attrs:{label:"Home"}})],1),"admin"==this.$store.state.auth.User.role?a("q-item",{nativeOn:{click:function(e){t.$router.push({name:"admin"})}}},[a("q-item-side",{attrs:{icon:"mdi-tune"}}),a("q-item-main",{attrs:{label:"Admin"}})],1):t._e()],1)],1),a("q-page-container",{staticStyle:{"padding-top":"54px"}},[a("router-view")],1)],1):t._e()},o=[];n._withStripped=!0;var r=a("3156"),i=a.n(r),s=a("a60d"),l=function(t,e){if(s["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(t,{openExternal:!0});var a=window.open(t,"_blank");if(a)return a.focus(),a;e&&e()},u=a("2f62"),c={name:"LayoutDefault",data:function(){return{leftDrawerOpen:!0,leftOverlay:!1,leftBreakpoint:992,hasUserInfo:!1}},computed:{userName:function(){return this.$store.state.auth.User.firstName+" "+this.$store.state.auth.User.lastName},userBalance:function(){return this.$store.state.auth.User.balance}},methods:i()({back:function(){window.history.go(-1)}},Object(u["b"])("auth",["LOGIN_OK"]),{openURL:l,logout:function(){this.$auth.logout({makeRequest:!0,redirect:"/login",success:function(){console.log("success ")},error:function(){console.log("error ")}})}}),mounted:function(){var t=this;this.$auth.fetch({}).then(function(e){t.hasUserInfo=!0,t.LOGIN_OK(e),t.$auth.user().role=t.$store.state.auth.User.role})}},f=c,m=(a("f70f"),a("2877")),d=Object(m["a"])(f,n,o,!1,null,null,null);d.options.__file="default.vue";e["default"]=d.exports},f70f:function(t,e,a){"use strict";var n=a("0ae9"),o=a.n(n);o.a}}]);