(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-807cb5f8"],{"02d1":function(e,t,n){},"13d9":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),c=n("2d00"),a=o("species");e.exports=function(e){return c>=51||!r((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"223a":function(e,t,n){"use strict";n("02d1")},2532:function(e,t,n){"use strict";var r=n("23e7"),o=n("5a34"),c=n("1d80"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(c(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),o=n("825a"),c=n("d039"),a=n("ad6d"),i="toString",s=RegExp.prototype,u=s[i],l=c((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=i;(l||d)&&r(RegExp.prototype,i,(function(){var e=o(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in s)?a.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"65f0":function(e,t,n){var r=n("861d"),o=n("e8b5"),c=n("b622"),a=c("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},8418:function(e,t,n){"use strict";var r=n("c04e"),o=n("9bf2"),c=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?o.f(e,a,c(0,n)):e[a]=n}},a434:function(e,t,n){"use strict";var r=n("23e7"),o=n("23cb"),c=n("a691"),a=n("50c4"),i=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),d=l("splice"),p=Math.max,f=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,l,d,y,m,O=i(this),g=a(O.length),h=o(e,g),j=arguments.length;if(0===j?n=r=0:1===j?(n=0,r=g-h):(n=j-2,r=f(p(c(t),0),g-h)),g+n-r>b)throw TypeError(v);for(l=s(O,r),d=0;d<r;d++)y=h+d,y in O&&u(l,d,O[y]);if(l.length=r,n<r){for(d=h;d<g-r;d++)y=d+r,m=d+n,y in O?O[m]=O[y]:delete O[m];for(d=g;d>g-r+n;d--)delete O[d-1]}else if(n>r)for(d=g-r;d>h;d--)y=d+r-1,m=d+n-1,y in O?O[m]=O[y]:delete O[m];for(d=0;d<n;d++)O[d+h]=arguments[d+2];return O.length=g-r+n,l}})},ab13:function(e,t,n){var r=n("b622"),o=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(r){}}return!1}},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},caad:function(e,t,n){"use strict";var r=n("23e7"),o=n("4d64").includes,c=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},d879:function(e,t,n){"use strict";n.r(t);n("498a");var r=n("7a23"),o=Object(r["O"])("data-v-7f4cae9e");Object(r["v"])("data-v-7f4cae9e");var c={id:"create"},a={key:0,class:"quick-order"},i=Object(r["i"])("h2",null,"訂單建立",-1),s=Object(r["i"])("p",null,[Object(r["i"])("strong",null,"建立快速選項")],-1),u={class:"input-container"},l={key:1,class:"share"},d=Object(r["i"])("h2",null,"分享訂單",-1),p=Object(r["h"])("複製訂單編號"),f=Object(r["h"])("複製連結"),b=Object(r["i"])("strong",null,"前往訂單 >",-1);Object(r["t"])();var v=o((function(e,t,n,o,v,y){var m=Object(r["A"])("icons");return Object(r["s"])(),Object(r["e"])("div",c,[""===e.refKey?(Object(r["s"])(),Object(r["e"])("div",a,[i,Object(r["L"])(Object(r["i"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.orderName=t}),placeholder:"訂單名稱"},null,512),[[r["H"],e.orderName]]),s,Object(r["i"])("div",u,[Object(r["L"])(Object(r["i"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.optionInput=t}),placeholder:"品項名稱",onKeypress:t[3]||(t[3]=Object(r["M"])((function(){return e.addOption&&e.addOption.apply(e,arguments)}),["enter"]))},null,544),[[r["H"],e.optionInput]]),Object(r["i"])("div",{class:"add-btn",onClick:t[4]||(t[4]=function(){return e.addOption&&e.addOption.apply(e,arguments)})},"新增")]),(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.orderOptions.options,(function(t,n){return Object(r["s"])(),Object(r["e"])("div",{class:"ordering-options",key:t},[Object(r["i"])("p",null,Object(r["D"])(t),1),Object(r["i"])("span",{class:"remove-btn",onClick:function(t){return e.removeOption(n)}},"×",8,["onClick"])])})),128)),Object(r["i"])("div",{class:"create-btn",onClick:t[5]||(t[5]=function(){return e.createOrder&&e.createOrder.apply(e,arguments)})},"創建訂單")])):Object(r["f"])("",!0),""!==e.refKey?(Object(r["s"])(),Object(r["e"])("div",l,[d,Object(r["i"])("img",{src:e.qrcodeUrl},null,8,["src"]),Object(r["i"])("div",{class:"copy-btn",onClick:t[6]||(t[6]=function(t){return e.copyToClipboard("key")})},[Object(r["i"])(m,{class:"icon",name:"link",size:"20px"}),p]),Object(r["i"])("div",{class:"copy-btn",onClick:t[7]||(t[7]=function(t){return e.copyToClipboard("link")})},[Object(r["i"])(m,{class:"icon",name:"link",size:"20px"}),f]),Object(r["i"])("p",{class:"link-btn",onClick:t[8]||(t[8]=function(t){return e.$router.push("/search/"+e.refKey.trim())})},[b])])):Object(r["f"])("",!0)])})),y=(n("d3b7"),n("25f0"),n("caad"),n("2532"),n("a434"),n("6c42")),m=n("5c16"),O=n("f904"),g=n.n(O),h=n("a4c9"),j=Object(r["j"])({name:"Create",components:{icons:m["a"]},setup:function(){var e=Object(y["b"])(),t=Object(r["x"])(""),n=Object(r["x"])(""),o=Object(r["w"])({options:Array()}),c=Object(r["x"])(""),a=Object(r["x"])("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif"),i=h["a"].database().ref("orders"),s=function(){if(""!==t.value.trim()){var n={id:"",name:t.value,create:(new Date).toString(),options:o.options},r=i.push(n);c.value=r.key;var s="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/";a.value=s+c.value}else e.error("請輸入訂單名稱")},u=function(){var t=n.value.trim();o.options.includes(t)&&e.warning("品項已存在"),""===t||o.options.includes(t)||(o.options.push(t),n.value="")},l=function(e){o.options.splice(e,1)},d=function(t){"link"===t?g()("https://proladon.github.io/WUO.io/#/search/"+c.value):"key"===t&&g()(c.value),e.success("已複製到剪貼簿")};return{qrcodeUrl:a,orderName:t,refKey:c,createOrder:s,optionInput:n,orderOptions:o,addOption:u,removeOption:l,copyToClipboard:d}}});n("223a");j.render=v,j.__scopeId="data-v-7f4cae9e";t["default"]=j},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},f904:function(e,t,n){"use strict";var r=n("13d9"),o={"text/plain":"Text","text/html":"Url",default:"Text"},c="Copy to clipboard: #{key}, Enter";function a(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function i(e,t){var n,i,s,u,l,d,p=!1;t||(t={}),n=t.debug||!1;try{s=r(),u=document.createRange(),l=document.getSelection(),d=document.createElement("span"),d.textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=o[t.format]||o["default"];window.clipboardData.setData(c,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(d),u.selectNodeContents(d),l.addRange(u);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");p=!0}catch(b){n&&console.error("unable to copy using execCommand: ",b),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(b){n&&console.error("unable to copy using clipboardData: ",b),n&&console.error("falling back to prompt"),i=a("message"in t?t.message:c),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(u):l.removeAllRanges()),d&&document.body.removeChild(d),s()}return p}e.exports=i}}]);
//# sourceMappingURL=chunk-807cb5f8.5e9909e4.js.map