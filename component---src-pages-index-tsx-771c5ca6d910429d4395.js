/*! For license information please see component---src-pages-index-tsx-771c5ca6d910429d4395.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11,14,15,16],{"+Rve":function(e,t,n){"use strict";n.r(t);var a=n("h0VT");t.default=a.default},"4W9P":function(e,t,n){e.exports={GalleryContainer:"Gallery-module--GalleryContainer--3BhVD"}},"4yB2":function(e,t,n){"use strict";n.r(t);var a=n("29PO");t.default=a.default},"5gJQ":function(e,t,n){e.exports=function(){"use strict";var e=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};return function(){function n(){return window.scrollY||window.pageYOffset}function a(e){return e.getBoundingClientRect().top+i}function o(e){f||(f=e),p=s(v=e-f,i,m,d),window.scrollTo(0,p),v<d?requestAnimationFrame(o):(window.scrollTo(0,i+m),r&&u&&(r.setAttribute("tabindex","-1"),r.focus()),"function"==typeof h&&h(),f=!1)}var r=void 0,i=void 0,l=void 0,c=void 0,s=void 0,u=void 0,m=void 0,d=void 0,f=void 0,v=void 0,p=void 0,h=void 0;return function(f){var v=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(d=v.duration||1e3,c=v.offset||0,h=v.callback,s=v.easing||e,u=v.a11y||!1,i=n(),void 0===f?"undefined":t(f)){case"number":r=void 0,u=!1,l=i+f;break;case"object":l=a(r=f);break;case"string":r=document.querySelector(f),l=a(r)}switch(m=l-i+c,t(v.duration)){case"number":d=v.duration;break;case"function":d=v.duration(m)}requestAnimationFrame(o)}}()}()},"7ioI":function(e,t,n){e.exports={cursor:"Cursor-module--cursor--2fIkL",cursorAnimation:"Cursor-module--cursorAnimation--3Ti1Z",expand:"Cursor-module--expand--1MF66",cursorAnimation3:"Cursor-module--cursorAnimation3--35Ehe",cursorAnimation2:"Cursor-module--cursorAnimation2--2KzIP"}},FcM7:function(e,t,n){e.exports=n.p+"static/icon-photogrammetry-171c2787732e7ab2ec8eb652ba173512.svg"},I8tU:function(e,t,n){e.exports={NavbarListElement:"NavbarListElement-module--NavbarListElement--2YaKG"}},IY1y:function(e,t,n){e.exports={Jumbotron:"Jumbotron-module--Jumbotron--1tNiA",JumbotronIos:"Jumbotron-module--JumbotronIos--2udCL",Headers:"Jumbotron-module--Headers--1DQXF",YoutubeSide:"Jumbotron-module--YoutubeSide--1ELyH",header1:"Jumbotron-module--header1--3XcuL",header3:"Jumbotron-module--header3--12SDS"}},IZKO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.removeHash=t.goToAnchor=t.configureAnchors=t.goToTop=void 0;var a=n("x69a");Object.defineProperty(t,"goToAnchor",{enumerable:!0,get:function(){return a.updateHash}}),Object.defineProperty(t,"removeHash",{enumerable:!0,get:function(){return a.removeHash}});var o=n("rwaV");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(o).default}});var r=i(n("PNjJ"));function i(e){return e&&e.__esModule?e:{default:e}}t.goToTop=r.default.goToTop,t.configureAnchors=r.default.configure},N0Z2:function(e,t,n){e.exports=n.p+"static/icon-laser-scanner-0d6360bdc20193769fd859b7af50c9fb.svg"},PNjJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n("5gJQ"),i=(a=r)&&a.__esModule?a:{default:a},l=n("zL0W"),c=n("vj/Q"),s=n("x69a");var u={offset:0,scrollDuration:400,keepLastAnchorHash:!1};t.default=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addListeners=function(){window.addEventListener("scroll",t.scrollHandler,!1),window.addEventListener("hashchange",t.handleHashChange)},this.removeListeners=function(){window.removeEventListener("scroll",t.scrollHandler,!1),window.removeEventListener("hashchange",t.handleHashChange)},this.configure=function(e){t.config=o({},u,e)},this.goToTop=function(){0!==(0,c.getScrollTop)()&&(t.forcedHash=!0,window.scroll(0,0))},this.addAnchor=function(e,n){0===Object.keys(t.anchors).length&&t.addListeners(),t.forceHashUpdate(),t.anchors[e]=n},this.removeAnchor=function(e){delete t.anchors[e],0===Object.keys(t.anchors).length&&t.removeListeners()},this.handleScroll=function(){var e=t.config,n=e.offset,a=e.keepLastAnchorHash,o=(0,c.getBestAnchorGivenScrollLocation)(t.anchors,n);o&&(0,s.getHash)()!==o?(t.forcedHash=!0,(0,s.updateHash)(o,!1)):o||a||(0,s.removeHash)()},this.handleHashChange=function(e){t.forcedHash?t.forcedHash=!1:t.goToSection((0,s.getHash)())},this.goToSection=function(e){var n=t.anchors[e];n?(0,i.default)(n,{duration:t.config.scrollDuration,offset:t.config.offset}):(n=document.getElementById(e))&&(0,i.default)(n,{duration:0,offset:t.config.offset})},this.anchors={},this.forcedHash=!1,this.config=u,this.scrollHandler=(0,l.debounce)(this.handleScroll,100),this.forceHashUpdate=(0,l.debounce)(this.handleHashChange,1)}},QeBL:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),o=n("q1tI"),r=n.n(o),i=n("6tYh"),l=n.n(i),c=n("IZKO"),s=n.n(c),u=n("b6Qr"),m=n("vrFN"),d=n("Wbzz"),f=n("0zKf"),v=n("I8tU"),p=n.n(v),h=function(e){var t=e.listElementName,n=e.reference;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:p.a.NavbarListElement},r.a.createElement("a",{href:n},t)))},E=n("QtJS"),b=n.n(E),y={Navbar:function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleOpen=function(e){e.preventDefault(),n.setState({openMenu:!n.state.openMenu})},n.state={openMenu:!1},n}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.state.openMenu;return this.props.desktopScreenVersion?r.a.createElement("div",{className:b.a.Navbar},r.a.createElement("div",{className:b.a.Logo},r.a.createElement("a",{href:"#home"},r.a.createElement(f.a,null))),r.a.createElement("ul",{className:b.a.NavList},r.a.createElement(h,{listElementName:"Home",reference:"#home"}),r.a.createElement(h,{listElementName:"Reality Capture",reference:"#reality_capture"}),r.a.createElement(h,{listElementName:"Scan-to-BIM",reference:"#scan_to_bim"}),r.a.createElement(h,{listElementName:"Tutorials",reference:"#tutorials"}),r.a.createElement(h,{listElementName:"About me",reference:"#about_me"}),r.a.createElement(h,{listElementName:"Blog",reference:"/blog"}))):r.a.createElement("div",{className:b.a.Navbar},r.a.createElement("div",{className:b.a.NavbarMobile},r.a.createElement("div",{className:b.a.MenuBurgerContainer},r.a.createElement("div",{className:b.a.Logo},r.a.createElement(f.a,null)),r.a.createElement("div",{className:b.a.MenuBurger,role:"button",onClick:this.toggleOpen},r.a.createElement("span",{className:e?b.a.ellipsis_open:b.a.ellipsis}))),r.a.createElement("ul",{className:e?b.a.NavListMobileOpen:b.a.NavListMobileClosed},r.a.createElement(h,{listElementName:"Home",reference:"#home"}),r.a.createElement(h,{listElementName:"Reality Capture",reference:"#reality_capture"}),r.a.createElement(h,{listElementName:"Scan-to-BIM",reference:"#scan_to_bim"}),r.a.createElement(h,{listElementName:"Tutorials",reference:"#tutorials"}),r.a.createElement(h,{listElementName:"About me",reference:"#about_me"}),r.a.createElement(d.Link,{to:"/blog"},r.a.createElement(h,{listElementName:"Blog"})))))},t}(r.a.Component),NavbarBlog:n("SLdA").a},g=n("txG2"),O=n("Wp5m"),w=n.n(O),S=n("4W9P"),N=n.n(S),L=n("U5+u"),T=n.n(L),C=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hover:!1},n}Object(a.a)(t,e);var n=t.prototype;return n.onClickTriggerMobileVersion=function(){window.innerWidth>=769||this.setState({hover:!this.state.hover})},n.hoverOn=function(e){this.setState({hover:!0})},n.hoverOff=function(e){this.setState({hover:!1})},n.render=function(){var e=this,t=this.props,n=t.id,a=t.picture,o=t.title,i=t.listOfDeviceTypes,l=t.listOfDeviceBrands,c=this.state.hover;return void 0===c?null:r.a.createElement("div",{onMouseEnter:function(t){return e.hoverOn(t)},onMouseLeave:function(t){return e.hoverOff(t)},onClick:function(){return e.onClickTriggerMobileVersion()},className:T.a.GalleryElementContainer},r.a.createElement("div",{className:c?T.a.galleryElementContainerForImageAndTitle_hovered:T.a.galleryElementContainerForImageAndTitle},r.a.createElement("img",{src:a,alt:o,className:T.a.galleryElementImage}),r.a.createElement("p",{className:T.a.galleryElementTitle},o),r.a.createElement("ul",{className:T.a.galleryElementListOfDeviceTypes},i.map((function(e,t){return r.a.createElement("li",{key:n+t,className:T.a.galleryElementListTypesItem},e)})))),r.a.createElement("ul",{className:c?T.a.galleryElementListOfDeviceBrands_hovered:T.a.galleryElementListOfDeviceBrands},l.map((function(e,t){return r.a.createElement("li",{key:n+t+1,className:T.a.galleryElementListBrandItem},e)}))))},t}(r.a.Component),I=n("7Cbv"),M=[{id:Object(I.a)(),picture:n("N0Z2"),title:"Terrestrial Laser Scanners",listOfDeviceTypes:["Phase scanner","Pulse scanner"],listOfDeviceBrands:["Leica RTC360","Leica P and C-series","Faro X and S series","Trimble X7","Trimble TX series","Z+F IMAGER 5016","Stonex X9","Topcon GLS-2000","Riegl VZ series"]},{id:Object(I.a)(),picture:n("FcM7"),title:"Photogrammetry",listOfDeviceTypes:["Camera mounted on multicopter","Camera mounted on fixed-wing UAV","DSLR","Mirrorless camera","360 camera"],listOfDeviceBrands:["DJI Phantom series","DJI Inspire","DJI Mavic series","Autel EVO 2","Parrot Anafi","WingtraOne","eBee","Insta360","Ricoh Theta"]},{id:Object(I.a)(),picture:n("TPrC"),title:"Mobile Mapping",listOfDeviceTypes:["Mounted on a car","Mounted on UAV","Backpack","Trolley","Mounted on a rolling stock"],listOfDeviceBrands:["Stormbee","NavVis M3","Trimble GEDO System","Leica Pegasus series","Leica SiTrack","Gexcel Heron backpacks series","Faro Focus Swift","Trimble Indoor Mobile Mapping System","Topcon IP-S3"]},{id:Object(I.a)(),picture:n("r4gn"),title:"Handheld Scanners",listOfDeviceTypes:["LiDAR scanner","Structured-light 3D scanner","Depth sensor"],listOfDeviceBrands:["Artec series","Creaform Go!SCAN Spark","EinScan Pro 2x Plus","Leica BLK2GO","Paracosm PX-80","DotProduct DPI-10","GeoSLAM ZEB Revo RT","Calibry","Intel RealSense cameras"]}],_=function(){return r.a.createElement("div",{className:N.a.GalleryContainer},M.map((function(e){return r.a.createElement(C,{key:e.id,id:e.id,picture:e.picture,title:e.title,listOfDeviceTypes:e.listOfDeviceTypes,listOfDeviceBrands:e.listOfDeviceBrands})})))},D=n("+Rve"),k=n("yjHs"),j=n("4yB2"),A=n("zgc0"),x=n("Lexg"),P=n("C8jK"),H=n("7ioI"),B=n.n(H),G=function(e){var t=e.desktopScreenVersion;e.isIOS;if(!1===t)return null;var n=Object(o.useState)({x:0,y:0}),a=n[0],i=n[1],l=Object(o.useState)(!1),c=(l[0],l[1]),s=Object(o.useState)(!1),u=(s[0],s[1]),m=Object(o.useState)(!1),d=(m[0],m[1]);Object(o.useEffect)((function(){return f(),g(),function(){return v()}}),[]);var f=function(){document.addEventListener("mousemove",p),document.addEventListener("mouseenter",y),document.addEventListener("mouseleave",b),document.addEventListener("mousedown",h),document.addEventListener("mouseup",E)},v=function(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseenter",y),document.removeEventListener("mouseleave",b),document.removeEventListener("mousedown",h),document.removeEventListener("mouseup",E)},p=function(e){i({x:e.clientX,y:e.clientY})},h=function(){c(!0)},E=function(){c(!1)},b=function(){d(!0)},y=function(){d(!1)},g=function(){document.querySelectorAll("a").forEach((function(e){e.addEventListener("mouseover",(function(){return u(!0)})),e.addEventListener("mouseout",(function(){return u(!1)}))}))};return r.a.createElement("div",{className:B.a.cursor,style:{left:a.x+"px",top:a.y+"px"}})},R=n("IY1y"),J=n.n(R),F=n("jbUx"),U=n.n(F),V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:U.a.SideLink},r.a.createElement("a",{className:U.a.YoutubeSideLink,href:"https://www.youtube.com/channel/UCdggRvOCAmmarbeDny-bDRA",target:"_blank",rel:"noreferrer"},"Youtube")))},W=function(){alert("It is iOS "+u.isIOS+" "+u.osVersion),console.log("!!!!!!!!!!!!!!!!!It is MacOs "+u.isMacOs+" "+u.osVersion);var e=u.isIOS;return r.a.createElement("div",{className:e||u.isMacOs?J.a.JumbotronIos:J.a.Jumbotron},r.a.createElement("div",{className:J.a.Headers},r.a.createElement("h1",{className:J.a.header1},"reality capture"),r.a.createElement("div",{className:J.a.header3},"Transform reality into virtual 3D world")),r.a.createElement("div",{className:J.a.YoutubeSide},r.a.createElement(V,null)))},Y=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidMount=function(){n.setState({windowWidth:window.innerWidth}),n.onResize(),window.addEventListener("resize",n.onResize),Object(c.configureAnchors)({offset:-100,scrollDuration:400})},n.componentWillUnmount=function(){window.removeEventListener("resize",n.onResize)},n.onResize=function(){console.log("this.onResize was in index.js was triggered"),window.innerWidth>=769?n.setState({isDesktop:!0}):n.setState({isDesktop:!1})},n.state={windowWidth:0,isDesktop:!0},n}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.state,t=e.isDesktop,n=e.windowWidth;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{desktopScreenVersion:t,isIOS:u.isIOS,isMobile:u.isMobile}),r.a.createElement(m.a,{title:"Homepage· 3d-points.com"}),r.a.createElement("div",{className:w.a.App,onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(s.a,{id:"home"},r.a.createElement("div",{className:w.a.section1},r.a.createElement(y.Navbar,{desktopScreenVersion:t}),r.a.createElement(W,null))),r.a.createElement(s.a,{id:"reality_capture"},r.a.createElement("div",{className:w.a.section2_3_4},r.a.createElement("div",{className:w.a.section2},r.a.createElement(g.a,{windowWidth:n,enableDescription:x.a.enableDescription,enableTextIndicators:x.a.enableTextIndicators,enableDotIndicators:x.a.enableDotIndicators,items:x.a.items,desktopScreenVersion:t})),r.a.createElement("div",{className:t?w.a.section3:w.a.section3Mobile},r.a.createElement(_,null)),r.a.createElement("div",{className:w.a.section4_youtubeMovie},r.a.createElement(l.a,{className:u.isChrome?w.a.reactPlayerChrome:w.a.reactPlayer,url:"https://www.youtube.com/watch?v=ysz5S6PUM-U",width:n>=768?"50%":"100%",controls:"true"})))),r.a.createElement(s.a,{id:"scan_to_bim"},r.a.createElement("div",{className:w.a.section5_scanToBim},r.a.createElement(D.default,null))),r.a.createElement(s.a,{id:"tutorials"},r.a.createElement("div",{className:w.a.section6_tutorials},r.a.createElement(k.default,{dataFromJson:P.a,desktopScreenVersion:t}))),r.a.createElement(s.a,{id:"about_me"},r.a.createElement("div",{className:w.a.section7_aboutMe},r.a.createElement(j.default,null)))),r.a.createElement(A.default,null))},t}(r.a.Component);t.default=Y},TPrC:function(e,t,n){e.exports=n.p+"static/icon-mobile-mapping-0e2e2d62b4ab375931516739b7d5fd2b.svg"},"U5+u":function(e,t,n){e.exports={GalleryElementContainer:"GalleryElement-module--GalleryElementContainer--1RPUs",galleryElementContainerForImageAndTitle:"GalleryElement-module--galleryElementContainerForImageAndTitle--1GqOF",galleryElementContainerForImageAndTitle_hovered:"GalleryElement-module--galleryElementContainerForImageAndTitle_hovered--Atcdi",galleryElementImage:"GalleryElement-module--galleryElementImage--3ulvC",galleryElementTitle:"GalleryElement-module--galleryElementTitle--1jdLv",galleryElementListOfDeviceTypes:"GalleryElement-module--galleryElementListOfDeviceTypes--VOjJ9",galleryElementListOfDeviceBrands:"GalleryElement-module--galleryElementListOfDeviceBrands--1UtdN",galleryElementListOfDeviceBrands_hovered:"GalleryElement-module--galleryElementListOfDeviceBrands_hovered--2N8In",fade:"GalleryElement-module--fade--3OaEy"}},Wp5m:function(e,t,n){e.exports={App:"Index-module--App--3jwS2",section2_3_4:"Index-module--section2_3_4--KOx-8",section2:"Index-module--section2--1yhcR",section3:"Index-module--section3--1RySd",section4_youtubeMovie:"Index-module--section4_youtubeMovie--1gZ0F",reactPlayer:"Index-module--reactPlayer--29ejf",reactPlayerChrome:"Index-module--reactPlayerChrome--1KOHh",section3Mobile:"Index-module--section3Mobile--BH6Jc"}},bUfU:function(e,t,n){e.exports={sectionHeader:"ScanToBim-module--sectionHeader--QyV-G",content:"ScanToBim-module--content--2Cf4o",underConstruction:"ScanToBim-module--underConstruction--3MpkJ"}},h0VT:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("bUfU"),i=n.n(r);t.default=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:i.a.sectionHeader},"scan-to-bim"),o.a.createElement("div",{className:i.a.content},o.a.createElement("div",{className:i.a.underConstruction})))}},jbUx:function(e,t,n){e.exports={SideLink:"YoutubeSideLink-module--SideLink--32iZq",YoutubeSideLink:"YoutubeSideLink-module--YoutubeSideLink--3QsyE"}},r4gn:function(e,t,n){e.exports=n.p+"static/icon-handheld-scanner-a5aef7a713dc46eebc1e80df7146d093.svg"},rwaV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n("q1tI"),r=s(o),i=s(n("i8i4")),l=s(n("17x9")),c=s(n("PNjJ"));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.id=e.id||e.children.ref,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=i.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);c.default.addAnchor(this.id,e)}},{key:"componentWillUnmount",value:function(){c.default.removeAnchor(this.id)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.id;return r.default.cloneElement(t,{ref:t.ref||n})}}]),t}(o.Component);u.propTypes={children:l.default.node,id:l.default.string},t.default=u},"vj/Q":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.getScrollTop=function(){return document.body.scrollTop||document.documentElement.scrollTop},o=t.getElementOffset=function(e){var t=a(),n=e.getBoundingClientRect(),o=n.top,r=n.bottom;return{top:Math.floor(o+t),bottom:Math.floor(r+t)}},r=t.doesElementContainScrollTop=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=a(),r=o(e).top+t;return n>=r&&n<r+e.offsetHeight},i=t.checkLocationRelevance=function(e,t){var n=o(e),a=n.top,r=n.bottom,i=o(t),l=i.top,c=i.bottom;return a===l?r===c?e<t:c<r:l>a},l=t.checkElementRelevance=function(e,t){return!!e.contains(t)||!(t.contains(e)||!i(e,t))};t.getBestAnchorGivenScrollLocation=function(e,t){var n=void 0,a=void 0;return Object.keys(e).forEach((function(o){var i=e[o];r(i,t)&&(a&&!l(a,i)||(a=i,n=o))})),n}},x69a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getHash=function(){return decodeURI(window.location.hash.slice(1))},t.updateHash=function(e,t){t?window.location.hash=e:window.location.replace("#"+e)},t.removeHash=function(){history.replaceState("",document.title,window.location.pathname+window.location.search)}},yjHs:function(e,t,n){"use strict";n.r(t);var a=n("4fBN");t.default=a.default},zL0W:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=arguments;t.debounce=function(e,t,n){var o=void 0;return function(){var r=a,i=n&&!o;clearTimeout(o),o=setTimeout((function(){o=null,n||e.apply(void 0,r)}),t),i&&e.apply(void 0,r)}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-771c5ca6d910429d4395.js.map