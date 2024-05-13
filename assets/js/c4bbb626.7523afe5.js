"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[76530],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),y=a,u=p["".concat(l,".").concat(y)]||p[y]||m[y]||o;return t?r.createElement(u,i(i({ref:n},s),{},{components:t})):r.createElement(u,i({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},52686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(58168),a=(t(96540),t(15680));const o={id:"index",title:"Introduction to ZIO Schema Codecs",sidebar_label:"Codecs"},i=void 0,c={unversionedId:"zio-schema/derivations/codecs/index",id:"zio-schema/derivations/codecs/index",title:"Introduction to ZIO Schema Codecs",description:"Once we generate a schema for a type, we can derive a codec for that type.",source:"@site/docs/zio-schema/derivations/codecs/index.md",sourceDirName:"zio-schema/derivations/codecs",slug:"/zio-schema/derivations/codecs/",permalink:"/zio-schema/derivations/codecs/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/derivations/codecs/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Schema Codecs",sidebar_label:"Codecs"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Test Gen Derivation",permalink:"/zio-schema/derivations/zio-test-gen-derivation"},next:{title:"Apache Avro",permalink:"/zio-schema/derivations/codecs/avro"}},l={},d=[{value:"Codec",id:"codec",level:2},{value:"Binary Codecs",id:"binary-codecs",level:2}],s={toc:d},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Once we generate a schema for a type, we can derive a codec for that type."),(0,a.yg)("p",null,"A codec is a utility that can encode/decode a value of some type ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," to/from some format (e.g. binary format, JSON, etc.)"),(0,a.yg)("h2",{id:"codec"},"Codec"),(0,a.yg)("p",null,"Unlike codecs in other libraries, a codec in ZIO Schema has no type parameter:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"trait Codec {\n  def encoder[A](schema: Schema[A]): ZTransducer[Any, Nothing, A, Byte]\n  def decoder[A](schema: Schema[A]): ZTransducer[Any, String, Byte, A]\n\n  def encode[A](schema: Schema[A]): A => Chunk[Byte]\n  def decode[A](schema: Schema[A]): Chunk[Byte] => Either[String, A]\n}\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Codec")," trait has two basic methods:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"encode[A]"),": Given a ",(0,a.yg)("inlineCode",{parentName:"li"},"Schema[A]")," it is capable of generating an ",(0,a.yg)("inlineCode",{parentName:"li"},"Encoder[A]")," ( ",(0,a.yg)("inlineCode",{parentName:"li"},"A => Chunk[Byte]"),") for any Schema."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"decode[A]"),": Given a ",(0,a.yg)("inlineCode",{parentName:"li"},"Schema[A]")," it is capable of generating a ",(0,a.yg)("inlineCode",{parentName:"li"},"Decoder[A]")," ( ",(0,a.yg)("inlineCode",{parentName:"li"},"Chunk[Byte] => Either[String, A]"),") for any Schema.")),(0,a.yg)("h2",{id:"binary-codecs"},"Binary Codecs"),(0,a.yg)("p",null,"The binary codecs are codecs that can encode/decode a value of some type ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," to/from binary format (e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},"Chunk[Byte]"),").  In ZIO Schema, by having a ",(0,a.yg)("inlineCode",{parentName:"p"},"BinaryCodec[A]")," instance, other than being able to encode/decode a value of type ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," to/from binary format, we can also encode/decode a stream of values of type ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," to/from a stream of binary format."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\nimport zio.stream.ZPipeline\n\ntrait Decoder[Whole, Element, +A] {\n  def decode(whole: Whole): Either[DecodeError, A]\n  def streamDecoder: ZPipeline[Any, DecodeError, Element, A]\n}\n\ntrait Encoder[Whole, Element, -A] {\n  def encode(value: A): Whole\n  def streamEncoder: ZPipeline[Any, Nothing, A, Element]\n}\n\ntrait Codec[Whole, Element, A] extends Encoder[Whole, Element, A] with Decoder[Whole, Element, A]\n\ntrait BinaryCodec[A] extends Codec[Chunk[Byte], Byte, A]\n")),(0,a.yg)("p",null,"To make it simpler, we can think of a ",(0,a.yg)("inlineCode",{parentName:"p"},"BinaryCodec[A]")," as the following trait:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\nimport zio.stream.ZPipeline\n\ntrait BinaryCodec[A] {\n  def encode(value: A): Chunk[Byte]\n  def decode(whole: Chunk[Byte]): Either[DecodeError, A]\n\n  def streamEncoder: ZPipeline[Any, Nothing, A, Byte]\n  def streamDecoder: ZPipeline[Any, DecodeError, Byte, A]\n}\n")),(0,a.yg)("p",null,"Example of possible codecs are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"CSV Codec"),(0,a.yg)("li",{parentName:"ul"},"JSON Codec (already available)"),(0,a.yg)("li",{parentName:"ul"},"Apache Avro Codec (in progress)"),(0,a.yg)("li",{parentName:"ul"},"Apache Thrift Codec (in progress)"),(0,a.yg)("li",{parentName:"ul"},"XML Codec"),(0,a.yg)("li",{parentName:"ul"},"YAML Codec"),(0,a.yg)("li",{parentName:"ul"},"Protobuf Codec (already available)"),(0,a.yg)("li",{parentName:"ul"},"QueryString Codec"),(0,a.yg)("li",{parentName:"ul"},"etc.")))}m.isMDXComponent=!0}}]);