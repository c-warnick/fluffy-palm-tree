(this["webpackJsonpbarcode-beta"]=this["webpackJsonpbarcode-beta"]||[]).push([[0],{155:function(e,t,n){},156:function(e,t,n){},158:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n.n(r),c=n(146),o=n.n(c),s=(n(155),n(36)),i=(n(156),n(119)),u=n(0),d=n.n(u),f=n(51),l=(n(158),n(117)),p=n(26),b=function(e){var t=e.style,n=void 0===t?{}:t,a=e.width,c=e.height,o=e.mirrored,u=r.useState(),b=Object(s.a)(u,2),j=b[0],v=b[1],x=r.useState(),h=Object(s.a)(x,2),O=h[0],m=h[1],g=r.useState(),y=Object(s.a)(g,2),S=y[0],w=y[1],k=r.useState(null),F=Object(s.a)(k,2),E=F[0],R=F[1],T=r.useState(""),B=Object(s.a)(T,2),C=B[0],D=B[1],I=r.useRef(null),M=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.BrowserCodeReader.listVideoInputDevices();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C&&D(""),!j){e.next=6;break}return e.next=4,j.decodeFromVideoDevice(S,null===(t=I.current)||void 0===t?void 0:t.id,(function(e,t,r){console.log("Scanning Results",e),e&&(D((null===e||void 0===e?void 0:e.getBarcodeFormat())+": "+(null===e||void 0===e?void 0:e.getText())),n.stop())}));case 4:n=e.sent,R(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.useEffect((function(){return j||v(new l.BrowserMultiFormatOneDReader),O||M(),S&&P(),function(){E&&E.stop()}}),[S]),r.useEffect((function(){O&&w(O[0].deviceId)}),[O]);var J=o?Object(i.a)(Object(i.a)({},n),{},{transform:"".concat(n.transform||""," scaleX(-1)")}):n;return Object(p.jsxs)("div",{id:"videoview",children:[Object(p.jsx)("video",{id:"video",ref:I,style:J,width:a,height:c}),C&&Object(p.jsx)("button",{onClick:P,children:"Start Scanning"}),Object(p.jsx)("input",{type:"text",value:C,readOnly:!0,id:"resultText"})]})};b.defaultProps={audio:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92};var j=b,v=n(147),x=n(14),h=(n(160),n(115));h.a.engineResourcePath="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.8.3/dist/",h.a.BarcodeReader.productKeys="t0068NQAAAD1L44opxTeO3G45x0qlWOJPRt+62ln5s7/qCVxF1VFHxS8PjDI4Mk4D7JTQ8EJiyifv1gvU7eDRc4NjGDvuBH8=";var O=h.a,m=function(e){var t=e.appendMessage,n=r.useState(!1),a=Object(s.a)(n,2),c=(a[0],a[1]),o=r.useState(null),i=Object(s.a)(o,2),u=i[0],l=i[1],b=r.useRef(null),j=function(){var e=Object(f.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u){e.next=6;break}return e.next=4,O.BarcodeScanner.createInstance();case 4:n=e.sent,l(n);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t({msg:e.t0.message,type:"error"}),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.current.appendChild(u.getUIElement()),u.onFrameRead=function(e){var n,r=Object(x.a)(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;console.log(a.barcodeFormatString+": "+a.barcodeText),t({format:a.barcodeFormatString,text:a.barcodeText,type:"result"}),-1!==a.barcodeText.indexOf("Attention(exceptionCode")&&t({msg:a.exception.message,type:"error"})}}catch(c){r.e(c)}finally{r.f()}},e.next=4,u.open();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(!0),!u){e.next=4;break}return e.next=4,u.destroy();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.useEffect((function(){return j(),function(){h()}}),[]),r.useEffect((function(){u&&v()}),[u]),Object(p.jsx)("div",{ref:b})},g=function(e){Object(v.a)(e);var t=r.useState(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],o=r.useState(""),i=Object(s.a)(o,2),u=i[0],l=i[1],b=r.useState(!1),j=Object(s.a)(b,2),x=j[0],h=j[1],g=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.BarcodeScanner.loadWasm();case 3:c(!0),h(!0),e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),alert(e.t0.message),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.useEffect((function(){g()}),[]),Object(p.jsxs)("div",{className:"helloWorld",children:[Object(p.jsxs)("div",{id:"UIElement",children:[!a&&Object(p.jsx)("span",{children:"Loading Library..."}),x&&Object(p.jsx)(m,{appendMessage:function(e){switch(e.type){case"result":l(e.format+": "+e.text);break;case"error":l(e.msg)}}})]}),Object(p.jsx)("input",{type:"text",value:u,readOnly:!0,id:"resultText"})]})};var y=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)("div",{className:"container mx-auto",children:[Object(p.jsxs)("div",{style:{minHeight:"200px"},children:[!n&&Object(p.jsx)(j,{width:300,height:200}),n&&Object(p.jsx)(g,{})]}),Object(p.jsx)("div",{style:{position:"relative"},children:Object(p.jsx)("button",{onClick:function(){a(!n)},children:"Switch reader"})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),S()}},[[161,1,2]]]);
//# sourceMappingURL=main.2c8795ed.chunk.js.map