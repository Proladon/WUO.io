(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e66a86a"],{"2d3b":function(e,r,t){"use strict";t.r(r);t("b0c0");var a=t("7a23"),n=Object(a["P"])("data-v-0fc151ed");Object(a["w"])("data-v-0fc151ed");var c={id:"search"},i={class:"search-container"},d={class:"nav-container"},o={key:0,class:"order-container"},u={class:"order-form"},s=Object(a["i"])("h4",null,"快速選項",-1),l={class:"options-container"},O=Object(a["i"])("br",null,null,-1);Object(a["u"])();var b=n((function(e,r,t,n,b,j){var v=Object(a["B"])("OrderingInfo");return Object(a["t"])(),Object(a["e"])("div",c,[Object(a["i"])("div",i,[Object(a["M"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=function(r){return e.inputRefKey=r}),placeholder:"訂單編號"},null,512),[[a["I"],e.inputRefKey]]),Object(a["i"])("div",{id:"input-refKey",class:"search-btn",onClick:r[2]||(r[2]=function(){return e.searchOrder&&e.searchOrder.apply(e,arguments)})},"Search")]),Object(a["i"])("div",d,[Object(a["i"])("div",{class:["nav-btn",{active:1===e.view&&""!==e.order.data}],onClick:r[3]||(r[3]=function(r){return e.view=1})},"我要訂購",2),Object(a["i"])("div",{class:["nav-btn",{active:2===e.view&&""!==e.order.data}],onClick:r[4]||(r[4]=function(r){return e.view=2})},"訂單明細",2)]),1===e.view&&""!==e.order.data?(Object(a["t"])(),Object(a["e"])("div",o,[Object(a["i"])("h2",null,"訂單: "+Object(a["E"])(e.order.data.name),1),Object(a["i"])("div",u,[Object(a["M"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":r[5]||(r[5]=function(r){return e.userOrdering.data.username=r}),placeholder:"訂購人 (選填)"},null,512),[[a["I"],e.userOrdering.data.username]]),s,Object(a["i"])("div",l,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(e.order.data.options,(function(r,t){return Object(a["t"])(),Object(a["e"])("div",{class:"option",key:r,onClick:function(r){return e.addToOrderings(t)}},Object(a["E"])(r),9,["onClick"])})),128))]),Object(a["M"])(Object(a["i"])("textarea",{"onUpdate:modelValue":r[6]||(r[6]=function(r){return e.userOrdering.data.ordering=r}),placeholder:"目前不支援選擇數量，請手動標記；例: 奶茶x2"},null,512),[[a["I"],e.userOrdering.data.ordering]]),O,Object(a["M"])(Object(a["i"])("textarea",{"onUpdate:modelValue":r[7]||(r[7]=function(r){return e.userOrdering.data.ps=r}),placeholder:"備註 (選填)"},null,512),[[a["I"],e.userOrdering.data.ps]]),Object(a["i"])("div",{class:"update-btn",onClick:r[8]||(r[8]=function(){return e.updateOrder&&e.updateOrder.apply(e,arguments)})},"送出")])])):Object(a["f"])("",!0),Object(a["M"])(Object(a["i"])(v,{orderData:e.order.data,refKey:e.inputRefKey},null,8,["orderData","refKey"]),[[a["J"],2===e.view]])])})),j=(t("498a"),t("caad"),t("2532"),t("6c42")),v=t("6c02"),p=Object(a["P"])("data-v-30a1bc84");Object(a["w"])("data-v-30a1bc84");var f={id:"ordering-info"},g=Object(a["i"])("h2",null,"訂單明細",-1),m=Object(a["i"])("hr",null,null,-1),h=Object(a["i"])("br",null,null,-1),y={class:"notice"};Object(a["u"])();var w=p((function(e,r,t,n,c,i){return Object(a["t"])(),Object(a["e"])("div",f,[g,Object(a["i"])("p",null,Object(a["E"])(e.orderData.name),1),Object(a["i"])("p",null,Object(a["E"])(e.orderData.create),1),"None"!==e.orderData.name?(Object(a["t"])(),Object(a["e"])("img",{key:0,id:"qrcode-img",src:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/"+e.refKey,alt:""},null,8,["src"])):Object(a["f"])("",!0),m,(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(e.orderData.orderings,(function(r,t){return Object(a["t"])(),Object(a["e"])("div",{class:"ordering-item",key:r},[Object(a["i"])("p",null,[Object(a["i"])("strong",null,Object(a["E"])(r.username),1)]),Object(a["i"])("span",null,Object(a["E"])(r.ordering),1),h,Object(a["i"])("span",y,"備註: "+Object(a["E"])(r.ps),1),Object(a["i"])("span",{class:"delete",onClick:function(r){return e.removeOrdering(t)}},"×",8,["onClick"])])})),128))])})),k=(t("a434"),t("a4c9")),K=Object(a["j"])({name:"OrderingInfo",props:["orderData","refKey"],setup:function(e){var r=function(r){var t=confirm("確定刪除此筆訂購嗎");if(t){var a=k["a"].database().ref("orders/"+e.refKey),n=e.orderData.orderings;n.splice(r,1),a.update({orderings:n})}};return{removeOrdering:r}}});t("37ab");K.render=w,K.__scopeId="data-v-30a1bc84";var x=K,I=Object(a["j"])({name:"Search",props:["refKey"],components:{OrderingInfo:x},setup:function(e){var r=Object(v["c"])(),t=Object(j["b"])(),n=Object(a["y"])(),c=Object(a["y"])(2),i=Object(a["x"])({data:{username:"",ordering:"",ps:""}}),d=Object(a["x"])({data:{name:"None",options:""}}),o=function(){r.push("/search/"+n.value),k["a"].database().ref("orders/"+n.value).on("value",(function(e){var r;if(n.value&&""!==(null===(r=n.value)||void 0===r?void 0:r.trim()))if(e.exists()){var a=e.val();d.data=a}else t.error("查無此訂單");else t.warning("請輸入訂單編號")}))},u=function(e){var r=d.data.options[e],t=i.data.ordering;t.includes(r)||(i.data.ordering+=r+"、")},s=function(){if("None"!==d.data.name)if(""!==i.data.ordering.trim()){var e=k["a"].database().ref("orders/"+n.value);e.get().then((function(r){if(r.val().orderings){var a=r.val().orderings;a.push(i.data),e.update({orderings:a})}else{var n=[i.data];e.update({orderings:n})}t.success("已新增訂購!"),i.data.username="",i.data.ordering="",i.data.ps="",c.value=2}))}else t.error("訂購品項請勿留空");else t.error("訂單不存在")};return Object(a["r"])((function(){""!==n.value&&(n.value=e.refKey,e.refKey&&o())})),{view:c,inputRefKey:n,searchOrder:o,order:d,updateOrder:s,userOrdering:i,addToOrderings:u}}});t("8c40");I.render=b,I.__scopeId="data-v-0fc151ed";r["default"]=I},"37ab":function(e,r,t){"use strict";t("cd08")},"8c40":function(e,r,t){"use strict";t("9c7d")},"9c7d":function(e,r,t){},cd08:function(e,r,t){}}]);
//# sourceMappingURL=chunk-1e66a86a.d2a9845f.js.map