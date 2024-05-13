"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[93237],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>d});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,d=s["".concat(p,".").concat(m)]||s[m]||g[m]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const i={id:"with-guava",title:"How to Interop with Guava?"},a=void 0,u={unversionedId:"guides/interop/with-guava",id:"version-1.0.18/guides/interop/with-guava",title:"How to Interop with Guava?",description:"interop-guava module provide capibility to convert Guava's com.google.common.util.concurrent.ListenableFuture into ZIO Task.",source:"@site/versioned_docs/version-1.0.18/guides/interop/with-guava.md",sourceDirName:"guides/interop",slug:"/guides/interop/with-guava",permalink:"/1.0.18/guides/interop/with-guava",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/guides/interop/with-guava.md",tags:[],version:"1.0.18",frontMatter:{id:"with-guava",title:"How to Interop with Guava?"},sidebar:"overview_sidebar",previous:{title:"How to Interop with Twitter?",permalink:"/1.0.18/guides/interop/with-twitter"},next:{title:"How to Migrate from Monix to ZIO?",permalink:"/1.0.18/guides/migrate/from-monix"}},p={},c=[],l={toc:c},s="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/zio/interop-guava"},(0,o.yg)("inlineCode",{parentName:"a"},"interop-guava"))," module provide capibility to convert ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/google/guava/wiki/ListenableFutureExplained"},"Guava's ",(0,o.yg)("inlineCode",{parentName:"a"},"com.google.common.util.concurrent.ListenableFuture"))," into ZIO ",(0,o.yg)("inlineCode",{parentName:"p"},"Task"),"."))}g.isMDXComponent=!0}}]);