"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[197],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2182:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:0},s="Variables",u={unversionedId:"tutorial-basics/variables",id:"tutorial-basics/variables",title:"Variables",description:"As of right now, venumlang supports the following primitive types:",source:"@site/docs/tutorial-basics/variables.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/variables",permalink:"/docs/tutorial-basics/variables",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/variables.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"},next:{title:"Pre-processor",permalink:"/docs/tutorial-basics/pre-processor"}},c={},p=[{value:"Number literals",id:"number-literals",level:2},{value:"Example",id:"example",level:3},{value:"Arrays",id:"arrays",level:2},{value:"Storing a value in an array",id:"storing-a-value-in-an-array",level:3},{value:"Accessing a value in an array",id:"accessing-a-value-in-an-array",level:3},{value:"Strings",id:"strings",level:2},{value:"Scopes",id:"scopes",level:2}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"variables"},"Variables"),(0,l.kt)("p",null,"As of right now, venumlang supports the following primitive types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool")," (1 byte)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"byte")," (1 byte)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"short")," (2 bytes)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int")," (4 bytes)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"long")," (8 bytes)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str")," (8 bytes, stores pointer)\nYou can also make arrays of these types with the following syntax:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'int arr[10];\n\nshort arr2[2] = {1, 2};\n\nstr arr3[3] = {"hello", "world", "!"};\n')),(0,l.kt)("h1",{id:"literals"},"Literals"),(0,l.kt)("p",null,"To use variables, you need to assign them a value (literals)."),(0,l.kt)("h2",{id:"number-literals"},"Number literals"),(0,l.kt)("p",null,"You can format numbers in different ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0b")," for binary"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0x")," for hexadecimal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"true")," for 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"false")," for 0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'<char>'")," for the ascii value of the character")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'int a = 0b1010;\nint b = 0x10;\nint c = 100;\nstr d = "hello";\n')),(0,l.kt)("h2",{id:"arrays"},"Arrays"),(0,l.kt)("p",null,"Arrays are a special type of variable that can store multiple values of the same type."),(0,l.kt)("h1",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int arr[5] = {1, 2, 3, 4, 5};\n")),(0,l.kt)("h3",{id:"storing-a-value-in-an-array"},"Storing a value in an array"),(0,l.kt)("p",null,"To store a value in an array, you need to use the following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"arr[index] = value;\n")),(0,l.kt)("h3",{id:"accessing-a-value-in-an-array"},"Accessing a value in an array"),(0,l.kt)("p",null,"To access a value in an array, you need to use the following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"arr[index];\n")),(0,l.kt)("h2",{id:"strings"},"Strings"),(0,l.kt)("p",null,"Strings are a special type of variable that can store multiple characters. They dont really differ from arrays, its just a thing for the (coming) type checker."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'str s = "hello";\n')),(0,l.kt)("h2",{id:"scopes"},"Scopes"),(0,l.kt)("p",null,"Variables are scoped. This means that you can only access variables in the same scope. (Venumlang does not have a proper memory model right now, so variables will not be cleaned up after they are no longer used.)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int a = 1;\n{\n    int a = 2;\n    print a;\n}\nprint a;\n>> 2\n>> 1\n")))}d.isMDXComponent=!0}}]);