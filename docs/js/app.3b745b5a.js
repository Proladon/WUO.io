(function(e){function t(t){for(var c,r,u=t[0],i=t[1],l=t[2],f=0,s=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&s.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(s.length)s.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-06e73988":"84052f3f","chunk-07cb5eaa":"85346e30","chunk-7bf3213a":"343401c2","chunk-6fbce640":"4da458c8","chunk-fa7c016e":"a736c75f"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-07cb5eaa":1,"chunk-7bf3213a":1,"chunk-6fbce640":1,"chunk-fa7c016e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-06e73988":"31d6cfe0","chunk-07cb5eaa":"0a71c1af","chunk-7bf3213a":"15467998","chunk-6fbce640":"34b09f84","chunk-fa7c016e":"d14fc8a0"}[e]+".css",a=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===c||f===a))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===c||f===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],b.parentNode.removeChild(b),n(o)},b.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=o);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",s.name="ChunkLoadError",s.type=c,s.request=r,n[1](s)}a[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/WUO.io/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var b=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1316:function(e,t,n){},"20e8":function(e,t,n){},"66b7":function(e,t,n){},c88a:function(e,t,n){"use strict";n("20e8")},c8b4:function(e,t,n){"use strict";n("66b7")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=(n("b0c0"),Object(c["i"])("strong",null,"WUO.io",-1)),a=Object(c["i"])("p",{class:"sub-title"},"Wut u ordering ?",-1);function o(e,t,n,o,u,i){var l=Object(c["B"])("router-link"),f=Object(c["B"])("Nav"),s=Object(c["B"])("Home"),b=Object(c["B"])("router-view");return Object(c["t"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(l,{class:"home-btn",to:"/"},{default:Object(c["L"])((function(){return[r]})),_:1}),a,Object(c["i"])(f),"Home"===e.$route.name?(Object(c["t"])(),Object(c["e"])(s,{key:0})):Object(c["f"])("",!0),"Home"!==e.$route.name?(Object(c["t"])(),Object(c["e"])(b,{key:1})):Object(c["f"])("",!0)],64)}var u=Object(c["P"])("data-v-162dfacc");Object(c["w"])("data-v-162dfacc");var i={id:"nav"},l=Object(c["i"])("span",null,"⚡ 快速建立訂單",-1),f=Object(c["i"])("span",null,"🔎 搜尋訂單",-1),s=Object(c["i"])("span",null,"📘 使用指南",-1),b=Object(c["i"])("span",null,"📜 關於",-1);Object(c["u"])();var d=u((function(e,t){var n=Object(c["B"])("router-link");return Object(c["t"])(),Object(c["e"])("div",i,[Object(c["i"])(n,{class:"nav-btn",to:"/create"},{default:u((function(){return[l]})),_:1}),Object(c["i"])(n,{class:"nav-btn",to:"/search"},{default:u((function(){return[f]})),_:1}),Object(c["i"])(n,{class:"nav-btn",to:"/guide"},{default:u((function(){return[s]})),_:1}),Object(c["i"])(n,{class:"nav-btn",to:"/about"},{default:u((function(){return[b]})),_:1})])}));n("c88a");const p={};p.render=d,p.__scopeId="data-v-162dfacc";var h=p,O=Object(c["P"])("data-v-70f40379");Object(c["w"])("data-v-70f40379");var m={class:"home"},j=Object(c["i"])("div",{class:"block"},[Object(c["i"])("h1",null,"Hello !"),Object(c["i"])("p",null,"WUO.io 是一個線上即時團體點餐系統"),Object(c["i"])("p",null,"你可以創建一個即時訂單，並分享給你的夥伴們，如此夥伴們就可以同時點餐並即時統計品項囉!"),Object(c["i"])("p")],-1);Object(c["u"])();var v=O((function(e,t,n,r,a,o){return Object(c["t"])(),Object(c["e"])("div",m,[j])})),g=Object(c["j"])({name:"Home",components:{}});n("dbcf");g.render=v,g.__scopeId="data-v-70f40379";var k=g,y=Object(c["j"])({components:{Nav:h,Home:k}});n("c8b4");y.render=o;var w=y,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),P=[{path:"/",name:"Home",component:k},{path:"/create",name:"Create",component:function(){return Promise.all([n.e("chunk-06e73988"),n.e("chunk-7bf3213a")]).then(n.bind(null,"d879"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-fa7c016e").then(n.bind(null,"f820"))}},{path:"/search/",name:"Search",props:!0,component:function(){return Promise.all([n.e("chunk-06e73988"),n.e("chunk-07cb5eaa")]).then(n.bind(null,"2d3b"))},children:[{path:":refKey",props:!0,component:function(){return Promise.all([n.e("chunk-06e73988"),n.e("chunk-07cb5eaa")]).then(n.bind(null,"2d3b"))}}]},{path:"/guide/",name:"Guide",component:function(){return n.e("chunk-6fbce640").then(n.bind(null,"4638"))}}],S=Object(_["a"])({history:Object(_["b"])(),routes:P}),E=S,B=n("5502"),C=Object(B["a"])({state:{},mutations:{},actions:{},modules:{}}),H=n("6c42");n("da96");Object(c["d"])(w).use(C).use(E).use(H["a"]).mount("#app")},dbcf:function(e,t,n){"use strict";n("1316")}});
//# sourceMappingURL=app.3b745b5a.js.map