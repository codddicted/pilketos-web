(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{711:function(e,n,t){"use strict";t.r(n);var o=t(63),l=t(693),d=t(82),c={name:"BaseTableHeader",props:{hideOptionList:{type:Boolean,value:!1},hideSearch:{type:Boolean,value:!1},data:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1}},data:function(){return{option:5,optionList:[5,10,50,100]}},methods:{onChangeLimit:function(e){this.$emit("change",{limit:e})},onChangeSearch:function(e){var n;this.$emit("change",{search:null==e||null===(n=e.target)||void 0===n?void 0:n.value})}}},r=t(36),component=Object(r.a)(c,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"d-flex flex-row py-5"},[e.hideSearch?e._e():n(d.a,{attrs:{prependInnerIcon:"mdi-magnify",name:"search",dense:"",outlined:"",hideDetails:"",placeholder:"Search something...",loading:e.loading},on:{keyup:e.onChangeSearch}}),e._v(" "),n(l.a),e._v(" "),e.hideOptionList?e._e():n("div",{staticClass:"d-flex align-center justify-center ml-2"},[n("span",[e._v("Show")]),e._v(" "),n(o.a,{staticClass:"mx-2",staticStyle:{width:"90px"},attrs:{dense:"",outlined:"",hideDetails:"",items:e.optionList,loading:e.loading},on:{change:e.onChangeLimit},model:{value:e.option,callback:function(n){e.option=n},expression:"option"}}),e._v(" "),n("span",[e._v("Entries")])],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);