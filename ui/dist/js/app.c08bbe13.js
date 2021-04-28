(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"362b":function(e,t,r){"use strict";r("5556")},"51be":function(e,t,r){"use strict";r("7814")},5556:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("e792"),r("0cdd");var n=r("2b0e"),o=r("5f5b");r("ab8b"),r("2dd8");n["default"].use(o["a"]);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("MainPage",{key:e.componentKey,attrs:{msg:"Welcome to Chord Buddy!",chords:e.chords,chordKey:e.chordKey,apiUrlBase:e.apiUrlBase,progressions:e.progressions,user:e.user,logs:e.logs},on:{changeKey:e.changeKey,removeProgression:e.removeProgression,saveProgression:e.saveProgression,getLogs:e.getLogs}})],1)},a=[],i=r("1da1"),u=(r("96cf"),r("d3b7"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main",style:e.myStyle},[r("h1",[e._v(e._s(e.msg))]),r("div",{staticClass:"navbar"},[r("input",{attrs:{type:"button",id:"home",name:"home",value:"Home"},on:{click:function(t){return e.changePage("home")}}}),r("input",{attrs:{type:"button",id:"contact",name:"contact",value:"Contact"},on:{click:function(t){return e.changePage("contact")}}}),r("input",{attrs:{type:"button",id:"about",name:"about",value:"About"},on:{click:function(t){return e.changePage("about")}}}),e.user.email?r("div",[r("input",{attrs:{type:"button",id:"account",name:"account",value:"Account"},on:{click:function(t){return e.changePage("account")}}})]):e._e(),"admin"==e.user.role?r("div",[r("input",{attrs:{type:"button",id:"admin",name:"admin",value:"Admin Panel"},on:{click:function(t){return e.changePage("admin")}}})]):e._e(),e.user.email?r("div",[r("a",{attrs:{href:e.apiUrlBase+"api/auth/logout"}},[e._v("Logout")])]):r("div",[r("a",{attrs:{href:e.apiUrlBase+"api/auth/login"}},[e._v("Login")])])]),"home"==e.page?r("div",[r("br"),r("label",{attrs:{for:"key"}},[e._v("Choose key: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.ck,expression:"ck"}],attrs:{id:"sort"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.ck=t.target.multiple?r:r[0]},function(t){return e.changeKey()}]}},[r("option",[e._v("C")]),r("option",[e._v("Cm")]),r("option",[e._v("D")]),r("option",[e._v("Dm")]),r("option",[e._v("E")]),r("option",[e._v("Em")]),r("option",[e._v("F")]),r("option",[e._v("Fm")]),r("option",[e._v("G")]),r("option",[e._v("Gm")]),r("option",[e._v("A")]),r("option",[e._v("Am")]),r("option",[e._v("B")]),r("option",[e._v("Bm")])]),r("Chords",{attrs:{chords:e.chords,user:e.user},on:{saveProgression:e.saveProgression}})],1):e._e(),"account"==e.page?r("div",[r("SavedProgressions",{attrs:{progressions:e.progressions,user:e.user},on:{removeProgression:e.removeProgression}})],1):e._e(),"about"==e.page?r("div",[r("About")],1):e._e(),"admin"==e.page?r("div",[r("Admin",{attrs:{logs:e.logs}})],1):e._e(),"contact"==e.page?r("div",[r("Contact")],1):e._e()])}),c=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chords"},[r("b-list-group",{attrs:{horizontal:""}},e._l(e.chords,(function(t,n){return r("b-list-group-item",{key:n,style:e.myStyle},[r("img",{attrs:{src:"https://storage.googleapis.com/chords-72fdf.appspot.com/images/"+t+".png",width:"400",height:"150"}}),r("br"),r("br"),r("input",{attrs:{type:"button",id:"chordCheck",name:"chordAdd",value:"Add chord"},on:{click:function(r){return e.chordCheck(t)}}}),r("input",{attrs:{type:"button",id:"playChord",name:"playChord",value:"Play"},on:{click:function(r){return e.playChord(t)}}})])})),1),r("h3",[e._v("Chord Progression:")]),r("b-list-group",{attrs:{horizontal:""}},e._l(e.chordList,(function(t,n){return r("b-list-group-item",{key:n,style:e.myStyle},[r("img",{attrs:{src:"https://storage.googleapis.com/chords-72fdf.appspot.com/images/"+t+".png",width:"400",height:"150"}}),r("br"),r("br")])})),1),e.chordList.length>0?r("div",[r("input",{attrs:{type:"button",id:"playProgression",name:"playProgression",value:"Play"},on:{click:function(t){return e.playProgression()}}}),r("input",{attrs:{type:"button",id:"resetProgression",name:"resetProgression",value:"Reset"},on:{click:function(t){return e.resetProgression()}}}),e.user.email?r("div",[r("input",{attrs:{type:"button",id:"saveProgression",name:"saveProgression",value:"Save"},on:{click:function(t){return e.saveProgression()}}})]):r("div",[e._v(" Log in to be able to save your progressions! ")])]):r("div",[r("b",[e._v("Chord Progression is currently empty, add a chord!")])])],1)},p=[],d={name:"Chords",props:{chords:{type:Array,default:function(){return["Cmaj"]}},chordList:{type:Array,default:function(){return[]}},user:{type:Object,default:function(){}}},data:function(){return{myStyle:{backgroundColor:"lightblue"}}},methods:{chordCheck:function(e){this.chordList.push(e)},playChord:function(e){var t=new Audio("https://storage.googleapis.com/chords-72fdf.appspot.com/sounds/".concat(e,".wav"));t.play()},playProgression:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,o,s,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(i=function(){a>-1&&n[a].pause(),a++,a!=n.length&&(n[a].play(),setTimeout(i,1e3))},r="",n=[],o=0;o<e.chordList.length;o++)r=e.chordList[o],s=new Audio("https://storage.googleapis.com/chords-72fdf.appspot.com/sounds/".concat(r,".wav")),n.push(s);a=-1,i();case 6:case"end":return t.stop()}}),t)})))()},saveProgression:function(){this.$emit("saveProgression",this.chordList)},resetProgression:function(){this.chordList=[]},timeout:function(e){return new Promise((function(t){return setTimeout(t,e)}))}}},h=d,g=(r("51be"),r("2877")),f=Object(g["a"])(h,l,p,!1,null,"7ff29f41",null),m=f.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"progressions"},[e._v(" Email: "+e._s(e.user.email)+" "),r("br"),e._v(" Name: "+e._s(e.user.displayName)+" "),r("br"),e._v(" User ID: "+e._s(e.user.userID)),r("br"),r("h3",[e._v("Saved Chord Progressions:")]),r("b-list-group",{attrs:{vertical:""}},e._l(e.progressions,(function(t,n){return r("b-list-group-item",{key:n,style:e.myStyle},[r("b-list-group",{attrs:{horizontal:""}},e._l(t,(function(t,n){return r("b-list-group-item",{key:n,style:e.myStyle},[r("img",{attrs:{src:"https://storage.googleapis.com/chords-72fdf.appspot.com/images/"+t+".png",width:"400",height:"150"}}),r("br"),r("br")])})),1),r("input",{attrs:{type:"button",id:"playProgression",name:"playProgression",value:"Play"},on:{click:function(r){return e.playProgression(t)}}}),r("input",{attrs:{type:"button",id:"removeProgression",name:"removeProgression",value:"Delete"},on:{click:function(t){return e.removeProgression(n)}}})],1)})),1),0==e.progressions.length?r("div",[r("b",[e._v(" No Progressions saved ")])]):e._e()],1)},y=[],b={name:"SavedProgressions",props:{progressions:{type:[Object,Array],default:function(){return[]}},user:{type:Object,default:function(){}}},data:function(){return{myStyle:{backgroundColor:"lightblue"}}},methods:{chordCheck:function(e){this.chordList.push(e)},playChord:function(e){var t=new Audio("https://storage.googleapis.com/chords-72fdf.appspot.com/sounds/".concat(e,".wav"));t.play()},playProgression:function(e){for(var t="",r=[],n=0;n<e.length;n++){t=e[n];var o=new Audio("https://storage.googleapis.com/chords-72fdf.appspot.com/sounds/".concat(t,".wav"));r.push(o)}var s=-1;function a(){s>-1&&r[s].pause(),s++,s!=r.length&&(r[s].play(),setTimeout(a,1e3))}a()},removeProgression:function(e){this.$emit("removeProgression",e)},timeout:function(e){return console.log("timeout"),new Promise((function(t){return setTimeout(t,e)}))}}},_=b,P=(r("934b"),Object(g["a"])(_,v,y,!1,null,"b4549d9c",null)),k=P.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h3",[e._v("About ChordBuddy:")]),r("p",[e._v("Thanks for checking out my page! My name is Silas Lenihan, and I'm a student at Duke Universtiy studying Computer Science. I made this project for my final project of Comp Sci 290. In my spare time, I like to make music and often times I like to start by laying out a chord progression. Since I'm fairly new to playing the piano, it's not always easy for me to remember what chords are in a given key. I figured this is a problem I can solve by making an app. With ChordBuddy, you can easily arrange chords and actually be able to play that chord Progression. Over time, I will add more chords, as right now the only ones available are the major and minor triads. ")]),r("h3",[e._v("Technical Info:")]),r("p",[e._v("This app was built using Vue JS, and utilizes Heroku to host the backend, Google Firebase realtime database, as well as Google Firebase storage for storing my images and audio files. The audio files were generated by me using "),r("a",{attrs:{href:"https://www.ableton.com/en/shop/live/"}},[e._v("Ableton Live")]),e._v(" and the images are from "),r("a",{attrs:{href:"https://www.piano-keyboard-guide.com/keyboard-chords.html"}},[e._v("Piano Keyboard Guide")]),e._v(". Additionally, the app uses "),r("a",{attrs:{href:"https://github.com/tonaljs/tonal"}},[e._v("Tonal JS")]),e._v(" to query chord information. ")])])}],j={name:"About",data:function(){return{myStyle:{backgroundColor:"lightblue"}}}},O=j,x=(r("362b"),Object(g["a"])(O,w,C,!1,null,"401c5a30",null)),S=x.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contact"},[r("a",{attrs:{href:"https://github.com/silaslenihan/"}},[e._v("GitHub")]),r("br"),e._v(" Email: sjl@lenihan.net ")])}],B={name:"Contact",data:function(){return{myStyle:{backgroundColor:"lightblue"}}}},R=B,I=(r("bfcc"),Object(g["a"])(R,A,L,!1,null,"7f9a449b",null)),K=I.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"admin"},[r("h3",[e._v("Logs")]),r("br"),r("div",{staticClass:"logBox"},e._l(e.logs,(function(t,n){return r("div",{key:n},[e._v(" "+e._s(t)+" "),r("hr")])})),0)])},$=[],U={name:"Admin",props:{logs:{type:[Object,Array],default:function(){return[]}}},data:function(){return{myStyle:{backgroundColor:"lightblue"}}}},E=U,M=(r("5805"),Object(g["a"])(E,T,$,!1,null,"7b1d2386",null)),D=M.exports,J={name:"MainPage",components:{Chords:m,SavedProgressions:k,About:S,Contact:K,Admin:D},props:{msg:String,links:{type:Array,default:function(){return[]}},logs:{type:[Object,Array],default:function(){return[]}},user:{type:Object,default:function(){}},chords:{type:Array,default:function(){return[]}},progressions:{type:[Object,Array],default:function(){return[]}},chordKey:String,apiUrlBase:String},data:function(){return{ck:this.chordKey,myStyle:{backgroundColor:"lightblue"},page:"home"}},methods:{changeKey:function(){this.$emit("changeKey",this.ck)},getChord:function(e){return this.chords[e]},removeProgression:function(e){this.$emit("removeProgression",e)},saveProgression:function(e){this.$emit("saveProgression",e)},changePage:function(e){"admin"==e&&this.$emit("getLogs"),this.page=e}}},N=J,G=(r("74d0"),Object(g["a"])(N,u,c,!1,null,"567555d8",null)),z=G.exports,F=r("5530"),H=(r("99af"),r("b383")),W=r.n(H);function Y(e,t,r,n){return q.apply(this,arguments)}function q(){return q=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,o){var s,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=n?"?".concat(W.a.stringify(n)):"",a="".concat(t).concat(r).concat(s),console.log("getJSON",a),e.next=5,fetch(a,Object(F["a"])({credentials:"include"},o||{}));case 5:if(i=e.sent,!i.ok){e.next=8;break}return e.abrupt("return",i.json());case 8:return console.error(i),e.abrupt("return",{});case 10:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}var V={name:"App",components:{MainPage:z},data:function(){return{apiUrlBase:"https://young-falls-82514.herokuapp.com/",chords:[],componentKey:0,chordKey:"C",user:{},progressions:[],role:"user",logs:["Yo","Yeah"]}},methods:{changeKey:function(e){this.chordKey=e,this.getChords()},getChords:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.apiUrlBase+"api/get_chords.json?key="+e.chordKey,t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:e.chords=t.sent;case 7:case"end":return t.stop()}}),t)})))()},refreshMe:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Y(t.apiUrlBase,"api/user?type=".concat(e));case 2:t.user=r.sent,t.progressions=t.user.progressions,t.role=t.user.role;case 5:case"end":return r.stop()}}),r)})))()},saveProgression:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,o,s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.user.userID,o=t.user.email,s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({prog:e,userID:n,email:o})},a=t.apiUrlBase+"api/progression",r.next=6,fetch(a,s);case 6:return r.next=8,t.refreshMe("refesh");case 8:case"end":return r.stop()}}),r)})))()},getLogs:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.apiUrlBase+"api/getLogs");case 2:return r=t.sent,t.next=5,r.json();case 5:e.logs=t.sent;case 6:case"end":return t.stop()}}),t)})))()},removeProgression:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,o,s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.user.userID,o=t.user.email,s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:e,userID:n,email:o})},a=t.apiUrlBase+"api/remove",r.next=6,fetch(a,s);case 6:return r.next=8,t.refreshMe("refresh");case 8:case"end":return r.stop()}}),r)})))()}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getChords(),e.refreshMe("login");case 2:case"end":return t.stop()}}),t)})))()}},Q=V,X=(r("034f"),Object(g["a"])(Q,s,a,!1,null,null,null)),Z=X.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(Z)}}).$mount("#app")},5805:function(e,t,r){"use strict";r("e902")},"74d0":function(e,t,r){"use strict";r("fb74")},7814:function(e,t,r){},"85ec":function(e,t,r){},"934b":function(e,t,r){"use strict";r("ef8a")},bfcc:function(e,t,r){"use strict";r("d228")},d228:function(e,t,r){},e902:function(e,t,r){},ef8a:function(e,t,r){},fb74:function(e,t,r){}});
//# sourceMappingURL=app.c08bbe13.js.map