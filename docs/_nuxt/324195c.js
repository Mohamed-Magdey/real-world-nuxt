(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{292:function(e,t,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("0ac5153c",content,!0,{sourceMap:!1})},293:function(e,t,n){"use strict";n(292)},294:function(e,t,n){var r=n(56)(!1);r.push([e.i,".event-card[data-v-2a99aedd]{padding:20px;margin-bottom:24px;transition:all .2s linear;cursor:pointer}.event-card[data-v-2a99aedd]:hover{transform:scale(1.01);box-shadow:0 3px 12px 0 rgba(0,0,0,.2),0 1px 15px 0 rgba(0,0,0,.19)}.title[data-v-2a99aedd]{margin:0;color:#000}a[data-v-2a99aedd]{text-decoration:none}",""]),e.exports=r},296:function(e,t,n){"use strict";n.r(t);var r={name:"EventCard",props:{event:Object},computed:{parsedDate:function(){return new Date(this.event.date).toDateString()}}},o=(n(293),n(26)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{attrs:{to:"/event/"+e.event.id}},[n("div",{staticClass:"event-card -shadow"},[n("span",{staticClass:"eyebrow"},[e._v(" @"+e._s(e.event.time)+" on "+e._s(e.parsedDate)+" ")]),e._v(" "),n("h4",{staticClass:"title"},[e._v("\n      "+e._s(e.event.title)+"\n    ")]),e._v(" "),n("BaseIcon",{attrs:{name:"users"}},[e._v(e._s(e.event.attendees.length)+" attending")])],1)])}),[],!1,null,"2a99aedd",null);t.default=component.exports;installComponents(component,{BaseIcon:n(191).default})},301:function(e,t,n){"use strict";n.r(t);var r=n(27),o=n(8),c=(n(58),n(9),n(31),n(22),n(40),n(29),n(39),n(59),n(30),n(60),n(74));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v={name:"EventList",components:{EventCard:function(){return Promise.resolve().then(n.bind(null,296))}},fetch:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,r=e.route,o=e.error,t.prev=1,c=parseInt(r.query.page)||1,t.next=5,n.dispatch("events/fetchEvents",{page:c});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),o({statusCode:503,message:"Unable to fetch events at this time. Please try again."});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()},head:function(){return{title:"Event Listing"}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({page:function(){return parseInt(this.$route.query.page)||1},lastPage:function(){return this.events.totalEvents-this.events.perPage*this.page}},Object(c.b)(["events"])),watchQuery:["page"]},d=v,f=n(26),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Events")]),e._v(" "),e._l(e.events.events,(function(e,t){return n("EventCard",{key:t,attrs:{event:e,"data-index":t}})})),e._v(" "),1!==e.page?[n("nuxt-link",{attrs:{to:{name:"index",query:{page:e.page-1}},rel:"prev"}},[e._v("\n      Prev Page\n    ")]),e._v("\n    |\n  ")]:e._e(),e._v(" "),e.lastPage>0?[n("nuxt-link",{attrs:{to:{name:"index",query:{page:e.page+1}},rel:"next"}},[e._v("\n      Next Page\n    ")])]:e._e()],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{EventCard:n(296).default})}}]);