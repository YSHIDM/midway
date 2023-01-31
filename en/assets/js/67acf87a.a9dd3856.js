"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49822],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),g=o,u=m["".concat(d,".").concat(g)]||m[g]||c[g]||a;return t?r.createElement(u,l(l({ref:n},p),{},{components:t})):r.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},81115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},l="Web Middleware",i={unversionedId:"hooks/middleware",id:"hooks/middleware",title:"Web Middleware",description:"Midway Hooks supports defining Web middleware through function + useContext().",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/hooks/middleware.md",sourceDirName:"hooks",slug:"/hooks/middleware",permalink:"/en/docs/hooks/middleware",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/middleware.md",tags:[],version:"current",frontMatter:{},sidebar:"hooks",previous:{title:"validate",permalink:"/en/docs/hooks/validate"},next:{title:"Cross-domain CORS",permalink:"/en/docs/hooks/cors"}},d={},s=[{value:"Grammar",id:"grammar",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"Global middleware",id:"global-middleware",level:2},{value:"File-level middleware",id:"file-level-middleware",level:2},{value:"Single function middleware",id:"single-function-middleware",level:2},{value:"Using Koa middleware",id:"using-koa-middleware",level:2}],p={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-middleware"},"Web Middleware"),(0,o.kt)("p",null,"Midway Hooks supports defining Web middleware through function + ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext()"),"."),(0,o.kt)("h2",{id:"grammar"},"Grammar"),(0,o.kt)("p",null,"The middleware has only one parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"next"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," needs to be obtained by ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext"),". You can also use any ",(0,o.kt)("inlineCode",{parentName:"p"},"Hooks")," in the middleware."),(0,o.kt)("h3",{id:"basic-example"},"Basic example"),(0,o.kt)("p",null,"Take recording request logs as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/koa';\nimport { useContext } from '@midwayjs/hooks';\n\nconst logger = async (next: any) => {\n  const ctx = useContext<Context>();\n\n  console.log (\n    '<-- [${ctx.method}] ${ctx.url}'\n  );\n\n  const start = Date.now();\n  await next();\n  const cost = Date.now() - start;\n\n  console.log (\n    '--\x3e [${ctx.method}] ${ctx.url} ${cost}ms'\n  );\n};\n")),(0,o.kt)("h2",{id:"global-middleware"},"Global middleware"),(0,o.kt)("p",null,"Global middleware is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.ts"),", and the middleware defined here takes effect for all interfaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  hooks\n  createConfiguration\n} from '@midwayjs/hooks';\nimport logger from './logger';\n\n// Global Middleware\nexport default createConfiguration({\n  imports: [\n    // highlight-start\n    hooks({\n      middleware: [logger],\n    }),\n    // highlight-end\n  ],\n});\n")),(0,o.kt)("h2",{id:"file-level-middleware"},"File-level middleware"),(0,o.kt)("p",null,"File-level middleware is defined in the Api file. Through the exported ",(0,o.kt)("inlineCode",{parentName:"p"},"config.middleware"),", the middleware takes effect on all Api functions in the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  ApiConfig\n  Api\n  Get\n} from '@midwayjs/hooks';\nimport logger from './logger';\n\n// File Level Middleware\n// highlight-start\nexport const config: ApiConfig = {\n  middleware: [logger]\n};\n// highlight-end\n\nexport default Api(Get(), async () => {\n  return 'Hello World!';\n});\n")),(0,o.kt)("h2",{id:"single-function-middleware"},"Single function middleware"),(0,o.kt)("p",null,"Middleware defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"Middleware(... Middlewares: HooksMiddleware[])")," takes effect only for a single function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  Middleware\n} from '@midwayjs/hooks';\nimport logger from './logger';\n\nexport default Api (\n  Get()\n  // highlight-start\n  Middleware(logger)\n  // highlight-end\n  async () => {\n    return 'Hello World!';\n  }\n);\n")),(0,o.kt)("h2",{id:"using-koa-middleware"},"Using Koa middleware"),(0,o.kt)("p",null,"You can pass in the Koa middleware directly in the above example."),(0,o.kt)("p",null,"Take ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@koa/cors"},"@koa/cors")," as an example."),(0,o.kt)("p",null,"Global Enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  hooks\n  createConfiguration\n} from '@midwayjs/hooks';\nimport logger from './logger';\nimport cors from '@koa/cors';\n\n// Global Middleware\nexport default createConfiguration({\n  imports: [\n    hooks({\n      // highlight-start\n      middleware: [logger, cors()]\n      // highlight-end\n    }),\n  ],\n});\n")),(0,o.kt)("p",null,"File level enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  ApiConfig\n  Api\n  Get\n} from '@midwayjs/hooks';\nimport logger from './logger';\nimport cors from '@koa/cors';\n\n// File Level Middleware\n// highlight-start\nexport const config: ApiConfig = {\n  middleware: [logger, cors]\n};\n// highlight-end\n\nexport default Api(Get(), async () => {\n  return 'Hello World!';\n});\n")),(0,o.kt)("p",null,"Function level enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  Middleware\n} from '@midwayjs/hooks';\nimport logger from './logger';\nimport cors from '@koa/cors';\n\nexport default Api (\n  Get()\n  // highlight-start\n  Middleware(logger, cors)\n  // highlight-end\n  async () => {\n    return 'Hello World!';\n  }\n);\n")))}m.isMDXComponent=!0}}]);