(function(e){function t(t){for(var c,i,s=t[0],r=t[1],o=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);b&&b(t);while(d.length)d.shift()();return l.push.apply(l,o||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],c=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(c=!1)}c&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},a={app:0},l=[];function i(e){return s.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0a481f":"acbe71fc","chunk-2d20fadc":"4f60ce5d","chunk-2d215d02":"d3213b02","chunk-49c445d0":"18d41258","chunk-2d0af119":"2c55573e","chunk-2d0b2558":"ccf1e8dc","chunk-2d0e8862":"22c12d47","chunk-2d22d7d5":"45fcaa33","chunk-b8ee1c6e":"30082b83","chunk-2d0da3ed":"a9614b00","chunk-2d237c38":"295b6605"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=a[e]=[t,c]}));t.push(n[2]=c);var l,r=document.createElement("script");r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.src=i(e);var o=new Error;l=function(t){r.onerror=r.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+c+": "+l+")",o.name="ChunkLoadError",o.type=c,o.request=l,n[1](o)}a[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:r})}),12e4);r.onerror=r.onload=l,document.head.appendChild(r)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var b=o;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={class:"row container-fluid"},l={class:"col-2 bg-dark"},i={class:"d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100"},s=Object(c["g"])("a",{href:"/",class:"d-flex align-items-center text-white text-decoration-none"},[Object(c["g"])("span",{class:"fs-5 d-none d-sm-inline"},"IP's control")],-1),r={class:"nav flex-column nav-tabs-border-color:gray-300;"},o={class:"nav-item"},u=Object(c["g"])("a",{href:"#submenu1","data-bs-toggle":"collapse",class:"nav-link disabled px-0 align-middle"},[Object(c["g"])("i",{class:"fs-6 bi bi-clipboard text-success"}," Customers Data ")],-1),b=Object(c["g"])("i",{class:"bi bi-person-check",style:{"font-size":"1.0rem"}},[Object(c["g"])("small",null," User")],-1),d=Object(c["g"])("a",{href:"#submenu1","data-bs-toggle":"collapse",class:"nav-link disabled px-0 align-middle"},[Object(c["g"])("i",{class:"fs-6 bi-speedometer2 text-success"}," Statistics ")],-1),f={class:"collapse show nav flex-column",id:"submenu1","data-bs-parent":"#menu"},m={class:"w-100 nav-item"},p=Object(c["g"])("i",{class:"bi bi-activity",style:{"font-size":"1.0rem"}},[Object(c["g"])("small",null," RAM ")],-1),g={class:"w-100 nav-item"},h=Object(c["g"])("i",{class:"bi bi-hdd-rack",style:{"font-size":"1.0rem"}},[Object(c["g"])("small",null," HDD ")],-1),O={class:"w-100 nav-item"},j=Object(c["g"])("i",{class:"bi bi-windows",style:{"font-size":"1.0rem"}},[Object(c["g"])("small",null," S.O ")],-1),v={class:"w-100 nav-item"},k=Object(c["g"])("i",{class:"bi bi-cpu",style:{"font-size":"1.0rem"}},[Object(c["g"])("small",null," CPU ")],-1),w=Object(c["g"])("a",{href:"#submenu1","data-bs-toggle":"collapse",class:"nav-link disabled px-0 align-middle"},[Object(c["g"])("i",{class:"fs-6 bi bi-graph-up-arrow text-success"}," Graphics ")],-1),y={class:"collapse show nav flex-column",id:"submenu1","data-bs-parent":"#menu"},x={class:"w-100 nav-item"},P=Object(c["g"])("i",{class:"bi bi-fan",style:{"font-size":"1.0rem"}},[Object(c["g"])("small",null," CPU ")],-1),C={class:"w-100 nav-item"},_=Object(c["g"])("i",{class:"bi bi-compass",style:{"font-size":"1.0rem"}},[Object(c["g"])("small",null," RAM ")],-1),M={class:"nav-item"},S=Object(c["g"])("a",{href:"#submenu1","data-bs-toggle":"collapse",class:"nav-link disabled px-0 align-middle"},[Object(c["g"])("i",{class:"fs-6 bi bi-clipboard text-success"}," Support")],-1),z={class:"collapse show nav flex-column",id:"submenu1","data-bs-parent":"#menu"},U={class:"w-100 nav-item"},E=Object(c["g"])("i",{class:"bi bi-telephone-outbound",style:{"font-size":"1.0rem"}},[Object(c["g"])("small",null," Help")],-1),D={class:"col-10"};function T(e,t){var n=Object(c["w"])("router-link"),T=Object(c["w"])("router-view");return Object(c["r"])(),Object(c["f"])("div",a,[Object(c["g"])("div",l,[Object(c["g"])("div",i,[s,Object(c["g"])("ul",r,[Object(c["g"])("li",o,[u,Object(c["i"])(n,{class:"nav-link text-info",to:"/clientes"},{default:Object(c["C"])((function(){return[b]})),_:1})]),Object(c["g"])("li",null,[d,Object(c["g"])("ul",f,[Object(c["g"])("li",m,[Object(c["i"])(n,{class:"nav-link text-info",to:"/memoria"},{default:Object(c["C"])((function(){return[p]})),_:1})]),Object(c["g"])("li",g,[Object(c["i"])(n,{class:"nav-link text-info",to:"/drive"},{default:Object(c["C"])((function(){return[h]})),_:1})]),Object(c["g"])("li",O,[Object(c["i"])(n,{class:"nav-link text-info",to:"/os"},{default:Object(c["C"])((function(){return[j]})),_:1})]),Object(c["g"])("li",v,[Object(c["i"])(n,{class:"nav-link text-info",to:"/cpu"},{default:Object(c["C"])((function(){return[k]})),_:1})])])]),Object(c["g"])("li",null,[w,Object(c["g"])("ul",y,[Object(c["g"])("li",x,[Object(c["i"])(n,{class:"nav-link text-warning",to:"/graficosCPU"},{default:Object(c["C"])((function(){return[P]})),_:1})]),Object(c["g"])("li",C,[Object(c["i"])(n,{class:"nav-link text-warning",to:"/graficosMEM"},{default:Object(c["C"])((function(){return[_]})),_:1})])])]),Object(c["g"])("li",M,[S,Object(c["g"])("ul",z,[Object(c["g"])("li",U,[Object(c["i"])(n,{class:"nav-link text-danger",to:"/contacto"},{default:Object(c["C"])((function(){return[E]})),_:1})])])])])])]),Object(c["g"])("div",D,[Object(c["g"])("div",null,[Object(c["i"])(T)])])])}var A=n("6b0d"),G=n.n(A);const H={},I=G()(H,[["render",T]]);var J=I,L=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),R=[{path:"/",name:"Inicio",component:function(){return n.e("chunk-2d20fadc").then(n.bind(null,"b53f"))}},{path:"/clientes",name:"Clientes",component:function(){return n.e("chunk-2d0a481f").then(n.bind(null,"0779"))}},{path:"/cpu",name:"CPU",component:function(){return Promise.all([n.e("chunk-49c445d0"),n.e("chunk-2d22d7d5")]).then(n.bind(null,"f85b"))}},{path:"/drive",name:"Drive",component:function(){return Promise.all([n.e("chunk-49c445d0"),n.e("chunk-2d0af119")]).then(n.bind(null,"0d6e"))}},{path:"/memoria",name:"Memoria",component:function(){return Promise.all([n.e("chunk-49c445d0"),n.e("chunk-2d0e8862")]).then(n.bind(null,"8a47"))}},{path:"/os",name:"OS",component:function(){return Promise.all([n.e("chunk-49c445d0"),n.e("chunk-2d0b2558")]).then(n.bind(null,"2455"))}},{path:"/contacto",name:"Contacto",component:function(){return n.e("chunk-2d215d02").then(n.bind(null,"c098"))}},{path:"/graficosCPU",name:"Gráficos del CPU",component:function(){return Promise.all([n.e("chunk-49c445d0"),n.e("chunk-b8ee1c6e"),n.e("chunk-2d0da3ed")]).then(n.bind(null,"6b7b"))}},{path:"/graficosMEM",name:"Graficos memory",component:function(){return Promise.all([n.e("chunk-49c445d0"),n.e("chunk-b8ee1c6e"),n.e("chunk-2d237c38")]).then(n.bind(null,"fd04"))}}],q=Object(L["a"])({history:Object(L["b"])(),routes:R}),B=q,F=(n("1de3"),n("cd74"),n("bc3a")),K=n.n(F),N=n("130e");Object(c["c"])(J).use(B).use(N["a"],K.a).mount("#app")}});
//# sourceMappingURL=app.cadcde0f.js.map