(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4,6],{"+J+N":function(e,t,a){},"0lfv":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c}));var n=()=>JSON.parse(localStorage.getItem("dataSource")||"{}"),r=e=>{var t=n(),a=[];return Object.keys(t).forEach((e=>a.push(...t[e].apps))),a.find((t=>t.name===e))},c=e=>localStorage.setItem("dataSource",JSON.stringify(e))},Idy6:function(e,t,a){"use strict";a.r(t);a("QE6f");var n=a("Xo8F"),r=(a("tLCQ"),a("XYLF")),c=a("VTBJ"),l=(a("ywh3"),a("+J+N"),a("QbLZ")),o=a.n(l),i=a("iCc5"),s=a.n(i),m=a("V7oC"),u=a.n(m),d=a("FYw3"),p=a.n(d),f=a("mRg0"),g=a.n(f),E=a("TSYQ"),_=a.n(E),b=a("q1tI"),h=a.n(b),v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a},O=function(e){function t(){return s()(this,t),p()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,a=e.className,n=e.children,r=e.mode,c=e.icon,l=e.onLeftClick,i=e.leftContent,s=e.rightContent,m=v(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return b["createElement"]("div",o()({},m,{className:_()(a,t,t+"-"+r)}),b["createElement"]("div",{className:t+"-left",role:"button",onClick:l},c?b["createElement"]("span",{className:t+"-left-icon","aria-hidden":"true"},c):null,i),b["createElement"]("div",{className:t+"-title"},n),b["createElement"]("div",{className:t+"-right"},s))}}]),t}(b["Component"]),y=O;O.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}};a("D2jH");var j=a("2ROE"),w=a("9kvl"),k=a("i7U8"),x=a("0lfv"),C=a("bIAK"),N=a("La0L"),I=a.n(N),L=a("I5X1"),S=e=>{var t=e.match,a=t.params,l=a.appId,o=Object(x["b"])(l),i=Object(L["a"])("initialiseModel",(e=>e)),s=i.isScriptable;return h.a.createElement(h.a.Fragment,null,h.a.createElement(y,{mode:"light",icon:h.a.createElement(j["a"],{type:"left"}),onLeftClick:()=>w["a"].goBack()}),o?h.a.createElement("div",{className:I.a.container},h.a.createElement(r["a"],{full:!0},h.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u4fe1\u606f",extra:s?h.a.createElement(k["CustomerIcon"],{icon:"https://img.icons8.com/clouds/344/download-2.png",onClick:()=>{var e=new CustomEvent("catalog-event",{detail:Object(c["a"])(Object(c["a"])({},o),{},{key:"downloadButtonClicked"})});window.dispatchEvent(e),console.log("\u89e6\u53d1\u4e0b\u8f7d\u529f\u80fd")}}):h.a.createElement("a",{href:o.scriptURL,download:"".concat(o.name,".js")},h.a.createElement(k["CustomerIcon"],{icon:"https://img.icons8.com/clouds/344/download-2.png"}))}),h.a.createElement(r["a"].Body,{className:I.a.container_body},h.a.createElement(n["a"],{align:"start",justify:"start"},h.a.createElement("img",{className:I.a.appImg,src:o.thumb,alt:o.name}),h.a.createElement(n["a"].Item,null,h.a.createElement(n["a"],{direction:"column",align:"start"},h.a.createElement(n["a"],null,h.a.createElement("h3",{className:I.a.appTitle},o.title)),h.a.createElement(n["a"].Item,null,h.a.createElement("div",{className:I.a.appDesc},o.description))))))),o.html&&h.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.html}}),o.images&&h.a.createElement("div",{className:I.a.photos},h.a.createElement(r["a"],{full:!0},h.a.createElement(r["a"].Header,{title:"\u7ec4\u4ef6\u76f8\u518c"}),h.a.createElement(r["a"].Body,null,o.images.map(((e,t)=>h.a.createElement("img",{key:"img".concat(t),src:e,alt:""}))))))):h.a.createElement(C["a"],null,"\u6ca1\u6709\u627e\u5230\u8be5\u7ec4\u4ef6"))};t["default"]=S},La0L:function(e,t,a){e.exports={container:"container___2dK_3",container_body:"container_body___1k27R",appImg:"appImg___1MXfc",appTitle:"appTitle___2Vrw4",appDesc:"appDesc___qLGi7",photos:"photos___2UKHY"}},R0pf:function(e,t,a){e.exports={container:"container___3WbTd",widgetTitle:"widgetTitle___1Ojl9",icon:"icon___38pp4",subList:"subList___1NVQZ","row-dragging":"row-dragging___1TbdM",avatar:"avatar___2yRWX",user_info:"user_info___1pF6R",user_title:"user_title___3VZaa",user_text:"user_text___2-KJa",extra:"extra___1Pjch"}},i7U8:function(e,t,a){"use strict";a.r(t),a.d(t,"CustomerIcon",(function(){return L}));a("mw1O");var n=a("nJCp"),r=a("VTBJ"),c=(a("tLCQ"),a("XYLF")),l=a("o0o1"),o=a.n(l),i=a("HaE+"),s=(a("RFiq"),a("ZyfH")),m=a("ODXe"),u=(a("pYJI"),a("EIQY")),d=(a("B8GA"),a("8dL9")),p=(a("QE6f"),a("Xo8F")),f=a("wx14"),g=a("Ff2n"),E=(a("puyI"),a("xZH1")),_=a("q1tI"),b=a.n(_),h=a("wYyv"),v=a.n(h),O=a("YJCA"),y=a("R0pf"),j=a.n(y),w=a("0lfv"),k=(a("HVTF"),a("OT5E")),x=a("9kvl"),C=function(){var e=Object(i["a"])(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(x["c"])(t,{method:"get"});case 2:a=e.sent;try{a.scriptable?(n=JSON.parse(localStorage.getItem("dataSource")||"{}"),n[t]=a,localStorage.setItem("dataSource",JSON.stringify(n))):k["a"].fail("\u8ba2\u9605\u5730\u5740\u9519\u8bef")}catch(r){k["a"].fail(JSON.stringify(r))}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=a("bIAK"),I=E["a"].prompt,L=Object(_["forwardRef"])(((e,t)=>{var a=e.icon,n=Object(g["a"])(e,["icon"]);return b.a.createElement("img",Object(f["a"])({ref:t,className:j.a.icon,alt:"",src:a},n))})),S=Object(O["c"])((e=>{var t=e.src,a=Object(g["a"])(e,["src"]);return b.a.createElement("img",Object(f["a"])({className:j.a.avatar,src:t,alt:""},a))})),J=e=>{var t=e.dataSource,a=e.update,n=e.setLoading;return b.a.createElement(u["a"],{className:j.a.subList,autoClose:!0,right:[{text:"\u66f4\u65b0",onPress:()=>(n(!0),C(t.url).then((()=>{var e=Object(w["a"])();a(e)})).finally((()=>{n(!1)}))),style:{backgroundColor:"#77cad1",color:"white"}},{text:"\u5220\u9664",onPress:()=>{var e=Object(w["a"])();delete e[t.url],Object(w["c"])(e),a(e)},style:{backgroundColor:"red",color:"white"}}],style:{marginBottom:10,padding:"10px 0"}},b.a.createElement(p["a"],null,b.a.createElement(S,{src:t.icon}),b.a.createElement("div",null,b.a.createElement(p["a"],{className:j.a.user_info,direction:"column",justify:"start"},b.a.createElement("div",{className:j.a.user_title},t.author," \u7ec4\u4ef6"),b.a.createElement("div",null,t.repo),b.a.createElement("div",{className:j.a.user_text},"@",t.author))),b.a.createElement(d["a"],{text:t.counts,size:"small"}),b.a.createElement("div",{style:{marginLeft:"auto"}},b.a.createElement("a",{href:t.repo,target:"_blank"},b.a.createElement(L,{icon:"https://img.icons8.com/clouds/344/github.png",style:{width:"3rem",height:"3rem"}})))))},T=Object(O["b"])((e=>b.a.createElement(J,e))),H=Object(O["a"])((e=>{var t=e.children;return b.a.createElement("div",null,t)}));t["default"]=()=>{var e=Object(w["a"])(),t=b.a.useState(e),a=Object(m["a"])(t,2),l=a[0],u=a[1],d=b.a.useState(!1),p=Object(m["a"])(d,2),f=p[0],g=p[1];return b.a.createElement(n["a"],{className:j.a.container},b.a.createElement(s["a"],{toast:!0,animating:f}),b.a.createElement(c["a"],null,b.a.createElement(c["a"].Header,{className:j.a.widgetTitle,title:"\u7ec4\u4ef6\u8ba2\u9605(".concat(Object.keys(l).length,")"),extra:b.a.createElement("div",{className:j.a.extra},b.a.createElement(L,{icon:"https://img.icons8.com/clouds/344/cloud-refresh.png",onClick:Object(i["a"])(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object.keys(l),g(!0),a=0,n=t;case 3:if(!(a<n.length)){e.next=10;break}return r=n[a],e.next=7,C(r);case 7:a++,e.next=3;break;case 10:u(Object(w["a"])()),g(!1);case 12:case"end":return e.stop()}}),e)})))}),b.a.createElement(L,{icon:"https://img.icons8.com/clouds/344/add.png",onClick:()=>I("\u8f93\u5165\u7ec4\u4ef6\u8ba2\u9605\u5730\u5740","",[{text:"\u53d6\u6d88"},{text:"\u786e\u5b9a",onPress:function(){var e=Object(i["a"])(o.a.mark((function e(t){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return g(!0),e.next=3,C(t);case 3:u(Object(w["a"])()),g(!1);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}])}))}),b.a.createElement(c["a"].Body,{style:{minHeight:100}},b.a.createElement(H,{useDragHandle:!0,helperClass:j.a["row-dragging"],onSortEnd:t=>{var a=t.oldIndex,n=t.newIndex,r=Object.keys(l),c=v()(r,a,n),o={};c.forEach((t=>{o[t]=e[t]})),Object(w["c"])(o),u(o)}},Object.keys(l).length?Object.keys(l).map(((e,t)=>{var a=l[e],n=Object(r["a"])(Object(r["a"])({},a),{},{counts:a.apps.length,url:e});return b.a.createElement(T,{key:e,index:t,dataSource:n,update:u,setLoading:g})})):b.a.createElement(N["a"],{style:{height:"5rem"}},"\u6682\u672a\u6dfb\u52a0\u76f8\u5173\u8ba2\u9605")))))}}}]);