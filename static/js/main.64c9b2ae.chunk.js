(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{189:function(e,t,a){e.exports=a(333)},331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=a(79),l=a(46);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u,s=a(12),m=a(164),p=a(340),d=a(38),f=a.n(d),b=a(62),h=a(23),v=a(80),E=a.n(v),O=a(165),j=a.n(O),g=a(100),y=a(101),w="https://tager.dev.ozitag.com",_="".concat(w,"/api/auth/user"),x={method:"POST",headers:{"Content-Type":"application/json"}},S=function(){var e=Object(b.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=2;break}return e.abrupt("return",u);case 2:if(t&&a){e.next=4;break}return e.abrupt("return",null);case 4:return e.next=6,fetch(_,Object(h.a)(Object(h.a)({},x),{},{body:JSON.stringify({email:t,password:a,clientId:1})}));case 6:return n=e.sent,e.next=9,n.json();case 9:return(n=e.sent).errors&&alert(n.message),u=E()(n,"data.accessToken",null),e.abrupt("return",u);case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(){function e(t){Object(g.a)(this,e),this.host=w,this.api=t,this.url="".concat(this.host).concat(this.api)}return Object(y.a)(e,[{key:"get",value:function(t,a){return e.request("".concat(this.url).concat(t),Object(h.a)(Object(h.a)({},a),{},{method:"GET"}))}},{key:"post",value:function(t,a){return e.request("".concat(this.url).concat(t),Object(h.a)(Object(h.a)({},a),{},{method:"POST"}))}}],[{key:"request",value:function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n,r,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,S();case 3:return n=e.sent,e.next=6,fetch(t,Object(h.a)(Object(h.a)({},a),{},{headers:Object(h.a)({Authorization:"Bearer ".concat(n),Accept:"application/json","Content-Type":"application/json"},a.headers)}));case 6:return r=e.sent,e.next=9,r.json();case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),k=(new T("/api/auth"),new T("/api/tager/user")),D={user:{name:null,email:null},loginForm:{isButtonDisabled:!1}},A=function(e){return{type:"SET_LOGIN_STATE",payload:{isButtonDisabled:e}}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;switch(n){case"SET_USER_DATA":return Object(h.a)(Object(h.a)({},e),{},{user:a});case"SET_LOGIN_STATE":return Object(h.a)(Object(h.a)({},e),{},{loginForm:a});default:return Object(h.a)({},e)}},C=Object(s.c)({auth:B,form:p.a}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,N=Object(s.e)(C,F(Object(s.a)(m.a))),q=a(185),I=a(183),P=a(16),L=a(334),z=a(338),G=a(182),J=L.a.Meta,R=function(e){var t=e.name,a=e.email,n=e.isButtonDisabled,o=e.logout;return t?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(L.a,{name:t,email:a,style:{width:300},cover:r.a.createElement("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"})},r.a.createElement(J,{avatar:r.a.createElement(z.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:t,description:a})),r.a.createElement("br",null)),r.a.createElement(G.a,{type:"primary",onClick:o,disabled:n},t?"Exit":"false")):r.a.createElement(P.a,{to:"/"})};R.defaultProps={name:void 0,email:void 0,isButtonDisabled:!1};var U,X=Object(l.b)((function(e){return{name:e.auth.user.name,email:e.auth.user.email,isButtonDisabled:e.auth.loginForm.isButtonDisabled}}),{logout:function(){return function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0)),e.prev=1,e.next=4,k.post("/profile/logout");case 4:u=null,t({type:"SET_USER_DATA",payload:{name:null,email:null}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:t(A(!1));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})(R),W=a(335),H=a(339),M=a(186),V=a(337),$=a(85),Y=a.n($),K=function(e,t,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(V.a,Object.assign({placeholder:e,name:t,component:a,validate:n},o)),c)},Q=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,Z=function(e){if(!e)return"Filed is required"},ee=function(e){return e&&!Q.test(e)?"Invalid email address":void 0},te=(U=H.a,function(e){var t=e.input,a=e.meta,n=a.touched,o=a.error,c=Object(M.a)(e,["input","meta"]),i=n&&o;return r.a.createElement("div",{className:"".concat(Y.a.formControl," ").concat(i?Y.a.error:"")},r.a.createElement(U,Object.assign({},t,c)),i&&r.a.createElement("span",null,o))}),ae=function(e){var t=e.handleSubmit,a=e.error,n=e.isButtonDisabled;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t},K("Email","email",te,[ee]),K("Password","password",te,[Z],{type:"password"}),a&&r.a.createElement("div",{className:Y.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement(G.a,{onClick:t,type:"primary",disabled:n},"Submit"))))};ae.defaultProps={error:void 0,isButtonDisabled:!1};var ne=Object(W.a)({form:"login"})(ae),re=function(e){var t=e.login,a=e.userEmail,n=e.loginForm;return a?r.a.createElement(P.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(ne,{onSubmit:function(e){var a=e.email,n=e.password;t(a,n)},isButtonDisabled:n.isButtonDisabled,userEmail:a}))};re.defaultProps={loginForm:{isButtonDisabled:!1},userEmail:void 0};var oe=Object(s.d)(Object(l.b)((function(e){return{userEmail:e.auth.user.email,loginForm:e.auth.loginForm}}),{login:function(e,t){return function(){var a=Object(b.a)(f.a.mark((function a(n){var r,o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(A(!0)),a.prev=1,a.next=4,S(e,t);case 4:return a.next=6,k.get("/profile");case 6:r=a.sent,o=E()(r,"data",{}),j()(o)||n({type:"SET_USER_DATA",payload:o}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),alert(a.t0),n({type:"SET_LOGIN_STATE",payload:{isButtonDisabled:!0}});case 15:n(A(!1));case 16:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()}}))(re),ce=(a(331),function(e){Object(q.a)(a,e);var t=Object(I.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P.d,null,r.a.createElement(P.b,{exact:!0,path:"/",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(P.b,{path:"/profile",render:function(){return r.a.createElement(X,null)}})))}}]),a}(r.a.Component));a(332);c.a.render(r.a.createElement(i.a,{basename:"/Autorisation"},r.a.createElement(l.a,{store:N},r.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports={formControl:"FormsControls_formControl__32zgx",error:"FormsControls_error__1Fg0c",formSummaryError:"FormsControls_formSummaryError__1S5x2"}}},[[189,1,2]]]);
//# sourceMappingURL=main.64c9b2ae.chunk.js.map