(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{24:function(e,t,r){},25:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(12),a=r.n(s),i=(r(24),r(25),r(13)),l=r(14),o=r(19),d=r(17),h=r(18),j=r(0);var u=function(e){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Image"}),Object(j.jsx)("th",{children:"Name "}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Phone"}),Object(j.jsx)("th",{children:"Birthdate"})]})}),Object(j.jsx)("tbody",{children:e.employees.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:e.picture.thumbnail})}),Object(j.jsx)("td",{children:e.name.first}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.phone}),Object(j.jsx)("td",{children:e.dob.date})]},e.cell)}))})]})})};var b=function(e){return Object(j.jsx)("div",{className:"searchbox",children:Object(j.jsxs)("form",{className:"form-inline",children:[Object(j.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search by name","aria-label":"Search",onChange:function(t){return e.handleSearch(t)}}),Object(j.jsx)("button",{className:"btn btn-primary my-2 my-sm-0",type:"submit",children:"Search"}),Object(j.jsx)("button",{onClick:e.handleSort,children:"Sort By Name"})]})})};var m=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Employee Directory"})})},p=r(16),f=r.n(p),O=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],filteredEmployees:[]},e.handleSearch=function(t){var r=e.state.employees.filter((function(e){return e.name.first.toLowerCase().includes(t.target.value.toLowerCase())}));e.setState({filteredEmployees:r})},e.handleSort=function(){var t=e.state.employees.filter((function(e){return e.name.first.toLowerCase().sort((function(e,t){return e.first.localeCompare(t.first)}))}));e.setState({filteredEmployees:t})},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://randomuser.me/api/?results=10").then((function(t){console.log(t.data.results),e.setState({employees:t.data.results,filteredEmployees:t.data.results})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{children:"Hello"}),Object(j.jsx)(b,{handleSearch:this.handleSearch,handleSort:this.handleSort}),Object(j.jsx)(u,{employees:this.state.filteredEmployees})]})}}]),r}(n.Component);r(45);var x=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(O,{})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,47)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),y()}},[[46,1,2]]]);
//# sourceMappingURL=main.c033bfc4.chunk.js.map