(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{252:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("31dc1f0c",content,!0,{sourceMap:!1})},253:function(t,e,n){"use strict";n(252)},254:function(t,e,n){var o=n(71)(!1);o.push([t.i,"div[data-v-276e144f]{padding:20px;margin-bottom:24px;transition:all .2s linear;cursor:pointer}div[data-v-276e144f]:hover{transform:scale(1.01);box-shadow:0 3px 12px 0 rgba(0,0,0,.2),0 1px 15px 0 rgba(0,0,0,.19)}.title[data-v-276e144f]{margin:0;color:#000}a[data-v-276e144f]{text-decoration:none}",""]),t.exports=o},256:function(t,e,n){"use strict";n.r(e);var o={name:"EventCard",props:{event:Object},computed:{parsedDate:function(){return new Date(this.event.date).toDateString()}}},r=(n(253),n(32)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"/event/"+t.event.id}},[n("div",{staticClass:"-shadow"},[n("span",{staticClass:"eyebrow"},[t._v(" @"+t._s(t.event.time)+" on "+t._s(t.parsedDate)+" ")]),t._v(" "),n("h4",{staticClass:"title"},[t._v("\n      "+t._s(t.event.title)+"\n    ")]),t._v(" "),n("span",[t._v(t._s(t.event.attendees.length)+" attending")])])])}),[],!1,null,"276e144f",null);e.default=component.exports}}]);