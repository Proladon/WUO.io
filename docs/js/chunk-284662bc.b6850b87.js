(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-284662bc"],{"13d9":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},2532:function(e,t,n){"use strict";var o=n("23e7"),r=n("5a34"),a=n("1d80"),c=n("ab13");o({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~String(a(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,n){"use strict";var o=n("6eeb"),r=n("825a"),a=n("d039"),c=n("ad6d"),i="toString",s=RegExp.prototype,l=s[i],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=i;(u||d)&&o(RegExp.prototype,i,(function(){var e=r(this),t=String(e.source),n=e.flags,o=String(void 0===n&&e instanceof RegExp&&!("flags"in s)?c.call(e):n);return"/"+t+"/"+o}),{unsafe:!0})},"38d9":function(e,t,n){},"5a34":function(e,t,n){var o=n("44e7");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},"97ea":function(e,t,n){"use strict";n("38d9")},ab13:function(e,t,n){var o=n("b622"),r=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(o){}}return!1}},ad6d:function(e,t,n){"use strict";var o=n("825a");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},caad:function(e,t,n){"use strict";var o=n("23e7"),r=n("4d64").includes,a=n("44d2");o({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d879:function(e,t,n){"use strict";n.r(t);n("498a");var o=n("7a23"),r=Object(o["P"])("data-v-416e6ad0");Object(o["w"])("data-v-416e6ad0");var a={id:"create"},c={key:0,class:"quick-order"},i=Object(o["i"])("h2",null,"訂單建立",-1),s=Object(o["i"])("p",null,[Object(o["i"])("strong",null,"建立快速選項")],-1),l={class:"input-container"},u={key:1,class:"share"},d=Object(o["i"])("h2",null,"分享訂單",-1),p=Object(o["i"])("strong",null,"前往訂單 >",-1);Object(o["u"])();var b=r((function(e,t,n,r,b,f){return Object(o["t"])(),Object(o["e"])("div",a,[""===e.refKey?(Object(o["t"])(),Object(o["e"])("div",c,[i,Object(o["M"])(Object(o["i"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.orderName=t}),placeholder:"訂單名稱"},null,512),[[o["I"],e.orderName]]),s,Object(o["i"])("div",l,[Object(o["M"])(Object(o["i"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.optionInput=t}),placeholder:"品項名稱",onKeypress:t[3]||(t[3]=Object(o["N"])((function(){return e.addOption&&e.addOption.apply(e,arguments)}),["enter"]))},null,544),[[o["I"],e.optionInput]]),Object(o["i"])("div",{class:"add-btn",onClick:t[4]||(t[4]=function(){return e.addOption&&e.addOption.apply(e,arguments)})},"新增")]),(Object(o["t"])(!0),Object(o["e"])(o["a"],null,Object(o["z"])(e.orderOptions.options,(function(t,n){return Object(o["t"])(),Object(o["e"])("div",{class:"ordering-options",key:t},[Object(o["i"])("p",null,Object(o["E"])(t),1),Object(o["i"])("span",{class:"remove-btn",onClick:function(t){return e.removeOption(n)}},"×",8,["onClick"])])})),128)),Object(o["i"])("div",{class:"create-btn",onClick:t[5]||(t[5]=function(){return e.createOrder&&e.createOrder.apply(e,arguments)})},"創建訂單")])):Object(o["f"])("",!0),""!==e.refKey?(Object(o["t"])(),Object(o["e"])("div",u,[d,Object(o["i"])("img",{src:e.qrcodeUrl},null,8,["src"]),Object(o["i"])("div",{class:"copy-btn",onClick:t[6]||(t[6]=function(t){return e.copyToClipboard("key")})},"複製訂單編號"),Object(o["i"])("div",{class:"copy-btn",onClick:t[7]||(t[7]=function(t){return e.copyToClipboard("link")})},"複製連結"),Object(o["i"])("p",{class:"link-btn",onClick:t[8]||(t[8]=function(t){return e.$router.push("/search/"+e.refKey.trim())})},[p])])):Object(o["f"])("",!0)])})),f=(n("d3b7"),n("25f0"),n("b0c0"),n("caad"),n("2532"),n("a434"),n("6c42")),y=n("5502"),v=n("f904"),m=n.n(v),O=n("a4c9"),g=Object(o["j"])({name:"Create",setup:function(){var e=Object(y["b"])(),t=Object(f["b"])(),n=Object(o["y"])(""),r=Object(o["y"])(""),a=Object(o["x"])({options:Array()}),c=Object(o["y"])(""),i=Object(o["y"])("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif"),s=O["a"].database().ref("orders"),l=function(){if(""!==n.value.trim()){var o={id:"",name:n.value,create:(new Date).toString(),options:a.options},r=s.push(o);c.value=r.key;var l="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/";i.value=l+c.value,e.commit("ADD_RECENT",{id:o.id,name:o.name,key:c.value})}else t.error("請輸入訂單名稱")},u=function(){var e=r.value.trim();a.options.includes(e)&&t.warning("品項已存在"),""===e||a.options.includes(e)||(a.options.push(e),r.value="")},d=function(e){a.options.splice(e,1)},p=function(e){"link"===e?m()("https://proladon.github.io/WUO.io/#/search/"+c.value):"key"===e&&m()(c.value),t.success("已複製到剪貼簿")};return{qrcodeUrl:i,orderName:n,refKey:c,createOrder:l,optionInput:r,orderOptions:a,addOption:u,removeOption:d,copyToClipboard:p}}});n("97ea");g.render=b,g.__scopeId="data-v-416e6ad0";t["default"]=g},f904:function(e,t,n){"use strict";var o=n("13d9"),r={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";function c(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function i(e,t){var n,i,s,l,u,d,p=!1;t||(t={}),n=t.debug||!1;try{s=o(),l=document.createRange(),u=document.getSelection(),d=document.createElement("span"),d.textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r["default"];window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(d),l.selectNodeContents(d),u.addRange(l);var b=document.execCommand("copy");if(!b)throw new Error("copy command was unsuccessful");p=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),i=c("message"in t?t.message:a),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(l):u.removeAllRanges()),d&&document.body.removeChild(d),s()}return p}e.exports=i}}]);
//# sourceMappingURL=chunk-284662bc.b6850b87.js.map