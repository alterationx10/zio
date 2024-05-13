"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[99326],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var r=n(96540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(58168),s=(n(96540),n(15680));const a={id:"persistence",title:"Persistence"},o=void 0,i={unversionedId:"zio-actors/persistence",id:"zio-actors/persistence",title:"Persistence",description:"Persistence gives you ability to store events that occur in your system with defined datastore.",source:"@site/docs/zio-actors/persistence.md",sourceDirName:"zio-actors",slug:"/zio-actors/persistence",permalink:"/zio-actors/persistence",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-actors/persistence.md",tags:[],version:"current",frontMatter:{id:"persistence",title:"Persistence"},sidebar:"ecosystem-sidebar",previous:{title:"Remoting",permalink:"/zio-actors/remoting"},next:{title:"Akka Interop",permalink:"/zio-actors/akka-interop"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.yg)(u,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"Persistence gives you ability to store events that occur in your system with defined datastore. "),(0,s.yg)("p",null,"To use Persistence you need in your ",(0,s.yg)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'resolvers += Resolver.sonatypeRepo("snapshots")\nlibraryDependencies += "dev.zio" %% "zio-actors-persistence" % "0.1.0+10-3c8534e6-SNAPSHOT"\n')),(0,s.yg)("p",null,"For current version the only datastore available is ",(0,s.yg)("inlineCode",{parentName:"p"},"postgresql")," and in-memory datastore for testing purposes.\nFor ",(0,s.yg)("inlineCode",{parentName:"p"},"postgresql")," you need a configuration in (by default) ",(0,s.yg)("inlineCode",{parentName:"p"},"resources/application.conf"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-hocon"},'ActorSystemName.zio.actors.persistence {\n  plugin = "jdbc-journal"\n  url = "jdbc:postgresql://localhost:5432/postgres"\n  user = "user"\n  pass = "pass"\n}\n')),(0,s.yg)("p",null,"and also use ",(0,s.yg)("inlineCode",{parentName:"p"},"postgresql")," plugin for that purpose:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sbt"},'libraryDependencies += "dev.zio" %% "zio-actors-persistence-jdbc" % "0.1.0"\n')),(0,s.yg)("p",null,"Currently the table that needs to be present in database has such schema:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},"create table if not exists journal_zio\n(\n    persistence_id varchar not null,\n    sequence_number serial not null,\n    message bytea,\n    constraint journal_zio_pk\n        primary key (persistence_id, sequence_number)\n);\n")),(0,s.yg)("p",null,"After successful setup you can create persisted actors by implementing ",(0,s.yg)("inlineCode",{parentName:"p"},"EventSourcedStateful"),".\nFirst method is ",(0,s.yg)("inlineCode",{parentName:"p"},"receive")," which is similar to ",(0,s.yg)("inlineCode",{parentName:"p"},"receive")," from basic actors: Here you can perform an\neffectful computations with possible failures and side effects. Here you must also decide whether\nprocessed message should result in an event that will be persisted or no state update. "),(0,s.yg)("p",null,"The second method is ",(0,s.yg)("inlineCode",{parentName:"p"},"sourceEvent")," which must be a pure function that performs state updates.\nThis method is used when restoring an actor after startup. "),(0,s.yg)("p",null,"The imports we need for simple example:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.actors._\nimport zio.actors.{ ActorSystem, Context, Supervisor }\nimport zio.actors.persistence._\nimport zio.{ZIO, UIO}\n")),(0,s.yg)("p",null,"Case objects for messages that our actor can process and persisted events:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait Message[+_]\ncase object Reset    extends Message[Unit]\ncase object Increase extends Message[Unit]\ncase object Get      extends Message[Int]\n\nsealed trait CounterEvent\ncase object ResetEvent    extends CounterEvent\ncase object IncreaseEvent extends CounterEvent\n")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"EventSourcedStateful")," implementation with persisted and idempotent receive patterns:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},'  val ESCounterHandler = new EventSourcedStateful[Any, Int, Message, CounterEvent](PersistenceId("id1")) {\n    override def receive[A](\n      state: Int,\n      msg: Message[A],\n      context: Context\n    ): UIO[(Command[CounterEvent], Int => A)] =\n      msg match {\n        case Reset    => ZIO.succeed((Command.persist(ResetEvent), _ => ()))\n        case Increase => ZIO.succeed((Command.persist(IncreaseEvent), _ => ()))\n        case Get      => ZIO.succeed((Command.ignore, _ => state))\n      }\n\n    override def sourceEvent(state: Int, event: CounterEvent): Int =\n      event match {\n        case ResetEvent    => 0\n        case IncreaseEvent => state + 1\n      }\n  }\n')),(0,s.yg)("p",null,"After defining datastore configuration and actor's behavior we can firmly stop an actor, respawn it\nand expect it's state to be restored to the last event:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},'for {\n  actorSystem <- ActorSystem("testSystem1")\n  actor       <- actorSystem.make("actor1", Supervisor.none, 0, ESCounterHandler)\n  _           <- actor ! Increase\n  _           <- actor ? Increase\n  _           <- actor.stop\n  actor       <- actorSystem.make("actor1", Supervisor.none, 0, ESCounterHandler)\n  _           <- actor ! Increase\n  counter     <- actor ? Get\n} yield counter == 3\n')))}d.isMDXComponent=!0}}]);