(this.webpackJsonpcal_kids=this.webpackJsonpcal_kids||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),s=(a(19),a(20),a(1)),i=(a(21),a(12)),u=a(25),m=r.a.createContext({}),o=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(s.a)(a,2),l=c[0],i=c[1];return r.a.createElement(m.Provider,{value:{startState:l,setStartState:i}},t)},d=a(11),E=a.n(d);var f=function(){var e=Object(i.a)(""),t=e.register,a=e.handleSubmit,c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],d=l[1],f=Object(n.useContext)(m),v=f.startState,p=f.setStartState;Object(n.useEffect)((function(){}),[o]);var b=function(){return""!==o?r.a.createElement("h1",null,"Playing: ",o):r.a.createElement("h1",null)},g=function(e){var t=e.label,a=e.register,n=e.required;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Start with your name"),r.a.createElement("input",{name:t,ref:a({required:n})}))};return v?r.a.createElement(u.a,{xs:12,md:12,lg:12},r.a.createElement("div",{className:"landing-section"},r.a.createElement(b,null))):r.a.createElement(u.a,{xs:12,md:12,lg:12},r.a.createElement("div",{className:"landing-section"},r.a.createElement(E.a,{className:"landing-margin"},r.a.createElement("h1",null,"Cal Kids")),r.a.createElement("form",{onSubmit:a((function(e){d(e.Name),p(!0),console.log(v)}))},r.a.createElement(g,{label:"Name",register:t,required:!0}),r.a.createElement("input",{type:"submit",value:"Start"})),r.a.createElement(b,null)))},v=(a(23),a(27)),p=a(26);var b=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),o=i[0],d=i[1],E=Object(n.useState)("+"),f=Object(s.a)(E,2),b=f[0],g=f[1],S=Object(n.useState)(""),h=Object(s.a)(S,2),j=h[0],O=h[1],N=Object(n.useContext)(m);N.startState,N.setStartState;var k=function(e,t){if(""===t)return r.a.createElement("div",{className:"value-display ".concat(e,"-section")},r.a.createElement("h3",null,e));for(var a=[],n=0;n<t;n++)a.push(r.a.createElement("li",{key:n,className:"apple"}));return r.a.createElement("div",{className:"value-display ".concat(e,"-section")},r.a.createElement("h3",null,e,": ",t," "),r.a.createElement("ul",null,a))},y=function(){return r.a.createElement("div",{id:"display"},k("Value1",a),r.a.createElement(v.a,{size:"lg",variant:"primary",disabled:!0},b),k("Value2",o),r.a.createElement(v.a,{size:"lg",variant:"warning",className:"clearpad",onClick:function(e){return c(""),d(""),g("+"),void O("")}},"Clear"),r.a.createElement(v.a,{size:"lg",variant:"info",className:"keypad",onClick:function(){""!==a&&""!==o&&O("+"===b?parseInt(a)+parseInt(o):"-"===b?parseInt(a)-parseInt(o):"x"===b?parseInt(a)*parseInt(o):parseInt(a)/parseInt(o))}},"Cal"))};Object(n.useEffect)((function(){}),[a]),Object(n.useEffect)((function(){}),[o]),Object(n.useEffect)((function(){}),[b]);var x=["+","-","x","\xf7"].map((function(e){return r.a.createElement(v.a,{size:"lg",variant:"primary",key:e,className:"calpad",value:e,onClick:function(e){return function(e){g(e.currentTarget.value)}(e)}},e)})),w=["0","1","2","3","4","5","6","7","8","9"].map((function(e){return r.a.createElement(v.a,{size:"lg",variant:"success",key:e,className:"keypad",value:e,onClick:function(e){return function(e){""===a?c(e.currentTarget.value):""===o&&d(e.currentTarget.value)}(e)}},e)}));return r.a.createElement(u.a,{xs:12,md:12,lg:12},r.a.createElement(p.a,null,r.a.createElement(u.a,{className:"sub-section",xs:10,md:5,lg:5},k("Answer",j)),r.a.createElement(u.a,{className:"sub-section",xs:10,md:5,lg:5},r.a.createElement(y,null))),r.a.createElement(u.a,{className:"pads-section",xs:10,md:4,lg:3},r.a.createElement("div",{id:"calpads"},x),r.a.createElement("div",{id:"keypads"},w)))};var g=function(){var e=Object(n.useContext)(m),t=e.startState;return e.setStartState,t?r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(b,null)):r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.43d088f2.chunk.js.map