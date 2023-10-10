(window.webpackJsonp=window.webpackJsonp||[]).push([[74,2,20,25,26],{708:function(e,t,r){"use strict";r.r(t);var n=r(279),o=(r(5),r(9),r(6),r(3),r(10),r(8),r(11),r(1));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(19);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"BaseLabel",props:{title:{type:[Number,String,Boolean],default:null},color:{type:String,default:"white"},fontSize:{type:String,default:"11"},isBold:{type:Boolean,default:!1},isItalic:{type:Boolean,default:!1},isUpperCase:{type:Boolean,default:!1},isLowerCase:{type:Boolean,default:!1},isUnderline:{type:Boolean,default:!1},isChip:{type:Boolean,default:!1},isSerif:{type:Boolean,default:!1},isRequired:{type:Boolean,default:!1}},methods:{renderFontSize:function(){return Object(o.a)({},"font-".concat(this.fontSize),!0)},renderFontWeight:function(){return{"font-weight-bold":this.isBold}},renderFontColor:function(){return Object(o.a)({},"".concat(this.color,"--text"),!0)},renderFontClass:function(){return f(f(f({"d-block":!0,"font-italic":this.isItalic,"text-uppercase":this.isUpperCase,"text-lowercase":this.isLowerCase,"text-decoration-underline":this.isUnderline,"serif-text":this.isSerif},this.renderFontSize()),this.renderFontWeight()),this.renderFontColor())},handleOnClick:function(){this.$emit("click")}}},v=r(36),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return e.isChip?t(n.a,{style:{"text-decoration":e.isUnderline?"underline":void 0},attrs:{small:"",color:e.color},on:{click:e.handleOnClick}},[t("div",[e._v("\n    "+e._s(e.title)+"\n  ")])]):t("label",{class:c({},e.renderFontClass()),style:{"text-decoration":e.isUnderline?"underline":void 0},on:{click:e.handleOnClick}},[t("div",[e._v("\n    "+e._s(e.title)),e.isRequired?t("span",{staticClass:"red--text"},[e._v("*")]):e._e()])])}),[],!1,null,null,null);t.default=component.exports},709:function(e,t,r){"use strict";r.r(t);var n={name:"BaseFormWrap",mixins:[r(274).b]},o=r(36),component=Object(o.a)(n,(function(){var e=this;return(0,e._self._c)("div",[e._t("default",null,{attrs:{errorMessages:e.activeErrorMessages,success:e.isValid},hasErrors:e.hasErrors})],2)}),[],!1,null,null,null);t.default=component.exports},717:function(e,t,r){e.exports={}},722:function(e,t,r){"use strict";r(717)},725:function(e,t,r){"use strict";r.r(t);var n=r(676),o=r(203),l=r(688),c=r(707),d=r(102),f=r(696),m=r(262),v=r(271),_=r(315),h=r(206),k=r(687),y=r(82),x=r(702),O=(r(9),r(6),r(10),r(11),r(7)),C=r(1),w=(r(3),r(8),r(5),r(39),r(101)),S=r(669),j=r(48);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){Object(C.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={name:"AdminCreateEditCandidate",mixins:[r(68).e],layout:"admin",props:{isEditable:{type:Boolean,default:!1}},data:function(){return{form:{id:null,photo:null,ordinal_number:null,identification_number:null,full_name:null,class_name:null,motto:null,youtube_link:null,vision_mission:null,achievement:null,program_plan:null,organizational_experience:null}}},validations:function(){return{form:{photo:{required:S.required},ordinal_number:{required:S.required,maxLength:Object(S.maxLength)(1)},identification_number:{required:S.required,maxLength:Object(S.maxLength)(10)},full_name:{required:S.required},class_name:{required:S.required}}}},computed:B(B({},Object(w.b)({loading:"Candidate/loading",firstTimeloading:"General/firstTimeloading"})),{},{kelas:function(){return j.e}}),created:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isEditable){t.next=4;break}return e.$store.dispatch("General/setFirstTimeLoading",!0),t.next=4,e.getDetailCandidate();case 4:case"end":return t.stop()}}),t)})))()},methods:{getDetailCandidate:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.requestMixin_handleCancel(j.q),t.next=4,e.$store.dispatch("Candidate/getDetailCandidate",{id:e.$route.params.id,requestConfig:B({},e.requestMixin_setCancelToken(j.q))});case 4:r=t.sent,Object.keys(e.form).forEach((function(form){e.form[form]=r[form]})),e.$store.dispatch("General/setFirstTimeLoading",!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.$store.commit("component/Snackbar/SET_ERROR_MESSAGE",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onUpdateCandidate:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$v.form.$touch(),!e.$v.form.$invalid){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,e.requestMixin_handleCancel(j.B),t.next=7,e.$store.dispatch("Candidate/updateCandidate",{data:e.form,requestConfig:B({},e.requestMixin_setCancelToken(j.B))});case 7:r=t.sent,e.$notifier({message:r.message}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),e.$store.commit("component/Snackbar/SET_ERROR_MESSAGE",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})))()},onSubmitCandidate:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$v.form.$touch(),!e.$v.form.$invalid){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,e.requestMixin_handleCancel(j.j),t.next=7,e.$store.dispatch("Candidate/createCandidate",{data:e.form,requestConfig:B({},e.requestMixin_setCancelToken(j.j))});case 7:r=t.sent,e.$notifier({message:r.message}),e.$router.push({name:"pansus-candidate"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),e.$store.commit("component/Snackbar/SET_ERROR_MESSAGE",t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))()},selectImage:function(e){var t=this,data=e.target.files[0];data&&this.base64Convert(data).then((function(e){return t.form.photo=e}))},base64Convert:function(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r(e)}}))}}},E=(r(722),r(36)),component=Object(E.a)(P,(function(){var e=this,t=e._self._c;return t(c.a,[t(k.a,[t(l.a,{attrs:{cols:"12",sm:"6",md:"6",lg:"4",xl:"4"}},[t("BaseCard",{attrs:{elevation:"3",height:"400px"},scopedSlots:e._u([{key:"body",fn:function(){return[t(k.a,{attrs:{noGutters:""}},[t(l.a,{staticClass:"text-center"},[t("BaseLabel",{attrs:{title:"Foto Kandidat",isRequired:"",fontSize:"20",color:"black"}})],1)],1),e._v(" "),t(k.a,{attrs:{noGutters:""}},[t(l.a,[t(f.a,{scopedSlots:e._u([{key:"default",fn:function(r){var n=r.hover;return[t("BaseCard",{directives:[{name:"show",rawName:"v-show",value:e.form.photo,expression:"form.photo"}],staticClass:"mx-auto",scopedSlots:e._u([{key:"body",fn:function(){return[t(v.a,{staticClass:"elevation-0",attrs:{src:e.form.photo,aspectRatio:1}}),e._v(" "),t(d.d,[n?t(_.a,{attrs:{absolute:"",color:"#757575"}},[t(o.a,{attrs:{outlined:"",large:"",color:"white"},on:{click:function(t){return e.$refs.avatar.click()}}},[e._v("\n                            Ganti foto\n                          ")])],1):e._e()],1)]},proxy:!0}],null,!0)})]}}])}),e._v(" "),t("input",{ref:"avatar",staticClass:"d-none",attrs:{type:"file",accept:"image/*"},on:{input:e.selectImage}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.form.photo,expression:"!form.photo"}],staticClass:"text-center cursor-pointer",class:{"image-select-danger":e.$v.form.photo.$error,"image-select":!e.$v.form.photo.$error},on:{click:function(t){return e.$refs.avatar.click()}}},[t(k.a,{staticClass:"mt-5"},[t(l.a,[t(m.a,{staticClass:"icon-upload"},[e._v("mdi-cloud-upload")])],1)],1),e._v(" "),t(k.a,[t(l.a,[t("BaseLabel",{attrs:{title:"Pilih File",fontSize:"20",isBold:"",color:"secondary"}})],1)],1),e._v(" "),t(k.a,{attrs:{noGutters:""}},[t(l.a,[t("BaseLabel",{attrs:{title:"Support format file: JPG, PNG",fontSize:"14",color:"secondary"}}),e._v(" "),t("BaseLabel",{attrs:{title:"Harus 1:1 & Max 15Mb",fontSize:"14",color:"secondary"}})],1)],1)],1)],1)],1),e._v(" "),e.$v.form.photo.$error?t(k.a,[t(l.a,{staticClass:"text-center red--text font-weight-bold"},[t("BaseFormWrap",{attrs:{name:"Foto",validator:e.$v.form.photo},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.attrs;return[e._v("\n                  "+e._s(r.errorMessages[0])+"\n                ")]}}],null,!1,715378249)})],1)],1):e._e()]},proxy:!0}])})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"6",md:"6",lg:"8",xl:"8"}},[t("BaseCard",{attrs:{elevation:"3"},scopedSlots:e._u([{key:"body",fn:function(){return[t("section",{staticClass:"mt-2"},[t(k.a,[t(l.a,{attrs:{cols:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[t("BaseLabel",{attrs:{title:"No Urut",isRequired:"",fontSize:"14",color:"black"}}),e._v(" "),t("BaseFormWrap",{attrs:{name:"No Urut",validator:e.$v.form.ordinal_number},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.attrs;return[t(y.a,e._b({attrs:{type:"number",placeholder:"0",outlined:"",dense:"",counter:"",maxlength:"1"},model:{value:e.form.ordinal_number,callback:function(t){e.$set(e.form,"ordinal_number",t)},expression:"form.ordinal_number"}},"v-text-field",n,!1))]}}])})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[t("BaseLabel",{attrs:{title:"NIS",isRequired:"",fontSize:"14",color:"black"}}),e._v(" "),t("BaseFormWrap",{attrs:{name:"NIS",validator:e.$v.form.identification_number},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.attrs;return[t(y.a,e._b({attrs:{placeholder:"123456",type:"number",outlined:"",dense:"",counter:"",maxlength:"10"},model:{value:e.form.identification_number,callback:function(t){e.$set(e.form,"identification_number",t)},expression:"form.identification_number"}},"v-text-field",n,!1))]}}])})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[t("BaseLabel",{attrs:{title:"Kelas",isRequired:"",fontSize:"14",color:"black"}}),e._v(" "),t("BaseFormWrap",{attrs:{name:"Kelas",validator:e.$v.form.class_name},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.attrs;return[t(n.a,e._b({attrs:{items:e.kelas,outlined:"",dense:"",label:"Kelas Kandidat"},model:{value:e.form.class_name,callback:function(t){e.$set(e.form,"class_name",t)},expression:"form.class_name"}},"v-autocomplete",o,!1))]}}])})],1)],1),e._v(" "),t(k.a,[t(l.a,{staticClass:"py-0"},[t("BaseLabel",{attrs:{title:"Nama Kandidat",isRequired:"",fontSize:"14",color:"black"}}),e._v(" "),t("BaseFormWrap",{attrs:{name:"Nama",validator:e.$v.form.full_name},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.attrs;return[t(y.a,e._b({attrs:{placeholder:"Nama Kandidat",outlined:"",dense:""},model:{value:e.form.full_name,callback:function(t){e.$set(e.form,"full_name",t)},expression:"form.full_name"}},"v-text-field",n,!1))]}}])})],1)],1),e._v(" "),t(k.a,[t(l.a,{staticClass:"py-0"},[t("BaseLabel",{attrs:{title:"Motto",fontSize:"14",color:"black"}}),e._v(" "),t(y.a,{attrs:{placeholder:"Motto Kandidat",outlined:"",dense:""},model:{value:e.form.motto,callback:function(t){e.$set(e.form,"motto",t)},expression:"form.motto"}})],1)],1),e._v(" "),t(k.a,[t(l.a,{staticClass:"pt-0 pb-5"},[t("BaseLabel",{attrs:{title:"Link Youtube",fontSize:"14",color:"black"}}),e._v(" "),t(y.a,{attrs:{placeholder:"www.youtube.com",messages:"Link Youtube embeded",outlined:"",dense:""},model:{value:e.form.youtube_link,callback:function(t){e.$set(e.form,"youtube_link",t)},expression:"form.youtube_link"}})],1)],1),e._v(" "),t(k.a,[t(l.a,{staticClass:"py-0"},[t("BaseLabel",{attrs:{title:"Visi & Misi Kandidat",fontSize:"14",color:"black"}}),e._v(" "),t(x.a,{attrs:{placeholder:"isi Visi & Misi kandidat disini",rows:"3",outlined:"",dense:"",autoGrow:""},model:{value:e.form.vision_mission,callback:function(t){e.$set(e.form,"vision_mission",t)},expression:"form.vision_mission"}})],1)],1),e._v(" "),t(k.a,[t(l.a,{staticClass:"py-0"},[t("BaseLabel",{attrs:{title:"Prestasi",fontSize:"14",color:"black"}}),e._v(" "),t(x.a,{attrs:{placeholder:"Prestasi Kandidat",rows:"3",outlined:"",dense:"",autoGrow:""},model:{value:e.form.achievement,callback:function(t){e.$set(e.form,"achievement",t)},expression:"form.achievement"}})],1)],1),e._v(" "),t(k.a,[t(l.a,{staticClass:"py-0"},[t("BaseLabel",{attrs:{title:"Rencana Program",fontSize:"14",color:"black"}}),e._v(" "),t(x.a,{attrs:{placeholder:"Rencana Program Kandidat",rows:"3",outlined:"",dense:"",autoGrow:""},model:{value:e.form.program_plan,callback:function(t){e.$set(e.form,"program_plan",t)},expression:"form.program_plan"}})],1)],1),e._v(" "),t(k.a,[t(l.a,{staticClass:"py-0"},[t("BaseLabel",{attrs:{title:"Pengalaman Organisasi",fontSize:"14",color:"black"}}),e._v(" "),t(x.a,{attrs:{placeholder:"Pengalaman Organisasi Kandidat",rows:"3",outlined:"",dense:"",autoGrow:""},model:{value:e.form.organizational_experience,callback:function(t){e.$set(e.form,"organizational_experience",t)},expression:"form.organizational_experience"}}),e._v(" "),t("BaseLabel",{attrs:{title:"Format penulisan 'Visi & Misi, Prestasi, Rencana Program,\n                Pengalaman Organisasi' menggunakan markdown",fontSize:"14",color:"black"}}),e._v(" "),t("span",{staticClass:"black--text font-weight-bold"},[e._v("\n                  Untuk petunjuk markdown bisa di\n                  "),t("a",{attrs:{href:"https://commonmark.org/help/",target:"_blank"}},[e._v("\n                    link berikut\n                  ")])])],1)],1),e._v(" "),t(k.a,{staticClass:"text-right"},[t(l.a,{staticClass:"text-right"},[t(o.a,{attrs:{depressed:"",color:"primary",outlined:"",nuxt:"",to:{name:"pansus-candidate"}}},[e._v("\n                  kembali\n                ")]),e._v(" "),t(o.a,{staticClass:"ml-2",attrs:{depressed:"",color:"primary",loading:e.loading,disabled:e.loading},on:{click:function(t){e.isEditable?e.onUpdateCandidate():e.onSubmitCandidate()}}},[e._v("\n                  Submit\n                ")])],1)],1)],1)]},proxy:!0}])})],1)],1),e._v(" "),e.isEditable?t(_.a,{attrs:{value:e.firstTimeloading,zIndex:"9"}},[t(h.a,{attrs:{indeterminate:"",size:"64"}})],1):e._e()],1)}),[],!1,null,"2a88afe4",null);t.default=component.exports;installComponents(component,{BaseLabel:r(708).default,BaseCard:r(438).default,BaseFormWrap:r(709).default})},783:function(e,t,r){"use strict";r.r(t);var n={name:"CandidateEdit",layout:"admin"},o=r(36),component=Object(o.a)(n,(function(){return(0,this._self._c)("AdminCreateEditCandidate",{attrs:{isEditable:""}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AdminCreateEditCandidate:r(725).default})}}]);