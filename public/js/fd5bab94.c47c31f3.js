(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fd5bab94"],{1132:function(t,n,e){},1152:function(t,n,e){"use strict";var i=e("1132"),a=e.n(i);a.a},1623:function(t,n,e){},4208:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",[e("q-tabs",{attrs:{color:"blue-grey-6"}},[e("q-tab",{attrs:{slot:"title",default:"",name:"users",icon:"mdi-account-multiple"},slot:"title"}),e("q-tab-pane",{attrs:{name:"users"}},[e("index-users")],1)],1)],1)},a=[];i._withStripped=!0;var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{attrs:{padding:""}},[e("q-table",{attrs:{filter:t.terms,"filter-method":t.myFilter,pagination:t.pagination,title:"Users list",data:t.users,columns:t.columns,"row-key":"id"},on:{"update:pagination":function(n){t.pagination=n}},scopedSlots:t._u([{key:"top-right",fn:function(n){return[e("q-search",{staticClass:"col-6",attrs:{"hide-underline":"",color:"secondary"},model:{value:t.terms,callback:function(n){t.terms=n},expression:"terms"}})]}},{key:"body",fn:function(n){return e("q-tr",{staticClass:"cursor-pointer",attrs:{props:n}},t._l(n.cols,function(i){return e("q-td",{key:i.name,class:i.name+"-admin-col",attrs:{props:n}},["action"!=i.name?[t._v("\n    \t\t"+t._s(i.value)+"\t\t\n    \t")]:[e("q-btn",{attrs:{label:"edit",color:"primary"},on:{click:function(e){t.edit(n.row)}}}),e("q-btn",{attrs:{label:"view",color:"primary"},on:{click:function(e){t.view(n.row)}}}),e("q-btn",{attrs:{label:1==n.row.ban?"unban":"ban",color:"red-5"},on:{click:function(e){t.toggleBan(n.row)}}})]],2)}))}}])})],1)},o=[];s._withStripped=!0;var r={name:"userList",data:function(){return{terms:"",users:[],pagination:{sortBy:"created_at",descending:!0,page:1,rowsPerPage:25},columns:[{name:"action",label:"Action",align:"left",style:"width: 130px"},{name:"username",required:!0,label:"Name",align:"left",field:"username",sortable:!0},{name:"created_at",required:!0,label:"Created at",align:"left",field:"created_at",sortable:!0}]}},mounted:function(){this.init()},methods:{toggleBan:function(t){t.ban?this.unban(t):this.ban(t)},ban:function(t){var n=this,e="admin/ban-user",i={id:t.id};this.axios.post(e,i).then(function(t){n.$q.notify({message:"User successfully banned ",color:"positive"}),n.init()}).catch(function(t){console.log(t)})},unban:function(t){var n=this,e="admin/unban-user",i={id:t.id};this.axios.post(e,i).then(function(t){n.$q.notify({message:"User successfully unbanned ",color:"positive"}),n.init()}).catch(function(t){console.log(t)})},edit:function(t){this.$router.push({name:"admin.edit_user",params:{id:t.id}})},view:function(t){this.$router.push({name:"admin.view_user",params:{id:t.id}})},myFilter:function(t,n,e,i){var a=n?n.toLowerCase():"";return t.filter(function(t){return e.some(function(n){return-1!==(i(n,t)+"").toLowerCase().indexOf(a)})})},init:function(){var t=this,n="admin/index-users",e={};this.axios.post(n,e).then(function(n){t.users=n.data,console.log(n)}).catch(function(t){console.log(t)})}}},l=r,u=(e("ec88"),e("2877")),c=Object(u["a"])(l,s,o,!1,null,null,null);c.options.__file="index_users.vue";var d=c.exports,f={components:{"index-users":d}},m=f,p=(e("1152"),Object(u["a"])(m,i,a,!1,null,null,null));p.options.__file="index.vue";n["default"]=p.exports},ec88:function(t,n,e){"use strict";var i=e("1623"),a=e.n(i);a.a}}]);