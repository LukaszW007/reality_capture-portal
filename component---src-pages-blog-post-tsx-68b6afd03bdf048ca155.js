(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"07DH":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("vrFN"),i=a("sKrO"),o=a("loQh"),s=a.n(o),c=a("lnpt"),m=a.n(c),u=function(e){var t=e.detailsData,a=t.url,n=t.alt,r=t.copyright;return console.log("BannerWithCaption> "+JSON.stringify(t)),void 0===a||void 0===n||void 0===r?(console.error("Image details retrieved from CMS are undefined"),console.table(t),null):l.a.createElement("div",{className:m.a.bannerContainer},l.a.createElement("img",{className:m.a.bannerImage,src:a,alt:n,title:n,loading:"lazy"}),l.a.createElement("figcaption",{className:m.a.figcaption},"Fot. ",r))},d=a("4/xA"),g=a.n(d),p=function(e){var t=e.detailsData[0].text;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:g.a.embeddedLink,dangerouslySetInnerHTML:{__html:t}}))},f=a("oJJx"),h=a.n(f),E=function(e){var t=e.detailsData,a=t[0].text;return console.table("this is detailsData before RETURN: "+JSON.stringify(t)),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:h.a.richText,dangerouslySetInnerHTML:{__html:a}}))},_=a("Gavm"),v=a.n(_),y=function(e){var t=e.detailsData[0].text;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:v.a.BlockQuote},l.a.createElement("div",{className:v.a.SimpleQuote},t)))},C=a("zfjW"),N=a.n(C),x=function(e){var t=e.detailsData.items,a={url:t[0].right_side_pict.url,alt:t[0].right_side_pict.alt,copyright:t[0].right_side_pict.alt};return l.a.createElement("div",{className:N.a.prcContainer},l.a.createElement("p",{className:N.a.paragraph,dangerouslySetInnerHTML:{__html:t[0].left_side_text[0].text}}),l.a.createElement(u,{detailsData:a}))},b=a("gQ52"),D=a.n(b),L=function(e){var t=e.detailsData.items,a={url:t[0].left_side_pict.url,alt:t[0].left_side_pict.alt,copyright:t[0].left_side_pict.alt};return l.a.createElement("div",{className:D.a.prcContainer},l.a.createElement(u,{detailsData:a}),l.a.createElement("p",{className:D.a.paragraph,dangerouslySetInnerHTML:{__html:t[0].right_side_text[0].text}}))},P=a("Wbzz"),S=a("t6SD"),I=a.n(S),A=function(e){var t=e.detailsData,a=e.articlesData;return l.a.createElement("div",{className:I.a.listArticlesContainer},l.a.createElement("div",{className:I.a.header},t.primary.list_of_articles[0].text),l.a.createElement("ul",{className:I.a.listOfArticles},t.items.map((function(e){return function(e){var t=a.map((function(t){if(console.log("edge.node.uid "+t.node.uid),console.log("uidPost "+e),e===t.node.uid){var a=t.node.data.title[0].text;return{mainImage:t.node.data.main_image,text:a}}return null}));console.log("articlesDataByUid "+JSON.stringify(t));var n=t.filter(Boolean);if(console.log("filteredArticlesDataByUid "+JSON.stringify(n)),null!=n){var r=n[0],i=r.mainImage,o=r.text;return l.a.createElement("li",{className:I.a.singleArticleOnTheList,key:e},l.a.createElement(P.Link,{to:"/posts/"+e,className:I.a.linkInList},l.a.createElement("img",{className:I.a.articleImage,src:i.url,alt:i.alt}),l.a.createElement("p",{className:I.a.linkToArticle},o)))}return null}(e.articles_to_link.uid)}))))},O=a("dI71"),k=a("xRg/"),T=a.n(k),B=function(e){function t(t){var a;return(a=e.call(this,t)||this).scrollProgress=function(){var e=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;a.setState({scroll:e})},a.state={scroll:0},a}Object(O.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.scrollProgress)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollProgress)},a.render=function(){var e=this.state.scroll;return l.a.createElement("div",{className:T.a.progressContainerStyle},l.a.createElement("div",{className:T.a.progressBarStyle,style:{width:e+"%"}}))},t}(l.a.Component);t.default=function(e){var t=e.data,a=t.prismicBlogPosts,n=a.data,o=a.first_publication_date,c=a.url,m=t.prismicBlogPosts.data.body,d=t.allPrismicBlogPosts.edges;console.log("data.allPrismicBlogPosts  : "+JSON.stringify(d));var g=n.title[0].text,f=void 0===n.subtitle[0]?"":n.subtitle[0].text,h=n.hashtags?n.hashtags.split(","):[],_=void 0===n.text_of_the_post[0]?"":n.text_of_the_post[0].text,v=n.main_image,C=m.map((function(e,t){switch(e.slice_type){case"banner_with_caption":return l.a.createElement(u,{detailsData:e.primary.image_banner});case"embed":return l.a.createElement(p,{detailsData:e.primary.link_to_iframe});case"text":return l.a.createElement(E,{detailsData:e.primary.rich_text_in_post});case"quote":return l.a.createElement(y,{detailsData:e.primary.quote});case"pictright_text_columns":return l.a.createElement(x,{detailsData:e});case"pictleft_text_columns":return l.a.createElement(L,{detailsData:e});case"list_of_articles":return l.a.createElement(A,{detailsData:e,articlesData:d});default:console.table("this is slicetype: "+JSON.stringify(e))}return null}));return l.a.createElement(i.a,null,l.a.createElement(r.a,{title:g,description:f,pathname:c}),l.a.createElement(B,null),l.a.createElement("section",{className:s.a.sectionContainer,onContextMenu:function(e){return e.preventDefault()}},l.a.createElement("img",{className:s.a.mainImage,src:v.url,alt:v.alt}),l.a.createElement("figcaption",{className:s.a.figcaption},"Fot. ",v.copyright),l.a.createElement("div",{className:s.a.postContentContainer},l.a.createElement("h1",null,g),l.a.createElement("h3",null,f),l.a.createElement("div",{className:s.a.firstPublicationDate},o),l.a.createElement("ul",{className:s.a.hashtags},h.map((function(e,t){return l.a.createElement("li",{className:s.a.singleHashtag,key:t},e)}))))),l.a.createElement("section",{className:s.a.sectionContainer2},l.a.createElement("p",{className:s.a.firstParagraph},_),C))}},"4/xA":function(e,t,a){e.exports={embeddedLink:"Embed-module--embeddedLink--2hySB"}},GYNr:function(e,t,a){e.exports={layoutContainer:"Layout-module--layoutContainer--3hL1M",childrenContainer:"Layout-module--childrenContainer--I2OUF",footer:"Layout-module--footer--Tpjf_"}},Gavm:function(e,t,a){e.exports={BlockQuote:"SimpleQuote-module--BlockQuote--3DwH8",SimpleQuote:"SimpleQuote-module--SimpleQuote--aNJqT"}},atgW:function(e,t,a){},gQ52:function(e,t,a){e.exports={prcContainer:"PictLeftColumn-module--prcContainer--Jrose",paragraph:"PictLeftColumn-module--paragraph--3kTeZ"}},lnpt:function(e,t,a){e.exports={bannerContainer:"BannerWithCaption-module--bannerContainer--_ja_d",bannerImage:"BannerWithCaption-module--bannerImage--2Ocsq",figcaption:"BannerWithCaption-module--figcaption--21LfI"}},loQh:function(e,t,a){e.exports={scrollIndicator:"blogPost-module--scrollIndicator--2ECt8",sectionContainer:"blogPost-module--sectionContainer--yYU1d",sectionContainer2:"blogPost-module--sectionContainer2--2A1V8",mainImage:"blogPost-module--mainImage--2E70_",figcaption:"blogPost-module--figcaption--1z8Bs",postContentContainer:"blogPost-module--postContentContainer--24ynX",firstPublicationDate:"blogPost-module--firstPublicationDate--1xwry",hashtags:"blogPost-module--hashtags--3T_0Y",singleHashtag:"blogPost-module--singleHashtag--1nq68",firstParagraph:"blogPost-module--firstParagraph--23FXQ"}},oJJx:function(e,t,a){e.exports={richText:"RichText-module--richText--3X3LF"}},sKrO:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=(a("atgW"),a("GYNr")),i=a.n(r),o=a("SLdA"),s=a("zgc0");t.a=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:i.a.layoutContainer},l.a.createElement(o.a,{desktopScreenVersion:!0}),l.a.createElement("main",{className:i.a.childrenContainer},t),l.a.createElement("div",{className:i.a.footer},l.a.createElement(s.default,null))))}},t6SD:function(e,t,a){e.exports={listArticlesContainer:"ListOfArticles-module--listArticlesContainer--3hgnD",header:"ListOfArticles-module--header--3lRz5",listOfArticles:"ListOfArticles-module--listOfArticles--1vsMp",singleArticleOnTheList:"ListOfArticles-module--singleArticleOnTheList--PDl1v",linkInList:"ListOfArticles-module--linkInList--1cyjg",articleImage:"ListOfArticles-module--articleImage--3SVpt",linkToArticle:"ListOfArticles-module--linkToArticle--2hCkc"}},"xRg/":function(e,t,a){e.exports={progressContainerStyle:"ScrollIndicator-module--progressContainerStyle--2Az_G",progressBarStyle:"ScrollIndicator-module--progressBarStyle--32qlQ"}},zfjW:function(e,t,a){e.exports={prcContainer:"PictRightColumn-module--prcContainer--1HmjU",paragraph:"PictRightColumn-module--paragraph--1YZZW"}}}]);
//# sourceMappingURL=component---src-pages-blog-post-tsx-68b6afd03bdf048ca155.js.map