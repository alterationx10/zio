"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[46699],{15680:(e,n,o)=>{o.d(n,{xA:()=>p,yg:()=>m});var t=o(96540);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)o=l[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var g=t.createContext({}),s=function(e){var n=t.useContext(g),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=s(e.components);return t.createElement(g.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(o),d=a,m=u["".concat(g,".").concat(d)]||u[d]||c[d]||l;return o?t.createElement(m,i(i({ref:n},p),{},{components:o})):t.createElement(m,i({ref:n},p))}));function m(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=o.length,i=new Array(l);i[0]=d;var r={};for(var g in n)hasOwnProperty.call(n,g)&&(r[g]=n[g]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var s=2;s<l;s++)i[s]=o[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},56192:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var t=o(58168),a=(o(96540),o(15680));const l={id:"tofu-zio2-logging",title:"Tofu ZIO 2 Logging"},i=void 0,r={unversionedId:"ecosystem/community/tofu-zio2-logging",id:"ecosystem/community/tofu-zio2-logging",title:"Tofu ZIO 2 Logging",description:"Tofu is a functional toolkit modules providing a comprehensive set of tools adressing",source:"@site/docs/ecosystem/community/tofu-zio2-logging.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/tofu-zio2-logging",permalink:"/ecosystem/community/tofu-zio2-logging",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/tofu-zio2-logging.md",tags:[],version:"current",frontMatter:{id:"tofu-zio2-logging",title:"Tofu ZIO 2 Logging"},sidebar:"ecosystem-sidebar",previous:{title:"tamer",permalink:"/ecosystem/community/tamer"},next:{title:"TranzactIO",permalink:"/ecosystem/community/tranzactio"}},g={},s=[{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"ZLogAnnotation and TofuDefaultContext",id:"zlogannotation-and-tofudefaultcontext",level:3},{value:"Loggable",id:"loggable",level:3},{value:"Logback layout",id:"logback-layout",level:2}],p={toc:s},u="wrapper";function c(e){let{components:n,...o}=e;return(0,a.yg)(u,(0,t.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://docs.tofu.tf/"},"Tofu")," is a functional toolkit modules providing a comprehensive set of tools adressing\nreal-world problems through the prism of the tagless-final approach and functional programming in general.\nTofu consists of several independent modules, one of them is ",(0,a.yg)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.home"},"Tofu Logging"),"\n, which provides first-class ",(0,a.yg)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.recipes.zio2"},"ZIO support"),"."),(0,a.yg)("p",null,"Key features of Tofu Logging:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"100% structured logging"),": you can easily log json-s with nested objects, arrays, numeric and boolean fields."),(0,a.yg)("li",{parentName:"ul"},"logging context: implemented on top of ",(0,a.yg)("inlineCode",{parentName:"li"},"FiberRef"),"."),(0,a.yg)("li",{parentName:"ul"},"built upon ",(0,a.yg)("a",{parentName:"li",href:"https://logback.qos.ch/"},"Logback"),",\nsupports ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/logfellow/logstash-logback-encoder"},"logstash-logback-encoder"),".")),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)("p",null,"Add the following lines in your ",(0,a.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "tf.tofu" %% "tofu-zio2-logging" % "version"\n')),(0,a.yg)("p",null,"For ",(0,a.yg)("inlineCode",{parentName:"p"},"Loggable")," derivation (see below):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "tf.tofu" %% "tofu-logging-derivation" % "version"\n')),(0,a.yg)("p",null,"And choose a logback layout: Tofu's own implementation or logstash-encoder. See\nthe ",(0,a.yg)("a",{parentName:"p",href:"#logback-layout"},"logback configuration")," section."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "tf.tofu" %% "tofu-logging-logstash-logback" % "version"\n// OR:\nlibraryDependencies += "tf.tofu" %% "tofu-logging-layout" % "version"\n')),(0,a.yg)("h2",{id:"quick-start"},"Quick start"),(0,a.yg)("p",null,"To use Tofu with ZIO logging facade just add ",(0,a.yg)("inlineCode",{parentName:"p"},"TofuZLogger")," to your app runtime:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import tofu.logging.zlogs._\nimport zio._\n\nobject Main extends ZIOAppDefault {\n  val program: UIO[Unit] = ZIO.log("Hello, ZIO logging!")\n\n  override def run = {\n    program.logSpan("full_app") @@ ZIOAspect.annotated("foo", "bar")\n  }.provide(\n    Runtime.removeDefaultLoggers,\n    TofuZLogger.addToRuntime\n  )\n}\n')),(0,a.yg)("p",null,"The log message will be:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "level": "INFO",\n  "logger_name": "my.package.Main",\n  "message": "Hello, ZIO logging!",\n  "zSpans": {\n    "full_app": 534\n  },\n  "zAnnotations": {\n    "foo": "bar"\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"logger_name")," is parsed from ",(0,a.yg)("inlineCode",{parentName:"li"},"zio.Trace")," which contains the location where log method is called"),(0,a.yg)("li",{parentName:"ul"},"all ",(0,a.yg)("inlineCode",{parentName:"li"},"zio.LogSpan")," are collected in the json object named ",(0,a.yg)("strong",{parentName:"li"},"zSpans")),(0,a.yg)("li",{parentName:"ul"},"all ",(0,a.yg)("inlineCode",{parentName:"li"},"zio.LogAnnotation")," are collected in the json object named ",(0,a.yg)("strong",{parentName:"li"},"zAnnotations")," (to avoid conflicts with Tofu\nannotations)")),(0,a.yg)("h3",{id:"zlogannotation-and-tofudefaultcontext"},"ZLogAnnotation and TofuDefaultContext"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ZLogAnnotation")," allows you to store typed, structured data on the default logging context (implemented on ",(0,a.yg)("inlineCode",{parentName:"p"},"FiberRef"),").\nIt also solves another problem:\nhaving a list of annotations in front of your eyes, you can easily make sure that the same names are not assigned to\ndifferent values (which can lead to an invalid json and corrupt your structured logs).\nThat's why we recommend to group all your log annotations in one place."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TofuDefaultContext")," is a service which allows to look up an element from the context added via ",(0,a.yg)("inlineCode",{parentName:"p"},"ZLogAnnotation"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"trait TofuDefaultContext {\n  def getValue[A](key: LogAnnotation[A]): UIO[Option[A]]\n}\n")),(0,a.yg)("p",null,"It has two implementations:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"TofuDefaultContext.layerZioContextOff: ULayer[TofuDefaultContext]")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"TofuDefaultContext.layerZioContextOn: ULayer[TofuDefaultContext]"))),(0,a.yg)("p",null,"It doesn't matter which one to use with ZIO Logging facade. The difference will be only when working\nwith Tofu's own loggers and using ",(0,a.yg)("inlineCode",{parentName:"p"},"TofuDefaultContext")," as\na ",(0,a.yg)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.recipes.zio2#contextprovider"},"ContextProvider"),"\n(this feature is Tofu-specific, and we won't cover it here)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val httpCode: ZLogAnnotation[Int] = ZLogAnnotation.make("httpCode")\n\nval program: UIO[Unit] = {\n  for {\n    _ <- ZIO.log("Hello, ZIO logging!")\n    maybeCode <- ZIO.serviceWithZIO[TofuDefaultContext](_.getValue(httpCode)) // Some(204)\n  } yield ()\n}.provide(TofuDefaultContext.layerZioContextOn) @@ httpCode(204) @@ ZLogAnnotation.loggerName("MyLogger")\n')),(0,a.yg)("p",null,"will produce:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "level": "INFO",\n  "logger_name": "MyLogger",\n  "message": "Hello, ZIO logging!",\n  "httpCode": 204\n}\n')),(0,a.yg)("p",null,"You can change the logger name via ",(0,a.yg)("inlineCode",{parentName:"p"},"ZLogAnnotation.loggerName"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ZLogAnnotation.make[A](name: String)")," implicitly requires a ",(0,a.yg)("inlineCode",{parentName:"p"},"Loggable[A]")," instance."),(0,a.yg)("h3",{id:"loggable"},"Loggable"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Loggable[A]")," is a typeclass that describes how a value of some type can be logged.\nGiven an instance of ",(0,a.yg)("inlineCode",{parentName:"p"},"Loggable")," for a type, a value of the type can be converted into the final internal representation\ncalled ",(0,a.yg)("inlineCode",{parentName:"p"},"LoggedValue")," and thus logged in a way that you provided.\nThere are multiple predefined ways to create an instance of ",(0,a.yg)("inlineCode",{parentName:"p"},"Loggable"),", many of them can be found\nin ",(0,a.yg)("inlineCode",{parentName:"p"},"tofu.logging.Loggable")," object:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"provided instances for all primitive types, as well as stdlib's collections and collections from Cats"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Loggable.empty")," for no-op logging of value"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Loggable.either")," for logging either of A and B"),(0,a.yg)("li",{parentName:"ul"},"provided ",(0,a.yg)("inlineCode",{parentName:"li"},"java.time.*")," instances")),(0,a.yg)("p",null,"Of course, you can describe your ",(0,a.yg)("inlineCode",{parentName:"p"},"Loggable")," instance yourself:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"by extending trait ",(0,a.yg)("inlineCode",{parentName:"li"},"DictLoggable")," for multi-field objects"),(0,a.yg)("li",{parentName:"ul"},"using ",(0,a.yg)("inlineCode",{parentName:"li"},"Loggable[A]#contramap[B](f: B => A)")," method"),(0,a.yg)("li",{parentName:"ul"},"using configurable auto derivation")),(0,a.yg)("p",null,"Tofu has a macros that allows you to easily derive instances of ",(0,a.yg)("inlineCode",{parentName:"p"},"Loggable[YourClass]")," for case classes or ADTs.\nIn additional, there are several annotations to configure generation of ",(0,a.yg)("inlineCode",{parentName:"p"},"Loggable"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"@hidden"),': when applied to the field means "do not log\\write this field"'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"@masked"),': when applied to the field means "mask field value with given mode"'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"@unembed"),': when applied to the field means "log subfields along with fields of owner"')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import tofu.logging.derivation._\nimport tofu.logging.derivation.loggable.generate\nimport tofu.logging.zlogs._\nimport zio._\n\ncase class User(\n  id: Int,\n  @hidden\n  password: String,\n  @masked(MaskMode.ForLength(3))\n  login: String,\n  godMode: Boolean = false\n)\n\nval user = User(100, "secret", "username")\nval userAnnotation: ZLogAnnotation[User] = ZLogAnnotation.make("user")\n\nval program: UIO[Unit] =\n  ZIO.log("Hello, ZIO logging!") @@ userAnnotation(user)\n')),(0,a.yg)("p",null,"The output of this program will be:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "level": "INFO",\n  "logger_name": "my.package.Main",\n  "message": "Hello, ZIO logging!",\n  "user": {\n    "id": 100,\n    "login": "use*****",\n    "godMode": false\n  }\n}\n')),(0,a.yg)("p",null,"Read more on ",(0,a.yg)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.loggable"},"the website"),"."),(0,a.yg)("h2",{id:"logback-layout"},"Logback layout"),(0,a.yg)("p",null,"Tofu has a ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/logfellow/logstash-logback-encoder"},"logstash-logback-encoder")," provider\nnamed ",(0,a.yg)("inlineCode",{parentName:"p"},"tofu.logging.TofuLoggingProvider"),".\nEnter the following content into the ",(0,a.yg)("inlineCode",{parentName:"p"},"logback.xml")," file to get JSON logs:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<configuration>\n    <appender name="logstash" class="ch.qos.logback.core.ConsoleAppender">\n        <encoder class="net.logstash.logback.encoder.LoggingEventCompositeJsonEncoder">\n            <providers>\n                <pattern>\n                    <pattern>\n                        { "env": "prod" } \x3c!-- optional static fields --\x3e\n                    </pattern>\n                </pattern>\n                <timestamp/>\n                <logLevel/>\n                <loggerName/>\n                <message/>\n                <provider class="tofu.logging.TofuLoggingProvider"/>\n            </providers>\n        </encoder>\n    </appender>\n\n    <root level="info">\n        <appender-ref ref="logstash"/>\n    </root>\n\n</configuration>\n')),(0,a.yg)("p",null,"Read more about logback layouts configuration on ",(0,a.yg)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.layouts"},"the website"),"."))}c.isMDXComponent=!0}}]);