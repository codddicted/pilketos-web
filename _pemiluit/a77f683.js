(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{738:function(e,o,t){"use strict";t.r(o);var n=t(688),l=t(687),r={name:"AdminDialogQRCode",components:{QrcodeVue:t(727).a},props:{open:{type:Boolean,default:!1},form:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1}},computed:{_dialogPropsQrCode:function(){var e=this;return{open:this.open,width:"400",isPersistent:!0,isUsingFirstButton:!0,isUsingSecondButton:!0,firstBtnText:"Reset Token",secondBtnText:"Tutup",loadingSecondBtn:this.loading,clickFirstButton:function(){e.onGenerateToken({isReset:!0,id:e.form.id})},clickSecondButton:function(){e.onCloseQrCodeDialog()}}}},methods:{onGenerateToken:function(e){this.$emit("onGenerateToken",e)},onCloseQrCodeDialog:function(){this.$emit("onCloseQrCodeDialog")}}},c=t(36),component=Object(c.a)(r,(function(){var e=this,o=e._self._c;return o("BaseDialog",e._g(e._b({scopedSlots:e._u([{key:"title",fn:function(){return[o("BaseLabel",{attrs:{title:"QR Code & Token",fontSize:"20",isBold:"",color:"secondary"}})]},proxy:!0},{key:"body",fn:function(){return[e.form.polling_token?o(l.a,[o(n.a,{staticClass:"text-center"},[o("qrcode-vue",{attrs:{value:e.form.polling_token,level:"H",size:150}})],1)],1):e._e(),e._v(" "),o(l.a,{staticClass:"mt-1"},[o(n.a,{staticClass:"text-center pt-0"},[o("BaseLabel",{staticClass:"mb-3",attrs:{title:"Token",fontSize:"20",color:"secondary"}}),e._v(" "),o("BaseLabel",{attrs:{title:e.form.polling_token,fontSize:"20",color:"secondary",isBold:""}})],1)],1)]},proxy:!0}])},"BaseDialog",e._dialogPropsQrCode,!1),e._dialogPropsQrCode))}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{BaseLabel:t(708).default,BaseDialog:t(439).default})}}]);