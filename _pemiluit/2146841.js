(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{129:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var o=r(90),n=r(98),h=r(99),c=r(268);class d extends Error{constructor(t,e,r){super(t),this.description=e,this.context=r,this.type="TransportError"}}class l extends n.a{constructor(t){super(),this.writable=!1,Object(h.b)(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,e,r){return super.emitReserved("error",new d(t,e,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(t){"open"===this.readyState&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(data){const t=Object(o.c)(data,this.socket.binaryType);this.onPacket(t)}onPacket(t){super.emitReserved("packet",t)}onClose(details){this.readyState="closed",super.emitReserved("close",details)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return-1===t.indexOf(":")?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(t){const e=Object(c.b)(t);return e.length?"?"+e:""}}},177:function(t,e,r){"use strict";r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return y.b})),r.d(e,"d",(function(){return B})),r.d(e,"c",(function(){return S.c}));var o=r(129),n=r(269),h=r(90);let c=!1;try{c="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){}const d=c;var l=r(70);function f(t){const e=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!e||d))return new XMLHttpRequest}catch(t){}if(!e)try{return new(l.a[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}var m=r(98),y=r(99);function w(){}const v=null!=new f({xdomain:!1}).responseType;class k extends o.a{constructor(t){if(super(t),this.polling=!1,"undefined"!=typeof location){const e="https:"===location.protocol;let r=location.port;r||(r=e?"443":"80"),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||r!==t.port}const e=t&&t.forceBase64;this.supportsBinary=v&&!e,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let t=0;this.polling&&(t++,this.once("pollComplete",(function(){--t||e()}))),this.writable||(t++,this.once("drain",(function(){--t||e()})))}else e()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(data){Object(h.d)(data,this.socket.binaryType).forEach((t=>{if("opening"===this.readyState&&"open"===t.type&&this.onOpen(),"close"===t.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};"open"===this.readyState?t():this.once("open",t)}write(t){this.writable=!1,Object(h.f)(t,(data=>{this.doWrite(data,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return!1!==this.opts.timestampRequests&&(e[this.opts.timestampParam]=Object(n.a)()),this.supportsBinary||e.sid||(e.b64=1),this.createUri(t,e)}request(t={}){return Object.assign(t,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new T(this.uri(),t)}doWrite(data,t){const e=this.request({method:"POST",data:data});e.on("success",t),e.on("error",((t,e)=>{this.onError("xhr post error",t,e)}))}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",((t,e)=>{this.onError("xhr poll error",t,e)})),this.pollXhr=t}}class T extends m.a{constructor(t,e){super(),Object(y.b)(this,e),this.opts=e,this.method=e.method||"GET",this.uri=t,this.data=void 0!==e.data?e.data:null,this.create()}create(){var t;const e=Object(y.c)(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd;const r=this.xhr=new f(e);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this.opts.extraHeaders[i])}}catch(t){}if("POST"===this.method)try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}null===(t=this.opts.cookieJar)||void 0===t||t.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=()=>{var t;3===r.readyState&&(null===(t=this.opts.cookieJar)||void 0===t||t.parseCookies(r)),4===r.readyState&&(200===r.status||1223===r.status?this.onLoad():this.setTimeoutFn((()=>{this.onError("number"==typeof r.status?r.status:0)}),0))},r.send(this.data)}catch(t){return void this.setTimeoutFn((()=>{this.onError(t)}),0)}"undefined"!=typeof document&&(this.index=T.requestsCount++,T.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=w,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete T.requests[this.index],this.xhr=null}}onLoad(){const data=this.xhr.responseText;null!==data&&(this.emitReserved("data",data),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}if(T.requestsCount=0,T.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",O);else if("function"==typeof addEventListener){const t="onpagehide"in l.a?"pagehide":"unload";addEventListener(t,O,!1)}function O(){for(let i in T.requests)T.requests.hasOwnProperty(i)&&T.requests[i].abort()}var x=r(427),S=r(76);class R extends o.a{get name(){return"webtransport"}doOpen(){"function"==typeof WebTransport&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then((()=>{this.onClose()})).catch((t=>{this.onError("webtransport error",t)})),this.transport.ready.then((()=>{this.transport.createBidirectionalStream().then((t=>{const e=Object(h.a)(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=t.readable.pipeThrough(e).getReader(),o=Object(h.b)();o.readable.pipeTo(t.writable),this.writer=o.writable.getWriter();const n=()=>{r.read().then((({done:t,value:e})=>{t||(this.onPacket(e),n())})).catch((t=>{}))};n();const c={type:"open"};this.query.sid&&(c.data=`{"sid":"${this.query.sid}"}`),this.writer.write(c).then((()=>this.onOpen()))}))})))}write(t){this.writable=!1;for(let i=0;i<t.length;i++){const e=t[i],r=i===t.length-1;this.writer.write(e).then((()=>{r&&Object(S.c)((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){var t;null===(t=this.transport)||void 0===t||t.close()}}const E={websocket:x.a,webtransport:R,polling:k};var L=r(268);const C=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,P=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function B(t){const e=t,b=t.indexOf("["),r=t.indexOf("]");-1!=b&&-1!=r&&(t=t.substring(0,b)+t.substring(b,r).replace(/:/g,";")+t.substring(r,t.length));let o=C.exec(t||""),n={},i=14;for(;i--;)n[P[i]]=o[i]||"";return-1!=b&&-1!=r&&(n.source=e,n.host=n.host.substring(1,n.host.length-1).replace(/;/g,":"),n.authority=n.authority.replace("[","").replace("]","").replace(/;/g,":"),n.ipv6uri=!0),n.pathNames=function(t,path){const e=/\/{2,9}/g,r=path.replace(e,"/").split("/");"/"!=path.slice(0,1)&&0!==path.length||r.splice(0,1);"/"==path.slice(-1)&&r.splice(r.length-1,1);return r}(0,n.path),n.queryKey=function(t,e){const data={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,r){e&&(data[e]=r)})),data}(0,n.query),n}class j extends m.a{constructor(t,e={}){super(),this.binaryType=S.b,this.writeBuffer=[],t&&"object"==typeof t&&(e=t,t=null),t?(t=B(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=B(e.host).host),Object(y.b)(this,e),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=e.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"==typeof this.opts.query&&(this.opts.query=Object(L.a)(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=h.g,e.transport=t,this.id&&(e.sid=this.id);const r=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new E[t](r)}open(){let t;if(this.opts.rememberUpgrade&&j.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(t=>this.onClose("transport close",t)))}probe(t){let e=this.createTransport(t),r=!1;j.priorWebsocketSuccess=!1;const o=()=>{r||(e.send([{type:"ping",data:"probe"}]),e.once("packet",(t=>{if(!r)if("pong"===t.type&&"probe"===t.data){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;j.priorWebsocketSuccess="websocket"===e.name,this.transport.pause((()=>{r||"closed"!==this.readyState&&(f(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())}))}else{const t=new Error("probe error");t.transport=e.name,this.emitReserved("upgradeError",t)}})))};function n(){r||(r=!0,f(),e.close(),e=null)}const h=t=>{const r=new Error("probe error: "+t);r.transport=e.name,n(),this.emitReserved("upgradeError",r)};function c(){h("transport closed")}function d(){h("socket closed")}function l(t){e&&t.name!==e.name&&n()}const f=()=>{e.removeListener("open",o),e.removeListener("error",h),e.removeListener("close",c),this.off("close",d),this.off("upgrading",l)};e.once("open",o),e.once("error",h),e.once("close",c),this.once("close",d),this.once("upgrading",l),-1!==this.upgrades.indexOf("webtransport")&&"webtransport"!==t?this.setTimeoutFn((()=>{r||e.open()}),200):e.open()}onOpen(){if(this.readyState="open",j.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade){let i=0;const t=this.upgrades.length;for(;i<t;i++)this.probe(this.upgrades[i])}}onPacket(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),this.resetPingTimeout(),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}onHandshake(data){this.emitReserved("handshake",data),this.id=data.sid,this.transport.query.sid=data.sid,this.upgrades=this.filterUpgrades(data.upgrades),this.pingInterval=data.pingInterval,this.pingTimeout=data.pingTimeout,this.maxPayload=data.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((()=>{this.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const data=this.writeBuffer[i].data;if(data&&(t+=Object(y.a)(data)),i>0&&t>this.maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}write(t,e,r){return this.sendPacket("message",t,e,r),this}send(t,e,r){return this.sendPacket("message",t,e,r),this}sendPacket(t,data,e,r){if("function"==typeof data&&(r=data,data=void 0),"function"==typeof e&&(r=e,e=null),"closing"===this.readyState||"closed"===this.readyState)return;(e=e||{}).compress=!1!==e.compress;const o={type:t,data:data,options:e};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},r=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?r():t()})):this.upgrading?r():t()),this}onError(t){j.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const e=[];let i=0;const r=t.length;for(;i<r;i++)~this.transports.indexOf(t[i])&&e.push(t[i]);return e}}j.protocol=h.g;j.protocol},268:function(t,e,r){"use strict";function o(t){let e="";for(let i in t)t.hasOwnProperty(i)&&(e.length&&(e+="&"),e+=encodeURIComponent(i)+"="+encodeURIComponent(t[i]));return e}function n(t){let e={},r=t.split("&");for(let i=0,t=r.length;i<t;i++){let t=r[i].split("=");e[decodeURIComponent(t[0])]=decodeURIComponent(t[1])}return e}r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return n}))},269:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));const o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),n=64,map={};let h,c=0,i=0;function d(t){let e="";do{e=o[t%n]+e,t=Math.floor(t/n)}while(t>0);return e}function l(){const t=d(+new Date);return t!==h?(c=0,h=t):t+"."+d(c++)}for(;i<n;i++)map[o[i]]=i},427:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return f}));var o=r(129),n=r(269),h=r(99),c=r(76),d=r(90);const l="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class f extends o.a{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),e=this.opts.protocols,r=l?{}:Object(h.c)(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=c.d&&!l?e?new c.a(t,e):new c.a(t):new c.a(t,e,r)}catch(t){return this.emitReserved("error",t)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(e){this.writable=!1;for(let i=0;i<e.length;i++){const r=e[i],o=i===e.length-1;Object(d.e)(r,this.supportsBinary,(data=>{const e={};if(!c.d&&(r.options&&(e.compress=r.options.compress),this.opts.perMessageDeflate)){("string"==typeof data?t.byteLength(data):data.length)<this.opts.perMessageDeflate.threshold&&(e.compress=!1)}try{c.d?this.ws.send(data):this.ws.send(data,e)}catch(t){}o&&Object(c.c)((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=Object(n.a)()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}check(){return!!c.a}}}).call(this,r(390).Buffer)},70:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));const o="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")()},76:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return h})),r.d(e,"d",(function(){return c})),r.d(e,"b",(function(){return d}));var o=r(70);const n="function"==typeof Promise&&"function"==typeof Promise.resolve?t=>Promise.resolve().then(t):(t,e)=>e(t,0),h=o.a.WebSocket||o.a.MozWebSocket,c=!0,d="arraybuffer"},99:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return f}));var o=r(70);function n(t,...e){return e.reduce(((e,r)=>(t.hasOwnProperty(r)&&(e[r]=t[r]),e)),{})}const h=o.a.setTimeout,c=o.a.clearTimeout;function d(t,e){e.useNativeTimers?(t.setTimeoutFn=h.bind(o.a),t.clearTimeoutFn=c.bind(o.a)):(t.setTimeoutFn=o.a.setTimeout.bind(o.a),t.clearTimeoutFn=o.a.clearTimeout.bind(o.a))}const l=1.33;function f(t){return"string"==typeof t?function(t){let e=0,r=0;for(let i=0,o=t.length;i<o;i++)e=t.charCodeAt(i),e<128?r+=1:e<2048?r+=2:e<55296||e>=57344?r+=3:(i++,r+=4);return r}(t):Math.ceil((t.byteLength||t.size)*l)}}}]);