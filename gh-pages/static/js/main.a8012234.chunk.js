(window.webpackJsonpvaultc=window.webpackJsonpvaultc||[]).push([[0],{26:function(t,e,n){t.exports=n(61)},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),u=n(21),c=n.n(u),o=n(9),i=n.n(o),l=n(14),p=n(11),s=n(8);var f=n(4),b=n(5);function m(){var t=Object(f.a)(["\n  display: block;\n  margin-left: auto;\n  padding: 5px 10px;\n  text-transform: uppercase;\n"]);return m=function(){return t},t}function d(){var t=Object(f.a)(["\n  width: 100%;\n  min-height: 150px;\n"]);return d=function(){return t},t}function v(){var t=Object(f.a)(["\n  display: block;\n  font-weight: bold;\n  text-transform: capitalize;\n"]);return v=function(){return t},t}function y(){var t=Object(f.a)(["\n  background: #cecece;\n  width: 100%;\n  max-width: 500px;\n  margin-top: 20px;\n  padding: 15px;\n  border: 1px solid black\n"]);return y=function(){return t},t}function x(){var t=Object(f.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return x=function(){return t},t}function g(){var t=Object(f.a)(["\n  display: block;\n  text-align: center;\n"]);return g=function(){return t},t}var E=b.a.form(g()),h=b.a.div(x()),w=b.a.form(y()),j=b.a.label(v()),O=b.a.textarea(d()),k=b.a.button(m());var S=function(t){var e=Object(r.useState)(""),n=Object(p.a)(e,2),u=n[0],c=n[1],o=Object(r.useState)(""),f=Object(p.a)(o,2),b=f[0],m=f[1],d=Object(r.useState)(""),v=Object(p.a)(d,2),y=v[0],x=v[1],g=Object(r.useRef)(null);function S(){return(S=Object(l.a)(i.a.mark((function t(e){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),b){t.next=3;break}return t.abrupt("return",!1);case 3:return t.next=5,g.current.encrypt(b);case 5:return n=t.sent,console.log(n.toString()),t.next=9,g.current.decrypt(n.toString());case 9:return r=t.sent,console.log(r.toString(s.enc.Utf8)),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return(D=Object(l.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),y){t.next=3;break}return t.abrupt("return",!1);case 3:return t.next=5,g.current.decrypt(y);case 5:return n=t.sent,console.log(n.toString(s.enc.Utf8)),t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return a.a.createElement("div",null,a.a.createElement(E,{onSubmit:function(t){return t.preventDefault(),!!u&&(g.current=function(t){return{encrypt:function(e){return s.AES.encrypt(e,t)},decrypt:function(e){return s.AES.decrypt(e,t)},password:t}}(u),c(""),!1)}},a.a.createElement("label",{htmlFor:"password",className:"d-block"},"Password"),a.a.createElement("input",{type:"text",onChange:function(t){return c(t.target.value)},value:u}),u&&(!g.current||g.current.password!==u)&&a.a.createElement("button",{type:"submit"},"Generate Cipher")),a.a.createElement(h,null,a.a.createElement(w,{onSubmit:function(t){return S.apply(this,arguments)}},a.a.createElement(j,null,"Encryptable text"),a.a.createElement(O,{value:b,onChange:function(t){return m(t.target.value)}}),g.current&&a.a.createElement(k,{type:"submit"},"Encrypt")),a.a.createElement(w,{onSubmit:function(t){return D.apply(this,arguments)}},a.a.createElement(j,null,"Decryptable text"),a.a.createElement(O,{value:y,onChange:function(t){return x(t.target.value)}}),g.current&&a.a.createElement(k,{type:"submit"},"Decrypt"))))};n(60);c.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a8012234.chunk.js.map