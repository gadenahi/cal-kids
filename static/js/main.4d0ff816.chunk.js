(this.webpackJsonpcal_kids=this.webpackJsonpcal_kids||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),s=(a(18),a(19),a(1)),i=(a(20),a(11)),u=a(24),o=r.a.createContext({}),m=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(s.a)(a,2),l=c[0],i=c[1];return r.a.createElement(o.Provider,{value:{startState:l,setStartState:i}},t)};var d=function(){var e=Object(i.a)(""),t=e.register,a=e.handleSubmit,c=Object(n.useState)(""),l=Object(s.a)(c,2),m=l[0],d=l[1],E=Object(n.useContext)(o),v=E.startState,f=E.setStartState;Object(n.useEffect)((function(){}),[m]);var p=function(){return""!==m?r.a.createElement("h1",null,"Playing: ",m):r.a.createElement("h1",null)},b=function(e){var t=e.label,a=e.register,n=e.required;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Provide Your Name"),r.a.createElement("input",{name:t,ref:a({required:n})}))};return v?r.a.createElement(u.a,{xs:12,md:12,lg:12},r.a.createElement("div",{className:"landing-section"},r.a.createElement(p,null))):r.a.createElement(u.a,{xs:12,md:12,lg:12},r.a.createElement("div",{className:"landing-section"},r.a.createElement("h2",null,"Cal Kids"),r.a.createElement("form",{onSubmit:a((function(e){d(e.Name),f(!0),console.log(v)}))},r.a.createElement(b,{label:"Name",register:t,required:!0}),r.a.createElement("input",{type:"submit",value:"Start"})),r.a.createElement(p,null)))},E=(a(22),a(26)),v=a(25);var f=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),m=i[0],d=i[1],f=Object(n.useState)("+"),p=Object(s.a)(f,2),b=p[0],g=p[1],S=Object(n.useState)(""),j=Object(s.a)(S,2),O=j[0],h=j[1],N=Object(n.useContext)(o);N.startState,N.setStartState;var k=function(e,t){if(""===t)return r.a.createElement("div",{className:"value-display ".concat(e,"-section")},r.a.createElement("h3",null,e));for(var a=[],n=0;n<t;n++)a.push(r.a.createElement("li",{key:n,className:"apple"}));return r.a.createElement("div",{className:"value-display ".concat(e,"-section")},r.a.createElement("h3",null,e,": ",t," "),r.a.createElement("ul",null,a))},y=function(){return r.a.createElement("div",{id:"display"},k("Value1",a),r.a.createElement(E.a,{size:"lg",variant:"primary",disabled:!0},b),k("Value2",m),r.a.createElement(E.a,{size:"lg",variant:"warning",className:"clearpad",onClick:function(e){return c(""),d(""),g("+"),void h("")}},"Clear"),r.a.createElement(E.a,{size:"lg",variant:"info",className:"keypad",onClick:function(){""!==a&&""!==m&&h("+"===b?parseInt(a)+parseInt(m):"-"===b?parseInt(a)-parseInt(m):"x"===b?parseInt(a)*parseInt(m):parseInt(a)/parseInt(m))}},"Cal"))};Object(n.useEffect)((function(){}),[a]),Object(n.useEffect)((function(){}),[m]),Object(n.useEffect)((function(){}),[b]);var x=["+","-","x","\xf7"].map((function(e){return r.a.createElement(E.a,{size:"lg",variant:"primary",key:e,className:"calpad",value:e,onClick:function(e){return function(e){g(e.currentTarget.value)}(e)}},e)})),C=["0","1","2","3","4","5","6","7","8","9"].map((function(e){return r.a.createElement(E.a,{size:"lg",variant:"success",key:e,className:"keypad",value:e,onClick:function(e){return function(e){""===a?c(e.currentTarget.value):""===m&&d(e.currentTarget.value)}(e)}},e)}));return r.a.createElement(u.a,{xs:12,md:12,lg:12},r.a.createElement(v.a,null,r.a.createElement(u.a,{className:"sub-section",xs:10,md:5,lg:5},k("Answer",O)),r.a.createElement(u.a,{className:"sub-section",xs:10,md:5,lg:5},r.a.createElement(y,null))),r.a.createElement(u.a,{className:"pads-section",xs:10,md:4,lg:3},r.a.createElement("div",{id:"calpads"},x),r.a.createElement("div",{id:"keypads"},C)))};var p=function(){var e=Object(n.useContext)(o),t=e.startState;return e.setStartState,t?r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(f,null)):r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(m,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.4d0ff816.chunk.js.map