"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21193],{39058:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(67294),n=a(86010),r=a(54774),s=a(87524),o=a(39960),c=a(95999);const m="sidebar_re4s",i="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var E=a(13102);function f(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(E.Zo,{component:f,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(h,{sidebar:t}):null}function Z(e){const{sidebar:t,toc:a,children:s,...o}=e,c=t&&t.items.length>0;return l.createElement(r.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},15289:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(44996),r=a(9460);function s(e){let{children:t,className:a}=e;const{frontMatter:s,assets:o}=(0,r.C)(),{withBaseUrl:c}=(0,n.C)(),m=o.image??s.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:c(m,{absolute:!0})}),t)}},99714:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),n=a(86010),r=a(18780),s=a(9460),o=a(70143);function c(e){let{children:t,className:a}=e;const{isBlogPostPage:c}=(0,s.C)();return l.createElement("div",{id:c?r.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(o.Z,null,t))}},57624:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(67294),n=a(86010),r=a(95999),s=a(88824),o=a(9460);const c="container_mt6G";function m(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,s.c)();return t=>{const a=Math.ceil(t);return e(a,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function i(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function u(){return l.createElement(l.Fragment,null," \xb7 ")}function d(e){let{className:t}=e;const{metadata:a}=(0,o.C)(),{date:r,formattedDate:s,readingTime:d}=a;return l.createElement("div",{className:(0,n.Z)(c,"margin-vert--md",t)},l.createElement(i,{date:r,formattedDate:s}),void 0!==d&&l.createElement(l.Fragment,null,l.createElement(u,null),l.createElement(m,{readingTime:d})))}},20988:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),n=a(86010),r=a(39960),s=a(9460);const o="title_f1Hy";function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:c}=(0,s.C)(),{permalink:m,title:i}=a,u=c?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(o,t),itemProp:"headline"},c?i:l.createElement(r.Z,{itemProp:"url",to:m},i))}},46651:(e,t,a)=>{a.d(t,{Z:()=>T});var l=a(67294),n=a(86010),r=a(9460),s=a(15289),o=a(20988),c=a(57624),m=a(39960);function i(e){return e.href?l.createElement(m.Z,e):l.createElement(l.Fragment,null,e.children)}function u(e){let{author:t,className:a}=e;const{name:r,title:s,url:o,imageURL:c,email:m}=t,u=o||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},c&&l.createElement(i,{href:u,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:c,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i,{href:u,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),s&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const d="authorCol_Hf19",g="imageOnlyAuthorRow_pa_O",p="imageOnlyAuthorCol_G86a";function h(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",o?g:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!o&&"col col--6",o?p:d),key:t},l.createElement(u,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function E(){return l.createElement("header",null,l.createElement(o.Z,null),l.createElement(c.Z,null),l.createElement(h,null))}var f=a(99714),b=a(84881),v=a(71526),Z=a(87462),N=a(95999);function P(){return l.createElement("b",null,l.createElement(N.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function _(e){const{blogPostTitle:t,...a}=e;return l.createElement(m.Z,(0,Z.Z)({"aria-label":(0,N.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(P,null))}const k="blogPostFooterDetailsFull_mRVl";function w(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:s,editUrl:o,hasTruncateMarker:c}=e,m=!t&&c,i=a.length>0;return i||m||o?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&k)},i&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":m})},l.createElement(v.Z,{tags:a})),t&&o&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(b.Z,{editUrl:o})),m&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":i})},l.createElement(_,{blogPostTitle:s,to:e.permalink}))):null}function T(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s.Z,{className:(0,n.Z)(o,a)},l.createElement(E,null),l.createElement(f.Z,null,t),l.createElement(w,null))}},84881:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(95999),r=a(35281),s=a(87462),o=a(86010);const c="iconEdit_Z9Sw";function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function i(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},13008:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(86010),r=a(39960);const s="tag_zVej",o="tagRegular_sFm0",c="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,m?c:o)},a,m&&l.createElement("span",null,m))}},71526:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(86010),r=a(95999),s=a(13008);const o="tags_jXut",c="tag_QGVx";function m(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:c},l.createElement(s.Z,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>s});var l=a(67294),n=a(902);const r=l.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:s},t)}function o(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(67294),n=a(52263);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function m(){const e=c();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);