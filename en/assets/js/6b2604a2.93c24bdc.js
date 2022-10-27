"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(n),p=a,h=g["".concat(s,".").concat(p)]||g[p]||u[p]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={},o="Tencent Cloud releases FAQ",l={unversionedId:"serverless/deploy_tencent_faq",id:"serverless/deploy_tencent_faq",title:"Tencent Cloud releases FAQ",description:"User authentication",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/deploy_tencent_faq.md",sourceDirName:"serverless",slug:"/serverless/deploy_tencent_faq",permalink:"/en/docs/serverless/deploy_tencent_faq",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/deploy_tencent_faq.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"User authentication",id:"user-authentication",level:2},{value:"Publishing area switching",id:"publishing-area-switching",level:2},{value:"Reuse API Gateway",id:"reuse-api-gateway",level:2},{value:"Bind domain name",id:"bind-domain-name",level:2},{value:"Additional billing",id:"additional-billing",level:2},{value:"<strong>Delete Tencent Gateway</strong>",id:"delete-tencent-gateway",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tencent-cloud-releases-faq"},"Tencent Cloud releases FAQ"),(0,a.kt)("h2",{id:"user-authentication"},"User authentication"),(0,a.kt)("p",null,"When Tencent Cloud is deployed, if it is the first deployment, the console will display the corresponding two-dimensional code, and the authentication can be completed by scanning the code. The configuration will be reused by default for a single project."),(0,a.kt)("p",null,"The authentication file is stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the root directory of the deployment. If you want to modify the file, you can delete the file and scan the code again."),(0,a.kt)("p",null,"You can also modify the content in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TENCENT_APP_ID = xxxxxx# AppId of authorized account\nTENCENT_SECRET_ID = xxxxxx# SecretId of authorized account\nTENCENT_SECRET_KEY = xxxxxx# SecretKey of authorized account\nTENCENT_TOKEN = xxxxx# temporary token\n")),(0,a.kt)("p",null,"If you want to use a RAM user to publish a RAM user, you can view the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/1154/43006"},"RAM user permissions"),"."),(0,a.kt)("h2",{id:"publishing-area-switching"},"Publishing area switching"),(0,a.kt)("p",null,"Tencent cloud configuration supports publishing to different regions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service: fc-qinyue-test\n\nprovider:\n  name: tencent\n  runtime: nodejs10\n  region: ap-shanghai\n")),(0,a.kt)("p",null,"Common region values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ap-shanghai Shanghai"),(0,a.kt)("li",{parentName:"ul"},"ap-guangzhou Guangzhou"),(0,a.kt)("li",{parentName:"ul"},"ap-beijing Beijing"),(0,a.kt)("li",{parentName:"ul"},"ap-hongkong Hong Kong")),(0,a.kt)("p",null,"For the complete list of regions, see ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/api/583/17238"},"Tencent Cloud documentation"),"."),(0,a.kt)("h2",{id:"reuse-api-gateway"},"Reuse API Gateway"),(0,a.kt)("p",null,"If the HTTP function is officially released, Tencent Cloud will automatically create a serviceId that identifies the Gateway every time it is released, and there will be many in the long run. In order to reuse each time, it is better to record the serviceId to reuse the following codes after the first release (or apply for a good gateway in advance)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service: fc-qinyue-test\n\nprovider:\n  name: tencent\n  runtime: nodejs10\n  serviceId: service-xxxxxx # <---- fill in the id here for reuse\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Obtain the ID of the API Gateway")),(0,a.kt)("p",null,"Way one, get from the platform."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588752561344-c520ce4d-8dba-4e88-99c6-744e5af73cb9.png#height=577&id=nPqm4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=577&originWidth=1173&originalType=binary&size=72901&status=done&style=none&width=1173",width:"1173"}),(0,a.kt)("p",null,"Method 2, get after each release."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588752629863-178fd9db-7dcb-496e-af05-1fc68abfb30f.png#height=115&id=iBgEU&margin=%5Bobject%20Object%5D&name=image.png&originHeight=115&originWidth=746&originalType=binary&size=39588&status=done&style=none&width=746",width:"746"}),(0,a.kt)("h2",{id:"bind-domain-name"},"Bind domain name"),(0,a.kt)("p",null,"After Tencent Cloud is released, it automatically gives a gateway address to access cloud functions, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"http:// service-xxxxx-xxxxxxxx.gz.apigw.tencentcs.com:80"),". At the same time, it automatically maps three sets of environment names and loads them on the path."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test environment/test"),(0,a.kt)("li",{parentName:"ul"},"Advance/prepub"),(0,a.kt)("li",{parentName:"ul"},"Online/release")),(0,a.kt)("p",null,"This address can be seen at both the trigger management of the function and the API gateway."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588752924557-d0eb153e-f583-49c2-b9a4-55e417867b43.png#height=421&id=cPfTl&margin=%5Bobject%20Object%5D&name=image.png&originHeight=578&originWidth=1025&originalType=binary&size=49631&status=done&style=none&width=746",width:"746"}),(0,a.kt)("p",null,"at the gateway."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588752972052-c2f7fbc8-0725-49e0-ab73-5dec6a7c0c00.png#height=732&id=Qw18W&margin=%5Bobject%20Object%5D&name=image.png&originHeight=732&originWidth=3010&originalType=binary&size=238685&status=done&style=none&width=3010",width:"3010"}),(0,a.kt)("p",null,"If we want to remove this environment, we have to bind a custom domain name."),(0,a.kt)("p",null,'Click "New" at the custom domain name of API Gateway ".'),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588753063041-496d876f-3457-47cb-8156-c9e8364e91db.png#height=338&id=mIiB5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=338&originWidth=1096&originalType=binary&size=26777&status=done&style=none&width=1096",width:"1096"}),(0,a.kt)("p",null,"Configure a custom path mapping, such as mapping",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"to the official publishing environment, so that the environment suffix is not required when accessing by a domain name."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588753124170-9e6a2b01-dad8-47df-9d81-294d8397137b.png#height=607&id=FAbTy&margin=%5Bobject%20Object%5D&name=image.png&originHeight=607&originWidth=904&originalType=binary&size=49449&status=done&style=none&width=904",width:"904"}),(0,a.kt)("h2",{id:"additional-billing"},"Additional billing"),(0,a.kt)("p",null,"When using local tools, due to the SDK provided by Tencent Cloud, a COS Bucket may be created for the storage of code packages. As COS is used for payment, a certain fee will be incurred. Please pay attention to your COS situation in time to avoid deduction."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1606803155279-51e71ffa-6e9a-4ab9-812b-19003d45483c.png#height=460&id=DRD5n&margin=%5Bobject%20Object%5D&name=image.png&originHeight=460&originWidth=1196&originalType=binary&size=60856&status=done&style=none&width=1196",width:"1196"}),(0,a.kt)("h2",{id:"delete-tencent-gateway"},(0,a.kt)("strong",{parentName:"h2"},"Delete Tencent Gateway")),(0,a.kt)("p",null,"After trying out the Tencent cloud service for a period of time, many examples of non-reused gateways will appear because API gateways are not reused every time, as follows."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588749300990-34089754-5fe2-4fb9-942a-0f9f0abc6984.png#height=1226&id=Jo9cX&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1226&originWidth=2778&originalType=binary&size=261243&status=done&style=none&width=2778",width:"2778"}),(0,a.kt)("p",null,"At this time, because the gateway has bound functions, the delete button is gray, and we need to manually delete the resources one by one."),(0,a.kt)("p",null,"Enter an API gateway instance first."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588749368951-da40aa66-249f-46ac-b208-e7085952c528.png#height=361&id=fA0yx&margin=%5Bobject%20Object%5D&name=image.png&originHeight=942&originWidth=1946&originalType=binary&size=134710&status=done&style=none&width=746",width:"746"}),(0,a.kt)("p",null,"Enter the management API and delete the general API below."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588749549259-fd35cfa1-9e00-42a3-82ff-78f3de23dd85.png#height=930&id=iTseJ&margin=%5Bobject%20Object%5D&name=image.png&originHeight=930&originWidth=2346&originalType=binary&size=122962&status=done&style=none&width=2346",width:"2346"}),(0,a.kt)("p",null,"Go to environmental management and take the environment offline."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588749641386-77ddf012-2b29-46a5-a8dc-6d416d07518e.png#height=770&id=lAclZ&margin=%5Bobject%20Object%5D&name=image.png&originHeight=770&originWidth=2234&originalType=binary&size=134714&status=done&style=none&width=2234",width:"2234"}),(0,a.kt)("p",null,"Go back to the initial list and click Delete."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588749709595-1c47d6e3-08af-42e1-be34-961409f82e1a.png#height=986&id=ZpugG&margin=%5Bobject%20Object%5D&name=image.png&originHeight=986&originWidth=2342&originalType=binary&size=182531&status=done&style=none&width=2342",width:"2342"}))}u.isMDXComponent=!0}}]);