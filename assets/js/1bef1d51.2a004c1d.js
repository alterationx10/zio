"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[34186],{15680:(e,n,o)=>{o.d(n,{xA:()=>h,yg:()=>g});var a=o(96540);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=a.createContext({}),c=function(e){var n=a.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},h=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(o),u=t,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return o?a.createElement(g,l(l({ref:n},h),{},{components:o})):a.createElement(g,l({ref:n},h))}));function g(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=o.length,l=new Array(i);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[p]="string"==typeof e?e:t,l[1]=r;for(var c=2;c<i;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},31773:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=o(58168),t=(o(96540),o(15680));const i={id:"blocking",title:"Blocking I/O"},l=void 0,r={unversionedId:"zio-nio/blocking",id:"zio-nio/blocking",title:"Blocking I/O",description:"The default ZIO runtime assumes that threads will never block, and maintains a small fixed-size thread pool to perform all its operations. If threads become blocked, CPU utilization can be reduced as the number of available threads drops below the number of available CPU cores. If enough threads block, the entire program may halt.",source:"@site/docs/zio-nio/blocking.md",sourceDirName:"zio-nio",slug:"/zio-nio/blocking",permalink:"/zio-nio/blocking",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-nio/blocking.md",tags:[],version:"current",frontMatter:{id:"blocking",title:"Blocking I/O"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO NIO",permalink:"/zio-nio/"},next:{title:"File Channel",permalink:"/zio-nio/files"}},s={},c=[{value:"Blocking and Non-Blocking Channel Operations",id:"blocking-and-non-blocking-channel-operations",level:2},{value:"Using Managed Channels",id:"using-managed-channels",level:3},{value:"Avoiding Asynchronous Boundaries",id:"avoiding-asynchronous-boundaries",level:3},{value:"Comparing the Channel Options",id:"comparing-the-channel-options",level:2},{value:"Blocking Channels",id:"blocking-channels",level:3},{value:"Non-Blocking Channels",id:"non-blocking-channels",level:3},{value:"Asynchronous Channels",id:"asynchronous-channels",level:3}],h={toc:c},p="wrapper";function d(e){let{components:n,...o}=e;return(0,t.yg)(p,(0,a.A)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"The default ZIO runtime assumes that threads will never block, and maintains a small fixed-size thread pool to perform all its operations. If threads become blocked, CPU utilization can be reduced as the number of available threads drops below the number of available CPU cores. If enough threads block, the entire program may halt."),(0,t.yg)("p",null,"Another issue with blocked threads is interruption. It is important that if the ZIO fiber is interrupted that this cancels the blocking operation and unblocks the thread."),(0,t.yg)("p",null,"Many NIO operations can block the calling thread when called. ZIO-NIO provides APIs to help ZIO-based code deal with this. The following describes how to use channels that offer blocking operations, which is all channels except for the asynchronous ones."),(0,t.yg)("h2",{id:"blocking-and-non-blocking-channel-operations"},"Blocking and Non-Blocking Channel Operations"),(0,t.yg)("p",null,"Channel APIs that may block are not exposed on the channel itself. They are accessed via the channel's ",(0,t.yg)("inlineCode",{parentName:"p"},"useBlocking")," method. You provide this method a function that excepts a ",(0,t.yg)("inlineCode",{parentName:"p"},"BlockingOps")," object and returns a ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO")," effect value. The ",(0,t.yg)("inlineCode",{parentName:"p"},"BlockingOps")," parameter will be appropriate to the type of channel and has the actual blocking I/O effects such as read and write."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"useBlocking")," method performs some setup required for safe use of blocking NIO APIs:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Puts the channel in blocking mode"),(0,t.yg)("li",{parentName:"ul"},"Runs the resulting effect value on ZIO's blocking thread pool, leaving the standard pool unblocked."),(0,t.yg)("li",{parentName:"ul"},"Installs interrupt handling, so the channel will be closed if the ZIO fiber is interrupted. This unblocks the blocked I/O operation. (Note that NIO does not offer a way to interrupt a blocked I/O operation on a channel that does not close the channel).")),(0,t.yg)("p",null,"Non-blocking usage does not require this special handling, but for consistency the non-blocking operations are accessed in a similar way by calling ",(0,t.yg)("inlineCode",{parentName:"p"},"useNonBlocking")," on the channel. For some channels there are some small differences between the blocking and non-blocking APIs. For example, ",(0,t.yg)("inlineCode",{parentName:"p"},"SocketChannel")," only offers the ",(0,t.yg)("inlineCode",{parentName:"p"},"finishConnect")," operation in the non-blocking case, as it is never needed in blocking mode."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:silent","mdoc:silent":!0},"import zio.ZIO\nimport zio.nio._\nimport zio.nio.channels._\n\ndef readHeader(c: SocketChannel): ZIO[Blocking, IOException, (Chunk[Byte], Chunk[Byte])] =\n c.useBlocking { ops =>\n   ops.readChunk(10) <*> ops.readChunk(25)\n }\n")),(0,t.yg)("h3",{id:"using-managed-channels"},"Using Managed Channels"),(0,t.yg)("p",null,"To help with the common use-case where you want to create a channel, there is versions of ",(0,t.yg)("inlineCode",{parentName:"p"},"useBlocking")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"useNonBlocking")," that can be called directly on a managed value providing a channel."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useNioBlocking")," provides both the channel and the requested type of operations:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.nio._\nimport zio.nio.channels._\n\nSocketChannel.open.useNioBlocking { (channel, blockingOps) => \n  blockingOps.readChunk(100) <*> channel.remoteAddress\n}\n")),(0,t.yg)("p",null,"If you don't need the channel, there's ",(0,t.yg)("inlineCode",{parentName:"p"},"useNioBlockingOps"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.nio.channels._\n\nSocketChannel.open.useNioBlockingOps { blockingOps => \n  blockingOps.readChunk(100)\n}\n")),(0,t.yg)("p",null,"To use the channel in non-blocking mode, there's corresponding ",(0,t.yg)("inlineCode",{parentName:"p"},"useNioNonBlocking")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"useNioNonBlockingOps")," methods."),(0,t.yg)("h3",{id:"avoiding-asynchronous-boundaries"},"Avoiding Asynchronous Boundaries"),(0,t.yg)("p",null,"If you have a complex program that makes more than one call to ",(0,t.yg)("inlineCode",{parentName:"p"},"useBlocking"),", then it may be worth running ",(0,t.yg)("em",{parentName:"p"},"all")," of the ZIO-NIO parts using the blocking pool. This can be done by wrapping the effect value with your ZIO-NIO operations in ",(0,t.yg)("inlineCode",{parentName:"p"},"zio.blocking.blocking"),"."),(0,t.yg)("p",null,"If this isn't done, you can end up with the calls using ",(0,t.yg)("inlineCode",{parentName:"p"},"BlockingOps"),' running on a thread from the blocking pool, while the other parts run on a thread from the standard pool. This involves an "asynchronous boundary" whever the fiber changes the underlying thread it\'s running on, which imposes some overheads including a full memory barrier. By using ',(0,t.yg)("inlineCode",{parentName:"p"},"zio.blocking.blocking")," up-front, all the code can run on the same thread from the blocking pool."),(0,t.yg)("h2",{id:"comparing-the-channel-options"},"Comparing the Channel Options"),(0,t.yg)("p",null,"There are three main styles of channel available: blocking, non-blocking and asynchronous. Which to choose?"),(0,t.yg)("h3",{id:"blocking-channels"},"Blocking Channels"),(0,t.yg)("p",null,"Easy to use, with a straight-forward operation. The downsides are that you have to use ",(0,t.yg)("inlineCode",{parentName:"p"},"useBlocking"),", which creates a new thread, and will create an additional thread for every forked fiber subsequently created. Essentially you have a blocked thread for every active I/O call, which limits scalability. Also, the additional interrupt handling logic imposes a small overhead."),(0,t.yg)("h3",{id:"non-blocking-channels"},"Non-Blocking Channels"),(0,t.yg)("p",null,"These scale very well because you basically do as many concurrent I/O operations as you like without creating any new threads. The big downside is that they aren't of practical use without using a ",(0,t.yg)("inlineCode",{parentName:"p"},"Selector"),", which is ",(0,t.yg)("em",{parentName:"p"},"very")," tricky API to use correctly."),(0,t.yg)("p",null,"Note that while it is possible to use non-blocking channels without a ",(0,t.yg)("inlineCode",{parentName:"p"},"Selector"),", this means you have to busy-wait on the channel for the simplest reads and writes. It's not efficient."),(0,t.yg)("p",null,"The other issue is that only network channels and pipes support non-blocking mode."),(0,t.yg)("h3",{id:"asynchronous-channels"},"Asynchronous Channels"),(0,t.yg)("p",null,"Asynchronous channels give us what we want: we don't need a ",(0,t.yg)("inlineCode",{parentName:"p"},"Selector")," to use them, and our thread will never block when we use them."),(0,t.yg)("p",null,"However, it should be noted that asynchronous file I/O is not currently possible on the JVM. ",(0,t.yg)("inlineCode",{parentName:"p"},"AsynchronousFileChannel")," is performing blocking I/O using a pool of blocked threads, which exactly what ",(0,t.yg)("inlineCode",{parentName:"p"},"useBlocking")," does, and shares the same drawbacks. It may be preferable to use a standard ",(0,t.yg)("inlineCode",{parentName:"p"},"FileChannel"),", as you'll have more visibility and control over what's going on."),(0,t.yg)("p",null,"The asynchronous socket channels do ",(0,t.yg)("em",{parentName:"p"},"appear")," to use non-blocking I/O, although they also have some form of internal thread pool as well. These should scale roughly as well as non-blocking channels. One downside is that there is no asynchronous datagram channel."))}d.isMDXComponent=!0}}]);