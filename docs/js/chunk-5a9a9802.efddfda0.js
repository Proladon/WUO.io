(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a9a9802"],{"08de":function(e,t,r){"use strict";r("ea50")},"13d9":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},"1f2e":function(e,t,r){},2532:function(e,t,r){"use strict";var n=r("23e7"),a=r("5a34"),c=r("1d80"),o=r("ab13");n({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(c(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"2d3b":function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),a=Object(n["P"])("data-v-0f83c0f9");Object(n["w"])("data-v-0f83c0f9");var c={id:"search"},o={class:"search-container"},i={class:"nav-container"},d={key:0,class:"order-container"},l={class:"order-form"},u=Object(n["i"])("h4",null,"快速選項",-1),s={class:"options-container"},b=Object(n["i"])("br",null,null,-1),p={class:"recent-ordering-container"},f=Object(n["i"])("h2",{align:"center"},"最近建立的訂單",-1),O=Object(n["i"])("span",null,"×",-1),j=Object(n["i"])("strong",null,"ID: ",-1),v=Object(n["i"])("strong",null,"名稱: ",-1),g=Object(n["i"])("strong",null,"編號: ",-1);Object(n["u"])();var m=a((function(e,t,r,a,m,y){var h=Object(n["B"])("OrderingInfo");return Object(n["t"])(),Object(n["e"])("div",c,[Object(n["i"])("div",o,[Object(n["M"])(Object(n["i"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.inputRefKey=t}),placeholder:"訂單編號"},null,512),[[n["I"],e.inputRefKey]]),Object(n["i"])("div",{id:"input-refKey",class:"search-btn",onClick:t[2]||(t[2]=function(){return e.searchOrder&&e.searchOrder.apply(e,arguments)})},"搜尋")]),Object(n["i"])("div",i,[Object(n["i"])("div",{class:["nav-btn",{active:1===e.view&&""!==e.order.data}],onClick:t[3]||(t[3]=function(t){return e.view=1})},"我要訂購",2),Object(n["i"])("div",{class:["nav-btn",{active:2===e.view&&""!==e.order.data}],onClick:t[4]||(t[4]=function(t){return e.view=2})},"訂單明細",2)]),1===e.view&&""!==e.order.data?(Object(n["t"])(),Object(n["e"])("div",d,[Object(n["i"])("h2",null,"訂單: "+Object(n["E"])(e.order.data.name),1),Object(n["i"])("div",l,[Object(n["M"])(Object(n["i"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.userOrdering.data.username=t}),placeholder:"訂購人 (選填)"},null,512),[[n["I"],e.userOrdering.data.username]]),u,Object(n["i"])("div",s,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(e.order.data.options,(function(t,r){return Object(n["t"])(),Object(n["e"])("div",{class:"option",key:t,onClick:function(t){return e.addToOrderings(r)}},Object(n["E"])(t),9,["onClick"])})),128))]),Object(n["M"])(Object(n["i"])("textarea",{"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.userOrdering.data.ordering=t}),placeholder:"目前不支援選擇數量，請手動標記；例: 奶茶x2"},null,512),[[n["I"],e.userOrdering.data.ordering]]),b,Object(n["M"])(Object(n["i"])("textarea",{"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.userOrdering.data.ps=t}),placeholder:"備註 (選填)"},null,512),[[n["I"],e.userOrdering.data.ps]]),Object(n["i"])("div",{class:"update-btn",onClick:t[8]||(t[8]=function(){return e.updateOrder&&e.updateOrder.apply(e,arguments)})},"送出")])])):Object(n["f"])("",!0),Object(n["M"])(Object(n["i"])(h,{orderData:e.order.data,refKey:e.inputRefKey},null,8,["orderData","refKey"]),[[n["J"],2===e.view]]),Object(n["i"])("div",p,[f,(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(e.recent,(function(t,r){return Object(n["t"])(),Object(n["e"])("div",{class:"recent-ordering-item",key:t.name},[Object(n["i"])("div",{class:"delete-btn",onClick:function(t){return e.deleteRecnt(r)}},[O],8,["onClick"]),Object(n["i"])("p",null,[j,Object(n["h"])(Object(n["E"])(t.id),1)]),Object(n["i"])("p",null,[v,Object(n["h"])(Object(n["E"])(t.name),1)]),Object(n["i"])("p",null,[g,Object(n["h"])(Object(n["E"])(t.key)+" ",1),Object(n["i"])("span",{class:"copy-btn",onClick:function(r){return e.copyKey(t.key)}},"複製",8,["onClick"])])])})),128))])])})),y=(r("498a"),r("caad"),r("2532"),r("f904")),h=r.n(y),w=r("6c42"),C=r("6c02"),x=r("5502"),k=Object(n["P"])("data-v-4fecc7d8");Object(n["w"])("data-v-4fecc7d8");var E={id:"ordering-info"},D=Object(n["i"])("h2",null,"訂單明細",-1),R=Object(n["i"])("hr",null,null,-1),K=Object(n["i"])("br",null,null,-1),I={class:"notice"};Object(n["u"])();var T=k((function(e,t,r,a,c,o){return Object(n["t"])(),Object(n["e"])("div",E,[D,Object(n["i"])("p",null,Object(n["E"])(e.orderData.name),1),Object(n["i"])("p",null,Object(n["E"])(e.orderData.create),1),"None"!==e.orderData.name?(Object(n["t"])(),Object(n["e"])("img",{key:0,id:"qrcode-img",src:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/"+e.refKey.trim(),alt:""},null,8,["src"])):Object(n["f"])("",!0),R,(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(e.orderData.orderings,(function(t,r){return Object(n["t"])(),Object(n["e"])("div",{class:"ordering-item",key:t},[Object(n["i"])("p",null,[Object(n["i"])("strong",null,Object(n["E"])(t.username),1)]),Object(n["i"])("span",null,Object(n["E"])(t.ordering),1),K,Object(n["i"])("span",I,"備註: "+Object(n["E"])(t.ps),1),Object(n["i"])("span",{class:"delete",onClick:function(t){return e.removeOrdering(r)}},"×",8,["onClick"])])})),128))])})),U=(r("a434"),r("a4c9")),S=Object(n["j"])({name:"OrderingInfo",props:["orderData","refKey"],setup:function(e){var t=function(t){var r=confirm("確定刪除此筆訂購嗎");if(r){var n=U["a"].database().ref("orders/"+e.refKey.trim()),a=e.orderData.orderings;a.splice(t,1),n.update({orderings:a})}};return{removeOrdering:t}}});r("08de");S.render=T,S.__scopeId="data-v-4fecc7d8";var A=S,N=Object(n["j"])({name:"Search",props:["refKey"],components:{OrderingInfo:A},setup:function(e){var t=Object(x["b"])(),r=Object(n["c"])((function(){return t.state.recent})),a=Object(C["c"])(),c=Object(w["b"])(),o=Object(n["y"])(),i=Object(n["y"])(2),d=Object(n["x"])({data:{username:"",ordering:"",ps:""}}),l=Object(n["x"])({data:{name:"None",options:""}}),u=function(){var e,t=null===(e=o.value)||void 0===e?void 0:e.trim();a.push("/search/"+t),U["a"].database().ref("orders/"+t).on("value",(function(e){if(t&&""!==t)if(e.exists()){var r=e.val();l.data=r}else c.error("查無此訂單");else c.warning("請輸入訂單編號")}))},s=function(e){var t=l.data.options[e],r=d.data.ordering;r.includes(t)||(d.data.ordering+=t+"、")},b=function(){if("None"!==l.data.name)if(""!==d.data.ordering.trim()){var e=U["a"].database().ref("orders/"+o.value);e.get().then((function(t){if(t.val().orderings){var r=t.val().orderings;r.push(d.data),e.update({orderings:r})}else{var n=[d.data];e.update({orderings:n})}c.success("已新增訂購!"),d.data.username="",d.data.ordering="",d.data.ps="",i.value=2}))}else c.error("訂購品項請勿留空");else c.error("訂單不存在")},p=function(e){t.commit("REMOVE_RECENT",e),t.commit("UPDATE_RECENT")},f=function(e){h()(e),c.success("已複製訂單編號")};return Object(n["r"])((function(){""!==o.value&&(o.value=e.refKey,e.refKey&&u())})),{recent:r,view:i,inputRefKey:o,searchOrder:u,order:l,updateOrder:b,userOrdering:d,addToOrderings:s,copyKey:f,deleteRecnt:p}}});r("c94e");N.render=m,N.__scopeId="data-v-0f83c0f9";t["default"]=N},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},ab13:function(e,t,r){var n=r("b622"),a=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},c94e:function(e,t,r){"use strict";r("1f2e")},caad:function(e,t,r){"use strict";var n=r("23e7"),a=r("4d64").includes,c=r("44d2");n({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},ea50:function(e,t,r){},f904:function(e,t,r){"use strict";var n=r("13d9"),a={"text/plain":"Text","text/html":"Url",default:"Text"},c="Copy to clipboard: #{key}, Enter";function o(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function i(e,t){var r,i,d,l,u,s,b=!1;t||(t={}),r=t.debug||!1;try{d=n(),l=document.createRange(),u=document.getSelection(),s=document.createElement("span"),s.textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=a[t.format]||a["default"];window.clipboardData.setData(c,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),u.addRange(l);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");b=!0}catch(f){r&&console.error("unable to copy using execCommand: ",f),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),b=!0}catch(f){r&&console.error("unable to copy using clipboardData: ",f),r&&console.error("falling back to prompt"),i=o("message"in t?t.message:c),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(l):u.removeAllRanges()),s&&document.body.removeChild(s),d()}return b}e.exports=i}}]);
//# sourceMappingURL=chunk-5a9a9802.efddfda0.js.map