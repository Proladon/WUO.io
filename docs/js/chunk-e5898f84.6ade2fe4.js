(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5898f84"],{"08de":function(e,r,t){"use strict";t("ea50")},2532:function(e,r,t){"use strict";var n=t("23e7"),a=t("5a34"),c=t("1d80"),i=t("ab13");n({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(c(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"2d3b":function(e,r,t){"use strict";t.r(r);t("b0c0");var n=t("7a23"),a=Object(n["P"])("data-v-7431ff7f");Object(n["w"])("data-v-7431ff7f");var c={id:"search"},i={class:"search-container"},d={class:"nav-container"},o={key:0,class:"order-container"},u={class:"order-form"},s=Object(n["i"])("h4",null,"快速選項",-1),l={class:"options-container"},O=Object(n["i"])("br",null,null,-1);Object(n["u"])();var b=a((function(e,r,t,a,b,f){var j=Object(n["B"])("OrderingInfo");return Object(n["t"])(),Object(n["e"])("div",c,[Object(n["i"])("div",i,[Object(n["M"])(Object(n["i"])("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=function(r){return e.inputRefKey=r}),placeholder:"訂單編號"},null,512),[[n["I"],e.inputRefKey]]),Object(n["i"])("div",{id:"input-refKey",class:"search-btn",onClick:r[2]||(r[2]=function(){return e.searchOrder&&e.searchOrder.apply(e,arguments)})},"搜尋")]),Object(n["i"])("div",d,[Object(n["i"])("div",{class:["nav-btn",{active:1===e.view&&""!==e.order.data}],onClick:r[3]||(r[3]=function(r){return e.view=1})},"我要訂購",2),Object(n["i"])("div",{class:["nav-btn",{active:2===e.view&&""!==e.order.data}],onClick:r[4]||(r[4]=function(r){return e.view=2})},"訂單明細",2)]),1===e.view&&""!==e.order.data?(Object(n["t"])(),Object(n["e"])("div",o,[Object(n["i"])("h2",null,"訂單: "+Object(n["E"])(e.order.data.name),1),Object(n["i"])("div",u,[Object(n["M"])(Object(n["i"])("input",{type:"text","onUpdate:modelValue":r[5]||(r[5]=function(r){return e.userOrdering.data.username=r}),placeholder:"訂購人 (選填)"},null,512),[[n["I"],e.userOrdering.data.username]]),s,Object(n["i"])("div",l,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(e.order.data.options,(function(r,t){return Object(n["t"])(),Object(n["e"])("div",{class:"option",key:r,onClick:function(r){return e.addToOrderings(t)}},Object(n["E"])(r),9,["onClick"])})),128))]),Object(n["M"])(Object(n["i"])("textarea",{"onUpdate:modelValue":r[6]||(r[6]=function(r){return e.userOrdering.data.ordering=r}),placeholder:"目前不支援選擇數量，請手動標記；例: 奶茶x2"},null,512),[[n["I"],e.userOrdering.data.ordering]]),O,Object(n["M"])(Object(n["i"])("textarea",{"onUpdate:modelValue":r[7]||(r[7]=function(r){return e.userOrdering.data.ps=r}),placeholder:"備註 (選填)"},null,512),[[n["I"],e.userOrdering.data.ps]]),Object(n["i"])("div",{class:"update-btn",onClick:r[8]||(r[8]=function(){return e.updateOrder&&e.updateOrder.apply(e,arguments)})},"送出")])])):Object(n["f"])("",!0),Object(n["M"])(Object(n["i"])(j,{orderData:e.order.data,refKey:e.inputRefKey},null,8,["orderData","refKey"]),[[n["J"],2===e.view]])])})),f=(t("498a"),t("caad"),t("2532"),t("6c42")),j=t("6c02"),p=Object(n["P"])("data-v-4fecc7d8");Object(n["w"])("data-v-4fecc7d8");var v={id:"ordering-info"},g=Object(n["i"])("h2",null,"訂單明細",-1),h=Object(n["i"])("hr",null,null,-1),m=Object(n["i"])("br",null,null,-1),y={class:"notice"};Object(n["u"])();var w=p((function(e,r,t,a,c,i){return Object(n["t"])(),Object(n["e"])("div",v,[g,Object(n["i"])("p",null,Object(n["E"])(e.orderData.name),1),Object(n["i"])("p",null,Object(n["E"])(e.orderData.create),1),"None"!==e.orderData.name?(Object(n["t"])(),Object(n["e"])("img",{key:0,id:"qrcode-img",src:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/"+e.refKey.trim(),alt:""},null,8,["src"])):Object(n["f"])("",!0),h,(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(e.orderData.orderings,(function(r,t){return Object(n["t"])(),Object(n["e"])("div",{class:"ordering-item",key:r},[Object(n["i"])("p",null,[Object(n["i"])("strong",null,Object(n["E"])(r.username),1)]),Object(n["i"])("span",null,Object(n["E"])(r.ordering),1),m,Object(n["i"])("span",y,"備註: "+Object(n["E"])(r.ps),1),Object(n["i"])("span",{class:"delete",onClick:function(r){return e.removeOrdering(t)}},"×",8,["onClick"])])})),128))])})),k=(t("a434"),t("a4c9")),x=Object(n["j"])({name:"OrderingInfo",props:["orderData","refKey"],setup:function(e){var r=function(r){var t=confirm("確定刪除此筆訂購嗎");if(t){var n=k["a"].database().ref("orders/"+e.refKey.trim()),a=e.orderData.orderings;a.splice(r,1),n.update({orderings:a})}};return{removeOrdering:r}}});t("08de");x.render=w,x.__scopeId="data-v-4fecc7d8";var K=x,I=Object(n["j"])({name:"Search",props:["refKey"],components:{OrderingInfo:K},setup:function(e){var r=Object(j["c"])(),t=Object(f["b"])(),a=Object(n["y"])(),c=Object(n["y"])(2),i=Object(n["x"])({data:{username:"",ordering:"",ps:""}}),d=Object(n["x"])({data:{name:"None",options:""}}),o=function(){var e,n=null===(e=a.value)||void 0===e?void 0:e.trim();r.push("/search/"+n),k["a"].database().ref("orders/"+n).on("value",(function(e){if(n&&""!==n)if(e.exists()){var r=e.val();d.data=r}else t.error("查無此訂單");else t.warning("請輸入訂單編號")}))},u=function(e){var r=d.data.options[e],t=i.data.ordering;t.includes(r)||(i.data.ordering+=r+"、")},s=function(){if("None"!==d.data.name)if(""!==i.data.ordering.trim()){var e=k["a"].database().ref("orders/"+a.value);e.get().then((function(r){if(r.val().orderings){var n=r.val().orderings;n.push(i.data),e.update({orderings:n})}else{var a=[i.data];e.update({orderings:a})}t.success("已新增訂購!"),i.data.username="",i.data.ordering="",i.data.ps="",c.value=2}))}else t.error("訂購品項請勿留空");else t.error("訂單不存在")};return Object(n["r"])((function(){""!==a.value&&(a.value=e.refKey,e.refKey&&o())})),{view:c,inputRefKey:a,searchOrder:o,order:d,updateOrder:s,userOrdering:i,addToOrderings:u}}});t("9d49");I.render=b,I.__scopeId="data-v-7431ff7f";r["default"]=I},"5a34":function(e,r,t){var n=t("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"9d49":function(e,r,t){"use strict";t("c074")},ab13:function(e,r,t){var n=t("b622"),a=n("match");e.exports=function(e){var r=/./;try{"/./"[e](r)}catch(t){try{return r[a]=!1,"/./"[e](r)}catch(n){}}return!1}},c074:function(e,r,t){},caad:function(e,r,t){"use strict";var n=t("23e7"),a=t("4d64").includes,c=t("44d2");n({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},ea50:function(e,r,t){}}]);
//# sourceMappingURL=chunk-e5898f84.6ade2fe4.js.map