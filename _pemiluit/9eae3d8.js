(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{748:function(t,e,n){"use strict";n.r(e);var r=n(304),o=n(191),c=n(660),l=n(678),d=n(250),f=n(259),h=n(194),m=n(659),v=(n(5),n(9),n(6),n(3),n(10),n(8),n(11),n(7)),C=n(1),_=(n(41),n(26),n(51),n(107)),x=n.n(_),y=n(93),k=n(68),O=n(46);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(C.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={name:"QuickCount",mixins:[k.e],layout:"admin",middleware:"onlySuperadmin",data:function(){return{chartOptions:{},quickCountTime:null}},computed:w(w({},Object(y.b)({loading:"QuickCount/loading",chartData:"QuickCount/chartData",resultData:"QuickCount/resultData"})),{},{dataPie:function(){return{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:"Quick Count",backgroundColor:["#41B883","#E46651","#00D8FF"],data:this.chartData.map((function(t){return t.data[0]}))}]}},isEmptyQuickCount:function(){return x()(this.chartData)&&x()(this.resultData.candidates)}}),created:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){},beforeDestroy:function(){},methods:{getChartData:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.requestMixin_handleCancel(O.s),e.prev=1,e.next=4,t.$store.dispatch("QuickCount/getChartData",{requestConfig:w({},t.requestMixin_setCancelToken(O.s))});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t.requestMixin_logResponseErrors(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},getResultData:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.requestMixin_handleCancel(O.v),e.prev=1,e.next=4,t.$store.dispatch("QuickCount/getResultData",{requestConfig:w({},t.requestMixin_setCancelToken(O.v))});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t.requestMixin_logResponseErrors(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},getData:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getChartData();case 2:return e.next=4,t.getResultData();case 4:case"end":return e.stop()}}),e)})))()},onStartLoad:function(){var t=this;this.quickCountTime=setInterval((function(){t.getData()}),2e4)}}},P=n(31),component=Object(P.a)(j,(function(){var t=this,e=t._self._c;return e(l.a,[e(m.a,{staticClass:"mt-2 align-center justify-right"},[e(c.a,[e("BaseLabel",{attrs:{title:"Hitung Cepat",fontSize:"24",isBold:"",color:"secondary"}})],1),t._v(" "),e(c.a,{staticClass:"text-right"},[e(o.a,{attrs:{depressed:"",color:"primary",loading:t.loading,disabled:t.loading},on:{click:t.getData}},[e(d.a,[t._v("mdi-refresh")]),t._v("  refresh\n      ")],1)],1)],1),t._v(" "),e(m.a,{staticClass:"align-center justify-left"},[t.isEmptyQuickCount?e(c.a,{staticClass:"text-center"},[e("BaseCard",{scopedSlots:t._u([{key:"body",fn:function(){return[e("h1",[t._v("Hitung Cepat Belum Tersedia")]),t._v(" "),e("span",[t._v("Peserta belum memilih calon kandidat")])]},proxy:!0}],null,!1,4065841497)})],1):e(c.a,[e("BaseCard",{scopedSlots:t._u([{key:"body",fn:function(){return[t.loading?e("section",[e(m.a,{staticClass:"my-15 fill-height",attrs:{alignContent:"center",justify:"center"}},[e(c.a,{staticClass:"text-center",attrs:{cols:"6"}},[e(h.a,{attrs:{size:80,width:7,color:"primary",indeterminate:""}})],1),t._v(" "),e(c.a,{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[t._v("\n                Harap tunggu data sedang di hitung\n              ")])],1)],1):e("section",[e(m.a,{staticClass:"mb-15 d-none d-lg-flex d-xl-flex d-sm-none d-md-none"},[e(c.a,[e("client-only",[e("BasePieChart",{attrs:{data:t.dataPie,options:t.chartOptions,height:80}})],1)],1)],1),t._v(" "),e(m.a,{staticClass:"mb-15 d-flex d-lg-none d-xl-none d-sm-flex d-md-flex"},[e(c.a,[e("client-only",[e("BasePieChart",{attrs:{data:t.dataPie,options:t.chartOptions,height:100,width:100}})],1)],1)],1),t._v(" "),e(m.a,t._l(t.resultData.candidates,(function(data,n){return e(c.a,{key:n},[e("BaseCard",{staticClass:"mx-auto text-center rounded-lg",attrs:{maxWidth:"400",outlined:""},scopedSlots:t._u([{key:"body",fn:function(){return[e(r.a,{staticStyle:{top:"-55px"},attrs:{size:"100"}},[e(f.a,{attrs:{src:data.photo,alt:data.full_name}})],1),t._v(" "),e("div",{staticClass:"text--primary mt-n8"},[e("span",{staticClass:"font-weight-bold text-h5"},[t._v("\n                        "+t._s(data.full_name)+"\n                      ")]),t._v(" "),e("div",{staticClass:"mt-3"},[t._v(t._s(data.class_name))]),t._v(" "),e("div",{staticClass:"font-weight-bold text-h3 mt-4 mb-2"},[t._v("\n                        "+t._s(data.percentage)+"\n                      ")]),t._v(" "),e("div",{staticClass:"text--disabled"},[e("b",[t._v(t._s(data.total_votes))]),t._v(" Suara dari\n                        "),e("b",[t._v(t._s(t.resultData.total_votes))]),t._v(" Suara\n                      ")])])]},proxy:!0}],null,!0)})],1)})),1)],1)]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseLabel:n(679).default,BaseCard:n(409).default,BasePieChart:n(731).default})}}]);