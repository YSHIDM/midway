"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2459],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),k=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=k(n),u=l,N=d["".concat(o,".").concat(u)]||d[u]||s[u]||r;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4331:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],p={},o="\u5b89\u5168",k={unversionedId:"extensions/security",id:"extensions/security",title:"\u5b89\u5168",description:"\u9002\u7528\u4e8e @midwayjs/faas \u3001@midwayjs/web \u3001@midwayjs/koa \u548c @midwayjs/express \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u5b89\u5168\u7ec4\u4ef6\uff0c\u652f\u6301 csrf \u3001xss \u7b49\u591a\u79cd\u5b89\u5168\u7b56\u7565\u3002",source:"@site/docs/extensions/security.md",sourceDirName:"extensions",slug:"/extensions/security",permalink:"/en/docs/extensions/security",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/security.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Express",permalink:"/en/docs/extensions/express"},next:{title:"\u6a21\u677f\u6e32\u67d3",permalink:"/en/docs/extensions/render"}},m=[{value:"\u5b89\u88c5\u4f7f\u7528",id:"\u5b89\u88c5\u4f7f\u7528",children:[],level:2},{value:"\u9632\u8303\u5e38\u89c1\u7684\u5b89\u5168\u5a01\u80c1",id:"\u9632\u8303\u5e38\u89c1\u7684\u5b89\u5168\u5a01\u80c1",children:[{value:"\u4e00\u3001CSRF",id:"\u4e00csrf",children:[{value:"1. \u4ee4\u724c\u540c\u6b65\u6a21\u5f0f",id:"1-\u4ee4\u724c\u540c\u6b65\u6a21\u5f0f",children:[],level:4},{value:"2. Cookies \u6a21\u5f0f",id:"2-cookies-\u6a21\u5f0f",children:[],level:4}],level:3},{value:"\u4e8c\u3001XSS",id:"\u4e8cxss",children:[{value:"1. \u53cd\u5c04\u578b\u7684 XSS \u653b\u51fb",id:"1-\u53cd\u5c04\u578b\u7684-xss-\u653b\u51fb",children:[],level:4},{value:"2. \u5b58\u50a8\u578b\u7684 XSS \u653b\u51fb",id:"2-\u5b58\u50a8\u578b\u7684-xss-\u653b\u51fb",children:[],level:4},{value:"3. \u5176\u4ed6 XSS \u7684\u9632\u8303\u65b9\u5f0f",id:"3-\u5176\u4ed6-xss-\u7684\u9632\u8303\u65b9\u5f0f",children:[],level:4}],level:3}],level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"csrf",id:"csrf",children:[],level:3},{value:"xframe",id:"xframe",children:[],level:3},{value:"hsts",id:"hsts",children:[],level:3},{value:"csp",id:"csp",children:[],level:3},{value:"noopen",id:"noopen",children:[],level:3},{value:"nosniff",id:"nosniff",children:[],level:3},{value:"xssProtection",id:"xssprotection",children:[],level:3}],level:2}],s={toc:m};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b89\u5168"},"\u5b89\u5168"),(0,r.kt)("p",null,"\u9002\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u5b89\u5168\u7ec4\u4ef6\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"xss")," \u7b49\u591a\u79cd\u5b89\u5168\u7b56\u7565\u3002"),(0,r.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4f7f\u7528"},"\u5b89\u88c5\u4f7f\u7528"),(0,r.kt)("p",null,"1\u3001\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/security --save\n")),(0,r.kt)("p",null,"\u6216\u8005\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/security": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,r.kt)("p",null,"2\u3001\u5728 configuration \u4e2d\u5f15\u5165\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as security from '@midwayjs/security';\n@Configuration({\n  imports: [\n    // ...other components\n    security\n  ],\n})\nexport class AutoConfiguration {}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u9632\u8303\u5e38\u89c1\u7684\u5b89\u5168\u5a01\u80c1"},"\u9632\u8303\u5e38\u89c1\u7684\u5b89\u5168\u5a01\u80c1"),(0,r.kt)("h3",{id:"\u4e00csrf"},"\u4e00\u3001CSRF"),(0,r.kt)("p",null,"CSRF\uff08Cross-site request forgery \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\uff09\uff0c\u662f\u4e00\u79cd\u631f\u5236\u7528\u6237\u5728\u5f53\u524d\u5df2\u767b\u5f55\u7684Web\u5e94\u7528\u7a0b\u5e8f\u4e0a\u6267\u884c\u975e\u672c\u610f\u7684\u64cd\u4f5c\u7684\u653b\u51fb\u65b9\u6cd5\u3002"),(0,r.kt)("h4",{id:"1-\u4ee4\u724c\u540c\u6b65\u6a21\u5f0f"},"1. \u4ee4\u724c\u540c\u6b65\u6a21\u5f0f"),(0,r.kt)("p",null,"\u901a\u8fc7\u54cd\u5e94\u9875\u9762\u65f6\u5c06 token \u6e32\u67d3\u5230\u9875\u9762\u4e0a\uff0c\u5728\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," \u914d\u7f6e\u540e\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.csrf")," \u53ef\u4ee5\u83b7\u53d6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf token"),"\uff0c\u53ef\u4ee5\u518d\u8fd4\u56de\u9875\u9762 html \u65f6\u540c\u6b65\u8f93\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Controller(\'/\')\nexport class HomeController {\n  @Inject()\n  ctx;\n\n  @Get(\'/home\')\n  async home() {\n    return `<form method="POST" action="/upload?_csrf=${ this.ctx.csrf }" >\n      title: <input name="title" />\n      <button type="submit">upload</button>\n    </form>`;\n  }\n}\n')),(0,r.kt)("p",null,"\u4f20\u9012 CSRF token \u7684\u5b57\u6bb5\uff08\u4e0a\u8ff0\u793a\u4f8b\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"_csrf"),"\uff09\u53ef\u4ee5\u5728\u914d\u7f6e\u4e2d\u6539\u53d8\uff0c\u8bf7\u67e5\u770b\u4e0b\u8ff0 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e -> csrf"),"\u3002"),(0,r.kt)("h4",{id:"2-cookies-\u6a21\u5f0f"},"2. Cookies \u6a21\u5f0f"),(0,r.kt)("p",null,"\u5728 CSRF \u9ed8\u8ba4\u914d\u7f6e\u4e0b\uff0ctoken \u4f1a\u88ab\u8bbe\u7f6e\u5728 Cookie \u4e2d\uff0c\u53ef\u4ee5\u518d\u524d\u7aef\u9875\u9762\u4e2d\u901a\u8fc7 JS \u4ece Cookies \u4e2d\u83b7\u53d6\uff0c\u7136\u540e\u518d ajax/fetch \u7b49\u8bf7\u6c42\u4e2d\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"query")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const csrftoken = Cookies.get('csrfToken');\nfetch('/api/post', {\n  method: 'POST',\n  headers: {\n    'x-csrf-token': csrftoken\n  },\n  ...\n});\n")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u4e0b\uff0c\u6846\u67b6\u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF token")," \u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie")," \u4e2d\uff0c\u4ee5\u65b9\u4fbf\u524d\u7aef JS \u53d1\u8d77\u8bf7\u6c42\u65f6\u83b7\u53d6\u5230\u3002\u4f46\u662f\u6240\u6709\u7684\u5b50\u57df\u540d\u90fd\u53ef\u4ee5\u8bbe\u7f6e Cookie\uff0c\u56e0\u6b64\u5f53\u6211\u4eec\u7684\u5e94\u7528\u5904\u4e8e\u65e0\u6cd5\u4fdd\u8bc1\u6240\u6709\u7684\u5b50\u57df\u540d\u90fd\u53d7\u63a7\u7684\u60c5\u51b5\u4e0b\uff0c\u5b58\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie")," \u4e2d\u53ef\u80fd\u6709\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," \u653b\u51fb\u7684\u98ce\u9669\u3002\u6846\u67b6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u914d\u7f6e\u9879 ",(0,r.kt)("inlineCode",{parentName:"p"},"useSession"),"\uff0c\u53ef\u4ee5\u5c06 token \u5b58\u653e\u5230 Session \u4e2d\u3002"),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF token")," \u5b58\u50a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie")," \u4e2d\u65f6\uff0c\u4e00\u65e6\u5728\u540c\u4e00\u4e2a\u6d4f\u89c8\u5668\u4e0a\u53d1\u751f\u7528\u6237\u5207\u6362\uff0c\u65b0\u767b\u9646\u7684\u7528\u6237\u5c06\u4f1a\u4f9d\u65e7\u4f7f\u7528\u65e7\u7684 token\uff08\u4e4b\u524d\u7528\u6237\u4f7f\u7528\u7684\uff09\uff0c\u8fd9\u4f1a\u5e26\u6765\u4e00\u5b9a\u7684\u5b89\u5168\u98ce\u9669\uff0c\u56e0\u6b64\u5728\u6bcf\u6b21\u7528\u6237\u767b\u9646\u7684\u65f6\u5019\u90fd\u5fc5\u987b\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.rotateCsrfSecret()")," \u5237\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF token"),"\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx;\n\n  @Inject()\n  userService;\n\n  @Get('/login')\n  async login(@Body('username') username: string, @Body('password') password: string) {\n    const user = await userService.login({ username, password });\n    this.ctx.session = { user };\n    this.ctx.rotateCsrfSecret();\n    return { success: true };\n  }\n}\n")),(0,r.kt)("h3",{id:"\u4e8cxss"},"\u4e8c\u3001XSS"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"XSS"),"\uff08cross-site scripting \u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff09\u653b\u51fb\u662f\u6700\u5e38\u89c1\u7684 Web \u653b\u51fb\uff0c\u662f\u4ee3\u7801\u6ce8\u5165\u7684\u4e00\u79cd\u3002\u5b83\u5141\u8bb8\u6076\u610f\u7528\u6237\u5c06\u4ee3\u7801\u6ce8\u5165\u5230\u7f51\u9875\u4e0a\uff0c\u5176\u4ed6\u7528\u6237\u5728\u89c2\u770b\u7f51\u9875\u65f6\u5c31\u4f1a\u53d7\u5230\u5f71\u54cd\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"XSS")," \u653b\u51fb\u901a\u5e38\u6307\u7684\u662f\u901a\u8fc7\u5229\u7528\u7f51\u9875\u5f00\u53d1\u65f6\u7559\u4e0b\u7684\u6f0f\u6d1e\uff0c\u901a\u8fc7\u5de7\u5999\u7684\u65b9\u6cd5\u6ce8\u5165\u6076\u610f\u6307\u4ee4\u4ee3\u7801\u5230\u7f51\u9875\uff0c\u4f7f\u7528\u6237\u52a0\u8f7d\u5e76\u6267\u884c\u653b\u51fb\u8005\u6076\u610f\u5236\u9020\u7684\u7f51\u9875\u7a0b\u5e8f\u3002\u653b\u51fb\u6210\u529f\u540e\uff0c\u653b\u51fb\u8005\u53ef\u80fd\u5f97\u5230\u66f4\u9ad8\u7684\u6743\u9650\uff08\u5982\u6267\u884c\u4e00\u4e9b\u64cd\u4f5c\uff09\u3001\u79c1\u5bc6\u7f51\u9875\u5185\u5bb9\u3001\u4f1a\u8bdd\u548ccookie\u7b49\u5404\u79cd\u5185\u5bb9\u3002"),(0,r.kt)("h4",{id:"1-\u53cd\u5c04\u578b\u7684-xss-\u653b\u51fb"},"1. \u53cd\u5c04\u578b\u7684 XSS \u653b\u51fb"),(0,r.kt)("p",null,"\u4e3b\u8981\u662f\u7531\u4e8e\u670d\u52a1\u7aef\u63a5\u6536\u5230\u5ba2\u6237\u7aef\u7684\u4e0d\u5b89\u5168\u8f93\u5165\uff0c\u5728\u5ba2\u6237\u7aef\u89e6\u53d1\u4ee3\u7801\u6267\u884c\u4ece\u800c\u53d1\u8d77 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web")," \u653b\u51fb\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a\u5728\u67d0\u641c\u7d22\u7f51\u7ad9\u641c\u7d22\u65f6\uff0c\u641c\u7d22\u7ed3\u679c\u4f1a\u663e\u793a\u641c\u7d22\u7684\u5173\u952e\u8bcd\u3002\u641c\u7d22\u5173\u952e\u8bcd\u586b\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>alert('xss')<\/script>"),", \u70b9\u51fb\u641c\u7d22\u540e\uff0c\u82e5\u9875\u9762\u7a0b\u5e8f\u6ca1\u6709\u5bf9\u5173\u952e\u8bcd\u8fdb\u884c\u5904\u7406\uff0c\u8fd9\u6bb5\u4ee3\u7801\u5c31\u4f1a\u76f4\u63a5\u5728\u9875\u9762\u4e0a\u6267\u884c\uff0c\u5f39\u51fa alert\u3002"),(0,r.kt)("p",null,"\u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.security.escape()")," \u65b9\u6cd5\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c XSS \u8fc7\u6ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx;\n\n  @Get('/home')\n  async home() {\n    const str = `<script>alert('xss')<\/script>`;\n    const escapedStr = this.ctx.security.escape(str);\n    // &lt;script&gt;alert(&quot;xss&quot;) &lt;/script&gt;\n    return escapedStr;\n  }\n}\n")),(0,r.kt)("p",null,"\u53e6\u5916\u5f53\u7f51\u7ad9\u8f93\u51fa\u7684\u5185\u5bb9\u662f\u4f5c\u4e3a js \u811a\u672c\u7684\u3002\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.security.js()")," \u6765\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,r.kt)("p",null,"\u8fd8\u6709\u4e00\u79cd\u60c5\u51b5\uff0c\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," \u4e2d\u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," \uff0c\u82e5\u672a\u505a\u8f6c\u4e49\uff0c\u6613\u88ab\u5229\u7528\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"XSS")," \u6f0f\u6d1e\u3002\u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.security.json(\u53d8\u91cf)")," \u6765\u63d0\u4f9b json encode\uff0c\u9632\u6b62 XSS \u653b\u51fb\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx;\n\n  @Get('/home')\n  async home() {\n    return `<script>windows.config = ${this.ctx.security.json( ...variable )};<\/script>`;\n  }\n}\n")),(0,r.kt)("h4",{id:"2-\u5b58\u50a8\u578b\u7684-xss-\u653b\u51fb"},"2. \u5b58\u50a8\u578b\u7684 XSS \u653b\u51fb"),(0,r.kt)("p",null,"\u901a\u8fc7\u63d0\u4ea4\u5e26\u6709\u6076\u610f\u811a\u672c\u7684\u5185\u5bb9\u5b58\u50a8\u5728\u670d\u52a1\u5668\u4e0a\uff0c\u5f53\u5176\u4ed6\u4eba\u770b\u5230\u8fd9\u4e9b\u5185\u5bb9\u65f6\u53d1\u8d77 Web \u653b\u51fb\uff0c\u6bd4\u5982\u4e00\u4e9b\u7f51\u7ad9\u7684\u8bc4\u8bba\u6846\u4e2d\uff0c\u7528\u6237\u6076\u610f\u5c06\u4e00\u4e9b\u4ee3\u7801\u4f5c\u4e3a\u8bc4\u8bba\u5185\u5bb9\uff0c\u82e5\u6ca1\u6709\u8fc7\u6ee4\uff0c\u5176\u4ed6\u7528\u6237\u770b\u5230\u8fd9\u4e2a\u8bc4\u8bba\u65f6\u6076\u610f\u4ee3\u7801\u5c31\u4f1a\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.security.html()")," \u6765\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,r.kt)("h4",{id:"3-\u5176\u4ed6-xss-\u7684\u9632\u8303\u65b9\u5f0f"},"3. \u5176\u4ed6 XSS \u7684\u9632\u8303\u65b9\u5f0f"),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u81ea\u8eab\u5177\u6709\u4e00\u5b9a\u9488\u5bf9\u5404\u79cd\u653b\u51fb\u7684\u9632\u8303\u80fd\u529b\uff0c\u4ed6\u4eec\u4e00\u822c\u662f\u901a\u8fc7\u5f00\u542f Web \u5b89\u5168\u5934\u751f\u6548\u7684\u3002\u6846\u67b6\u5185\u7f6e\u4e86\u4e00\u4e9b\u5e38\u89c1\u7684 Web \u5b89\u5168\u5934\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CSP")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Content Security Policy"),"\uff0c\u7b80\u79f0 ",(0,r.kt)("inlineCode",{parentName:"p"},"CSP"),"\uff0c\u4e3b\u8981\u662f\u7528\u6765\u5b9a\u4e49\u9875\u9762\u53ef\u4ee5\u52a0\u8f7d\u54ea\u4e9b\u8d44\u6e90\uff0c\u51cf\u5c11 ",(0,r.kt)("inlineCode",{parentName:"p"},"XSS")," \u7684\u53d1\u751f\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u5173\u95ed\uff08\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"csp: {enable: true}")," \u914d\u7f6e\u5f00\u542f\uff09\uff0c\u5f00\u542f\u540e\u53ef\u4ee5\u6709\u6548\u7684\u9632\u6b62 ",(0,r.kt)("inlineCode",{parentName:"p"},"XSS")," \u653b\u51fb\u7684\u53d1\u751f\u3002\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"CSP")," , \u9700\u8981\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"CSP")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"policy")," \u7b56\u7565\u6709\u4e86\u89e3\uff0c\u5177\u4f53\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/21979782/answer/122682029"},"\u963f\u91cc\u805a\u5b89\u5168 - CSP\u662f\u4ec0\u4e48\uff1f")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"X-Download-Options:noopen")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u5f00\u542f\uff08\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"noopen: {enable: false}")," \u914d\u7f6e\u5173\u95ed\uff09\uff0c\u7981\u7528 IE \u4e0b\u4e0b\u8f7d\u6846 Open \u6309\u94ae\uff0c\u9632\u6b62 IE \u4e0b\u4e0b\u8f7d\u6587\u4ef6\u9ed8\u8ba4\u88ab\u6253\u5f00 XSS\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"X-Content-Type-Options:nosniff"),"\n\u7981\u7528 IE8 \u81ea\u52a8\u55c5\u63a2 mime \u529f\u80fd\uff0c\u9ed8\u8ba4\u5173\u95ed\uff08\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"nosniff: {enable: true}")," \u914d\u7f6e\u5f00\u542f\uff09\uff0c\u4f8b\u5982 text/plain \u5374\u5f53\u6210 text/html \u6e32\u67d3\uff0c\u7279\u522b\u5f53\u672c\u7ad9\u70b9 serve \u7684\u5185\u5bb9\u672a\u5fc5\u53ef\u4fe1\u7684\u65f6\u5019\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"X-XSS-Protection"),"\nIE \u63d0\u4f9b\u7684\u4e00\u4e9b XSS \u68c0\u6d4b\u4e0e\u9632\u8303\uff0c\u9ed8\u8ba4\u5f00\u542f\uff08\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"xssProtection: {enable: false}")," \u914d\u7f6e\u5173\u95ed\uff09"),(0,r.kt)("p",null,"close \u9ed8\u8ba4\u503c false\uff0c\u5373\u8bbe\u7f6e\u4e3a 1; mode=block"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/config/config.default\nexport default {\n  // ...\n  \n  // \u9ed8\u8ba4\u914d\u7f6e\n  security: {\n    csrf: {\n      enable: true,\n      type: 'ctoken',\n      useSession: false,\n      cookieName: 'csrfToken',\n      sessionName: 'csrfToken',\n      headerName: 'x-csrf-token',\n      bodyName: '_csrf',\n      queryName: '_csrf',\n      refererWhiteList: [],\n    },\n    xframe: {\n      enable: true,\n      value: 'SAMEORIGIN',\n    },\n    csp: {\n      enable: false,\n    },\n    hsts: {\n      enable: false,\n      maxAge: 365 * 24 * 3600,\n      includeSubdomains: false,\n    },\n    noopen: {\n      enable: false,\n    },\n    nosniff: {\n      enable: false,\n    },\n    xssProtection: {\n      enable: true,\n      value: '1; mode=block',\n    },\n  },\n}\n\n")),(0,r.kt)("h3",{id:"csrf"},"csrf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"'all' / 'any' / 'ctoken' / 'referer'"),(0,r.kt)("td",{parentName:"tr",align:null},"csrf \u6821\u9a8c\u7c7b\u578b\uff0call/any \u7b49\u4e8e ctoken + referer"),(0,r.kt)("td",{parentName:"tr",align:null},"'ctoken' \u4ecequery/header/body \u4e2d\u83b7\u53d6 csrf token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useSession"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"csrf token \u662f\u5426\u5b58\u653e\u5728 session \u4e2d"),(0,r.kt)("td",{parentName:"tr",align:null},"false\uff0c\u9ed8\u8ba4\u5b58\u653e\u5728 cookies \u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cookieName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u5728 cookie \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"'csrfToken'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sessionName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u5728 session \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"'csrfToken'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headerName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u5728 header \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"'x-csrf-token'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bodyName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u5728 body \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"'_csrf'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u5728 query \u4e2d\u5b58\u653e\u7684 \u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"'_csrf'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refererWhiteList"),(0,r.kt)("td",{parentName:"tr",align:null},"Array<string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u6765\u6e90\u767d\u540d\u5355"),(0,r.kt)("td",{parentName:"tr",align:null},"[]")))),(0,r.kt)("h3",{id:"xframe"},"xframe"),(0,r.kt)("p",null,"xframe \u7528\u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," \u54cd\u5e94\u5934\uff0c\u7528\u6765\u7ed9\u6d4f\u89c8\u5668\u6307\u793a\u5141\u8bb8\u4e00\u4e2a\u9875\u9762\u53ef\u5426\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"frame"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"embed")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," \u4e2d\u5c55\u73b0\u7684\u6807\u8bb0\u3002\u7ad9\u70b9\u53ef\u4ee5\u901a\u8fc7\u786e\u4fdd\u7f51\u7ad9\u6ca1\u6709\u88ab\u5d4c\u5165\u5230\u522b\u4eba\u7684\u7ad9\u70b9\u91cc\u9762\uff0c\u4ece\u800c\u907f\u514d ",(0,r.kt)("inlineCode",{parentName:"p"},"clickjacking")," \u653b\u51fb\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," \u6709\u4e09\u4e2a\u53ef\u80fd\u7684\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"X-Frame-Options: deny\uff1a\u9875\u9762\u4e0d\u5141\u8bb8\u5728 frame \u4e2d\u5c55\u793a"),(0,r.kt)("li",{parentName:"ul"},"X-Frame-Options: sameorigin\uff1a\u8be5\u9875\u9762\u53ef\u4ee5\u5728\u76f8\u540c\u57df\u540d\u9875\u9762\u7684 frame \u4e2d\u5c55\u793a"),(0,r.kt)("li",{parentName:"ul"},"X-Frame-Options: allow-from ",(0,r.kt)("a",{parentName:"li",href:"https://example.com/%EF%BC%9A%E8%AF%A5%E9%A1%B5%E9%9D%A2%E5%8F%AF%E4%BB%A5%E5%9C%A8%E6%8C%87%E5%AE%9A%E6%9D%A5%E6%BA%90%E7%9A%84"},"https://example.com/\uff1a\u8be5\u9875\u9762\u53ef\u4ee5\u5728\u6307\u5b9a\u6765\u6e90\u7684")," frame \u4e2d\u5c55\u793a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Frame-Options \u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"'SAMEORIGIN'")))),(0,r.kt)("h3",{id:"hsts"},"hsts"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTTP Strict Transport Security"),"\uff08\u901a\u5e38\u7b80\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"HSTS")," \uff09\u662f\u4e00\u4e2a\u5b89\u5168\u529f\u80fd\uff0c\u5b83\u544a\u8bc9\u6d4f\u89c8\u5668\u53ea\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS")," \u8bbf\u95ee\u5f53\u524d\u8d44\u6e90\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxAge"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u6d4f\u89c8\u5668\u6536\u5230\u8fd9\u4e2a\u8bf7\u6c42\u540e\u7684\u591a\u5c11 ",(0,r.kt)("inlineCode",{parentName:"td"},"\u79d2")," \u65f6\u95f4\u5185\u51e1\u662f\u8bbf\u95ee\u8fd9\u4e2a\u57df\u540d\u4e0b\u7684\u8bf7\u6c42\u90fd\u4f7f\u7528HTTPS\u8bf7\u6c42"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"365 * 24 * 3600")," \u5373\u4e00\u5e74")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"includeSubdomains"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b64\u89c4\u5219\u662f\u5426\u9002\u7528\u4e8e\u8be5\u7f51\u7ad9\u7684\u6240\u6709\u5b50\u57df\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"csp"},"csp"),(0,r.kt)("p",null,"HTTP \u54cd\u5e94\u5934 ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy")," \u5141\u8bb8\u7ad9\u70b9\u7ba1\u7406\u8005\u63a7\u5236\u6307\u5b9a\u7684\u9875\u9762\u52a0\u8f7d\u54ea\u4e9b\u8d44\u6e90\u3002\u8fd9\u5c06\u5e2e\u52a9\u9632\u6b62\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff08XSS\uff09\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null},"Object<key: string, value: string / string[] / boolean>"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b56\u7565\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reportOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supportIE"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301IE\u6d4f\u89c8\u5668"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"\u8be6\u7ec6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"policy")," \u914d\u7f6e\u53ef\u4ee5\u53c2\u8003: ",(0,r.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/21979782/answer/122682029"},"Content Security Policy (CSP) \u662f\u4ec0\u4e48\uff1f\u963f\u91cc\u805a\u5b89\u5168")),(0,r.kt)("h3",{id:"noopen"},"noopen"),(0,r.kt)("p",null,"\u7528\u4e8e\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"IE 8")," \u4ee5\u4e0a\u7248\u672c\u7684\u7528\u6237\u4e0d\u6253\u5f00\u6587\u4ef6\u800c\u76f4\u63a5\u4fdd\u5b58\u6587\u4ef6\u3002\u5728\u4e0b\u8f7d\u5bf9\u8bdd\u6846\u4e2d\u4e0d\u663e\u793a\u201c\u6253\u5f00\u201d\u9009\u9879\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"nosniff"},"nosniff"),(0,r.kt)("p",null,"\u5f00\u542f\u540e\uff0c\u5982\u679c\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"stylesheet")," \u8bfb\u5165\u7684\u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"MIME")," \u7c7b\u578b\u4e0e\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"MIME")," \u7c7b\u578b\u4e0d\u5339\u914d\uff0c\u4e0d\u5141\u8bb8\u8bfb\u53d6\u8be5\u6587\u4ef6\u3002\u7528\u4e8e\u9632\u6b62 ",(0,r.kt)("inlineCode",{parentName:"p"},"XSS")," \u7b49\u8de8\u7ad9\u811a\u672c\u653b\u51fb\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"xssprotection"},"xssProtection"),(0,r.kt)("p",null,"\u7528\u4e8e\u542f\u7528\u6d4f\u89c8\u5668\u7684XSS\u8fc7\u6ee4\u529f\u80fd\uff0c\u4ee5\u9632\u6b62 ",(0,r.kt)("inlineCode",{parentName:"p"},"XSS")," \u8de8\u7ad9\u811a\u672c\u653b\u51fb\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection")," \u54cd\u5e94\u5934\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"IE"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Chrome")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Safari")," \u7684\u4e00\u4e2a\u7279\u6027\uff0c\u5f53\u68c0\u6d4b\u5230\u8de8\u7ad9\u811a\u672c\u653b\u51fb (XSS (en-US))\u65f6\uff0c\u6d4f\u89c8\u5668\u5c06\u505c\u6b62\u52a0\u8f7d\u9875\u9762\u3002\u82e5\u7f51\u7ad9\u8bbe\u7f6e\u4e86\u826f\u597d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy")," \u6765\u7981\u7528\u5185\u8054 JavaScript ('unsafe-inline')\uff0c\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e0d\u592a\u9700\u8981\u8fd9\u4e9b\u4fdd\u62a4\uff0c \u4f46\u5176\u4ecd\u7136\u53ef\u4ee5\u4e3a\u5c1a\u4e0d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"CSP")," \u7684\u65e7\u7248\u6d4f\u89c8\u5668\u7684\u7528\u6237\u63d0\u4f9b\u4fdd\u62a4\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection")," \u53ef\u4ee5\u914d\u7f6e\u4e0b\u8ff0\u56db\u4e2a\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),": \u7981\u6b62XSS\u8fc7\u6ee4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),"\uff1a\u542f\u7528XSS\u8fc7\u6ee4\uff08\u901a\u5e38\u6d4f\u89c8\u5668\u662f\u9ed8\u8ba4\u7684\uff09\u3002 \u5982\u679c\u68c0\u6d4b\u5230\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff0c\u6d4f\u89c8\u5668\u5c06\u6e05\u9664\u9875\u9762\uff08\u5220\u9664\u4e0d\u5b89\u5168\u7684\u90e8\u5206\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1;mode=block"),"\uff1a\u542f\u7528XSS\u8fc7\u6ee4\u3002 \u5982\u679c\u68c0\u6d4b\u5230\u653b\u51fb\uff0c\u6d4f\u89c8\u5668\u5c06\u4e0d\u4f1a\u6e05\u9664\u9875\u9762\uff0c\u800c\u662f\u963b\u6b62\u9875\u9762\u52a0\u8f7d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1; report=<reporting-URI>"),"\uff1a Chromium only\uff0c\u542f\u7528XSS\u8fc7\u6ee4\u3002 \u5982\u679c\u68c0\u6d4b\u5230\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff0c\u6d4f\u89c8\u5668\u5c06\u6e05\u9664\u9875\u9762\u5e76\u4f7f\u7528CSP report-uri (en-US)\u6307\u4ee4\u7684\u529f\u80fd\u53d1\u9001\u8fdd\u89c4\u62a5\u544a\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"X-XSS-Protection \u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1; mode=block"))))))}d.isMDXComponent=!0}}]);