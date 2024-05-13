"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[22977],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(t),y=r,d=s["".concat(l,".").concat(y)]||s[y]||m[y]||o;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[s]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},81459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={id:"index",title:"New Types"},i=void 0,u={unversionedId:"zio-prelude/newtypes/index",id:"zio-prelude/newtypes/index",title:"New Types",description:"ZIO Prelude provides functionality for creating zero overhead new types to allow you to increase the type safety of your application without compromising performance or ergonomics.",source:"@site/docs/zio-prelude/newtypes/index.md",sourceDirName:"zio-prelude/newtypes",slug:"/zio-prelude/newtypes/",permalink:"/zio-prelude/newtypes/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/newtypes/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"New Types"},sidebar:"ecosystem-sidebar",previous:{title:"ZValidation",permalink:"/zio-prelude/functional-data-types/zvalidation"},next:{title:"ZPure",permalink:"/zio-prelude/zpure/"}},l={},p=[{value:"New Types",id:"new-types",level:2},{value:"Constructing New Types",id:"constructing-new-types",level:2},{value:"Deconstructing New Types",id:"deconstructing-new-types",level:2},{value:"Defining Operators On New Types",id:"defining-operators-on-new-types",level:2},{value:"Defining Instances Of Functional Abstractions For New Types",id:"defining-instances-of-functional-abstractions-for-new-types",level:2},{value:"Subtypes",id:"subtypes",level:2},{value:"Smart Newtypes",id:"smart-newtypes",level:2}],c={toc:p},s="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ZIO Prelude provides functionality for creating zero overhead new types to allow you to increase the type safety of your application without compromising performance or ergonomics."),(0,r.yg)("p",null,"A common situation in domain modeling is that we have multiple types in our business domain with the same underlying representation in Scala. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"type AccountNumber  = Int\ntype SequenceNumber = Int\n")),(0,r.yg)("p",null,"This is not a great situation. We can easily mix up values that represent different types in our business domain, for example providing an ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber")," where we are supposed to use a ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," or vice versa."),(0,r.yg)("p",null,"The Scala compiler will not help us avoid bugs in these situations because from the perspective of the compiler ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," are the same type, namely ",(0,r.yg)("inlineCode",{parentName:"p"},"Int"),"."),(0,r.yg)("p",null,"To avoid this, we might be tempted to create a separate case class for each of these types like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"final case class AccountNumber(value: Int)\nfinal case class SequenceNumber(value: Int)\n")),(0,r.yg)("p",null,"This is an improvement in type safety because ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," are now separate types so providing an ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber")," when we are supposed to use a ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," will result in a compilation error."),(0,r.yg)("p",null,"However, it comes with costs of its own. Every one of these account numbers and sequence numbers will now allocate an additional object, which can add up over the course of a large application with a complex domain model."),(0,r.yg)("p",null,"We can try to minimize these allocations using techniques such as extending ",(0,r.yg)("inlineCode",{parentName:"p"},"AnyVal"),", but these approaches can be extremely fragile and can actually result in worse performance than the original code if we are not careful."),(0,r.yg)("p",null,"Let's see how ZIO Prelude helps us get the best of both worlds here."),(0,r.yg)("h2",{id:"new-types"},"New Types"),(0,r.yg)("p",null,"A new type in ZIO Prelude is a type that has the same underlying representation as another type at runtime but is a separate type at compile time."),(0,r.yg)("p",null,"We create new types by creating an object that extends ",(0,r.yg)("inlineCode",{parentName:"p"},"Newtype")," and specifying the type that our new type wraps. We then export that type by defining a new type alias that refers to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Type")," within our new object."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.Newtype\n\nobject AccountNumber extends Newtype[Int]\ntype AccountNumber = AccountNumber.Type\n\nobject SequenceNumber extends Newtype[Int]\ntype SequenceNumber = SequenceNumber.Type\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," types are now completely distinct from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," type at compile time, even though at runtime they are all ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," values. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val accountNumber: AccountNumber =\n  AccountNumber(1)\n// accountNumber: AccountNumber = 1\n\nval sequenceNumber: SequenceNumber =\n  SequenceNumber(2)\n// sequenceNumber: SequenceNumber = 2\n\ndef lookup(accountNumber: AccountNumber, sequenceNumber: SequenceNumber) =\n  ???\n")),(0,r.yg)("p",null,"We can see this if we try to supply an ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber")," somewhere that a ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," is expected:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"lookup(sequenceNumber, accountNumber)\n// error: type mismatch;\n//  found   : SequenceNumber\n//     (which expands to)  SequenceNumber.Type\n//  required: AccountNumber\n//     (which expands to)  AccountNumber.Type\n// error: type mismatch;\n//  found   : AccountNumber\n//     (which expands to)  AccountNumber.Type\n//  required: SequenceNumber\n//     (which expands to)  SequenceNumber.Type\n")),(0,r.yg)("p",null,"This is great but how do we construct ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," values and how do we access the underlying ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," values to work with them?"),(0,r.yg)("h2",{id:"constructing-new-types"},"Constructing New Types"),(0,r.yg)("p",null,"The easiest way to construct an instance of the new type is to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"apply")," method on the new type object."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val accountNumber: AccountNumber =\n  AccountNumber(1)\n// accountNumber: AccountNumber = 1\n")),(0,r.yg)("p",null,'You can think of the new type object as being the "companion object" of the new type and it comes included with an ',(0,r.yg)("inlineCode",{parentName:"p"},"apply")," method to make it easy for us to construct instances of the new type."),(0,r.yg)("p",null,"If you want to construct a collection of values of the new type from values of the underlying type you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"wrapAll")," operator."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\n\nval accountNumbers: Chunk[AccountNumber] =\n  AccountNumber.wrapAll(Chunk(3, 4, 5))\n// accountNumbers: Chunk[AccountNumber] = IndexedSeq(3, 4, 5)\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"wrapAll")," operator is extremely efficient because it does not have to traverse the collection at all. Internally we know that ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," are the same type so we can freely convert a ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk[Int]")," to a ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk[AccountNumber]")," without having to traverse the collection."),(0,r.yg)("p",null,"We can also define our own more specialized constructors for our new type in terms of ",(0,r.yg)("inlineCode",{parentName:"p"},"apply"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"wrap"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"wrapAll"),". The new type object provides a convenient place for us to do this."),(0,r.yg)("p",null,"For example, we could define a simple constructor for an initial sequence number like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.Newtype\n\nobject SequenceNumber extends Newtype[Int] {\n  val initial: SequenceNumber =\n    SequenceNumber(0)\n}\ntype SequenceNumber = SequenceNumber.Type\n\nval initial: SequenceNumber =\n  SequenceNumber.initial\n// initial: SequenceNumber = 0\n")),(0,r.yg)("p",null,"This lets us construct instances of the new type in a very ergonomic way, where constructors for the new type are on the new type companion object just like constructors for any other type would be."),(0,r.yg)("h2",{id:"deconstructing-new-types"},"Deconstructing New Types"),(0,r.yg)("p",null,"In addition to constructing instances of the new type we want to be able to access the value underlying the new type to perform operations on it."),(0,r.yg)("p",null,"We can do this using the ",(0,r.yg)("inlineCode",{parentName:"p"},"unwrap")," operator on the new type companion object."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val zero: Int =\n  SequenceNumber.unwrap(initial)\n// zero: Int = 0\n")),(0,r.yg)("p",null,"We can also use the ",(0,r.yg)("inlineCode",{parentName:"p"},"unwrapAll")," operator to convert a collection of values of the new type into the underlying type."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\n\nval sequenceNumbers: Chunk[SequenceNumber] =\n  SequenceNumber.wrapAll(Chunk(1, 2, 3))\n// sequenceNumbers: Chunk[SequenceNumber] = IndexedSeq(1, 2, 3)\n\nval ints: Chunk[Int] =\n  SequenceNumber.unwrapAll(sequenceNumbers)\n// ints: Chunk[Int] = IndexedSeq(1, 2, 3)\n")),(0,r.yg)("p",null,"Again this is extremely efficient because we don't have to traverse the collection at all. Internally we know that a ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk[SequenceNumber]")," is a ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk[Int]")," so we can just immediately return the original collection unchanged."),(0,r.yg)("h2",{id:"defining-operators-on-new-types"},"Defining Operators On New Types"),(0,r.yg)("p",null,"By wrapping and unwrapping values of the new type we can define our own operators on new types."),(0,r.yg)("p",null,"The easiest way to do this is by defining our operators as extension methods inside the new type companion object. These extension methods will automatically be available when we are working with instances of the new type."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.Newtype\n\nobject SequenceNumber extends Newtype[Int] {\n\n  implicit class SequenceNumberSyntax(private val self: SequenceNumber) extends AnyVal {\n    def next: SequenceNumber =\n      SequenceNumber.wrap(SequenceNumber.unwrap(self) + 1)\n  }\n}\ntype SequenceNumber = SequenceNumber.Type\n\nval sequenceNumber: SequenceNumber =\n  SequenceNumber(1)\n// sequenceNumber: SequenceNumber = 1\n\nval nextSequenceNumber: SequenceNumber =\n  sequenceNumber.next\n// nextSequenceNumber: SequenceNumber = 2\n")),(0,r.yg)("p",null,"Notice that the ",(0,r.yg)("inlineCode",{parentName:"p"},"next")," operator was available on ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," without having to do any imports because we defined it as an extension method within the ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," object."),(0,r.yg)("p",null,"The new type companion object is also a convenient place for other operators that we would normally define on the companion object of a type. For example, we could define a ",(0,r.yg)("inlineCode",{parentName:"p"},"continuous")," operator that returns whether a collection of ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," values are continuous."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\n\nobject SequenceNumber extends Newtype[Int] {\n  def continuous(sequenceNumbers: Iterable[SequenceNumber]): Boolean =\n    SequenceNumber.unwrapAll(sequenceNumbers).foldLeft[(Option[Int], Boolean)]((None, true)) {\n      case ((None, continuous), current) => (Some(current), continuous)\n      case ((Some(previous), continuous), current) => (Some(current), continuous && current == previous + 1)\n    }._2\n}\ntype SequenceNumber = SequenceNumber.Type\n\nval sequenceNumbers: Chunk[SequenceNumber] =\n  Chunk(SequenceNumber(1), SequenceNumber(2), SequenceNumber(3))\n// sequenceNumbers: Chunk[SequenceNumber] = IndexedSeq(1, 2, 3)\n\nval continuous: Boolean =\n  SequenceNumber.continuous(sequenceNumbers)\n// continuous: Boolean = true\n")),(0,r.yg)("p",null,"Here ",(0,r.yg)("inlineCode",{parentName:"p"},"continuous")," is an operator on a collection of sequence numbers so it didn't make sense to define it as an extension method on an individual sequence number. Defining it in the new type companion object makes it feel like an operator on the companion object of any ordinary data type."),(0,r.yg)("h2",{id:"defining-instances-of-functional-abstractions-for-new-types"},"Defining Instances Of Functional Abstractions For New Types"),(0,r.yg)("p",null,"We can also define instances of functional abstractions for new types such as ",(0,r.yg)("inlineCode",{parentName:"p"},"Equal"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Ord"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"Associative"),"."),(0,r.yg)("p",null,"The new type companion object again provides a convenient place to define these instances and ensures that they will automatically be available so that we don't have to import them."),(0,r.yg)("p",null,"Let's see how we can do this to define an ",(0,r.yg)("inlineCode",{parentName:"p"},"Equal")," instance for ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude._\n\nobject AccountNumber extends Newtype[Int] {\n  implicit val AccountNumberEqual: Equal[AccountNumber] =\n    Equal.default\n}\ntype AccountNumber = AccountNumber.Type\n\nAccountNumber(1) === AccountNumber(1)\n// res4: Boolean = true\nAccountNumber(1) === AccountNumber(2)\n// res5: Boolean = false\n")),(0,r.yg)("p",null,"Attempting to compare two unrelated types results in a compilation error."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"AccountNumber(1) === 1\n")),(0,r.yg)("p",null,"This can be particularly useful because since the representations of the new type and the underlying types are the same at runtime, operators that are not strongly typed like ",(0,r.yg)("inlineCode",{parentName:"p"},"println")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"==")," will not respect the difference between the new type and the underlying type. Using the functional abstractions in ZIO Prelude we can avoid this problem."),(0,r.yg)("h2",{id:"subtypes"},"Subtypes"),(0,r.yg)("p",null,"When we use ",(0,r.yg)("inlineCode",{parentName:"p"},"Newtype"),' the new type we are creating is completely distinct from the underlying type. This can be useful when we want to "hide" the underlying representation of the new type except when we explicitly unwrap it.'),(0,r.yg)("p",null,"However, it can lead to boilerplate in some cases where we need to explicitly unwrap the new type or reimplement functionality that already exists on the underlying type."),(0,r.yg)("p",null,"For example, say we want to test whether one ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," is after another. Right now this will not work:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.Subtype\n\nobject SequenceNumber extends Newtype[Int]\ntype SequenceNumber = SequenceNumber.Type\n\nSequenceNumber(2) > SequenceNumber(1)\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},">")," operator is defined on ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," and as far as the Scala compiler is concerned ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," are completely unrelated types. Of course we could unwrap each of our sequence numbers or define a new ",(0,r.yg)("inlineCode",{parentName:"p"},">")," operator on sequence numbers but here we are not taking advantage of the fact that we know that every ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," is an ",(0,r.yg)("inlineCode",{parentName:"p"},"Int"),"."),(0,r.yg)("p",null,"We can fix this by extending ",(0,r.yg)("inlineCode",{parentName:"p"},"Subtype")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"Newtype")," when creating our new type."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.Subtype\n\nobject SequenceNumber extends Subtype[Int]\ntype SequenceNumber = SequenceNumber.Type\n\nSequenceNumber(2) > SequenceNumber(1)\n// res7: Boolean = true\n")),(0,r.yg)("p",null,"Now ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," is a type that is different from ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," but is still a subtype of ",(0,r.yg)("inlineCode",{parentName:"p"},"Int"),"."),(0,r.yg)("p",null,"This means that we can use a ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," any time we need an ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," and can use operators defined on ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," on ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber"),". However, we still get the type safety of not being able to use an ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"AccountNumber")," when a ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," is expected."),(0,r.yg)("h2",{id:"smart-newtypes"},"Smart Newtypes"),(0,r.yg)("p",null,"So far, all the new types we have created have been distinct from the underlying types but have not imposed any additional constraints on the values that the underlying type can take. For example, the ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," above could in principle be any ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," value, whether that is ",(0,r.yg)("inlineCode",{parentName:"p"},"42")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"-1"),"."),(0,r.yg)("p",null,"In many cases that makes sense. We often want to use a new type to denote that this particular ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," value represents a sequence number and shouldn't be confused with another ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," value that represents an account number without imposing other constraints."),(0,r.yg)("p",null,"However, in other cases we may want to restrict the values that the underlying type can take. For instance, perhaps a ",(0,r.yg)("inlineCode",{parentName:"p"},"SequenceNumber")," should never be negative."),(0,r.yg)("p",null,"We can model this in ZIO Prelude by extending ",(0,r.yg)("inlineCode",{parentName:"p"},"Newtype")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Subtype"),", just as before, and then defining an additional ",(0,r.yg)("inlineCode",{parentName:"p"},"def assertion")," method that describes the constraints on the underlying value. (The syntax differs slightly between Scala 2 and 3 due to changes in the macro API)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.{Subtype, Validation}\nimport zio.prelude.Assertion._\n\nobject SequenceNumber extends Subtype[Int] {\n\n  // Scala 2\n  override def assertion = assert { \n    greaterThanOrEqualTo(0)\n  }\n  \n  // Scala 3\n  // override inline def assertion = \n  //  greaterThanOrEqualTo(0)\n}\ntype SequenceNumber = SequenceNumber.Type\n")),(0,r.yg)("p",null,"Here we created a simple assertion that requires the value be equal to or greater than zero, but we can use much more complex assertions. For example, we could validate an ",(0,r.yg)("inlineCode",{parentName:"p"},"Email")," with the ",(0,r.yg)("inlineCode",{parentName:"p"},"matches")," assertion, which accept a ",(0,r.yg)("inlineCode",{parentName:"p"},"Regex"),"."),(0,r.yg)("p",null,"Now, when we construct new values using ",(0,r.yg)("inlineCode",{parentName:"p"},"apply"),", they will be validated ",(0,r.yg)("em",{parentName:"p"},"at compile time"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val valid1: SequenceNumber = SequenceNumber(0)\nval valid2: SequenceNumber = SequenceNumber(42)\n\nval oops = SequenceNumber(-10)\n// Newtype Assertion Failed \n// \u2022 -10 did not satisfy greaterThanOrEqualTo(0)\n")),(0,r.yg)("p",null,"Smart Newtypes can only be validated at compile-time when called with literals, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"9000")," or ",(0,r.yg)("inlineCode",{parentName:"p"},'"Fancy Pants"'),". Attempting to wrap a variable or run-time value with ",(0,r.yg)("inlineCode",{parentName:"p"},"apply")," will result in a compilation error warning you about this."),(0,r.yg)("p",null,"When wrapping variables or run-time values, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"make")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"makeAll")," constructors, which will perform the validation at run-time instead."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\n\nval a = 10\n// a: Int = 10\nval b = 11\n// b: Int = 11\nval c = 12\n// c: Int = 12\n\nval validatedSequenceNumber: Validation[String, SequenceNumber] =\n  SequenceNumber.make(a)\n// validatedSequenceNumber: Validation[String, SequenceNumber] = Success(\n//   log = IndexedSeq(),\n//   value = 10\n// )\n\nval validateSequenceNumbers: Validation[String, Chunk[SequenceNumber]] =\n  SequenceNumber.makeAll(Chunk(a, b, c))\n// validateSequenceNumbers: Validation[String, Chunk[SequenceNumber]] = Success(\n//   log = IndexedSeq(),\n//   value = IndexedSeq(10, 11, 12)\n// )\n")),(0,r.yg)("p",null,"We can see that ",(0,r.yg)("inlineCode",{parentName:"p"},"make")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"makeAll")," return a ",(0,r.yg)("inlineCode",{parentName:"p"},"Validation")," that will either be a success with a valid instance of the newtype or a failure with a helpful error message indicating why a valid instance of the newtype could not be constructed."),(0,r.yg)("p",null,"Note that the ",(0,r.yg)("inlineCode",{parentName:"p"},"wrap")," operator, which bypasses the compile-time check, is ",(0,r.yg)("inlineCode",{parentName:"p"},"protected")," and will only be accessible within the scope of the newtype object unless we choose to expose them. This allows us to skip the compile-time check when we need to, such as in implementing a ",(0,r.yg)("inlineCode",{parentName:"p"},".next")," method, which we know will be safe, even if the compiler does not."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.{Subtype, Validation}\nimport zio.prelude.Assertion._\n\nobject SequenceNumber extends Subtype[Int] {\n  override def assertion = assert { \n    greaterThanOrEqualTo(0)\n  }\n  \n  val initial: SequenceNumber =\n    SequenceNumber(0)\n    \n  implicit final class SequenceNumberOps(val self: SequenceNumber) extends AnyVal {\n    def next: SequenceNumber = \n      wrap(self + 1)\n  }\n}\ntype SequenceNumber = SequenceNumber.Type\n")),(0,r.yg)("p",null,"As another example, we might want to expose an ",(0,r.yg)("inlineCode",{parentName:"p"},"unsafeMake")," operator for our users to allow them to construct instances of the newtype directly without going through ",(0,r.yg)("inlineCode",{parentName:"p"},"Validation"),". As its name implies this places responsibility on the user to ensure that the underlying data is valid but could be necessary for performance or ergonomics in some situations."),(0,r.yg)("p",null,"We can do that quite easily like this:."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.{Subtype, Validation}\nimport zio.prelude.Assertion._\n\nobject SequenceNumber extends Subtype[Int] {\n  override def assertion = assert { \n    greaterThanOrEqualTo(0)\n  }\n\n  def unsafeMake(n: Int): SequenceNumber =\n    SequenceNumber.wrap(n)\n}\ntype SequenceNumber = SequenceNumber.Type\n\nval aTrustedInt = 1\n// aTrustedInt: Int = 1\nval sequenceNumber: SequenceNumber =\n  SequenceNumber.unsafeMake(aTrustedInt)\n// sequenceNumber: SequenceNumber = 1\n")),(0,r.yg)("p",null,"Thus, Smart Newtypes give us full ability to implement our own operators and to expose whatever interface we want for our type, from validating input at compile-time, to using ",(0,r.yg)("inlineCode",{parentName:"p"},"Validation")," at run-time, to allowing users to create instances of the refined newtype directly."))}m.isMDXComponent=!0}}]);