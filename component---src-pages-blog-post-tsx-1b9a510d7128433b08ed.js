(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"07DH":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),s=n("vDqi"),l=n.n(s),r=n("wd/R"),i=n.n(r),c=n("vrFN"),m=n("sKrO"),u=n("loQh"),d=n.n(u),g=n("dI71"),p=n("xRg/"),f=n.n(p),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).scrollProgress=function(){var e=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;n.setState({scroll:e})},n.state={scroll:0},n}Object(g.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.scrollProgress)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollProgress)},n.render=function(){var e=this.state.scroll;return a.a.createElement("div",{className:f.a.progressContainerStyle},a.a.createElement("div",{className:f.a.progressBarStyle,style:{width:e+"%"}}))},t}(a.a.Component);t.default=function(e){var t=e.data,n=Object(o.useState)([]),s=n[0],r=n[1];if(void 0!==t){var u=t.feedMediumBlog,g=u.categories,p=u.content,f=(u.guid,u.id,u.link,u.pubDate),b=u.title;console.log("data.feedMediumBlog: ",t.feedMediumBlog);Object(o.useEffect)((function(){l.a.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@3d-points").then((function(e){var t=e.data.items.thumbnail,n=e.data.items.title;r([t,n])})).catch((function(e){console.error(e)}))}),[]);var v=s[1]===b?s[0]:null;return a.a.createElement(m.a,null,a.a.createElement(c.a,{title:b,description:p.encodedSnippet.substring(0,150),pathname:b,image:v}),a.a.createElement(h,null),a.a.createElement("section",{className:d.a.sectionContainer},a.a.createElement("div",{className:d.a.postContentContainer},a.a.createElement("h1",null,b),a.a.createElement("div",{className:d.a.firstPublicationDate},i()(f).format("MMM DD, YYYY")),a.a.createElement("ul",{className:d.a.hashtags},g.map((function(e,t){return a.a.createElement("li",{key:t,className:d.a.singleHashtag},"#",e)})))),a.a.createElement("div",{className:d.a.content,dangerouslySetInnerHTML:{__html:p.encoded}})))}return null}},loQh:function(e,t,n){e.exports={scrollIndicator:"blogPost-module--scrollIndicator--2ECt8",sectionContainer:"blogPost-module--sectionContainer--yYU1d",sectionContainer2:"blogPost-module--sectionContainer2--2A1V8",mainImage:"blogPost-module--mainImage--2E70_",figcaption:"blogPost-module--figcaption--1z8Bs",postContentContainer:"blogPost-module--postContentContainer--24ynX",firstPublicationDate:"blogPost-module--firstPublicationDate--1xwry",hashtags:"blogPost-module--hashtags--3T_0Y",singleHashtag:"blogPost-module--singleHashtag--1nq68",firstParagraph:"blogPost-module--firstParagraph--23FXQ"}},"xRg/":function(e,t,n){e.exports={progressContainerStyle:"ScrollIndicator-module--progressContainerStyle--2Az_G",progressBarStyle:"ScrollIndicator-module--progressBarStyle--32qlQ"}}}]);
//# sourceMappingURL=component---src-pages-blog-post-tsx-1b9a510d7128433b08ed.js.map