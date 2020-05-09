(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),s=a.n(l);a(24),a(25);var o=function(){return r.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},r.a.createElement("span",{class:"navbar-brand mb-0 h1"},"Employee Directory"))};var c=function(e){return r.a.createElement("div",{className:"container"},e.children)},m=a(2),u=a(13),i=a(14),d=a(18),h=a(17),E=a(15),p=a.n(E),f=function(){return p.a.get("https://randomuser.me/api/?results=100&nat=us")},y=a(16),v=a.n(y);var w=function(e){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Photo"),r.a.createElement("th",{className:"thName",onClick:e.sortByFirstName},r.a.createElement("i",{class:"material-icons"},"swap_vert"),"First Name"),r.a.createElement("th",{className:"thName",onClick:e.sortByLastName},r.a.createElement("i",{class:"material-icons"},"swap_vert"),"Last Name"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"DOB"))),r.a.createElement("tbody",null,e.employees.map((function(e){return r.a.createElement("tr",{className:"tableRow",key:e.login.uuid},r.a.createElement("td",null,r.a.createElement("img",{alt:e.name.first+" "+e.name.last,className:"employeePic",src:e.picture.medium})),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement(v.a,{format:"MM/DD/YYYY"},e.dob.date)))}))))};var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"searchBox form-control",placeholder:"Search by last name",id:"search"})))},b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],selectedEmployees:[],sortOrder:""},e.handleInputChange=function(t){var a=t.target.value,n=e.state.employees.filter((function(e){return e.name.last.toLowerCase().includes(a.toLowerCase())}));e.setState(Object(m.a)(Object(m.a)({},e.state),{},{selectedEmployees:n}),console.log("state",e.state))},e.sortByLastName=function(){var t=e.state.selectedEmployees;if("asc"===e.state.sortOrder){var a=t.sort((function(e,t){return e.name.last.toLowerCase()>t.name.last.toLowerCase()?1:-1}));e.setState({selectedEmployees:a,sortOrder:"desc"})}else{var n=t.sort((function(e,t){return e.name.last.toLowerCase()<t.name.last.toLowerCase()?1:-1}));e.setState({selectedEmployees:n,sortOrder:"asc"})}},e.sortByFirstName=function(){var t=e.state.selectedEmployees;if("asc"===e.state.sortOrder){var a=t.sort((function(e,t){return e.name.first.toLowerCase()>t.name.first.toLowerCase()?1:-1}));e.setState({selectedEmployees:a,sortOrder:"desc"})}else{var n=t.sort((function(e,t){return e.name.first.toLowerCase()<t.name.first.toLowerCase()?1:-1}));e.setState({selectedEmployees:n,sortOrder:"asc"})}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.setState({employees:t.data.results,selectedEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{handleInputChange:this.handleInputChange}),r.a.createElement(w,{employees:this.state.selectedEmployees,sortByLastName:this.sortByLastName,sortByFirstName:this.sortByFirstName}))}}]),a}(n.Component);var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement(c,null,r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b1603a97.chunk.js.map