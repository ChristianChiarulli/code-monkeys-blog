(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{348:function(t,e,n){},351:function(t,e,n){"use strict";n(348)},353:function(t,e,n){"use strict";n.r(e);n(186),n(187),n(38),n(346);var a={name:"Footer",computed:{checkSidebarAuto:function(){return{"is-sidebar-active":this.$route.path.includes("/donate/")||this.$route.path.match(/\/posts\/[0-9]/)}}}},i=(n(351),n(14)),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer",class:t.checkSidebarAuto},[n("div",{staticClass:"icons"},[n("div",{staticClass:"no-wrap-icons"},[n("a",{attrs:{href:"https://github.com/codemonkeysio",target:"_blank",rel:"noopener noreferrer"}},[n("vp-icon",{attrs:{name:"GitHub"}})],1),t._v(" "),n("a",{attrs:{href:"https://www.youtube.com/channel/UCteut5f1PHW8vP29o66z-kg",target:"_blank",rel:"noopener noreferrer"}},[n("vp-icon",{attrs:{name:"YouTube"}})],1),t._v(" "),n("a",{attrs:{href:"https://discord.gg/mh9rQmwJ8H",target:"_blank",rel:"noopener noreferrer"}},[n("vp-icon",{attrs:{name:"Discord"}})],1),t._v(" "),n("a",{attrs:{href:"https://t.me/codemonkeystech",target:"_blank",rel:"noopener noreferrer"}},[n("vp-icon",{attrs:{name:"Telegram"}})],1)]),t._v(" "),n("div",{staticClass:"wrap-icons"},[n("a",{attrs:{href:"https://twitter.com/codemonkeystech",target:"_blank",rel:"noopener noreferrer"}},[n("vp-icon",{attrs:{name:"Twitter"}})],1),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/jason-chiarulli/",target:"_blank",rel:"noopener noreferrer"}},[n("vp-icon",{attrs:{name:"LinkedIn"}})],1),t._v(" "),n("a",{attrs:{href:"https://www.patreon.com/codemonkeys?fan_landing=true",target:"_blank",rel:"noopener noreferrer"}},[n("vp-icon",{attrs:{name:"Patreon"}})],1)])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"made-by"},[this._v("\n    Made by & for Code "),e("span",{staticClass:"emoji-wrap"},[this._v("Monkeys 🐵")])])}],!1,null,"dd76dc5a",null);e.default=r.exports},355:function(t,e,n){},359:function(t,e,n){},361:function(t,e,n){},362:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return d}));n(38),n(77),n(346),n(350),n(188),n(53),n(39),n(40),n(24),n(79),n(182);var a=/#.*$/,i=/\.(md|html)$/,r=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(a,"").replace(i,"")}function l(t){return s.test(t)}function c(t){if(l(t))return t;var e=t.match(a),n=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+n}function u(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),s=0;s<r.length;s++){var o=r[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var a=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===a)return Object.assign({},t[i],{type:"page",path:c(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function h(t,e,n,a){var i=n.pages,r=n.themeConfig,s=a&&r.locales&&r.locales[a]||r;if("auto"===(t.frontmatter.sidebar||s.sidebar||r.sidebar))return p(t);var o=s.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(a=t,/(\.html|\/)$/.test(a)?a:a+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var a;return{}}(e,o),c=l.base,h=l.config;return"auto"===h?p(t):h?h.map((function(t){return function t(e,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return u(n,e,a);if(Array.isArray(e))return Object.assign(u(n,e[0],a),{title:e[1]});var r=e.children||[];return 0===r.length&&e.path?Object.assign(u(n,e.path,a),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map((function(e){return t(e,n,a,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function p(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function d(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},363:function(t,e,n){},364:function(t,e,n){},368:function(t,e,n){},381:function(t,e,n){"use strict";n.r(e);var a=n(354),i=n(353),r={name:"Home",components:{NavLink:a.a,Footer:i.default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(n(389),n(14)),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("div",{staticClass:"content-wrapper"},[n("header",{staticClass:"hero",on:{click:function(e){return t.$router.push(""+t.data.actionLink)}}},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n        "+t._s(t.data.heroText||t.$title||"Hello")+"\n      ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("span",{staticClass:"nav-link action-button"},[t._v(t._s(t.data.actionText))])]):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return n("div",{key:a,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"})],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null).exports,l=(n(197),n(390)),c=n(436),u={name:"SidebarButton",props:{value:{type:Boolean,required:!0,default:!1}}};n(394);function h(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var p={name:"Navbar",components:{SidebarButton:Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("vp-icon",{directives:[{name:"show",rawName:"v-show",value:!t.value,expression:"!value"}],staticClass:"icon",attrs:{name:"menu"}}),t._v(" "),n("vp-icon",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"icon",attrs:{name:"cross"}})],1)}),[],!1,null,null,null).exports,NavLinks:n(383).a,SearchBox:c.a,AlgoliaSearchBox:l.a},props:{value:{type:Boolean,required:!1,default:!1}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(h(this.$el,"paddingLeft"))+parseInt(h(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},d=(n(398),Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),f=n(438),m=n(439),v={components:{PageEdit:f.a,PageNav:m.a,Footer:i.default},props:["sidebarItems"]},b=(n(402),Object(s.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[n("div",{staticClass:"content-wrapper"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2),t._v(" "),n("Footer")],1)}),[],!1,null,null,null).exports),g=n(437),_=n(362),k={name:"Layout",components:{Home:o,Page:b,Sidebar:g.a,Navbar:d},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(_.b)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},w=Object(s.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar},model:{value:t.isSidebarOpen,callback:function(e){t.isSidebarOpen=e},expression:"isSidebarOpen"}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=w.exports},383:function(t,e,n){"use strict";var a=n(51),i=(n(54),n(53),n(38),n(77),n(78),n(108),n(346),n(357),n(191),n(354)),r=n(385),s=n(196),o=n.n(s),l={name:"DropdownLink",components:{NavLink:i.a,DropdownTransition:r.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},c=(n(396),n(14)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,a){return n("li",{key:e.link||a,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(a){return n("li",{key:a.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:a},on:{focusout:function(n){t.isLastItemOfArray(a,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,h=n(362),p={name:"NavLinks",components:{NavLink:i.a,DropdownLink:u},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(a){var s,o=e[a],l=r[a]&&r[a].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,a),i.some((function(t){return t.path===s}))||(s=a)),{text:l,link:s}}))};return[].concat(Object(a.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(h.a)(t),{items:(t.items||[]).map(h.a)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var a=e[n];if(new RegExp(a,"i").test(t))return a}return"Source"}}}},d=(n(397),Object(c.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=d.exports},389:function(t,e,n){"use strict";n(355)},394:function(t,e,n){"use strict";n(359)},396:function(t,e,n){"use strict";n(361)},397:function(t,e,n){"use strict";n(363)},398:function(t,e,n){"use strict";n(364)},402:function(t,e,n){"use strict";n(368)}}]);