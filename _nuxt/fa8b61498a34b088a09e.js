(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=116},118:function(t,e,n){"use strict";var r=n(34);n.n(r).a},119:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"\n.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px\n}",""])},131:function(t,e,n){"use strict";var r=n(35);n.n(r).a},132:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}",""])},133:function(t,e,n){"use strict";var r=n(36);n.n(r).a},134:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"",""])},135:function(t,e,n){"use strict";var r=n(37);n.n(r).a},136:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,'\nfooter a{text-decoration:none;color:#fff\n}\nfooter a:hover{text-decoration:none;color:purple\n}\n.line{margin:0 0 1em;line-height:2em;padding:0;color:#fff;text-shadow:1px 1px 1px #000;font-size:1.5em;position:relative;overflow:hidden;text-align:center\n}\n.line:after,.line:before{content:" ";position:absolute;top:50%;margin-left:-999em;height:2px;width:998em;border-top:1px solid #fff;background:rgba(0,0,0,.2)\n}\n.line:after{left:auto;width:999em;margin:0 0 0 1em\n}\n.atiballer{font-family:Galindo,cursive;font-size:2.5rem;color:#fff\n}\n.atiballer:hover{color:#fff\n}',""])},137:function(t,e,n){"use strict";var r=n(38);n.n(r).a},138:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"",""])},139:function(t,e,n){"use strict";var r=n(39);n.n(r).a},140:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,"",""])},141:function(t,e,n){"use strict";n.r(e);n(55),n(63),n(66);var r=n(21),a=n.n(r),o=(n(49),n(50),n(94),n(4)),i=n.n(o),s=(n(95),n(96),n(71),n(33),n(73),n(72),n(100),n(112),n(0)),u=(n(80),n(116)),c=u.keys();function l(t){var e=u(t);return e.default||e}var p={},f=!0,h=!1,d=void 0;try{for(var m,v=c[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){var x=m.value;p[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=l(x)}}catch(t){h=!0,d=t}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}var g=p,y=n(22),_=n.n(y),b=n(81),w=n.n(b),C=n(54),k=function(){return n.e(2).then(n.bind(null,161)).then(function(t){return t.default||t})},$=function(){return Promise.all([n.e(6),n.e(3)]).then(n.bind(null,162)).then(function(t){return t.default||t})};s.a.use(C.a),window.history.scrollRestoration="manual";var E=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var R=n(82),j=n.n(R).a,A={name:"nuxt-child",functional:!0,props:["keepAlive","keepAliveProps"],render:function(t,e){var n=e.parent,r=e.data,a=e.props;r.nuxtChild=!0;for(var o=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};T.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var p={};S.forEach(function(t){"function"==typeof c[t]&&(p[t]=c[t].bind(o))});var f=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(o,t)};var h=[t("router-view",r)];return void 0!==a.keepAlive&&(h=[t("keep-alive",{props:a.keepAliveProps},h)]),t("transition",{props:l,on:p},h)}},T=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],S=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],O={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},N={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},L=(n(118),n(3)),q=Object(L.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);q.options.__file="nuxt-error.vue";var M=q.exports,z=(n(120),n(121),n(122),n(124),n(126),n(127),n(130),function(){return{}});function P(t,e){var n=t.options.data||z;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),_()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function D(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function I(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function U(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,a){return t.components[a]?r.push(e(t.components[a],t.instances[a],t,a,n)):delete t.components[a],r},[])}))}function F(t){return Promise.all(U(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,a){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[a]=D(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,a){return t.apply(this,arguments)}}()))}function B(t){return J.apply(this,arguments)}function J(){return(J=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:return t.abrupt("return",_()({},e,{meta:I(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function K(t,e){return H.apply(this,arguments)}function H(){return(H=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=a()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},n=t,o=a()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=et(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,B(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,B(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function Q(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function V(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function W(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===a()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",o=n||{},i=r||{},s=i.pretty?Y:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,p=o[c.name];if(null==p){if(c.optional){c.partial&&(a+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(l=s(p[f]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");a+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');a+=c.prefix+l}}else a+=c}return a}}(function(t,e){var n,r=[],a=0,o=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=G.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(o,l),o=l+u.length,c)i+=c[1];else{var p=t[o],f=n[2],h=n[3],d=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var g=null!=f&&null!=p&&p!==f,y="+"===v||"*"===v,_="?"===v||"*"===v,b=n[2]||s,w=d||m;r.push({name:h||a++,prefix:f||"",delimiter:b,optional:_,repeat:y,partial:g,asterisk:!!x,pattern:w?tt(w):x?".*":"[^"+Z(b)+"]+?"})}}o<t.length&&(i+=t.substr(o));i&&r.push(i);return r}(t,e))}function X(t,e){var n={},r=_()({},t,e);for(var a in r)String(t[a])!==String(e[a])&&(n[a]=!0);return n}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var G=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Y(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function tt(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function et(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var a,o=t.split("/"),i=(n?n+"://":"//")+o.shift(),s=o.filter(Boolean).join("/");return 2===(o=s.split("#")).length&&(s=o[0],a=o[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=a?"#"+a:""}var nt={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||W(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:A,NuxtError:M}},rt={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"#fff",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},at=(n(131),Object(L.a)(rt,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null));at.options.__file="nuxt-loading.vue";var ot=at.exports,it={},st=(n(133),Object(L.a)(it,function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-white sticky-top"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[this._v("ATIBALLER\n    ")]),this._v(" "),this._m(0),this._v(" "),this._m(1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[n("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[n("li",{staticClass:"nav-item px-3"},[n("a",{staticClass:"nav-link",attrs:{href:"#about"}},[n("i",{staticClass:"fa fa-drivers-license"}),t._v("\n                    Rólam")])]),t._v(" "),n("li",{staticClass:"nav-item px-3"},[n("a",{staticClass:"nav-link",attrs:{href:"#service"}},[n("i",{staticClass:"fa fa-pencil-square-o"}),t._v("\n                    Szolgáltatások")])]),t._v(" "),n("li",{staticClass:"nav-item px-3"},[n("a",{staticClass:"nav-link",attrs:{href:"#portfolio"}},[n("i",{staticClass:"fa fa-th"}),t._v("\n                    Munkáim")])]),t._v(" "),n("li",{staticClass:"nav-item px-3"},[n("a",{staticClass:"nav-link",attrs:{href:"#opinion"}},[n("i",{staticClass:"fa fa-comments"}),t._v("\n                    Vélemények")])]),t._v(" "),n("li",{staticClass:"nav-item px-3"},[n("a",{staticClass:"nav-link",attrs:{href:"#contact"}},[n("i",{staticClass:"fa fa-envelope"}),t._v("\n                    Kapcsolat")])])])])}],!1,null,null,null));st.options.__file="Navigation.vue";var ut=st.exports,ct={},lt=(n(135),Object(L.a)(ct,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"pt-3 text-light bg-dark"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row py-2"},[t._m(0),t._v(" "),n("div",{staticClass:"col-12 col-lg-4"},[n("ul",{staticClass:"list-unstyled text-center"},[n("li",{staticClass:"py-2"},[n("nuxt-link",{attrs:{to:"/adatvedelem"}},[t._v("Adatvédelem")])],1),t._v(" "),n("li",{staticClass:"py-2"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Főoldal")])],1)])]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-4 my-auto text-center"},[e("p",{staticClass:"atiballer"},[this._v("Atiballer webdesign")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-4"},[e("ul",{staticClass:"list-unstyled text-center"},[e("li",{staticClass:"py-2"},[e("p",[this._v("E-mail:")])]),this._v(" "),e("li",{staticClass:"py-2"},[e("a",{attrs:{href:"mailto:info@satiweb.hu"}},[this._v("info@satiweb.hu")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("p",{staticClass:"line"},[this._v("Atiballer webdesign 2018")])])])])}],!1,null,null,null));lt.options.__file="Footer.vue";var pt=lt.exports,ft=n(83),ht={components:{CookieLaw:n.n(ft).a}},dt=(n(137),Object(L.a)(ht,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("no-ssr",[e("cookie-law",{attrs:{theme:"base",buttonText:"Elfogadom",buttonLink:"/adatvedelem",buttonLinkText:"Adatvédelem"}},[e("div",{attrs:{slot:"message"},slot:"message"},[this._v("\n                Az oldal sütiket használ, további infóért\n\n            ")])])],1)],1)},[],!1,null,null,null));dt.options.__file="Cookie.vue";var mt={components:{Navigation:ut,Footer:pt,Cookie:dt.exports}},vt=(n(139),Object(L.a)(mt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navigation"),this._v(" "),e("nuxt"),this._v(" "),e("Footer"),this._v(" "),e("Cookie")],1)},[],!1,null,null,null));vt.options.__file="default.vue";var xt={_default:vt.exports},gt={head:{title:"Atiballer webdesign - Weboldalak tervezése, készítése",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Weboldal készítés. Ma már a kisvállalkozásoknak is szüksége van weboldalra. Legyen szó bemutatkozó oldalról, blogról, webshopról a legjobb helyen vagy."}],script:[{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js"},{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"},{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Lato"},{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/fork-awesome@1.1.0/css/fork-awesome.min.css"},{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.4.1/css/all.css"}],style:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),a=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),o=t("transition",{props:{name:"layout",mode:"out-in"}},[a]);return t("div",{domProps:{id:"__nuxt"}},[n,o])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&xt["_"+t]||(t="default"),this.layoutName=t,this.layout=xt["_"+t],this.layout},loadLayout:function(t){return t&&xt["_"+t]||(t="default"),Promise.resolve(xt["_"+t])}},components:{NuxtLoading:ot}};s.a.component(j.name,j),s.a.component(A.name,A),s.a.component(O.name,O),s.a.component(nt.name,nt),s.a.use(w.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var yt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function _t(){return(_t=i()(regeneratorRuntime.mark(function t(e){var n,r,a,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new C.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:E,routes:[{path:"/adatvedelem",component:k,name:"adatvedelem"},{path:"/",component:$,name:"index"}],fallback:!1});case 2:return n=t.sent,r=_()({router:n,nuxt:{defaultTransition:yt,transitions:[yt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},yt,{name:t}):Object.assign({},yt,t):yt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},gt),a=e?e.next:function(t){return r.router.push(t)},e?o=n.resolve(e.url).route:(i=V(n.options.base),o=n.resolve(i).route),t.next=8,K(r,{route:o,next:a,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=12;break;case 12:return t.abrupt("return",{app:r,router:n});case 13:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var bt,wt,Ct=[],kt=window.__NUXT__||{};function $t(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var a=r(n.matched[0].components.default);Object.keys(a).filter(function(t){return a[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=a[t]})}return e})}function Et(t,e,n){return Rt.apply(this,arguments)}function Rt(){return(Rt=i()(regeneratorRuntime.mark(function t(e,n,r){var a,o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!bt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?X(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,F(e);case 7:a=t.sent,!this._pathChanged&&this._queryChanged&&a.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function jt(t,e){return kt.serverRendered&&e&&P(t,e),t._Ctor=t,t}function At(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"==typeof t?t:("function"!=typeof g[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g[t])}),!o)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():Q(e[0],n).then(function(){return t(e.slice(1),n)})}(a,e)}function Tt(t,e,n){return St.apply(this,arguments)}function St(){return(St=i()(regeneratorRuntime.mark(function t(e,n,r){var a,o,i,u,c,l,p,f,h,d,m,v,x,g,y,_,b=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Ct=e===n?[]:I(n,a=[]).map(function(t,e){return W(n.matched[a[e]].path)(n.params)}),o=!1,i=function(t){n.path===t.path&&b.$loading.finish&&b.$loading.finish(),n.path!==t.path&&b.$loading.pause&&b.$loading.pause(),o||(o=!0,r(t))},t.next=7,K(bt,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=bt.nuxt.dateErr,this._hadError=!!bt.nuxt.err,(c=I(e,u=[])).length){t.next=25;break}return t.next=14,At.call(this,c,bt.context);case 14:if(!o){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof M.layout?M.layout(bt.context):M.layout);case 18:return l=t.sent,t.next=21,At.call(this,c,bt.context,l);case 21:if(!o){t.next=23;break}return t.abrupt("return");case 23:return bt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions($t(c,e,n)),t.prev=27,t.next=30,At.call(this,c,bt.context);case 30:if(!o){t.next=32;break}return t.abrupt("return");case 32:if(!bt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(p=c[0].options.layout)&&(p=p(bt.context)),t.next=38,this.loadLayout(p);case 38:return p=t.sent,t.next=41,At.call(this,c,bt.context,p);case 41:if(!o){t.next=43;break}return t.abrupt("return");case 43:if(!bt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,h=!0,d=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(h=(x=v.next()).done){t.next=64;break}if("function"==typeof(g=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(bt.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,h||null==v.return||v.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=W(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,b._pathChanged&&b._queryChanged||t._path!==Ct[n])t._dataRefresh=!0;else if(!b._pathChanged&&b._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return b._diffQuery[t]}))}if(!b._hadError&&b._isMounted&&!t._dataRefresh)return Promise.resolve();var a=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=o&&i?30:45;if(o){var c=Q(t.options.asyncData,bt.context).then(function(e){P(t,e),b.$loading.increase&&b.$loading.increase(s)});a.push(c)}if(b.$loading.manual=!1===t.options.loading,i){var l=t.options.fetch(bt.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){b.$loading.increase&&b.$loading.increase(s)}),a.push(l)}return Promise.all(a)}));case 89:o||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return Ct=[],y=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||y||500,w=t.t2,s.a.config.errorHandler&&s.a.config.errorHandler(w),"function"==typeof(_=M.layout)&&(_=_(bt.context)),t.next=108,this.loadLayout(_);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var w},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Ot(t,e){U(t,function(t,e,n,r){return"object"!==a()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function Nt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?M.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(bt.context)),this.setLayout(e)}function Lt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),a=I(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&a[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),Nt.call(n,t)})}function qt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),wt.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Mt(){return(Mt=i()(regeneratorRuntime.mark(function t(e){var n,r,a,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return bt=e.app,wt=e.router,t.next=4,Promise.all((c=void 0,c=V((u=wt).options.base,u.options.mode),U(u.match(c),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,a,o){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=jt(D(e),kt.data?kt.data[o]:null),r.components[a]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,a,o){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.a(bt),a=kt.layout||"default",t.next=9,r.loadLayout(a);case 9:if(r.setLayout(a),o=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){qt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions($t(n,wt.currentRoute)),Ct=wt.currentRoute.matched.map(function(t){return W(t.path)(wt.currentRoute.params)})),r.$loading={},kt.error&&r.error(kt.error),wt.beforeEach(Et.bind(r)),wt.beforeEach(Tt.bind(r)),wt.afterEach(Ot),wt.afterEach(Lt.bind(r)),!kt.serverRendered){t.next=22;break}return o(),t.abrupt("return");case 22:Tt.call(r,wt.currentRoute,wt.currentRoute,function(t){if(!t)return Ot(wt.currentRoute,wt.currentRoute),Nt.call(r,wt.currentRoute),void o();wt.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return _t.apply(this,arguments)}().then(function(t){return Mt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},34:function(t,e,n){var r=n(119);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("45b1ddea",r,!0,{sourceMap:!1})},35:function(t,e,n){var r=n(132);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("fd547dac",r,!0,{sourceMap:!1})},36:function(t,e,n){var r=n(134);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("cf7b1880",r,!0,{sourceMap:!1})},37:function(t,e,n){var r=n(136);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("5c1d6ba0",r,!0,{sourceMap:!1})},38:function(t,e,n){var r=n(138);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("eaff7f80",r,!0,{sourceMap:!1})},39:function(t,e,n){var r=n(140);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(16).default)("371b8fbf",r,!0,{sourceMap:!1})},84:function(t,e,n){t.exports=n(141)}},[[84,4,1,5]]]);