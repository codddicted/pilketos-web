(window.webpackJsonp=window.webpackJsonp||[]).push([[2,26],{708:function(e,t,r){"use strict";r.r(t);var n=r(279),o=(r(5),r(9),r(6),r(3),r(10),r(8),r(11),r(1));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(19);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={name:"BaseLabel",props:{title:{type:[Number,String,Boolean],default:null},color:{type:String,default:"white"},fontSize:{type:String,default:"11"},isBold:{type:Boolean,default:!1},isItalic:{type:Boolean,default:!1},isUpperCase:{type:Boolean,default:!1},isLowerCase:{type:Boolean,default:!1},isUnderline:{type:Boolean,default:!1},isChip:{type:Boolean,default:!1},isSerif:{type:Boolean,default:!1},isRequired:{type:Boolean,default:!1}},methods:{renderFontSize:function(){return Object(o.a)({},"font-".concat(this.fontSize),!0)},renderFontWeight:function(){return{"font-weight-bold":this.isBold}},renderFontColor:function(){return Object(o.a)({},"".concat(this.color,"--text"),!0)},renderFontClass:function(){return d(d(d({"d-block":!0,"font-italic":this.isItalic,"text-uppercase":this.isUpperCase,"text-lowercase":this.isLowerCase,"text-decoration-underline":this.isUnderline,"serif-text":this.isSerif},this.renderFontSize()),this.renderFontWeight()),this.renderFontColor())},handleOnClick:function(){this.$emit("click")}}},y=r(36),component=Object(y.a)(O,(function(){var e=this,t=e._self._c;return e.isChip?t(n.a,{style:{"text-decoration":e.isUnderline?"underline":void 0},attrs:{small:"",color:e.color},on:{click:e.handleOnClick}},[t("div",[e._v("\n    "+e._s(e.title)+"\n  ")])]):t("label",{class:c({},e.renderFontClass()),style:{"text-decoration":e.isUnderline?"underline":void 0},on:{click:e.handleOnClick}},[t("div",[e._v("\n    "+e._s(e.title)),e.isRequired?t("span",{staticClass:"red--text"},[e._v("*")]):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);