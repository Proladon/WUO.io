(function(e){function t(t){for(var a,c,u=t[0],i=t[1],l=t[2],d=0,s=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-024e668b":"ea4c9b05","chunk-0e335a04":"9474a205","chunk-5ed8e3c7":"c49990c9","chunk-78f1a484":"698b4d62","chunk-e8568e08":"34326b53"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-024e668b":1,"chunk-0e335a04":1,"chunk-5ed8e3c7":1,"chunk-78f1a484":1,"chunk-e8568e08":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-024e668b":"c04b3f76","chunk-0e335a04":"2b5f4eb2","chunk-5ed8e3c7":"6fdc3dae","chunk-78f1a484":"78dd38ed","chunk-e8568e08":"26199935"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===r))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],d=l.getAttribute("data-href");if(d===a||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",s.name="ChunkLoadError",s.type=a,s.request=c,n[1](s)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/WUO.io/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"025d":function(e,t,n){"use strict";n("afbe")},"11b9":function(e,t,n){},"128b":function(e,t,n){"use strict";n("165e")},"165e":function(e,t,n){},"91ad":function(e,t,n){"use strict";n("11b9")},a4c9:function(e,t,n){"use strict";var a=n("260b"),c=(n("66ce"),n("ea7b"),{apiKey:"AIzaSyCKslfWzAWEiofwCCjihDGMxczLJ9RDxK4",authDomain:"wuo-io.firebaseapp.com",databaseURL:"https://wuo-io-default-rtdb.firebaseio.com",projectId:"wuo-io",storageBucket:"wuo-io.appspot.com",messagingSenderId:"940410119301",appId:"1:940410119301:web:e68bfc25a49768572875ec",measurementId:"G-T48N1Y0F4C"}),r=a["a"].initializeApp(c);t["a"]=r},afbe:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("7a23"),c=(n("b0c0"),Object(a["k"])("strong",null,"WUO.io",-1)),r=Object(a["k"])("p",{class:"sub-title"},"Wut u ordering ?",-1);function o(e,t,n,o,u,i){var l=Object(a["E"])("router-link"),d=Object(a["E"])("Nav"),s=Object(a["E"])("Home"),f=Object(a["E"])("router-view");return Object(a["w"])(),Object(a["f"])(a["a"],null,[Object(a["k"])(l,{class:"home-btn",to:"/"},{default:Object(a["P"])((function(){return[c]})),_:1}),r,Object(a["k"])(d),"Home"===e.$route.name?(Object(a["w"])(),Object(a["f"])(s,{key:0})):Object(a["g"])("",!0),"Home"!==e.$route.name?(Object(a["w"])(),Object(a["f"])(f,{key:1})):Object(a["g"])("",!0)],64)}var u=n("5502"),i=Object(a["T"])("data-v-4ee36990");Object(a["z"])("data-v-4ee36990");var l={id:"nav"},d=Object(a["k"])("span",null,"⚡ 建立訂單",-1),s=Object(a["k"])("span",null,"🔎 搜尋訂單",-1),f=Object(a["k"])("span",null,"📘 使用指南",-1),b=Object(a["k"])("span",null,"📜 關於",-1);Object(a["x"])();var p=i((function(e,t){var n=Object(a["E"])("router-link");return Object(a["w"])(),Object(a["f"])("div",l,[Object(a["k"])(n,{class:"nav-btn",to:"/create"},{default:i((function(){return[d]})),_:1}),Object(a["k"])(n,{class:"nav-btn",to:"/search"},{default:i((function(){return[s]})),_:1}),Object(a["k"])(n,{class:"nav-btn",to:"/guide"},{default:i((function(){return[f]})),_:1}),Object(a["k"])(n,{class:"nav-btn",to:"/about"},{default:i((function(){return[b]})),_:1})])}));n("025d");const h={};h.render=p,h.__scopeId="data-v-4ee36990";var v=h,m=Object(a["T"])("data-v-c26a9902");Object(a["z"])("data-v-c26a9902");var O={class:"home"},j=Object(a["i"])('<div class="block" data-v-c26a9902><h1 data-v-c26a9902>Hello !</h1><p data-v-c26a9902>WUO.io 是一個線上即時團體點餐系統</p><p data-v-c26a9902>你可以創建一個即時訂單，並分享給你的夥伴們，如此夥伴們就可以同時點餐並即時統計品項囉!</p></div><hr data-v-c26a9902><div class="block" data-v-c26a9902><h2 data-v-c26a9902>🔨 WIP</h2><h4 data-v-c26a9902>私人訂單</h4><ul data-v-c26a9902><li data-v-c26a9902>✅ 使用者註冊、登入</li><li data-v-c26a9902>建立私人訂單</li><li data-v-c26a9902>私人訂單管理權限</li></ul><h4 data-v-c26a9902>一般訂單</h4><ul data-v-c26a9902><li data-v-c26a9902>是否允許使用者自定義輸入訂購內容</li><li data-v-c26a9902>快速選項 - 數量選擇</li></ul><hr data-v-c26a9902><h2 data-v-c26a9902>🔄 Update</h2><h4 data-v-c26a9902>2021/03/10</h4><ul data-v-c26a9902><li data-v-c26a9902>創建訂單時，可上傳圖片</li><li data-v-c26a9902>訂單生命週期 (訂單創建後24小時會自動刪除)</li></ul><h4 data-v-c26a9902>2021/03/09</h4><ul data-v-c26a9902><li data-v-c26a9902>本地端紀錄使用者最近創建的訂單，方便記憶訂單編號</li><li data-v-c26a9902>Bug fix - 修正 IOS/MacOS Safari 無法正常顯示頁面</li></ul></div>',3);Object(a["x"])();var g=m((function(e,t,n,c,r,o){return Object(a["w"])(),Object(a["f"])("div",O,[j])})),k=Object(a["l"])({name:"Home",components:{}});n("91ad");k.render=g,k.__scopeId="data-v-c26a9902";var y=k,w=n("a4c9"),E=n("ba87"),_=Object(a["l"])({components:{Nav:v,Home:y},setup:function(){var e=Object(u["b"])(),t=w["a"].database().ref("orders");Object(a["u"])((function(){e.commit("UPDATE_RECENT"),t.get().then((function(e){if(e.exists()){var t=e.val();for(var n in t){var a=new E["a"](new Date(t[n].create)).date(),c=new E["a"](new Date).date();c-a>=1&&w["a"].database().ref("orders/"+n).remove()}}}))}))}});n("128b");_.render=o;var S=_,T=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),C=[{path:"/",name:"Home",component:y},{path:"/create",name:"Create",component:function(){return n.e("chunk-0e335a04").then(n.bind(null,"d879"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-5ed8e3c7").then(n.bind(null,"f820"))}},{path:"/search/",name:"Search",props:!0,component:function(){return n.e("chunk-e8568e08").then(n.bind(null,"2d3b"))},children:[{path:":refKey",props:!0,component:function(){return n.e("chunk-e8568e08").then(n.bind(null,"2d3b"))}}]},{path:"/guide/",name:"Guide",component:function(){return n.e("chunk-78f1a484").then(n.bind(null,"4638"))}},{path:"/auth/",name:"Auth",component:function(){return n.e("chunk-024e668b").then(n.bind(null,"2fef"))}}],N=Object(T["a"])({history:Object(T["b"])(),routes:C}),A=N,P=(n("a434"),Object(u["a"])({state:{recent:[]},mutations:{UPDATE_RECENT:function(e){var t=localStorage.getItem("recent");t&&(e.recent=JSON.parse(t))},REMOVE_RECENT:function(e,t){e.recent.splice(t,1),localStorage.setItem("recent",JSON.stringify(e.recent))},ADD_RECENT:function(e,t){var n=e.recent;n.push(t),localStorage.setItem("recent",JSON.stringify(n))}},actions:{},modules:{}})),x=n("6c42"),I=(n("da96"),n("43df")),D=Object(a["e"])(S);D.use(P).use(A).use(x["a"]).use(Object(I["a"])()).mount("#app"),A.afterEach((function(e,t,n){window.scrollTo(0,1),window.scrollTo(0,0)})),D.config.errorHandler=function(e,t,n){alert(e),console.log(e)}}});
//# sourceMappingURL=app.c9c9b731.js.map