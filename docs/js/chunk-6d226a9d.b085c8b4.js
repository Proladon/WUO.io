(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d226a9d"],{"13d9":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),a=n("2d00"),c=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,n){"use strict";var r=n("23e7"),o=n("5a34"),a=n("1d80"),c=n("ab13");r({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~String(a(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),o=n("825a"),a=n("d039"),c=n("ad6d"),i="toString",s=RegExp.prototype,u=s[i],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=i;(l||d)&&r(RegExp.prototype,i,(function(){var e=o(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in s)?c.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"4e35":function(e,t,n){"use strict";n("63f2")},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"63f2":function(e,t,n){},"65f0":function(e,t,n){var r=n("861d"),o=n("e8b5"),a=n("b622"),c=a("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},8418:function(e,t,n){"use strict";var r=n("c04e"),o=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var c=r(t);c in e?o.f(e,c,a(0,n)):e[c]=n}},a434:function(e,t,n){"use strict";var r=n("23e7"),o=n("23cb"),a=n("a691"),c=n("50c4"),i=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),d=l("splice"),p=Math.max,f=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,l,d,y,g,m=i(this),O=c(m.length),h=o(e,O),j=arguments.length;if(0===j?n=r=0:1===j?(n=0,r=O-h):(n=j-2,r=f(p(a(t),0),O-h)),O+n-r>b)throw TypeError(v);for(l=s(m,r),d=0;d<r;d++)y=h+d,y in m&&u(l,d,m[y]);if(l.length=r,n<r){for(d=h;d<O-r;d++)y=d+r,g=d+n,y in m?m[g]=m[y]:delete m[g];for(d=O;d>O-r+n;d--)delete m[d-1]}else if(n>r)for(d=O-r;d>h;d--)y=d+r-1,g=d+n-1,y in m?m[g]=m[y]:delete m[g];for(d=0;d<n;d++)m[d+h]=arguments[d+2];return m.length=O-r+n,l}})},ab13:function(e,t,n){var r=n("b622"),o=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(r){}}return!1}},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},caad:function(e,t,n){"use strict";var r=n("23e7"),o=n("4d64").includes,a=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d879:function(e,t,n){"use strict";n.r(t);n("498a");var r=n("7a23"),o=Object(r["O"])("data-v-4664d52c");Object(r["v"])("data-v-4664d52c");var a={id:"create"},c={key:0,class:"quick-order"},i=Object(r["i"])("h2",null,"訂單建立",-1),s=Object(r["i"])("p",null,[Object(r["i"])("strong",null,"建立快速選項")],-1),u={class:"input-container"},l={key:1,class:"share"},d=Object(r["i"])("h2",null,"分享訂單",-1),p=Object(r["i"])("strong",null,"前往訂單 >",-1);Object(r["t"])();var f=o((function(e,t,n,o,f,b){return Object(r["s"])(),Object(r["e"])("div",a,[""===e.refKey?(Object(r["s"])(),Object(r["e"])("div",c,[i,Object(r["L"])(Object(r["i"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.orderName=t}),placeholder:"訂單名稱"},null,512),[[r["H"],e.orderName]]),s,Object(r["i"])("div",u,[Object(r["L"])(Object(r["i"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.optionInput=t}),placeholder:"品項名稱",onKeypress:t[3]||(t[3]=Object(r["M"])((function(){return e.addOption&&e.addOption.apply(e,arguments)}),["enter"]))},null,544),[[r["H"],e.optionInput]]),Object(r["i"])("div",{class:"add-btn",onClick:t[4]||(t[4]=function(){return e.addOption&&e.addOption.apply(e,arguments)})},"新增")]),(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.orderOptions.options,(function(t,n){return Object(r["s"])(),Object(r["e"])("div",{class:"ordering-options",key:t},[Object(r["i"])("p",null,Object(r["D"])(t),1),Object(r["i"])("span",{class:"remove-btn",onClick:function(t){return e.removeOption(n)}},"×",8,["onClick"])])})),128)),Object(r["i"])("div",{class:"create-btn",onClick:t[5]||(t[5]=function(){return e.createOrder&&e.createOrder.apply(e,arguments)})},"創建訂單")])):Object(r["f"])("",!0),""!==e.refKey?(Object(r["s"])(),Object(r["e"])("div",l,[d,Object(r["i"])("img",{src:e.qrcodeUrl},null,8,["src"]),Object(r["i"])("div",{class:"copy-btn",onClick:t[6]||(t[6]=function(t){return e.copyToClipboard("key")})},"複製訂單編號"),Object(r["i"])("div",{class:"copy-btn",onClick:t[7]||(t[7]=function(t){return e.copyToClipboard("link")})},"複製連結"),Object(r["i"])("p",{class:"link-btn",onClick:t[8]||(t[8]=function(t){return e.$router.push("/search/"+e.refKey.trim())})},[p])])):Object(r["f"])("",!0)])})),b=(n("d3b7"),n("25f0"),n("caad"),n("2532"),n("a434"),n("6c42")),v=n("f904"),y=n.n(v),g=n("a4c9"),m=Object(r["j"])({name:"Create",setup:function(){var e=Object(b["b"])(),t=Object(r["x"])(""),n=Object(r["x"])(""),o=Object(r["w"])({options:Array()}),a=Object(r["x"])(""),c=Object(r["x"])("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif"),i=g["a"].database().ref("orders"),s=function(){if(""!==t.value.trim()){var n={id:"",name:t.value,create:(new Date).toString(),options:o.options},r=i.push(n);a.value=r.key;var s="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/";c.value=s+a.value}else e.error("請輸入訂單名稱")},u=function(){var t=n.value.trim();o.options.includes(t)&&e.warning("品項已存在"),""===t||o.options.includes(t)||(o.options.push(t),n.value="")},l=function(e){o.options.splice(e,1)},d=function(t){"link"===t?y()("https://proladon.github.io/WUO.io/#/search/"+a.value):"key"===t&&y()(a.value),e.success("已複製到剪貼簿")};return{qrcodeUrl:c,orderName:t,refKey:a,createOrder:s,optionInput:n,orderOptions:o,addOption:u,removeOption:l,copyToClipboard:d}}});n("4e35");m.render=f,m.__scopeId="data-v-4664d52c";t["default"]=m},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},f904:function(e,t,n){"use strict";var r=n("13d9"),o={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";function c(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function i(e,t){var n,i,s,u,l,d,p=!1;t||(t={}),n=t.debug||!1;try{s=r(),u=document.createRange(),l=document.getSelection(),d=document.createElement("span"),d.textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o["default"];window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(d),u.selectNodeContents(d),l.addRange(u);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");p=!0}catch(b){n&&console.error("unable to copy using execCommand: ",b),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(b){n&&console.error("unable to copy using clipboardData: ",b),n&&console.error("falling back to prompt"),i=c("message"in t?t.message:a),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(u):l.removeAllRanges()),d&&document.body.removeChild(d),s()}return p}e.exports=i}}]);
//# sourceMappingURL=chunk-6d226a9d.b085c8b4.js.map