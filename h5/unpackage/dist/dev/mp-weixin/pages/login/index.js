(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{60:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26);o(t(25));var r=o(t(61));n.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},61:function(n,e,t){"use strict";t.r(e);var o=t(62),r=t(64);for(var s in r)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(s);t(67);var i,a=t(32),u=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"4586967a",null,!1,o["components"],i);u.options.__file="pages/login/index.vue",e["default"]=u.exports},62:function(n,e,t){"use strict";t.r(e);var o=t(63);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},63:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return s})),t.d(e,"components",(function(){return o}));try{o={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,92))},uniPopupMessage:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-popup/components/uni-popup-message/uni-popup-message")]).then(t.bind(null,118))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},s=!1,i=[];r._withStripped=!0},64:function(n,e,t){"use strict";t.r(e);var o=t(65),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(s);e["default"]=r.a},65:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(66),r={data:function(){return{password:"",form:{uniteCode:"",username:"",password:""},hobby:[0],hobbys:[{text:"",value:1}],messageText:"错误信息",isCheck:!0,showLoading:!1,firstContent:"",secondContent:""}},onLoad:function(){},methods:{changeRadio:function(n){this.isCheck=!this.isCheck},register:function(){n.navigateTo({url:"./register",animationType:"fade-in",animationDuration:300})},login:function(){var n=this;if(!n.form.username)return n.messageText="请填写账号",void n.$refs.message.open();if(!n.form.password)return n.messageText="请填写密码",void n.$refs.message.open();var e={username:n.form.username,password:n.form.password,terminal:1};n.onGetToken(e)},onGetToken:function(e){var t=this;this.setLoadingOptions(!0,"登录中"),(0,o.token)(e).then((function(e){t.setLoadingOptions(!1);var o=e.data;200===o.code?(n.setStorageSync("token",o.data.token),t.getUserInfo()):(t.messageText="登录账号或密码错误",t.$refs.message.open())}))},getUserInfo:function(){var e=this;this.setLoadingOptions(!0,"获取用户信息中..."),(0,o.getUserInfo)().then((function(t){e.setLoadingOptions(!1);var o=t.data;200===o.code?(console.log(o.data),n.setStorageSync("userData",o.data.user),e.toIndex()):e.setLoadingOptions(!1)}))},toIndex:function(){n.reLaunch({url:"/pages/home/index"})},setLoadingOptions:function(n,e,t){this.showLoading=n||!1,this.firstContent=e||"",this.secondContent=t||""}}};e.default=r}).call(this,t(2)["default"])},67:function(n,e,t){"use strict";t.r(e);var o=t(68),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(s);e["default"]=r.a},68:function(n,e,t){}},[[60,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/index.js.map