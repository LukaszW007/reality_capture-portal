(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"07DH":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("vrFN"),r=a("sKrO"),o=a("loQh"),s=a.n(o),c=a("lnpt"),m=a.n(c),u=function(e){var t=e.detailsData,a=t.url,n=t.alt,i=t.copyright;return console.log("BannerWithCaption> "+JSON.stringify(t)),void 0===a||void 0===n||void 0===i?(console.error("Image details retrieved from CMS are undefined"),console.table(t),null):l.a.createElement("div",{className:m.a.bannerContainer},l.a.createElement("img",{className:m.a.bannerImage,src:a,alt:n,title:n,loading:"lazy"}),l.a.createElement("figcaption",{className:m.a.figcaption},"Fot. ",i))},d=a("4/xA"),g=a.n(d),f=function(e){var t=e.detailsData[0].text;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:g.a.embeddedLink,dangerouslySetInnerHTML:{__html:t}}))},p=a("oJJx"),h=a.n(p),E=function(e){var t=e.detailsData,a=t[0].text;return console.table("this is detailsData before RETURN: "+JSON.stringify(t)),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:h.a.richText,dangerouslySetInnerHTML:{__html:a}}))},v=a("Wbzz"),y=a("t6SD"),b=a.n(y),N=function(e){var t=e.detailsData,a=e.articlesData;return l.a.createElement("div",{className:b.a.listArticlesContainer},l.a.createElement("div",{className:b.a.header},t.primary.list_of_articles[0].text),l.a.createElement("ul",{className:b.a.listOfArticles},t.items.map((function(e){return function(e){var t=a.map((function(t){if(console.log("edge.node.uid "+t.node.uid),console.log("uidPost "+e),e===t.node.uid){var a=t.node.data.title[0].text;return{mainImage:t.node.data.main_image,text:a}}return null}));console.log("articlesDataByUid "+JSON.stringify(t));var n=t.filter(Boolean);if(console.log("filteredArticlesDataByUid "+JSON.stringify(n)),null!==n[0]&&void 0!==n[0]){var i=n[0],r=i.mainImage,o=i.text;return l.a.createElement("li",{className:b.a.singleArticleOnTheList,key:e},l.a.createElement(v.Link,{to:"/posts/"+e,className:b.a.linkInList},l.a.createElement("img",{className:b.a.articleImage,src:r.url,alt:r.alt}),l.a.createElement("p",{className:b.a.linkToArticle},o)))}return null}(e.articles_to_link.uid)}))))},C=a("dI71"),_=a("xRg/"),x=a.n(_),P=function(e){function t(t){var a;return(a=e.call(this,t)||this).scrollProgress=function(){var e=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;a.setState({scroll:e})},a.state={scroll:0},a}Object(C.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.scrollProgress)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollProgress)},a.render=function(){var e=this.state.scroll;return l.a.createElement("div",{className:x.a.progressContainerStyle},l.a.createElement("div",{className:x.a.progressBarStyle,style:{width:e+"%"}}))},t}(l.a.Component);t.default=function(e){var t=e.data;if(console.table("DATA in PostPage: "+JSON.stringify(t)),void 0!==t){var a=t.prismicPosts,n=a.data,o=a.first_publication_date,c=a.url,m=t.prismicPosts.data.body,d=t.allPrismicPosts.edges;console.log("data.allPrismicPosts  : "+JSON.stringify(d));var g=n.title[0].text,p=void 0===n.subtitle[0]?"":n.subtitle[0].text,h=n.hashtags?n.hashtags.split(","):[],v=void 0===n.text_of_the_post[0]?"":n.text_of_the_post[0].text,y=n.main_image,b=n.read_time[0].text,C=m.map((function(e,t){switch(e.slice_type){case"banner_with_caption":return l.a.createElement(u,{detailsData:e.primary.image_banner});case"embed":return l.a.createElement(f,{detailsData:e.primary.link_to_iframe});case"text":return l.a.createElement(E,{detailsData:e.primary.rich_text_in_post});case"list_of_articles":return l.a.createElement(N,{detailsData:e,articlesData:d});default:console.table("this is slicetype: "+JSON.stringify(e))}return null}));return l.a.createElement(r.a,null,l.a.createElement(i.a,{title:g,description:p,pathname:c}),l.a.createElement(P,null),l.a.createElement("section",{className:s.a.sectionContainer,onContextMenu:function(e){return e.preventDefault()}},l.a.createElement("img",{className:s.a.mainImage,src:y.url,alt:y.alt}),l.a.createElement("figcaption",{className:s.a.figcaption},"Fot. ",y.copyright),l.a.createElement("div",{className:s.a.postContentContainer},l.a.createElement("h1",null,g),l.a.createElement("h3",null,p),l.a.createElement("div",null,b),l.a.createElement("div",{className:s.a.firstPublicationDate},o),l.a.createElement("ul",{className:s.a.hashtags},h.map((function(e,t){return l.a.createElement("li",{className:s.a.singleHashtag,key:t},e)}))))),l.a.createElement("section",{className:s.a.sectionContainer2},l.a.createElement("p",{className:s.a.firstParagraph},v),C))}return null}},"4/xA":function(e,t,a){e.exports={embeddedLink:"Embed-module--embeddedLink--2hySB"}},GYNr:function(e,t,a){e.exports={layoutContainer:"Layout-module--layoutContainer--3hL1M",childrenContainer:"Layout-module--childrenContainer--I2OUF",footer:"Layout-module--footer--Tpjf_"}},atgW:function(e,t,a){},lnpt:function(e,t,a){e.exports={bannerContainer:"BannerWithCaption-module--bannerContainer--_ja_d",bannerImage:"BannerWithCaption-module--bannerImage--2Ocsq",figcaption:"BannerWithCaption-module--figcaption--21LfI"}},loQh:function(e,t,a){e.exports={scrollIndicator:"blogPost-module--scrollIndicator--2ECt8",sectionContainer:"blogPost-module--sectionContainer--yYU1d",sectionContainer2:"blogPost-module--sectionContainer2--2A1V8",mainImage:"blogPost-module--mainImage--2E70_",figcaption:"blogPost-module--figcaption--1z8Bs",postContentContainer:"blogPost-module--postContentContainer--24ynX",firstPublicationDate:"blogPost-module--firstPublicationDate--1xwry",hashtags:"blogPost-module--hashtags--3T_0Y",singleHashtag:"blogPost-module--singleHashtag--1nq68",firstParagraph:"blogPost-module--firstParagraph--23FXQ"}},oJJx:function(e,t,a){e.exports={richText:"RichText-module--richText--3X3LF"}},sKrO:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=(a("atgW"),a("GYNr")),r=a.n(i),o=a("SLdA"),s=a("zgc0");t.a=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r.a.layoutContainer},l.a.createElement(o.a,{desktopScreenVersion:!0}),l.a.createElement("main",{className:r.a.childrenContainer},t),l.a.createElement("div",{className:r.a.footer},l.a.createElement(s.default,null))))}},t6SD:function(e,t,a){e.exports={listArticlesContainer:"ListOfArticles-module--listArticlesContainer--3hgnD",header:"ListOfArticles-module--header--3lRz5",listOfArticles:"ListOfArticles-module--listOfArticles--1vsMp",singleArticleOnTheList:"ListOfArticles-module--singleArticleOnTheList--PDl1v",linkInList:"ListOfArticles-module--linkInList--1cyjg",articleImage:"ListOfArticles-module--articleImage--3SVpt",linkToArticle:"ListOfArticles-module--linkToArticle--2hCkc"}},"xRg/":function(e,t,a){e.exports={progressContainerStyle:"ScrollIndicator-module--progressContainerStyle--2Az_G",progressBarStyle:"ScrollIndicator-module--progressBarStyle--32qlQ"}}}]);
//# sourceMappingURL=component---src-pages-blog-post-tsx-9da79ca661d308c6e09e.js.map