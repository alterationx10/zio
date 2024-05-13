"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[81210],{15680:(e,n,i)=>{i.d(n,{xA:()=>c,yg:()=>d});var t=i(96540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(i),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||r;return i?t.createElement(d,o(o({ref:n},c),{},{components:i})):t.createElement(d,o({ref:n},c))}));function d(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},11821:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=i(58168),a=(i(96540),i(15680));const r={id:"promise",title:"Promise"},o=void 0,l={unversionedId:"reference/concurrency/promise",id:"version-1.0.18/reference/concurrency/promise",title:"Promise",description:"A Promise[E, A] is a variable of IO[E, A] type that can be set exactly once.",source:"@site/versioned_docs/version-1.0.18/reference/concurrency/promise.md",sourceDirName:"reference/concurrency",slug:"/reference/concurrency/promise",permalink:"/1.0.18/reference/concurrency/promise",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/reference/concurrency/promise.md",tags:[],version:"1.0.18",frontMatter:{id:"promise",title:"Promise"},sidebar:"overview_sidebar",previous:{title:"RefM",permalink:"/1.0.18/reference/concurrency/refm"},next:{title:"Queue",permalink:"/1.0.18/reference/concurrency/queue"}},p={},s=[{value:"Operations",id:"operations",level:2},{value:"Creation",id:"creation",level:3},{value:"Completing",id:"completing",level:3},{value:"Awaiting",id:"awaiting",level:3},{value:"Polling",id:"polling",level:3},{value:"Example Usage",id:"example-usage",level:2}],c={toc:s},m="wrapper";function u(e){let{components:n,...i}=e;return(0,a.yg)(m,(0,t.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise[E, A]")," is a variable of ",(0,a.yg)("inlineCode",{parentName:"p"},"IO[E, A]")," type that can be set exactly once."),(0,a.yg)("p",null,"Promise is a ",(0,a.yg)("strong",{parentName:"p"},"purely functional synchronization primitive")," which represents a single value that may not yet be available. When we create a Promise, it always started with an empty value, then it can be completed exactly once at some point, and then it will never become empty or modified again."),(0,a.yg)("p",null,"Promise is a synchronization primitive. So, it is useful whenever we want to wait for something to happen. Whenever we need to synchronize a fiber with another fiber, we can use Promise. It allows us to have fibers waiting for other fibers to do things. Any time we want to handoff of a work from one fiber to another fiber or anytime we want to suspend a fiber until some other fiber does a certain amount of work, well we need to be using a Promise. Also, We can use ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," to build other concurrent primitives, like Queue and Semaphore. "),(0,a.yg)("p",null,"By calling ",(0,a.yg)("inlineCode",{parentName:"p"},"await")," on the Promise, the current fiber blocks, until that event happens. As we know, blocking thread in ZIO, don't actually block kernel threads. They are semantic blocking, so when a fiber is blocked the underlying thread is free to run all other fibers."),(0,a.yg)("p",null,"Promise is the equivalent of Scala's Promise. It's almost the same, except it has two type parameters, instead of one. Also instead of calling ",(0,a.yg)("inlineCode",{parentName:"p"},"future"),", we need to call ",(0,a.yg)("inlineCode",{parentName:"p"},"await")," on ZIO Promise to wait for the Promise to be completed."),(0,a.yg)("p",null,"Promises can be failed with a value of type ",(0,a.yg)("inlineCode",{parentName:"p"},"E")," and succeeded that is completed with success with the value of type ",(0,a.yg)("inlineCode",{parentName:"p"},"A"),". So there are two ways we can complete a Promise, with failure or success and then whoever is waiting on the Promise will get back that failure or success. "),(0,a.yg)("h2",{id:"operations"},"Operations"),(0,a.yg)("h3",{id:"creation"},"Creation"),(0,a.yg)("p",null,"Promises can be created using ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise.make[E, A]"),", which returns ",(0,a.yg)("inlineCode",{parentName:"p"},"UIO[Promise[E, A]]"),". This is a description of creating a promise, but not the actual promise. Promises cannot be created outside of IO, because creating them involves allocating mutable memory, which is an effect and must be safely captured in IO."),(0,a.yg)("h3",{id:"completing"},"Completing"),(0,a.yg)("p",null,"You can complete a ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise[E, A]")," in few different ways:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"successfully with a value of type ",(0,a.yg)("inlineCode",{parentName:"li"},"A")," using ",(0,a.yg)("inlineCode",{parentName:"li"},"succeed")),(0,a.yg)("li",{parentName:"ul"},"with ",(0,a.yg)("inlineCode",{parentName:"li"},"Exit[E, A]")," using ",(0,a.yg)("inlineCode",{parentName:"li"},"done")," - each ",(0,a.yg)("inlineCode",{parentName:"li"},"await")," will get this exit propagated")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"with result of effect ",(0,a.yg)("inlineCode",{parentName:"li"},"IO[E, A]")," using ",(0,a.yg)("inlineCode",{parentName:"li"},"complete")," - the effect will be executed once and the result will be propagated to all waiting fibers")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"with effect ",(0,a.yg)("inlineCode",{parentName:"li"},"IO[E, A]")," using ",(0,a.yg)("inlineCode",{parentName:"li"},"completeWith")," - first fiber that calls ",(0,a.yg)("inlineCode",{parentName:"li"},"completeWith")," wins and sets effect that ",(0,a.yg)("strong",{parentName:"li"},"will be executed by each ",(0,a.yg)("inlineCode",{parentName:"strong"},"await"),"ing fiber"),", so be careful when using ",(0,a.yg)("inlineCode",{parentName:"li"},"p.completeWith(someEffect)")," and rather use ",(0,a.yg)("inlineCode",{parentName:"li"},"p.complete(someEffect")," unless executing ",(0,a.yg)("inlineCode",{parentName:"li"},"someEffect")," by each ",(0,a.yg)("inlineCode",{parentName:"li"},"await"),"ing fiber is intent"),(0,a.yg)("li",{parentName:"ul"},"simply fail with ",(0,a.yg)("inlineCode",{parentName:"li"},"E")," using ",(0,a.yg)("inlineCode",{parentName:"li"},"fail")),(0,a.yg)("li",{parentName:"ul"},"simply defect with ",(0,a.yg)("inlineCode",{parentName:"li"},"Throwable")," using ",(0,a.yg)("inlineCode",{parentName:"li"},"die")),(0,a.yg)("li",{parentName:"ul"},"fail or defect with ",(0,a.yg)("inlineCode",{parentName:"li"},"Cause[E]")," using ",(0,a.yg)("inlineCode",{parentName:"li"},"halt")),(0,a.yg)("li",{parentName:"ul"},"interrupt it with ",(0,a.yg)("inlineCode",{parentName:"li"},"interrupt"))),(0,a.yg)("p",null,"Following example shows usage of all of them:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval race: IO[String, Int] = for {\n    p     <- Promise.make[String, Int]\n    _     <- p.succeed(1).fork\n    _     <- p.complete(ZIO.succeed(2)).fork\n    _     <- p.completeWith(ZIO.succeed(3)).fork\n    _     <- p.done(Exit.succeed(4)).fork\n    _     <- p.fail("5")\n    _     <- p.halt(Cause.die(new Error("6")))\n    _     <- p.die(new Error("7"))\n    _     <- p.interrupt.fork\n    value <- p.await\n  } yield value\n')),(0,a.yg)("p",null,"The act of completing a Promise results in an ",(0,a.yg)("inlineCode",{parentName:"p"},"UIO[Boolean]"),", where the ",(0,a.yg)("inlineCode",{parentName:"p"},"Boolean")," represents whether the promise value has been set (",(0,a.yg)("inlineCode",{parentName:"p"},"true"),") or whether it was already set (",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"). This is demonstrated below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val ioPromise1: UIO[Promise[Exception, String]] = Promise.make[Exception, String]\nval ioBooleanSucceeded: UIO[Boolean] = ioPromise1.flatMap(promise => promise.succeed("I\'m done"))\n')),(0,a.yg)("p",null,"Another example with ",(0,a.yg)("inlineCode",{parentName:"p"},"fail(...)"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val ioPromise2: UIO[Promise[Exception, Nothing]] = Promise.make[Exception, Nothing]\nval ioBooleanFailed: UIO[Boolean] = ioPromise2.flatMap(promise => promise.fail(new Exception("boom")))\n')),(0,a.yg)("p",null,"To re-iterate, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Boolean")," tells us whether or not the operation took place successfully (",(0,a.yg)("inlineCode",{parentName:"p"},"true"),") i.e. the Promise\nwas set with the value or the error."),(0,a.yg)("h3",{id:"awaiting"},"Awaiting"),(0,a.yg)("p",null,"We can get a value from a Promise using ",(0,a.yg)("inlineCode",{parentName:"p"},"await"),", calling fiber will suspend until Promise is completed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val ioPromise3: UIO[Promise[Exception, String]] = Promise.make[Exception, String]\nval ioGet: IO[Exception, String] = ioPromise3.flatMap(promise => promise.await)\n")),(0,a.yg)("h3",{id:"polling"},"Polling"),(0,a.yg)("p",null,"The computation will suspend (in a non-blocking fashion) until the Promise is completed with a value or an error."),(0,a.yg)("p",null,"If we don't want to suspend, and we only want to query the state of whether or not the Promise has been completed, we can use ",(0,a.yg)("inlineCode",{parentName:"p"},"poll"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val ioPromise4: UIO[Promise[Exception, String]] = Promise.make[Exception, String]\nval ioIsItDone: UIO[Option[IO[Exception, String]]] = ioPromise4.flatMap(p => p.poll)\nval ioIsItDone2: IO[Option[Nothing], IO[Exception, String]] = ioPromise4.flatMap(p => p.poll.get)\n")),(0,a.yg)("p",null,"If the Promise was not completed when we called ",(0,a.yg)("inlineCode",{parentName:"p"},"poll")," then the IO will fail with the ",(0,a.yg)("inlineCode",{parentName:"p"},"Unit")," value otherwise, we obtain an ",(0,a.yg)("inlineCode",{parentName:"p"},"IO[E, A]"),", where ",(0,a.yg)("inlineCode",{parentName:"p"},"E")," represents if the Promise completed with an error and ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," indicates that the Promise successfully completed with an ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," value."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"isDone")," returns ",(0,a.yg)("inlineCode",{parentName:"p"},"UIO[Boolean]")," that evaluates to ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," if promise is already completed."),(0,a.yg)("h2",{id:"example-usage"},"Example Usage"),(0,a.yg)("p",null,"Here is a scenario where we use a ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," to hand-off a value between two ",(0,a.yg)("inlineCode",{parentName:"p"},"Fiber"),"s"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import java.io.IOException\nimport zio.console._\nimport zio.duration._\nimport zio.clock._\n\nval program: ZIO[Console with Clock, IOException, Unit] = \n  for {\n    promise         <-  Promise.make[Nothing, String]\n    sendHelloWorld  =   (IO.succeed("hello world") <* sleep(1.second)).flatMap(promise.succeed)\n    getAndPrint     =   promise.await.flatMap(putStrLn(_))\n    fiberA          <-  sendHelloWorld.fork\n    fiberB          <-  getAndPrint.fork\n    _               <-  (fiberA zip fiberB).join\n  } yield ()\n')),(0,a.yg)("p",null,"In the example above, we create a Promise and have a Fiber (",(0,a.yg)("inlineCode",{parentName:"p"},"fiberA"),") complete that promise after 1 second and a second Fiber (",(0,a.yg)("inlineCode",{parentName:"p"},"fiberB"),") will call ",(0,a.yg)("inlineCode",{parentName:"p"},"await")," on that Promise to obtain a ",(0,a.yg)("inlineCode",{parentName:"p"},"String")," and then print it to screen. The example prints ",(0,a.yg)("inlineCode",{parentName:"p"},"hello world")," to the screen after 1 second. Remember, this is just a description of the program and not the execution\nitself."))}u.isMDXComponent=!0}}]);