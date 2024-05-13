"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[45754],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),m=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=m(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(t),u=n,d=p["".concat(s,".").concat(u)]||p[u]||g[u]||o;return t?a.createElement(d,i(i({ref:r},c),{},{components:t})):a.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57798:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=t(58168),n=(t(96540),t(15680));const o={id:"error-handling",title:"Error Handling"},i=void 0,l={unversionedId:"reference/stream/zstream/error-handling",id:"reference/stream/zstream/error-handling",title:"Error Handling",description:"Recovering from Failure",source:"@site/docs/reference/stream/zstream/error-handling.md",sourceDirName:"reference/stream/zstream",slug:"/reference/stream/zstream/error-handling",permalink:"/reference/stream/zstream/error-handling",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zstream/error-handling.md",tags:[],version:"current",frontMatter:{id:"error-handling",title:"Error Handling"},sidebar:"reference-sidebar",previous:{title:"Consuming Streams",permalink:"/reference/stream/zstream/consuming-streams"},next:{title:"Scheduling",permalink:"/reference/stream/zstream/scheduling"}},s={},m=[{value:"Recovering from Failure",id:"recovering-from-failure",level:2},{value:"Recovering from Defects",id:"recovering-from-defects",level:2},{value:"Recovery from Some Errors",id:"recovery-from-some-errors",level:2},{value:"Recovering to ZIO Effect",id:"recovering-to-zio-effect",level:2},{value:"Retry a Failing Stream",id:"retry-a-failing-stream",level:2},{value:"From/To Either",id:"fromto-either",level:2},{value:"Refining Errors",id:"refining-errors",level:2},{value:"Timing Out",id:"timing-out",level:2}],c={toc:m},p="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,a.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"recovering-from-failure"},"Recovering from Failure"),(0,n.yg)("p",null,"If we have a stream that may fail, we might need to recover from the failure and run another stream, the ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#orElse")," takes another stream, so when the failure occurs it will switch over to the provided stream:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream._\n\nval s1 = ZStream(1, 2, 3) ++ ZStream.fail("Oh! Error!") ++ ZStream(4, 5)\nval s2 = ZStream(6, 7, 8)\n\nval stream = s1.orElse(s2)\n// Output: 1, 2, 3, 6, 7, 8\n')),(0,n.yg)("p",null,"Another variant of ",(0,n.yg)("inlineCode",{parentName:"p"},"orElse")," is ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#orElseEither"),", which distinguishes elements of the two streams using the ",(0,n.yg)("inlineCode",{parentName:"p"},"Either")," data type. Using this operator, the result of the previous example should be ",(0,n.yg)("inlineCode",{parentName:"p"},"Left(1), Left(2), Left(3), Right(6), Right(7), Right(8)"),"."),(0,n.yg)("p",null,"ZIO stream has ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#catchAll")," which is powerful version of ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#orElse"),". By using ",(0,n.yg)("inlineCode",{parentName:"p"},"catchAll")," we can decide what to do based on the type and value of the failure:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'val first =\n  ZStream(1, 2, 3) ++\n    ZStream.fail("Uh Oh!") ++\n    ZStream(4, 5) ++\n    ZStream.fail("Ouch")\n\nval second = ZStream(6, 7, 8)\nval third = ZStream(9, 10, 11)\n\nval stream = first.catchAll {\n  case "Uh Oh!" => second\n  case "Ouch"   => third\n}\n// Output: 1, 2, 3, 6, 7, 8\n')),(0,n.yg)("h2",{id:"recovering-from-defects"},"Recovering from Defects"),(0,n.yg)("p",null,"If we need to recover from all causes of failures including defects we should use the ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#catchAllCause")," method:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'val s1 = ZStream(1, 2, 3) ++ ZStream.dieMessage("Oh! Boom!") ++ ZStream(4, 5)\nval s2 = ZStream(7, 8, 9)\n\nval stream = s1.catchAllCause(_ => s2)\n// Output: 1, 2, 3, 7, 8, 9\n')),(0,n.yg)("h2",{id:"recovery-from-some-errors"},"Recovery from Some Errors"),(0,n.yg)("p",null,"If we need to recover from specific failure we should use ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#catchSome"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'val s1 = ZStream(1, 2, 3) ++ ZStream.fail("Oh! Error!") ++ ZStream(4, 5)\nval s2 = ZStream(7, 8, 9)\nval stream = s1.catchSome {\n  case "Oh! Error!" => s2\n}\n// Output: 1, 2, 3, 7, 8, 9\n')),(0,n.yg)("p",null,"And, to recover from a specific cause, we should use ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#catchSomeCause")," method:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Cause._\nimport zio.stream._\n\nval s1 = ZStream(1, 2, 3) ++ ZStream.dieMessage("Oh! Boom!") ++ ZStream(4, 5)\nval s2 = ZStream(7, 8, 9)\nval stream = s1.catchSomeCause { case Die(value, _) => s2 }\n')),(0,n.yg)("h2",{id:"recovering-to-zio-effect"},"Recovering to ZIO Effect"),(0,n.yg)("p",null,"If our stream encounters an error, we can provide some cleanup task as ZIO effect to our stream by using the ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#onError")," method:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\n\nval stream = \n  (ZStream(1, 2, 3) ++ ZStream.dieMessage("Oh! Boom!") ++ ZStream(4, 5))\n    .onError(_ => Console.printLine("Stream application closed! We are doing some cleanup jobs.").orDie)\n')),(0,n.yg)("h2",{id:"retry-a-failing-stream"},"Retry a Failing Stream"),(0,n.yg)("p",null,"When a stream fails, it can be retried according to the given schedule to the ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#retry")," operator:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'val numbers = ZStream(1, 2, 3) ++ \n  ZStream\n    .fromZIO(\n      Console.print("Enter a number: ") *> Console.readLine\n        .flatMap(x =>\n          x.toIntOption match {\n            case Some(value) => ZIO.succeed(value)\n            case None        => ZIO.fail("NaN")\n          }\n        )\n    )\n    .retry(Schedule.exponential(1.second))\n')),(0,n.yg)("h2",{id:"fromto-either"},"From/To Either"),(0,n.yg)("p",null,"Sometimes, we might be working with legacy API which does error handling with the ",(0,n.yg)("inlineCode",{parentName:"p"},"Either")," data type. We can ",(0,n.yg)("em",{parentName:"p"},"absolve")," their error types into the ZStream effect using ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream.absolve"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"def legacyFetchUrlAPI(url: URL): Either[Throwable, String] = ???\n\ndef fetchUrl(\n    url: URL\n): ZStream[Any, Throwable, String] = \n  ZStream.fromZIO(\n    ZIO.attemptBlocking(legacyFetchUrlAPI(url))\n  ).absolve\n")),(0,n.yg)("p",null,"The type of this stream before absolving is ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream[Any, Throwable, Either[Throwable, String]]"),", this operation let us submerge the error case of an ",(0,n.yg)("inlineCode",{parentName:"p"},"Either")," into the ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream")," error type."),(0,n.yg)("p",null,"We can do the opposite by exposing an error of type ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream[R, E, A]")," as a part of the ",(0,n.yg)("inlineCode",{parentName:"p"},"Either")," by using ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#either"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"val inputs: ZStream[Any, Nothing, Either[IOException, String]] = \n  ZStream.fromZIO(Console.readLine).either\n")),(0,n.yg)("p",null,"When we are working with streams of ",(0,n.yg)("inlineCode",{parentName:"p"},"Either")," values, we might want to fail the stream as soon as the emission of the first ",(0,n.yg)("inlineCode",{parentName:"p"},"Left")," value:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'// Stream of Either values that cannot fail\nval eitherStream: ZStream[Any, Nothing, Either[String, Int]] =\n  ZStream(Right(1), Right(2), Left("failed to parse"), Right(4))\n\n// A Fails with the first emission of the left value\nval stream: ZStream[Any, String, Int] = eitherStream.rightOrFail("fail")\n')),(0,n.yg)("h2",{id:"refining-errors"},"Refining Errors"),(0,n.yg)("p",null,"We can keep one or some errors and terminate the fiber with the rest by using ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#refineOrDie"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"val stream: ZStream[Any, Throwable, Int] =\n  ZStream.fail(new Throwable)\n\nval res: ZStream[Any, IllegalArgumentException, Int] =\n  stream.refineOrDie { case e: IllegalArgumentException => e }\n")),(0,n.yg)("h2",{id:"timing-out"},"Timing Out"),(0,n.yg)("p",null,"We can timeout a stream if it does not produce a value after some duration using ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#timeout"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ZStream#timeoutFail")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"timeoutFailCause")," operators:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"stream.timeoutFail(new TimeoutException)(10.seconds)\n")),(0,n.yg)("p",null,"Or we can switch to another stream if the first stream does not produce a value after some duration:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"val alternative = ZStream.fromZIO(ZIO.attempt(???))\nstream.timeoutTo(10.seconds)(alternative)\n")))}g.isMDXComponent=!0}}]);