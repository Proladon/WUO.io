(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-031ee5ee"],{1276:function(e,n,t){"use strict";var i=t("d784"),r=t("44e7"),l=t("825a"),a=t("1d80"),c=t("4840"),u=t("8aa5"),o=t("50c4"),s=t("14c3"),p=t("9263"),f=t("d039"),d=[].push,g=Math.min,h=4294967295,v=!f((function(){return!RegExp(h,"y")}));i("split",2,(function(e,n,t){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var i=String(a(this)),l=void 0===t?h:t>>>0;if(0===l)return[];if(void 0===e)return[i];if(!r(e))return n.call(i,e,l);var c,u,o,s=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,v=new RegExp(e.source,f+"g");while(c=p.call(v,i)){if(u=v.lastIndex,u>g&&(s.push(i.slice(g,c.index)),c.length>1&&c.index<i.length&&d.apply(s,c.slice(1)),o=c[0].length,g=u,s.length>=l))break;v.lastIndex===c.index&&v.lastIndex++}return g===i.length?!o&&v.test("")||s.push(""):s.push(i.slice(g)),s.length>l?s.slice(0,l):s}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,t){var r=a(this),l=void 0==n?void 0:n[e];return void 0!==l?l.call(n,r,t):i.call(String(r),n,t)},function(e,r){var a=t(i,e,this,r,i!==n);if(a.done)return a.value;var p=l(e),f=String(this),d=c(p,RegExp),x=p.unicode,b=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),E=new d(v?p:"^(?:"+p.source+")",b),y=void 0===r?h:r>>>0;if(0===y)return[];if(0===f.length)return null===s(E,f)?[f]:[];var m=0,w=0,R=[];while(w<f.length){E.lastIndex=v?w:0;var I,O=s(E,v?f:f.slice(w));if(null===O||(I=g(o(E.lastIndex+(v?0:w)),f.length))===m)w=u(f,w,x);else{if(R.push(f.slice(m,w)),R.length===y)return R;for(var j=1;j<=O.length-1;j++)if(R.push(O[j]),R.length===y)return R;w=m=I}}return R.push(f.slice(m)),R}]}),!v)},"14c3":function(e,n,t){var i=t("c6b6"),r=t("9263");e.exports=function(e,n){var t=e.exec;if("function"===typeof t){var l=t.call(e,n);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,n)}},"2fef":function(e,n,t){"use strict";t.r(n);var i=t("7a23"),r={id:"auth"},l=Object(i["i"])("h2",null,"登入",-1),a=Object(i["i"])("h2",null,"註冊",-1);function c(e,n,t,c,u,o){return Object(i["t"])(),Object(i["e"])("div",r,[l,a,Object(i["M"])(Object(i["i"])("input",{type:"email","onUpdate:modelValue":n[1]||(n[1]=function(n){return e.email=n}),placeholder:"信箱"},null,512),[[i["I"],e.email]]),Object(i["M"])(Object(i["i"])("input",{type:"password","onUpdate:modelValue":n[2]||(n[2]=function(n){return e.pass=n}),placeholder:"密碼"},null,512),[[i["I"],e.pass]]),Object(i["i"])("div",{class:"signup-btn",onClick:n[3]||(n[3]=function(){return e.signup&&e.signup.apply(e,arguments)})},"註冊"),Object(i["i"])("div",{class:"signin-btn",onClick:n[4]||(n[4]=function(){return e.signin&&e.signin.apply(e,arguments)})},"登入")])}t("498a"),t("1276"),t("ac1f");var u=t("6c42"),o=t("a4c9"),s=Object(i["j"])({name:"Auth",setup:function(){var e=Object(u["b"])(),n=Object(i["y"])(""),t=Object(i["y"])(""),r=function(){if(""!==n.value.trim())if(""!==t.value.trim()){var i=o["a"].auth().createUserWithEmailAndPassword(n.value,t.value);i.then((function(){e.info("註冊成功!")})).catch((function(n){console.log(n);var t=n.code.split("/")[1];switch(t){case"invalid-email":e.warning("請輸入正確信箱");break;case"weak-password":e.warning("密碼至少需 6 位字符");break}}))}else e.warning("請輸入密碼");else e.warning("請輸入信箱")},l=function(){var i=o["a"].auth().signInWithEmailAndPassword(n.value,t.value);i.then((function(){e.info("登入成功!")})).catch((function(e){console.log(e)}))};return{signup:r,signin:l,email:n,pass:t}}});t("6d16");s.render=c;n["default"]=s},"6d16":function(e,n,t){"use strict";t("d219")},"8aa5":function(e,n,t){"use strict";var i=t("6547").charAt;e.exports=function(e,n,t){return n+(t?i(e,n).length:1)}},9263:function(e,n,t){"use strict";var i=t("ad6d"),r=t("9f7f"),l=RegExp.prototype.exec,a=String.prototype.replace,c=l,u=function(){var e=/a/,n=/b*/g;return l.call(e,"a"),l.call(n,"a"),0!==e.lastIndex||0!==n.lastIndex}(),o=r.UNSUPPORTED_Y||r.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],p=u||s||o;p&&(c=function(e){var n,t,r,c,p=this,f=o&&p.sticky,d=i.call(p),g=p.source,h=0,v=e;return f&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,h++),t=new RegExp("^(?:"+g+")",d)),s&&(t=new RegExp("^"+g+"$(?!\\s)",d)),u&&(n=p.lastIndex),r=l.call(f?t:p,v),f?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=p.lastIndex,p.lastIndex+=r[0].length):p.lastIndex=0:u&&r&&(p.lastIndex=p.global?r.index+r[0].length:n),s&&r&&r.length>1&&a.call(r[0],t,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),e.exports=c},"9f7f":function(e,n,t){"use strict";var i=t("d039");function r(e,n){return RegExp(e,n)}n.UNSUPPORTED_Y=i((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),n.BROKEN_CARET=i((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,n,t){"use strict";var i=t("23e7"),r=t("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,n,t){"use strict";var i=t("825a");e.exports=function(){var e=i(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},d219:function(e,n,t){},d784:function(e,n,t){"use strict";t("ac1f");var i=t("6eeb"),r=t("d039"),l=t("b622"),a=t("9263"),c=t("9112"),u=l("species"),o=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),p=l("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),d=!r((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,n,t,p){var g=l(e),h=!r((function(){var n={};return n[g]=function(){return 7},7!=""[e](n)})),v=h&&!r((function(){var n=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[u]=function(){return t},t.flags="",t[g]=/./[g]),t.exec=function(){return n=!0,null},t[g](""),!n}));if(!h||!v||"replace"===e&&(!o||!s||f)||"split"===e&&!d){var x=/./[g],b=t(g,""[e],(function(e,n,t,i,r){return n.exec===a?h&&!r?{done:!0,value:x.call(n,t,i)}:{done:!0,value:e.call(t,n,i)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),E=b[0],y=b[1];i(String.prototype,e,E),i(RegExp.prototype,g,2==n?function(e,n){return y.call(e,this,n)}:function(e){return y.call(e,this)})}p&&c(RegExp.prototype[g],"sham",!0)}}}]);
//# sourceMappingURL=chunk-031ee5ee.be764546.js.map