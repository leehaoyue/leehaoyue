(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e8f98c"],{"41a2":function(e,t,r){"use strict";var n=r("9071"),i=r.n(n);i.a},9071:function(e,t,r){},d78e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("New Role")]),e._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[r("el-table-column",{attrs:{align:"center",label:"Role Key",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.key)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"Role Name",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"header-center",label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.description)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.handleEdit(t)}}},[e._v("Edit")]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return e.handleDelete(t)}}},[e._v("Delete")])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"Name"}},[r("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Desc"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Menus"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("Confirm")])],1)],1)],1)},i=[],o=(r("8e6e"),r("456d"),r("bd86")),a=(r("7f7f"),r("6762"),r("2fdb"),r("75fc")),l=(r("ac4d"),r("8a81"),r("ac6a"),r("96cf"),r("3b8d")),s=r("df7c"),c=r.n(s),u=r("ed08"),h=r("b775");function d(){return Object(h["a"])({url:"/routes",method:"get"})}function f(){return Object(h["a"])({url:"/roles",method:"get"})}function p(e){return Object(h["a"])({url:"/role",method:"post",data:e})}function b(e,t){return Object(h["a"])({url:"/role/".concat(e),method:"put",data:t})}function g(e){return Object(h["a"])({url:"/role/".concat(e),method:"delete"})}function v(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={key:"",name:"",description:"",routes:[]},w={data:function(){return{role:Object.assign({},y),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,this.serviceRoutes=t.data,this.routes=this.generateRoutes(t.data);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRoles:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,this.rolesList=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),generateRoutes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],n=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var s=a.value;if(!s.hidden){var u=this.onlyOneShowingChild(s.children,s);s.children&&u&&!s.alwaysShow&&(s=u);var h={path:c.a.resolve(t,s.path),title:s.meta&&s.meta.title};s.children&&(h.children=this.generateRoutes(s.children,h.path)),r.push(h)}}}catch(d){i=!0,o=d}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return r},generateArr:function(e){var t=this,r=[];return e.forEach(function(e){if(r.push(e),e.children){var n=t.generateArr(e.children);n.length>0&&(r=[].concat(Object(a["a"])(r),Object(a["a"])(n)))}}),r},handleAddRole:function(){this.role=Object.assign({},y),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(u["c"])(e.row),this.$nextTick(function(){var e=t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(t.generateArr(e)),t.checkStrictly=!1})},handleDelete:function(e){var t=this,r=e.$index,n=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g(n.key);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}},e)}))).catch(function(e){console.error(e)})},generateTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments.length>2?arguments[2]:void 0,n=[],i=!0,o=!1,a=void 0;try{for(var l,s=e[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var u=l.value,h=c.a.resolve(t,u.path);u.children&&(u.children=this.generateTree(u.children,h,r)),(r.includes(h)||u.children&&u.children.length>=1)&&n.push(u)}}catch(d){o=!0,a=d}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}return n},confirmRole:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,r,n,i,o,a,l,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="edit"===this.dialogType,r=this.$refs.tree.getCheckedKeys(),this.role.routes=this.generateTree(Object(u["c"])(this.serviceRoutes),"/",r),!t){e.next=16;break}return e.next=6,b(this.role.key,this.role);case 6:n=0;case 7:if(!(n<this.rolesList.length)){e.next=14;break}if(this.rolesList[n].key!==this.role.key){e.next=11;break}return this.rolesList.splice(n,1,Object.assign({},this.role)),e.abrupt("break",14);case 11:n++,e.next=7;break;case 14:e.next=22;break;case 16:return e.next=18,p(this.role);case 18:i=e.sent,o=i.data,this.role.key=o.key,this.rolesList.push(this.role);case 22:a=this.role,l=a.description,s=a.key,c=a.name,this.dialogVisible=!1,this.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: ".concat(s,"</div>\n            <div>Role Nmae: ").concat(c,"</div>\n            <div>Description: ").concat(l,"</div>\n          "),type:"success"});case 25:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=null,n=e.filter(function(e){return!e.hidden});return 1===n.length?(r=n[0],r.path=c.a.resolve(t.path,r.path),r):0===n.length&&(r=m({},t,{path:"",noShowingChildren:!0}),r)}}},k=w,O=(r("41a2"),r("2877")),R=Object(O["a"])(k,n,i,!1,null,"2004db97",null);t["default"]=R.exports}}]);