(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{346:function(t,e,n){"use strict";var i=n(183),r=n(6),s=n(15),a=n(11),o=n(25),u=n(184),c=n(185);i("match",(function(t,e,n){return[function(e){var n=o(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](a(n))},function(t){var i=r(this),o=a(t),l=n(e,i,o);if(l.done)return l.value;if(!i.global)return c(i,o);var f=i.unicode;i.lastIndex=0;for(var h,p=[],d=0;null!==(h=c(i,o));){var g=a(h[0]);p[d]=g,""===g&&(i.lastIndex=u(o,s(i.lastIndex),f)),d++}return 0===d?null:p}]}))},347:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"j",(function(){return p})),n.d(e,"c",(function(){return d}));n(38),n(77),n(346),n(350),n(188),n(53),n(39),n(40),n(24),n(79),n(182);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:f(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}},350:function(t,e,n){"use strict";var i=n(183),r=n(189),s=n(6),a=n(25),o=n(104),u=n(184),c=n(15),l=n(11),f=n(185),h=n(81),p=n(190),d=n(1),g=p.UNSUPPORTED_Y,v=[].push,m=Math.min;i("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=l(a(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var o,u,c,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,p+"g");(o=h.call(g,i))&&!((u=g.lastIndex)>d&&(f.push(i.slice(d,o.index)),o.length>1&&o.index<i.length&&v.apply(f,o.slice(1)),c=o[0].length,d=u,f.length>=s));)g.lastIndex===o.index&&g.lastIndex++;return d===i.length?!c&&g.test("")||f.push(""):f.push(i.slice(d)),f.length>s?f.slice(0,s):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(l(r),e,n)},function(t,r){var a=s(this),h=l(t),p=n(i,a,h,r,i!==e);if(p.done)return p.value;var d=o(a,RegExp),v=a.unicode,b=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(g?"g":"y"),k=new d(g?"^(?:"+a.source+")":a,b),x=void 0===r?4294967295:r>>>0;if(0===x)return[];if(0===h.length)return null===f(k,h)?[h]:[];for(var _=0,y=0,C=[];y<h.length;){k.lastIndex=g?0:y;var L,$=f(k,g?h.slice(y):h);if(null===$||(L=m(c(k.lastIndex+(g?y:0)),h.length))===_)y=u(h,y,v);else{if(C.push(h.slice(_,y)),C.length===x)return C;for(var w=1;w<=$.length-1;w++)if(C.push($[w]),C.length===x)return C;y=_=L}}return C.push(h.slice(_)),C}]}),!!d((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),g)},354:function(t,e,n){"use strict";n(386),n(78),n(54);var i=n(347),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(14),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=a.exports},356:function(t,e,n){"use strict";var i=n(0),r=n(109).trim;i({target:"String",proto:!0,forced:n(391)("trim")},{trim:function(){return r(this)}})},357:function(t,e,n){var i=n(5),r=n(3),s=n(80),a=n(198),o=n(18),u=n(8).f,c=n(41).f,l=n(189),f=n(11),h=n(107),p=n(190),d=n(12),g=n(1),v=n(7),m=n(32).enforce,b=n(192),k=n(2),x=n(193),_=n(194),y=k("match"),C=r.RegExp,L=C.prototype,$=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,w=/a/g,O=/a/g,I=new C(w)!==w,E=p.UNSUPPORTED_Y,j=i&&(!I||E||x||_||g((function(){return O[y]=!1,C(w)!=w||C(O)==O||"/a/i"!=C(w,"i")})));if(s("RegExp",j)){for(var S=function(t,e){var n,i,r,s,u,c,p=this instanceof S,d=l(t),g=void 0===e,b=[],k=t;if(!p&&d&&g&&t.constructor===S)return t;if((d||t instanceof S)&&(t=t.source,g&&(e="flags"in k?k.flags:h.call(k))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),k=t,x&&"dotAll"in w&&(i=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),n=e,E&&"sticky"in w&&(r=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),_&&(t=(s=function(t){for(var e,n=t.length,i=0,r="",s=[],a={},o=!1,u=!1,c=0,l="";i<=n;i++){if("\\"===(e=t.charAt(i)))e+=t.charAt(++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:$.test(t.slice(i+1))&&(i+=2,u=!0),r+=e,c++;continue;case">"===e&&u:if(""===l||v(a,l))throw new SyntaxError("Invalid capture group name");a[l]=!0,s.push([l,c]),u=!1,l="";continue}u?l+=e:r+=e}return[r,s]}(t))[0],b=s[1]),u=a(C(t,e),p?this:L,S),(i||r||b.length)&&(c=m(u),i&&(c.dotAll=!0,c.raw=S(function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)"\\"!==(e=t.charAt(i))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+t.charAt(++i);return r}(t),n)),r&&(c.sticky=!0),b.length&&(c.groups=b)),t!==k)try{o(u,"source",""===k?"(?:)":k)}catch(t){}return u},R=function(t){t in S||u(S,t,{configurable:!0,get:function(){return C[t]},set:function(e){C[t]=e}})},U=c(C),P=0;U.length>P;)R(U[P++]);L.constructor=S,S.prototype=L,d(r,"RegExp",S)}b("RegExp")},358:function(t,e,n){},360:function(t,e,n){},365:function(t,e){t.exports=function(t){return null==t}},366:function(t,e,n){},367:function(t,e,n){},369:function(t,e,n){},370:function(t,e,n){},371:function(t,e,n){},382:function(t,e,n){"use strict";n.r(e);n(78);var i=n(347),r={name:"SidebarGroup",components:{DropdownTransition:n(385).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(382).default},methods:{isActive:i.e}},s=(n(403),n(14)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(404),n(53);function o(t,e,n,i,r){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),t("RouterLink",s,n)}function u(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),u(t,e.children,n,r,s,a+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(i.e)(s,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(i.e)(s,f.basePath+"#"+t.slug)})):p,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):o(t,f.path,f.title||f.path,d),v=[r.frontmatter.sidebarDepth,h,c.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||a.displayAllHeaders;return"auto"===f.type?[g,u(t,f.children,f.basePath,s,v)]:(d||m)&&f.headers&&!i.d.test(f.path)?[g,u(t,Object(i.c)(f.headers),f.path,s,v)]:g}};n(405);function l(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),r=e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||r}return!1}var f={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(l(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},385:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(395),n(14)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},386:function(t,e,n){"use strict";var i=n(0),r=n(387);i({target:"String",proto:!0,forced:n(388)("link")},{link:function(t){return r(this,"a","href",t)}})},387:function(t,e,n){var i=n(25),r=n(11),s=/"/g;t.exports=function(t,e,n,a){var o=r(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+r(a).replace(s,"&quot;")+'"'),u+">"+o+"</"+e+">"}},388:function(t,e,n){var i=n(1);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},390:function(t,e,n){"use strict";e.a={}},391:function(t,e,n){var i=n(1),r=n(110);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},392:function(t,e,n){"use strict";var i,r=n(0),s=n(22).f,a=n(15),o=n(11),u=n(105),c=n(25),l=n(106),f=n(26),h="".endsWith,p=Math.min,d=l("endsWith");r({target:"String",proto:!0,forced:!!(f||d||(i=s(String.prototype,"endsWith"),!i||i.writable))&&!d},{endsWith:function(t){var e=o(c(this));u(t);var n=arguments.length>1?arguments[1]:void 0,i=a(e.length),r=void 0===n?i:p(a(n),i),s=o(t);return h?h.call(e,s,r):e.slice(r-s.length,r)===s}})},393:function(t,e,n){"use strict";n(358)},395:function(t,e,n){"use strict";n(360)},399:function(t,e,n){"use strict";n(366)},400:function(t,e,n){var i=n(42),r=n(19),s=n(35);t.exports=function(t){return"string"==typeof t||!r(t)&&s(t)&&"[object String]"==i(t)}},401:function(t,e,n){"use strict";n(367)},403:function(t,e,n){"use strict";n(369)},404:function(t,e,n){"use strict";var i=n(0),r=n(34).find,s=n(103),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},405:function(t,e,n){"use strict";n(370)},406:function(t,e,n){"use strict";n(371)},436:function(t,e,n){"use strict";n(356),n(182),n(79),n(24),n(38),n(346),n(186),n(187),n(188),n(77),n(357),n(191),n(53),n(350),n(392),n(78);var i=n(195),r=n.n(i),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(e,"title","");return r()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),a(t,i)},a=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],a=0;a<e.length&&!(r.length>=n);a++){var o=e[a];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(s(t,o))r.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(r.length>=n);u++){var c=o.headers[u];c.title&&s(t,o,c.title)&&r.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(393),n(14)),c=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=c.exports},437:function(t,e,n){"use strict";var i=n(382),r=n(383),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.a},props:["items"]},a=(n(406),n(14)),o=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},438:function(t,e,n){"use strict";n(38),n(77);var i=n(365),r=n.n(i),s=n(347),a={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=r()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,s=void 0===i?"":i,a=e.docsBranch,o=void 0===a?"master":a,u=e.docsRepo,c=void 0===u?n:u;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,s,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){if(/bitbucket.org/.test(e))return e.replace(s.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(s.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r:(s.i.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r}}},o=(n(399),n(14)),u=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.a=u.exports},439:function(t,e,n){"use strict";var i=n(347),r=n(400),s=n.n(r),a=n(365),o=n.n(a),u={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return l(c.PREV,this)},next:function(){return l(c.NEXT,this)}}};var c={NEXT:{resolveLink:function(t,e){return f(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return f(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function l(t,e){var n=e.$themeConfig,r=e.$page,a=e.$route,u=e.$site,c=e.sidebarItems,l=t.resolveLink,f=t.getThemeLinkConfig,h=t.getPageLinkConfig,p=f(n),d=h(r),g=o()(d)?p:d;return!1===g?void 0:s()(g)?Object(i.j)(u.pages,g,a.path):l(r,c)}function f(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var h=u,p=(n(401),n(14)),d=Object(p.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.a=d.exports}}]);