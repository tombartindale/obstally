(function(e){function t(t){for(var s,r,o=t[0],c=t[1],u=t[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},i=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e88":function(e,t,n){"use strict";var s=n("f85d"),a=n.n(s);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-ons-navigator",{attrs:{swipeable:"","page-stack":e.pageStack,"pop-page":e.goBack}})],1)},i=[],r=(n("d81d"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("v-ons-toolbar",[n("div",{staticClass:"center"},[e._v("OBS Remote Tally")])]),n("v-one-list",e._l(e.instances,(function(t,s){return n("ons-list-item",{key:s,attrs:{tappable:"",modifier:"chevron"},on:{click:function(t){return e.push(s)}}},[n("span",[e._v(e._s(t.Name))])])})),1)],1)}),o=[],c=n("2839"),u=n.n(c),l=(n("4874"),u.a.initializeApp({databaseURL:"https://obstally.firebaseio.com"}).database()),p={name:"Instances",data:function(){return{instances:{}}},firebase:{instances:l.ref("instances")},methods:{push:function(e){this.$router.push({path:"/instance/"+e})}}},f=p,d=n("2877"),h=Object(d["a"])(f,r,o,!1,null,"1356ec7e",null),v=h.exports,m={name:"App",data:function(){return{pageStack:[v]}},components:{},methods:{goBack:function(){console.log("going back"),console.log(this.$route.matched),this.$router.push({name:this.$route.matched[this.$route.matched.length-2].name})}},created:function(){var e=this,t=function(t){return e.pageStack=t.matched.map((function(e){return e.components.default}))};t(this.$route),this.$router.beforeEach((function(e,n,s){return t(e)&&s()}))}},b=m,g=(n("5c0b"),Object(d["a"])(b,a,i,!1,null,null,null)),y=g.exports,_=n("5acf"),w=n("8c4f"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("v-ons-toolbar",{staticClass:"toolbar"},[n("ons-back-button",[e._v("Back")]),n("div",{staticClass:"center"},[e._v(e._s(e.instance.Name))]),n("div",{staticClass:"right"},[n("ons-toolbar-button",{on:{click:function(t){return e.settings(e.$route.params.id)}}},[n("ons-icon",{attrs:{icon:"fa-cog"}})],1)],1)],1),n("div",{staticClass:"app"},[n("div",{staticClass:"status"},[n("span",[n("ons-icon",{staticClass:"icon",class:{offline:!e.instance.Online},attrs:{icon:"fa-plug"}})],1)]),n("Tally",{attrs:{instance:e.instance,source:this.$route.params.source}})],1)],1)},O=[],k=l.ref("instances"),S={props:["id"],data:function(){return{instance:{}}},watch:{id:{immediate:!0,handler:function(){this.$rtdbBind("instance",k.child(this.$route.params.id))}}},methods:{settings:function(e){this.$router.push({path:"/instance/"+e+"/sources"})}}},j=S,x=(n("c068"),Object(d["a"])(j,$,O,!1,null,"db96886e",null)),M=x.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tally",class:{live:e.liveMe,preview:e.previewMe}},[n("div",{staticClass:"message"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.previewMe&&!e.liveMe,expression:"previewMe && !liveMe"}]},[e._v("STANDBY")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.liveMe,expression:"liveMe"}]},[e._v("LIVE")])]),n("div",{class:{recording:e.liveOut}}),n("div",{staticClass:"label"},[n("div",{staticClass:"text"},[e._v(e._s(e.tally))])])])},C=[],P=(n("caad"),n("2532"),{name:"Tally",props:["instance","source"],computed:{liveOut:function(){return this.instance.Streaming||this.instance.Recording},liveMe:function(){return this.instance&&this.instance.Tally?!(!this.instance.Tally.includes(this.$props.source)&&"undefined"!=typeof this.$props.source)&&(this.instance.Streaming||this.instance.Recording):"undefined"==typeof this.$props.source&&(this.instance.Streaming||this.instance.Recording)},previewMe:function(){return!(!this.instance||!this.instance.PreviewTally)&&this.instance.PreviewTally.includes(this.$props.source)},tally:function(){return"undefined"!=typeof this.$props.source?this.$props.source:"Program Out"}}}),E=P,B=(n("0e88"),Object(d["a"])(E,T,C,!1,null,"75567a57",null)),N=B.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("v-ons-toolbar",[n("ons-back-button",[e._v("Done")]),n("div",{staticClass:"center"},[e._v("Select Source")])],1),n("v-one-list",[n("ons-list-item",{attrs:{tappable:""},on:{click:function(t){return e.select("")}}},[n("span",[e._v("Program Out")])]),e._l(e.sources,(function(t,s){return n("ons-list-item",{key:s,attrs:{tappable:"",modifier:"chevron"},on:{click:function(n){return e.select(t)}}},[n("span",[e._v(e._s(t)+" ")])])}))],2)],1)},A=[],I=l.ref("instances"),D={props:["id"],name:"Sources",data:function(){return{sources:{}}},watch:{id:{immediate:!0,handler:function(){this.$rtdbBind("sources",I.child(this.$route.params.id).child("Sources"))}}},methods:{select:function(e){this.$router.push({path:"/instance/"+this.$route.params.id+"/"+e})}}},J=D,L=Object(d["a"])(J,R,A,!1,null,null,null),z=L.exports,H=n("b29a"),U=n.n(H);n("534e"),n("f89d");s["a"].use(w["a"]),s["a"].use(U.a),s["a"].config.productionTip=!1;var V=new w["a"]({routes:[{path:"/",name:"Home",component:v,children:[{path:"/instance/:id/:source?",name:"Instance",component:M,children:[{path:"/instance/:id/sources",name:"Sources",component:z}]}]}]});s["a"].use(_["a"]),s["a"].component("Tally",N);var Y={selectedTally:"NONE"};new s["a"]({router:V,data:function(){return{appSettings:Y}},render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("9c0c"),a=n.n(s);a.a},"9c0c":function(e,t,n){},c068:function(e,t,n){"use strict";var s=n("fe02"),a=n.n(s);a.a},f85d:function(e,t,n){},fe02:function(e,t,n){}});
//# sourceMappingURL=app.3dc86dc4.js.map