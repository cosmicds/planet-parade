(()=>{"use strict";var e={6809:(e,n,t)=>{var o=t(3751),l=t(3637),r=t(1635),a=t(641),u=t(33),i=t(953),s=t(6883),c=t(1828),d=t(6059),f=t(2975),v=t(2082),b=t(2877),m=t(5112),p=t(4492),k=t(4261),g=t(1743),h=t(2939),L=t(4843),_=t(1686),y=t(4915),W=t(6175),w=t(4859),F=t(331),R={id:"main-content"},x=(0,a.Lk)("div",{id:"splash-screen-text"},[(0,a.Lk)("p",null,"Splash Screen Content")],-1),C={id:"splash-screen-acknowledgements",class:"small"},T=(0,a.Lk)("a",{href:"https://www.cosmicds.cfa.harvard.edu/",target:"_blank",rel:"noopener noreferrer"},"Cosmic Data Stories",-1),V=(0,a.Lk)("a",{href:"https://www.worldwidetelescope.org/home/",target:"_blank",rel:"noopener noreferrer"},"WorldWide Telescope",-1),S={id:"splash-screen-logos"},O={class:"modal",id:"modal-loading"},E=(0,a.Lk)("div",{class:"container"},[(0,a.Lk)("div",{class:"spinner"}),(0,a.Lk)("p",null,"Loading …")],-1),K=[E],P={id:"top-content"},U={id:"left-buttons"},j=(0,a.Lk)("div",{id:"center-buttons"},null,-1),A=(0,a.Lk)("div",{id:"right-buttons"},null,-1),D={id:"bottom-content"},B={key:0,id:"body-logos"},I={class:"video-wrapper"},J=(0,a.Lk)("video",{controls:"",id:"info-video"},[(0,a.Lk)("source",{src:"",type:"video/mp4"})],-1),M=(0,a.Lk)("h3",null,"Information",-1),z=(0,a.Lk)("h3",null,"Using WWT",-1),H=(0,a.Lk)("br",null,null,-1),N=(0,a.Lk)("br",null,null,-1),Y=(0,a.Lk)("div",{class:"credits"},[(0,a.Lk)("h3",null,"Credits:"),(0,a.Lk)("h4",null,[(0,a.Lk)("a",{href:"https://www.cosmicds.cfa.harvard.edu/",target:"_blank",rel:"noopener noreferrer"},"CosmicDS"),(0,a.eW)(" Vue Data Stories Team:")]),(0,a.eW)(" John Lewis"),(0,a.Lk)("br"),(0,a.eW)(" Jon Carifio"),(0,a.Lk)("br"),(0,a.eW)(" Pat Udomprasert"),(0,a.Lk)("br"),(0,a.eW)(" Alyssa Goodman"),(0,a.Lk)("br"),(0,a.eW)(" Mary Dussault"),(0,a.Lk)("br"),(0,a.eW)(" Harry Houghton"),(0,a.Lk)("br"),(0,a.eW)(" Anna Nolin"),(0,a.Lk)("br"),(0,a.eW)(" Evaluator: Sue Sunbury"),(0,a.Lk)("br"),(0,a.Lk)("br"),(0,a.Lk)("h4",null,"WorldWide Telescope Team:"),(0,a.eW)(" Peter Williams"),(0,a.Lk)("br"),(0,a.eW)(" A. David Weigel"),(0,a.Lk)("br"),(0,a.eW)(" Jon Carifio"),(0,a.Lk)("br")],-1);const G=(0,a.pM)({__name:"PlanetaryAlignment",props:{wwtNamespace:{default:"planetary-alignment"},initialCameraParams:{default:function(){return{raRad:0,decRad:0,zoomDeg:60}}}},setup:function(e){var n,t=this,E=(0,s.engineStore)();(0,l.useWWTKeyboardControls)(E);var G=(0,l.supportsTouchscreen)(),X=(0,c._F)().smAndDown,Z=e,q="false"!==(null===(n=new URLSearchParams(window.location.search).get("splash"))||void 0===n?void 0:n.toLowerCase()),Q=(0,i.KR)(q),$=(0,i.Kh)([]),ee=(0,i.KR)(null),ne=(0,i.KR)(!1),te=(0,i.KR)(!1),oe=(0,i.KR)("#ffffff"),le=(0,i.KR)("#ffffff"),re=(0,i.KR)(0);(0,a.sV)((function(){E.waitForReady().then((function(){return(0,r.sH)(t,void 0,void 0,(function(){return(0,r.YH)(this,(function(e){return l.skyBackgroundImagesets.forEach((function(e){return $.push(e)})),E.gotoRADecZoom((0,r.Cl)((0,r.Cl)({},Z.initialCameraParams),{instant:!0})).then((function(){return te.value=!0})),ne.value=!0,[2]}))}))}))}));var ae=(0,a.EW)((function(){return ne.value&&te.value})),ue=(0,a.EW)((function(){return!ae.value})),ie=(0,a.EW)((function(){return X})),se=(0,a.EW)((function(){return{"--accent-color":oe.value,"--app-content-height":ce.value?"66%":"100%"}})),ce=(0,a.EW)({get:function(){return"text"===ee.value},set:function(e){ve("text")}}),de=(0,a.EW)({get:function(){return"video"===ee.value},set:function(e){if(ve("video"),!e){var n=document.querySelector("#info-video");n.pause()}}});function fe(){Q.value=!1}function ve(e){ee.value===e?(ee.value=null,(0,a.dY)((function(){(0,l.blurActiveElement)()}))):ee.value=e}return function(e,n){var t=(0,a.g2)("WorldWideTelescope"),l=(0,a.g2)("credit-logos"),r=(0,a.g2)("icon-button"),s=(0,a.g2)("font-awesome-icon"),c=(0,a.g2)("funding-acknowledgement");return(0,a.uX)(),(0,a.Wv)(d.E,{id:"app",style:(0,u.Tr)(se.value)},{default:(0,a.k6)((function(){return[(0,a.Lk)("div",R,[(0,a.bF)(t,{"wwt-namespace":e.wwtNamespace},null,8,["wwt-namespace"]),(0,a.bF)(L.L,{"model-value":Q.value,absolute:"",opacity:"0.6",style:(0,u.Tr)(se.value),id:"splash-overlay"},{default:(0,a.k6)((function(){return[(0,a.bo)(((0,a.uX)(),(0,a.CE)("div",{id:"splash-screen",style:(0,u.Tr)(se.value)},[(0,a.Lk)("div",{id:"close-splash-button",onClick:fe},"× "),x,(0,a.Lk)("div",C,[(0,a.eW)(" This Data Story is brought to you by "),T,(0,a.eW)(" and "),V,(0,a.eW)(". "),(0,a.Lk)("div",S,[(0,a.bF)(l,{"logo-size":"5vmin"})])])],4)),[[F.i,fe]])]})),_:1},8,["model-value","style"]),(0,a.bF)(o.eB,{name:"fade"},{default:(0,a.k6)((function(){return[(0,a.bo)((0,a.Lk)("div",O,K,512),[[o.aG,ue.value]])]})),_:1}),(0,a.Lk)("div",P,[(0,a.Lk)("div",U,[(0,a.bF)(r,{modelValue:ce.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return ce.value=e}),"fa-icon":"book-open",color:le.value,"tooltip-text":ce.value?"Hide Info":"Learn More","tooltip-location":"start"},null,8,["modelValue","color","tooltip-text"]),(0,a.bF)(r,{modelValue:de.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return de.value=e}),"fa-icon":"video",color:le.value,"tooltip-text":"Watch video","tooltip-location":"start"},null,8,["modelValue","color"])]),j,A]),(0,a.Lk)("div",D,[ie.value?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",B,[(0,a.bF)(l)]))]),(0,a.bF)(m.p,{id:"video-container",modelValue:de.value,"onUpdate:modelValue":n[4]||(n[4]=function(e){return de.value=e}),transition:"slide-y-transition",fullscreen:""},{default:(0,a.k6)((function(){return[(0,a.Lk)("div",I,[(0,a.bF)(s,{id:"video-close-icon",class:"close-icon",icon:"times",size:"lg",onClick:n[2]||(n[2]=function(e){return de.value=!1}),onKeyup:n[3]||(n[3]=(0,o.jR)((function(e){return de.value=!1}),["enter"])),tabindex:"0"}),J])]})),_:1},8,["modelValue"]),(0,a.bF)(m.p,{style:(0,u.Tr)(se.value),class:"bottom-sheet",id:"text-bottom-sheet","hide-overlay":"",persistent:"","no-click-animation":"",absolute:"",width:"100%",scrim:!1,location:"bottom",modelValue:ce.value,"onUpdate:modelValue":n[9]||(n[9]=function(e){return ce.value=e}),transition:"dialog-bottom-transition"},{default:(0,a.k6)((function(){return[(0,a.bF)(f.J,{height:"100%"},{default:(0,a.k6)((function(){return[(0,a.bF)(_.h,{modelValue:re.value,"onUpdate:modelValue":n[5]||(n[5]=function(e){return re.value=e}),height:"32px",color:oe.value,"slider-color":oe.value,id:"tabs",dense:""},{default:(0,a.k6)((function(){return[(0,a.bF)(y.U,{class:"info-tabs",tabindex:"0"},{default:(0,a.k6)((function(){return[M]})),_:1}),(0,a.bF)(y.U,{class:"info-tabs",tabindex:"0"},{default:(0,a.k6)((function(){return[z]})),_:1})]})),_:1},8,["modelValue","color","slider-color"]),(0,a.bF)(s,{id:"close-text-icon",class:"control-icon",icon:"times",size:"lg",onClick:n[6]||(n[6]=function(e){return ce.value=!1}),onKeyup:n[7]||(n[7]=(0,o.jR)((function(e){return ce.value=!1}),["enter"])),tabindex:"0"}),(0,a.bF)(W.r3,{modelValue:re.value,"onUpdate:modelValue":n[8]||(n[8]=function(e){return re.value=e}),id:"tab-items",class:"pb-2 no-bottom-border-radius"},{default:(0,a.k6)((function(){return[(0,a.bF)(w.m,null,{default:(0,a.k6)((function(){return[(0,a.bF)(f.J,{class:"no-bottom-border-radius scrollable"},{default:(0,a.k6)((function(){return[(0,a.bF)(v.O,{class:"info-text no-bottom-border-radius"},{default:(0,a.k6)((function(){return[(0,a.eW)(" Information goes here ")]})),_:1})]})),_:1})]})),_:1}),(0,a.bF)(w.m,null,{default:(0,a.k6)((function(){return[(0,a.bF)(f.J,{class:"no-bottom-border-radius scrollable"},{default:(0,a.k6)((function(){return[(0,a.bF)(v.O,{class:"info-text no-bottom-border-radius"},{default:(0,a.k6)((function(){return[(0,a.bF)(p.I,null,{default:(0,a.k6)((function(){return[(0,a.bF)(k.L,{align:"center"},{default:(0,a.k6)((function(){return[(0,a.bF)(g.B,{cols:"4"},{default:(0,a.k6)((function(){return[(0,a.bF)(b.x,{label:"",outlined:""},{default:(0,a.k6)((function(){return[(0,a.eW)(" Pan ")]})),_:1})]})),_:1}),(0,a.bF)(g.B,{cols:"8",class:"pt-1"},{default:(0,a.k6)((function(){return[(0,a.Lk)("strong",null,(0,u.v_)((0,i.R1)(G)?"press + drag":"click + drag"),1),(0,a.eW)(" "+(0,u.v_)((0,i.R1)(G)?":":"or")+" ",1),(0,a.Lk)("strong",null,(0,u.v_)((0,i.R1)(G)?":":"W-A-S-D"),1),(0,a.eW)(" "+(0,u.v_)((0,i.R1)(G)?":":"keys"),1),H]})),_:1})]})),_:1}),(0,a.bF)(k.L,{align:"center"},{default:(0,a.k6)((function(){return[(0,a.bF)(g.B,{cols:"4"},{default:(0,a.k6)((function(){return[(0,a.bF)(b.x,{label:"",outlined:""},{default:(0,a.k6)((function(){return[(0,a.eW)(" Zoom ")]})),_:1})]})),_:1}),(0,a.bF)(g.B,{cols:"8",class:"pt-1"},{default:(0,a.k6)((function(){return[(0,a.Lk)("strong",null,(0,u.v_)((0,i.R1)(G)?"pinch in and out":"scroll in and out"),1),(0,a.eW)(" "+(0,u.v_)((0,i.R1)(G)?":":"or")+" ",1),(0,a.Lk)("strong",null,(0,u.v_)((0,i.R1)(G)?":":"I-O"),1),(0,a.eW)(" "+(0,u.v_)((0,i.R1)(G)?":":"keys"),1),N]})),_:1})]})),_:1}),(0,a.bF)(k.L,null,{default:(0,a.k6)((function(){return[(0,a.bF)(g.B,{cols:"12"},{default:(0,a.k6)((function(){return[Y,(0,a.bF)(h.h,{class:"end-spacer"})]})),_:1})]})),_:1}),(0,a.bF)(k.L,null,{default:(0,a.k6)((function(){return[(0,a.bF)(g.B,null,{default:(0,a.k6)((function(){return[(0,a.bF)(c)]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["style","modelValue"])])]})),_:1},8,["style"])}}}),X=G,Z=X;var q=t(1050),Q=t(6102),$=t(1569);t(5524);const ee=(0,Q.$N)({icons:{defaultSet:"mdi",aliases:q.z,sets:{mdi:q.r}},locale:{locale:"en",fallback:"en",messages:{en:$.A}},theme:{defaultTheme:"dark"}});var ne=t(1273),te=t(7107),oe=t(6188);te.Yv.add(oe.ReK),te.Yv.add(oe.GRI),te.Yv.add(oe.n2W);var le=function(e,n){return e.style.visibility=n.value?"hidden":""};(0,o.Ef)(Z,{wwtNamespace:"planetary-alignment"}).use(s.wwtPinia).use(ee).directive("hide",{beforeMount:function(e,n,t,o){le(e,n)},updated:function(e,n,t,o){le(e,n)}}).component("WorldWideTelescope",s.WWTComponent).component("font-awesome-icon",ne.gc).component("icon-button",l.IconButton).component("funding-acknowledgement",l.FundingAcknowledgement).component("credit-logos",l.CreditLogos).mount("#app")}},n={};function t(o){var l=n[o];if(void 0!==l)return l.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}t.m=e,(()=>{var e=[];t.O=(n,o,l,r)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,l,r]=e[c],u=!0,i=0;i<o.length;i++)(!1&r||a>=r)&&Object.keys(t.O).every((e=>t.O[e](o[i])))?o.splice(i--,1):(u=!1,r<a&&(a=r));if(u){e.splice(c--,1);var s=l();void 0!==s&&(n=s)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,l,r]}})(),(()=>{t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={524:0};t.O.j=n=>0===e[n];var n=(n,o)=>{var l,r,[a,u,i]=o,s=0;if(a.some((n=>0!==e[n]))){for(l in u)t.o(u,l)&&(t.m[l]=u[l]);if(i)var c=i(t)}for(n&&n(o);s<a.length;s++)r=a[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},o=self["webpackChunk_cosmicds_planetary_alignment"]=self["webpackChunk_cosmicds_planetary_alignment"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var o=t.O(void 0,[504],(()=>t(6809)));o=t.O(o)})();
//# sourceMappingURL=app.55da1d3a.js.map