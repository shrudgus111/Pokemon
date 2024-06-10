function RC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $s(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function OC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var k_={exports:{}},Zc={},T_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),NC=Symbol.for("react.portal"),PC=Symbol.for("react.fragment"),jC=Symbol.for("react.strict_mode"),IC=Symbol.for("react.profiler"),AC=Symbol.for("react.provider"),DC=Symbol.for("react.context"),MC=Symbol.for("react.forward_ref"),LC=Symbol.for("react.suspense"),zC=Symbol.for("react.memo"),FC=Symbol.for("react.lazy"),Lg=Symbol.iterator;function BC(t){return t===null||typeof t!="object"?null:(t=Lg&&t[Lg]||t["@@iterator"],typeof t=="function"?t:null)}var R_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O_=Object.assign,N_={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||R_}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P_(){}P_.prototype=Ws.prototype;function kp(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||R_}var Tp=kp.prototype=new P_;Tp.constructor=kp;O_(Tp,Ws.prototype);Tp.isPureReactComponent=!0;var zg=Array.isArray,j_=Object.prototype.hasOwnProperty,Rp={current:null},I_={key:!0,ref:!0,__self:!0,__source:!0};function A_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j_.call(e,r)&&!I_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Sa,type:t,key:s,ref:o,props:i,_owner:Rp.current}}function UC(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Op(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function $C(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fg=/\/+/g;function fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$C(""+t.key):e.toString(36)}function xl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case NC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fd(o,0):r,zg(i)?(n="",t!=null&&(n=t.replace(Fg,"$&/")+"/"),xl(i,e,n,"",function(c){return c})):i!=null&&(Op(i)&&(i=UC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+fd(s,a);o+=xl(s,e,n,l,i)}else if(l=BC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+fd(s,a++),o+=xl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return xl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},bl={transition:null},HC={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:bl,ReactCurrentOwner:Rp};ne.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ws;ne.Fragment=PC;ne.Profiler=IC;ne.PureComponent=kp;ne.StrictMode=jC;ne.Suspense=LC;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HC;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=O_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)j_.call(e,l)&&!I_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Sa,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:DC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AC,_context:t},t.Consumer=t};ne.createElement=A_;ne.createFactory=function(t){var e=A_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:MC,render:t}};ne.isValidElement=Op;ne.lazy=function(t){return{$$typeof:FC,_payload:{_status:-1,_result:t},_init:WC}};ne.memo=function(t,e){return{$$typeof:zC,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return xt.current.useCallback(t,e)};ne.useContext=function(t){return xt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return xt.current.useEffect(t,e)};ne.useId=function(){return xt.current.useId()};ne.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return xt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};ne.useRef=function(t){return xt.current.useRef(t)};ne.useState=function(t){return xt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return xt.current.useTransition()};ne.version="18.2.0";T_.exports=ne;var E=T_.exports;const _t=$s(E),Sf=RC({__proto__:null,default:_t},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VC=E,qC=Symbol.for("react.element"),KC=Symbol.for("react.fragment"),YC=Object.prototype.hasOwnProperty,GC=VC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QC={key:!0,ref:!0,__self:!0,__source:!0};function D_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)YC.call(e,r)&&!QC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qC,type:t,key:s,ref:o,props:i,_owner:GC.current}}Zc.Fragment=KC;Zc.jsx=D_;Zc.jsxs=D_;k_.exports=Zc;var u=k_.exports,Ef={},M_={exports:{}},Kt={},L_={exports:{}},z_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,P){var M=k.length;k.push(P);e:for(;0<M;){var $=M-1>>>1,q=k[$];if(0<i(q,P))k[$]=P,k[M]=q,M=$;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var P=k[0],M=k.pop();if(M!==P){k[0]=M;e:for(var $=0,q=k.length,re=q>>>1;$<re;){var le=2*($+1)-1,fe=k[le],Le=le+1,et=k[Le];if(0>i(fe,M))Le<q&&0>i(et,fe)?(k[$]=et,k[Le]=M,$=Le):(k[$]=fe,k[le]=M,$=le);else if(Le<q&&0>i(et,M))k[$]=et,k[Le]=M,$=Le;else break e}}return P}function i(k,P){var M=k.sortIndex-P.sortIndex;return M!==0?M:k.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,g=!1,m=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(k){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=k)r(c),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(c)}}function x(k){if(_=!1,y(k),!m)if(n(l)!==null)m=!0,j(b);else{var P=n(c);P!==null&&B(x,P.startTime-k)}}function b(k,P){m=!1,_&&(_=!1,v(R),R=-1),g=!0;var M=h;try{for(y(P),d=n(l);d!==null&&(!(d.expirationTime>P)||k&&!L());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var q=$(d.expirationTime<=P);P=t.unstable_now(),typeof q=="function"?d.callback=q:d===n(l)&&r(l),y(P)}else r(l);d=n(l)}if(d!==null)var re=!0;else{var le=n(c);le!==null&&B(x,le.startTime-P),re=!1}return re}finally{d=null,h=M,g=!1}}var S=!1,C=null,R=-1,N=5,T=-1;function L(){return!(t.unstable_now()-T<N)}function W(){if(C!==null){var k=t.unstable_now();T=k;var P=!0;try{P=C(!0,k)}finally{P?V():(S=!1,C=null)}}else S=!1}var V;if(typeof p=="function")V=function(){p(W)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,z=A.port2;A.port1.onmessage=W,V=function(){z.postMessage(null)}}else V=function(){w(W,0)};function j(k){C=k,S||(S=!0,V())}function B(k,P){R=w(function(){k(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){m||g||(m=!0,j(b))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var M=h;h=P;try{return k()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,P){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var M=h;h=k;try{return P()}finally{h=M}},t.unstable_scheduleCallback=function(k,P,M){var $=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?$+M:$):M=$,k){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=M+q,k={id:f++,callback:P,priorityLevel:k,startTime:M,expirationTime:q,sortIndex:-1},M>$?(k.sortIndex=M,e(c,k),n(l)===null&&k===n(c)&&(_?(v(R),R=-1):_=!0,B(x,M-$))):(k.sortIndex=q,e(l,k),m||g||(m=!0,j(b))),k},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(k){var P=h;return function(){var M=h;h=P;try{return k.apply(this,arguments)}finally{h=M}}}})(z_);L_.exports=z_;var XC=L_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=E,$t=XC;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B_=new Set,Fo={};function Ni(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(Fo[t]=e,t=0;t<e.length;t++)B_.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,JC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bg={},Ug={};function ZC(t){return Cf.call(Ug,t)?!0:Cf.call(Bg,t)?!1:JC.test(t)?Ug[t]=!0:(Bg[t]=!0,!1)}function ek(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tk(t,e,n,r){if(e===null||typeof e>"u"||ek(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function Pp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Np,Pp);st[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Np,Pp);st[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Np,Pp);st[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function jp(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tk(e,n,i,r)&&(n=null),r||i===null?ZC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Ip=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),U_=Symbol.for("react.provider"),$_=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Rf=Symbol.for("react.suspense_list"),Dp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),W_=Symbol.for("react.offscreen"),$g=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,hd;function yo(t){if(hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hd=e&&e[1]||""}return`
`+hd+t}var pd=!1;function md(t,e){if(!t||pd)return"";pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{pd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yo(t):""}function nk(t){switch(t.tag){case 5:return yo(t.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return t=md(t.type,!1),t;case 11:return t=md(t.type.render,!1),t;case 1:return t=md(t.type,!0),t;default:return""}}function Of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wi:return"Fragment";case $i:return"Portal";case kf:return"Profiler";case Ip:return"StrictMode";case Tf:return"Suspense";case Rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $_:return(t.displayName||"Context")+".Consumer";case U_:return(t._context.displayName||"Context")+".Provider";case Ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dp:return e=t.displayName||null,e!==null?e:Of(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return Of(t(e))}catch{}}return null}function rk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Of(e);case 8:return e===Ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function H_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ik(t){var e=H_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=ik(t))}function V_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=H_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nf(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function q_(t,e){e=e.checked,e!=null&&jp(t,"checked",e,!1)}function Pf(t,e){q_(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&jf(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jf(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vo=Array.isArray;function ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function If(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(vo(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function K_(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Y_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Y_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,G_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sk=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){sk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function Q_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function X_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ok=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Df(t,e){if(e){if(ok[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lf=null;function Mp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zf=null,ns=null,rs=null;function Kg(t){if(t=ka(t)){if(typeof zf!="function")throw Error(I(280));var e=t.stateNode;e&&(e=iu(e),zf(t.stateNode,t.type,e))}}function J_(t){ns?rs?rs.push(t):rs=[t]:ns=t}function Z_(){if(ns){var t=ns,e=rs;if(rs=ns=null,Kg(t),e)for(t=0;t<e.length;t++)Kg(e[t])}}function ew(t,e){return t(e)}function tw(){}var gd=!1;function nw(t,e,n){if(gd)return t(e,n);gd=!0;try{return ew(t,e,n)}finally{gd=!1,(ns!==null||rs!==null)&&(tw(),Z_())}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var r=iu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Ff=!1;if(Zn)try{var no={};Object.defineProperty(no,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Ff=!1}function ak(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Eo=!1,Wl=null,Hl=!1,Bf=null,lk={onError:function(t){Eo=!0,Wl=t}};function ck(t,e,n,r,i,s,o,a,l){Eo=!1,Wl=null,ak.apply(lk,arguments)}function uk(t,e,n,r,i,s,o,a,l){if(ck.apply(this,arguments),Eo){if(Eo){var c=Wl;Eo=!1,Wl=null}else throw Error(I(198));Hl||(Hl=!0,Bf=c)}}function Pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yg(t){if(Pi(t)!==t)throw Error(I(188))}function dk(t){var e=t.alternate;if(!e){if(e=Pi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yg(i),t;if(s===r)return Yg(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function iw(t){return t=dk(t),t!==null?sw(t):null}function sw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sw(t);if(e!==null)return e;t=t.sibling}return null}var ow=$t.unstable_scheduleCallback,Gg=$t.unstable_cancelCallback,fk=$t.unstable_shouldYield,hk=$t.unstable_requestPaint,De=$t.unstable_now,pk=$t.unstable_getCurrentPriorityLevel,Lp=$t.unstable_ImmediatePriority,aw=$t.unstable_UserBlockingPriority,Vl=$t.unstable_NormalPriority,mk=$t.unstable_LowPriority,lw=$t.unstable_IdlePriority,eu=null,Dn=null;function gk(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:_k,yk=Math.log,vk=Math.LN2;function _k(t){return t>>>=0,t===0?32:31-(yk(t)/vk|0)|0}var Ja=64,Za=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_o(a):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xn(e),i=1<<n,r|=t[n],e&=~i;return r}function wk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=wk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cw(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function yd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xn(e),t[e]=n}function bk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-xn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function uw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dw,Fp,fw,hw,pw,$f=!1,el=[],xr=null,br=null,Sr=null,$o=new Map,Wo=new Map,pr=[],Sk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qg(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function ro(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ka(e),e!==null&&Fp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ek(t,e,n,r,i){switch(e){case"focusin":return xr=ro(xr,t,e,n,r,i),!0;case"dragenter":return br=ro(br,t,e,n,r,i),!0;case"mouseover":return Sr=ro(Sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $o.set(s,ro($o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wo.set(s,ro(Wo.get(s)||null,t,e,n,r,i)),!0}return!1}function mw(t){var e=ii(t.target);if(e!==null){var n=Pi(e);if(n!==null){if(e=n.tag,e===13){if(e=rw(n),e!==null){t.blockedOn=e,pw(t.priority,function(){fw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lf=r,n.target.dispatchEvent(r),Lf=null}else return e=ka(n),e!==null&&Fp(e),t.blockedOn=n,!1;e.shift()}return!0}function Xg(t,e,n){Sl(t)&&n.delete(e)}function Ck(){$f=!1,xr!==null&&Sl(xr)&&(xr=null),br!==null&&Sl(br)&&(br=null),Sr!==null&&Sl(Sr)&&(Sr=null),$o.forEach(Xg),Wo.forEach(Xg)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,$f||($f=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,Ck)))}function Ho(t){function e(i){return io(i,t)}if(0<el.length){io(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xr!==null&&io(xr,t),br!==null&&io(br,t),Sr!==null&&io(Sr,t),$o.forEach(e),Wo.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)mw(n),n.blockedOn===null&&pr.shift()}var is=sr.ReactCurrentBatchConfig,Kl=!0;function kk(t,e,n,r){var i=de,s=is.transition;is.transition=null;try{de=1,Bp(t,e,n,r)}finally{de=i,is.transition=s}}function Tk(t,e,n,r){var i=de,s=is.transition;is.transition=null;try{de=4,Bp(t,e,n,r)}finally{de=i,is.transition=s}}function Bp(t,e,n,r){if(Kl){var i=Wf(t,e,n,r);if(i===null)Td(t,e,r,Yl,n),Qg(t,r);else if(Ek(i,t,e,n,r))r.stopPropagation();else if(Qg(t,r),e&4&&-1<Sk.indexOf(t)){for(;i!==null;){var s=ka(i);if(s!==null&&dw(s),s=Wf(t,e,n,r),s===null&&Td(t,e,r,Yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Td(t,e,r,null,n)}}var Yl=null;function Wf(t,e,n,r){if(Yl=null,t=Mp(r),t=ii(t),t!==null)if(e=Pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function gw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pk()){case Lp:return 1;case aw:return 4;case Vl:case mk:return 16;case lw:return 536870912;default:return 16}default:return 16}}var gr=null,Up=null,El=null;function yw(){if(El)return El;var t,e=Up,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return El=i.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Jg(){return!1}function Yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Jg,this.isPropagationStopped=Jg,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$p=Yt(Hs),Ca=Pe({},Hs,{view:0,detail:0}),Rk=Yt(Ca),vd,_d,so,tu=Pe({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(vd=t.screenX-so.screenX,_d=t.screenY-so.screenY):_d=vd=0,so=t),vd)},movementY:function(t){return"movementY"in t?t.movementY:_d}}),Zg=Yt(tu),Ok=Pe({},tu,{dataTransfer:0}),Nk=Yt(Ok),Pk=Pe({},Ca,{relatedTarget:0}),wd=Yt(Pk),jk=Pe({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ik=Yt(jk),Ak=Pe({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dk=Yt(Ak),Mk=Pe({},Hs,{data:0}),e0=Yt(Mk),Lk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fk[t])?!!e[t]:!1}function Wp(){return Bk}var Uk=Pe({},Ca,{key:function(t){if(t.key){var e=Lk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wp,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$k=Yt(Uk),Wk=Pe({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t0=Yt(Wk),Hk=Pe({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wp}),Vk=Yt(Hk),qk=Pe({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kk=Yt(qk),Yk=Pe({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gk=Yt(Yk),Qk=[9,13,27,32],Hp=Zn&&"CompositionEvent"in window,Co=null;Zn&&"documentMode"in document&&(Co=document.documentMode);var Xk=Zn&&"TextEvent"in window&&!Co,vw=Zn&&(!Hp||Co&&8<Co&&11>=Co),n0=" ",r0=!1;function _w(t,e){switch(t){case"keyup":return Qk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ww(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hi=!1;function Jk(t,e){switch(t){case"compositionend":return ww(e);case"keypress":return e.which!==32?null:(r0=!0,n0);case"textInput":return t=e.data,t===n0&&r0?null:t;default:return null}}function Zk(t,e){if(Hi)return t==="compositionend"||!Hp&&_w(t,e)?(t=yw(),El=Up=gr=null,Hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vw&&e.locale!=="ko"?null:e.data;default:return null}}var eT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eT[t.type]:e==="textarea"}function xw(t,e,n,r){J_(r),e=Gl(e,"onChange"),0<e.length&&(n=new $p("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ko=null,Vo=null;function tT(t){jw(t,0)}function nu(t){var e=Ki(t);if(V_(e))return t}function nT(t,e){if(t==="change")return e}var bw=!1;if(Zn){var xd;if(Zn){var bd="oninput"in document;if(!bd){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),bd=typeof s0.oninput=="function"}xd=bd}else xd=!1;bw=xd&&(!document.documentMode||9<document.documentMode)}function o0(){ko&&(ko.detachEvent("onpropertychange",Sw),Vo=ko=null)}function Sw(t){if(t.propertyName==="value"&&nu(Vo)){var e=[];xw(e,Vo,t,Mp(t)),nw(tT,e)}}function rT(t,e,n){t==="focusin"?(o0(),ko=e,Vo=n,ko.attachEvent("onpropertychange",Sw)):t==="focusout"&&o0()}function iT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Vo)}function sT(t,e){if(t==="click")return nu(e)}function oT(t,e){if(t==="input"||t==="change")return nu(e)}function aT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:aT;function qo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cf.call(e,i)||!kn(t[i],e[i]))return!1}return!0}function a0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function l0(t,e){var n=a0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=a0(n)}}function Ew(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ew(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cw(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lT(t){var e=Cw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ew(n.ownerDocument.documentElement,n)){if(r!==null&&Vp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=l0(n,s);var o=l0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cT=Zn&&"documentMode"in document&&11>=document.documentMode,Vi=null,Hf=null,To=null,Vf=!1;function c0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||Vi==null||Vi!==$l(r)||(r=Vi,"selectionStart"in r&&Vp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&qo(To,r)||(To=r,r=Gl(Hf,"onSelect"),0<r.length&&(e=new $p("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vi)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Sd={},kw={};Zn&&(kw=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function ru(t){if(Sd[t])return Sd[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kw)return Sd[t]=e[n];return t}var Tw=ru("animationend"),Rw=ru("animationiteration"),Ow=ru("animationstart"),Nw=ru("transitionend"),Pw=new Map,u0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){Pw.set(t,e),Ni(e,[t])}for(var Ed=0;Ed<u0.length;Ed++){var Cd=u0[Ed],uT=Cd.toLowerCase(),dT=Cd[0].toUpperCase()+Cd.slice(1);Vr(uT,"on"+dT)}Vr(Tw,"onAnimationEnd");Vr(Rw,"onAnimationIteration");Vr(Ow,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(Nw,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fT=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function d0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uk(r,e,void 0,t),t.currentTarget=null}function jw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;d0(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;d0(i,a,c),s=l}}}if(Hl)throw t=Bf,Hl=!1,Bf=null,t}function _e(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var r=t+"__bubble";n.has(r)||(Iw(e,t,2,!1),n.add(r))}function kd(t,e,n){var r=0;e&&(r|=4),Iw(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[rl]){t[rl]=!0,B_.forEach(function(n){n!=="selectionchange"&&(fT.has(n)||kd(n,!1,t),kd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,kd("selectionchange",!1,e))}}function Iw(t,e,n,r){switch(gw(e)){case 1:var i=kk;break;case 4:i=Tk;break;default:i=Bp}n=i.bind(null,e,n,t),i=void 0,!Ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Td(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ii(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nw(function(){var c=s,f=Mp(n),d=[];e:{var h=Pw.get(t);if(h!==void 0){var g=$p,m=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":g=$k;break;case"focusin":m="focus",g=wd;break;case"focusout":m="blur",g=wd;break;case"beforeblur":case"afterblur":g=wd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Nk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Vk;break;case Tw:case Rw:case Ow:g=Ik;break;case Nw:g=Kk;break;case"scroll":g=Rk;break;case"wheel":g=Gk;break;case"copy":case"cut":case"paste":g=Dk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=t0}var _=(e&4)!==0,w=!_&&t==="scroll",v=_?h!==null?h+"Capture":null:h;_=[];for(var p=c,y;p!==null;){y=p;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,v!==null&&(x=Uo(p,v),x!=null&&_.push(Yo(p,x,y)))),w)break;p=p.return}0<_.length&&(h=new g(h,m,null,n,f),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Lf&&(m=n.relatedTarget||n.fromElement)&&(ii(m)||m[er]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=c,m=m?ii(m):null,m!==null&&(w=Pi(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=c),g!==m)){if(_=Zg,x="onMouseLeave",v="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=t0,x="onPointerLeave",v="onPointerEnter",p="pointer"),w=g==null?h:Ki(g),y=m==null?h:Ki(m),h=new _(x,p+"leave",g,n,f),h.target=w,h.relatedTarget=y,x=null,ii(f)===c&&(_=new _(v,p+"enter",m,n,f),_.target=y,_.relatedTarget=w,x=_),w=x,g&&m)t:{for(_=g,v=m,p=0,y=_;y;y=Li(y))p++;for(y=0,x=v;x;x=Li(x))y++;for(;0<p-y;)_=Li(_),p--;for(;0<y-p;)v=Li(v),y--;for(;p--;){if(_===v||v!==null&&_===v.alternate)break t;_=Li(_),v=Li(v)}_=null}else _=null;g!==null&&f0(d,h,g,_,!1),m!==null&&w!==null&&f0(d,w,m,_,!0)}}e:{if(h=c?Ki(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var b=nT;else if(i0(h))if(bw)b=oT;else{b=iT;var S=rT}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=sT);if(b&&(b=b(t,c))){xw(d,b,n,f);break e}S&&S(t,h,c),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&jf(h,"number",h.value)}switch(S=c?Ki(c):window,t){case"focusin":(i0(S)||S.contentEditable==="true")&&(Vi=S,Hf=c,To=null);break;case"focusout":To=Hf=Vi=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,c0(d,n,f);break;case"selectionchange":if(cT)break;case"keydown":case"keyup":c0(d,n,f)}var C;if(Hp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Hi?_w(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(vw&&n.locale!=="ko"&&(Hi||R!=="onCompositionStart"?R==="onCompositionEnd"&&Hi&&(C=yw()):(gr=f,Up="value"in gr?gr.value:gr.textContent,Hi=!0)),S=Gl(c,R),0<S.length&&(R=new e0(R,t,null,n,f),d.push({event:R,listeners:S}),C?R.data=C:(C=ww(n),C!==null&&(R.data=C)))),(C=Xk?Jk(t,n):Zk(t,n))&&(c=Gl(c,"onBeforeInput"),0<c.length&&(f=new e0("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=C))}jw(d,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Uo(t,n),s!=null&&r.unshift(Yo(t,s,i)),s=Uo(t,e),s!=null&&r.push(Yo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function f0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Uo(n,s),l!=null&&o.unshift(Yo(n,l,a))):i||(l=Uo(n,s),l!=null&&o.push(Yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hT=/\r\n?/g,pT=/\u0000|\uFFFD/g;function h0(t){return(typeof t=="string"?t:""+t).replace(hT,`
`).replace(pT,"")}function il(t,e,n){if(e=h0(e),h0(t)!==e&&n)throw Error(I(425))}function Ql(){}var qf=null,Kf=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gf=typeof setTimeout=="function"?setTimeout:void 0,mT=typeof clearTimeout=="function"?clearTimeout:void 0,p0=typeof Promise=="function"?Promise:void 0,gT=typeof queueMicrotask=="function"?queueMicrotask:typeof p0<"u"?function(t){return p0.resolve(null).then(t).catch(yT)}:Gf;function yT(t){setTimeout(function(){throw t})}function Rd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ho(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function m0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),jn="__reactFiber$"+Vs,Go="__reactProps$"+Vs,er="__reactContainer$"+Vs,Qf="__reactEvents$"+Vs,vT="__reactListeners$"+Vs,_T="__reactHandles$"+Vs;function ii(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=m0(t);t!==null;){if(n=t[jn])return n;t=m0(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[jn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function iu(t){return t[Go]||null}var Xf=[],Yi=-1;function qr(t){return{current:t}}function xe(t){0>Yi||(t.current=Xf[Yi],Xf[Yi]=null,Yi--)}function ge(t,e){Yi++,Xf[Yi]=t.current,t.current=e}var Dr={},dt=qr(Dr),Nt=qr(!1),gi=Dr;function hs(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function Xl(){xe(Nt),xe(dt)}function g0(t,e,n){if(dt.current!==Dr)throw Error(I(168));ge(dt,e),ge(Nt,n)}function Aw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,rk(t)||"Unknown",i));return Pe({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,gi=dt.current,ge(dt,t),ge(Nt,Nt.current),!0}function y0(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Aw(t,e,gi),r.__reactInternalMemoizedMergedChildContext=t,xe(Nt),xe(dt),ge(dt,t)):xe(Nt),ge(Nt,n)}var Hn=null,su=!1,Od=!1;function Dw(t){Hn===null?Hn=[t]:Hn.push(t)}function wT(t){su=!0,Dw(t)}function Kr(){if(!Od&&Hn!==null){Od=!0;var t=0,e=de;try{var n=Hn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hn=null,su=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(t+1)),ow(Lp,Kr),i}finally{de=e,Od=!1}}return null}var Gi=[],Qi=0,Zl=null,ec=0,Xt=[],Jt=0,yi=null,qn=1,Kn="";function Zr(t,e){Gi[Qi++]=ec,Gi[Qi++]=Zl,Zl=t,ec=e}function Mw(t,e,n){Xt[Jt++]=qn,Xt[Jt++]=Kn,Xt[Jt++]=yi,yi=t;var r=qn;t=Kn;var i=32-xn(r)-1;r&=~(1<<i),n+=1;var s=32-xn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qn=1<<32-xn(e)+i|n<<i|r,Kn=s+t}else qn=1<<s|n<<i|r,Kn=t}function qp(t){t.return!==null&&(Zr(t,1),Mw(t,1,0))}function Kp(t){for(;t===Zl;)Zl=Gi[--Qi],Gi[Qi]=null,ec=Gi[--Qi],Gi[Qi]=null;for(;t===yi;)yi=Xt[--Jt],Xt[Jt]=null,Kn=Xt[--Jt],Xt[Jt]=null,qn=Xt[--Jt],Xt[Jt]=null}var Ut=null,Ft=null,Ce=!1,vn=null;function Lw(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function v0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Ft=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:qn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Ft=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(Ce){var e=Ft;if(e){var n=e;if(!v0(t,e)){if(Jf(t))throw Error(I(418));e=Er(n.nextSibling);var r=Ut;e&&v0(t,e)?Lw(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Ut=t)}}else{if(Jf(t))throw Error(I(418));t.flags=t.flags&-4097|2,Ce=!1,Ut=t}}}function _0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function sl(t){if(t!==Ut)return!1;if(!Ce)return _0(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=Ft)){if(Jf(t))throw zw(),Error(I(418));for(;e;)Lw(t,e),e=Er(e.nextSibling)}if(_0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=Ut?Er(t.stateNode.nextSibling):null;return!0}function zw(){for(var t=Ft;t;)t=Er(t.nextSibling)}function ps(){Ft=Ut=null,Ce=!1}function Yp(t){vn===null?vn=[t]:vn.push(t)}var xT=sr.ReactCurrentBatchConfig;function gn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tc=qr(null),nc=null,Xi=null,Gp=null;function Qp(){Gp=Xi=nc=null}function Xp(t){var e=tc.current;xe(tc),t._currentValue=e}function eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){nc=t,Gp=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(Gp!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(nc===null)throw Error(I(308));Xi=t,nc.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var si=null;function Jp(t){si===null?si=[t]:si.push(t)}function Fw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jp(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Zp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Jp(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zp(t,n)}}function w0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rc(t,e,n,r){var i=t.updateQueue;fr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,_=a;switch(h=e,g=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(g,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,h=typeof m=="function"?m.call(g,d,h):m,h==null)break e;d=Pe({},d,h);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=d):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=d}}function x0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Uw=new F_.Component().refs;function th(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ou={isMounted:function(t){return(t=t._reactInternals)?Pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Tr(t),s=Gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(bn(e,t,i,r),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Tr(t),s=Gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(bn(e,t,i,r),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=Tr(t),i=Gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cr(t,i,r),e!==null&&(bn(e,t,r,n),kl(e,t,r))}};function b0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,r)||!qo(i,s):!0}function $w(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=Pt(e)?gi:dt.current,r=e.contextTypes,s=(r=r!=null)?hs(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ou,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function S0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ou.enqueueReplaceState(e,e.state,null)}function nh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Uw,Zp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=Pt(e)?gi:dt.current,i.context=hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(th(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ou.enqueueReplaceState(i,i.state,null),rc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Uw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function E0(t){var e=t._init;return e(t._payload)}function Ww(t){function e(v,p){if(t){var y=v.deletions;y===null?(v.deletions=[p],v.flags|=16):y.push(p)}}function n(v,p){if(!t)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=Rr(v,p),v.index=0,v.sibling=null,v}function s(v,p,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<p?(v.flags|=2,p):y):(v.flags|=2,p)):(v.flags|=1048576,p)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,p,y,x){return p===null||p.tag!==6?(p=Md(y,v.mode,x),p.return=v,p):(p=i(p,y),p.return=v,p)}function l(v,p,y,x){var b=y.type;return b===Wi?f(v,p,y.props.children,x,y.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dr&&E0(b)===p.type)?(x=i(p,y.props),x.ref=oo(v,p,y),x.return=v,x):(x=jl(y.type,y.key,y.props,null,v.mode,x),x.ref=oo(v,p,y),x.return=v,x)}function c(v,p,y,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Ld(y,v.mode,x),p.return=v,p):(p=i(p,y.children||[]),p.return=v,p)}function f(v,p,y,x,b){return p===null||p.tag!==7?(p=di(y,v.mode,x,b),p.return=v,p):(p=i(p,y),p.return=v,p)}function d(v,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Md(""+p,v.mode,y),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ga:return y=jl(p.type,p.key,p.props,null,v.mode,y),y.ref=oo(v,null,p),y.return=v,y;case $i:return p=Ld(p,v.mode,y),p.return=v,p;case dr:var x=p._init;return d(v,x(p._payload),y)}if(vo(p)||to(p))return p=di(p,v.mode,y,null),p.return=v,p;ol(v,p)}return null}function h(v,p,y,x){var b=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(v,p,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ga:return y.key===b?l(v,p,y,x):null;case $i:return y.key===b?c(v,p,y,x):null;case dr:return b=y._init,h(v,p,b(y._payload),x)}if(vo(y)||to(y))return b!==null?null:f(v,p,y,x,null);ol(v,y)}return null}function g(v,p,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(y)||null,a(p,v,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ga:return v=v.get(x.key===null?y:x.key)||null,l(p,v,x,b);case $i:return v=v.get(x.key===null?y:x.key)||null,c(p,v,x,b);case dr:var S=x._init;return g(v,p,y,S(x._payload),b)}if(vo(x)||to(x))return v=v.get(y)||null,f(p,v,x,b,null);ol(p,x)}return null}function m(v,p,y,x){for(var b=null,S=null,C=p,R=p=0,N=null;C!==null&&R<y.length;R++){C.index>R?(N=C,C=null):N=C.sibling;var T=h(v,C,y[R],x);if(T===null){C===null&&(C=N);break}t&&C&&T.alternate===null&&e(v,C),p=s(T,p,R),S===null?b=T:S.sibling=T,S=T,C=N}if(R===y.length)return n(v,C),Ce&&Zr(v,R),b;if(C===null){for(;R<y.length;R++)C=d(v,y[R],x),C!==null&&(p=s(C,p,R),S===null?b=C:S.sibling=C,S=C);return Ce&&Zr(v,R),b}for(C=r(v,C);R<y.length;R++)N=g(C,v,R,y[R],x),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?R:N.key),p=s(N,p,R),S===null?b=N:S.sibling=N,S=N);return t&&C.forEach(function(L){return e(v,L)}),Ce&&Zr(v,R),b}function _(v,p,y,x){var b=to(y);if(typeof b!="function")throw Error(I(150));if(y=b.call(y),y==null)throw Error(I(151));for(var S=b=null,C=p,R=p=0,N=null,T=y.next();C!==null&&!T.done;R++,T=y.next()){C.index>R?(N=C,C=null):N=C.sibling;var L=h(v,C,T.value,x);if(L===null){C===null&&(C=N);break}t&&C&&L.alternate===null&&e(v,C),p=s(L,p,R),S===null?b=L:S.sibling=L,S=L,C=N}if(T.done)return n(v,C),Ce&&Zr(v,R),b;if(C===null){for(;!T.done;R++,T=y.next())T=d(v,T.value,x),T!==null&&(p=s(T,p,R),S===null?b=T:S.sibling=T,S=T);return Ce&&Zr(v,R),b}for(C=r(v,C);!T.done;R++,T=y.next())T=g(C,v,R,T.value,x),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?R:T.key),p=s(T,p,R),S===null?b=T:S.sibling=T,S=T);return t&&C.forEach(function(W){return e(v,W)}),Ce&&Zr(v,R),b}function w(v,p,y,x){if(typeof y=="object"&&y!==null&&y.type===Wi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ga:e:{for(var b=y.key,S=p;S!==null;){if(S.key===b){if(b=y.type,b===Wi){if(S.tag===7){n(v,S.sibling),p=i(S,y.props.children),p.return=v,v=p;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dr&&E0(b)===S.type){n(v,S.sibling),p=i(S,y.props),p.ref=oo(v,S,y),p.return=v,v=p;break e}n(v,S);break}else e(v,S);S=S.sibling}y.type===Wi?(p=di(y.props.children,v.mode,x,y.key),p.return=v,v=p):(x=jl(y.type,y.key,y.props,null,v.mode,x),x.ref=oo(v,p,y),x.return=v,v=x)}return o(v);case $i:e:{for(S=y.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(v,p.sibling),p=i(p,y.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else e(v,p);p=p.sibling}p=Ld(y,v.mode,x),p.return=v,v=p}return o(v);case dr:return S=y._init,w(v,p,S(y._payload),x)}if(vo(y))return m(v,p,y,x);if(to(y))return _(v,p,y,x);ol(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,y),p.return=v,v=p):(n(v,p),p=Md(y,v.mode,x),p.return=v,v=p),o(v)):n(v,p)}return w}var ms=Ww(!0),Hw=Ww(!1),Ta={},Mn=qr(Ta),Qo=qr(Ta),Xo=qr(Ta);function oi(t){if(t===Ta)throw Error(I(174));return t}function em(t,e){switch(ge(Xo,e),ge(Qo,t),ge(Mn,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Af(e,t)}xe(Mn),ge(Mn,e)}function gs(){xe(Mn),xe(Qo),xe(Xo)}function Vw(t){oi(Xo.current);var e=oi(Mn.current),n=Af(e,t.type);e!==n&&(ge(Qo,t),ge(Mn,n))}function tm(t){Qo.current===t&&(xe(Mn),xe(Qo))}var Re=qr(0);function ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nd=[];function nm(){for(var t=0;t<Nd.length;t++)Nd[t]._workInProgressVersionPrimary=null;Nd.length=0}var Tl=sr.ReactCurrentDispatcher,Pd=sr.ReactCurrentBatchConfig,vi=0,Ne=null,Ue=null,Ke=null,sc=!1,Ro=!1,Jo=0,bT=0;function ot(){throw Error(I(321))}function rm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function im(t,e,n,r,i,s){if(vi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?kT:TT,t=n(r,i),Ro){s=0;do{if(Ro=!1,Jo=0,25<=s)throw Error(I(301));s+=1,Ke=Ue=null,e.updateQueue=null,Tl.current=RT,t=n(r,i)}while(Ro)}if(Tl.current=oc,e=Ue!==null&&Ue.next!==null,vi=0,Ke=Ue=Ne=null,sc=!1,e)throw Error(I(300));return t}function sm(){var t=Jo!==0;return Jo=0,t}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function cn(){if(Ue===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ke===null?Ne.memoizedState:Ke.next;if(e!==null)Ke=e,Ue=t;else{if(t===null)throw Error(I(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Zo(t,e){return typeof e=="function"?e(t):e}function jd(t){var e=cn(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((vi&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ne.lanes|=f,_i|=f}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,kn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Id(t){var e=cn(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qw(){}function Kw(t,e){var n=Ne,r=cn(),i=e(),s=!kn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,om(Qw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,ea(9,Gw.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(I(349));vi&30||Yw(n,e,i)}return i}function Yw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gw(t,e,n,r){e.value=n,e.getSnapshot=r,Xw(e)&&Jw(t)}function Qw(t,e,n){return n(function(){Xw(e)&&Jw(t)})}function Xw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Jw(t){var e=tr(t,1);e!==null&&bn(e,t,1,-1)}function C0(t){var e=Nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},e.queue=t,t=t.dispatch=CT.bind(null,Ne,t),[e.memoizedState,t]}function ea(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zw(){return cn().memoizedState}function Rl(t,e,n,r){var i=Nn();Ne.flags|=t,i.memoizedState=ea(1|e,n,void 0,r===void 0?null:r)}function au(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&rm(r,o.deps)){i.memoizedState=ea(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=ea(1|e,n,s,r)}function k0(t,e){return Rl(8390656,8,t,e)}function om(t,e){return au(2048,8,t,e)}function ex(t,e){return au(4,2,t,e)}function tx(t,e){return au(4,4,t,e)}function nx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rx(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,nx.bind(null,e,t),n)}function am(){}function ix(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sx(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ox(t,e,n){return vi&21?(kn(n,e)||(n=cw(),Ne.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function ST(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Pd.transition;Pd.transition={};try{t(!1),e()}finally{de=n,Pd.transition=r}}function ax(){return cn().memoizedState}function ET(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lx(t))cx(e,n);else if(n=Fw(t,e,n,r),n!==null){var i=wt();bn(n,t,r,i),ux(n,e,r)}}function CT(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lx(t))cx(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(i.next=i,Jp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Fw(t,e,i,r),n!==null&&(i=wt(),bn(n,t,r,i),ux(n,e,r))}}function lx(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function cx(t,e){Ro=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ux(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zp(t,n)}}var oc={readContext:ln,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},kT={readContext:ln,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:k0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,nx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=Nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ET.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:C0,useDebugValue:am,useDeferredValue:function(t){return Nn().memoizedState=t},useTransition:function(){var t=C0(!1),e=t[0];return t=ST.bind(null,t[1]),Nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=Nn();if(Ce){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Je===null)throw Error(I(349));vi&30||Yw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,k0(Qw.bind(null,r,s,t),[t]),r.flags|=2048,ea(9,Gw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nn(),e=Je.identifierPrefix;if(Ce){var n=Kn,r=qn;n=(r&~(1<<32-xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TT={readContext:ln,useCallback:ix,useContext:ln,useEffect:om,useImperativeHandle:rx,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:jd,useRef:Zw,useState:function(){return jd(Zo)},useDebugValue:am,useDeferredValue:function(t){var e=cn();return ox(e,Ue.memoizedState,t)},useTransition:function(){var t=jd(Zo)[0],e=cn().memoizedState;return[t,e]},useMutableSource:qw,useSyncExternalStore:Kw,useId:ax,unstable_isNewReconciler:!1},RT={readContext:ln,useCallback:ix,useContext:ln,useEffect:om,useImperativeHandle:rx,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:Id,useRef:Zw,useState:function(){return Id(Zo)},useDebugValue:am,useDeferredValue:function(t){var e=cn();return Ue===null?e.memoizedState=t:ox(e,Ue.memoizedState,t)},useTransition:function(){var t=Id(Zo)[0],e=cn().memoizedState;return[t,e]},useMutableSource:qw,useSyncExternalStore:Kw,useId:ax,unstable_isNewReconciler:!1};function ys(t,e){try{var n="",r=e;do n+=nk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ad(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OT=typeof WeakMap=="function"?WeakMap:Map;function dx(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lc||(lc=!0,hh=r),rh(t,e)},n}function fx(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rh(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function T0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=WT.bind(null,t,e,n),e.then(t,t))}function R0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function O0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var NT=sr.ReactCurrentOwner,Tt=!1;function gt(t,e,n,r){e.child=t===null?Hw(e,null,n,r):ms(e,t.child,n,r)}function N0(t,e,n,r,i){n=n.render;var s=e.ref;return ss(e,i),r=im(t,e,n,r,s,i),n=sm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Ce&&n&&qp(e),e.flags|=1,gt(t,e,r,i),e.child)}function P0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hx(t,e,s,r,i)):(t=jl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function hx(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qo(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return ih(t,e,n,r,i)}function px(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Zi,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Zi,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Zi,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Zi,zt),zt|=r;return gt(t,e,i,n),e.child}function mx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ih(t,e,n,r,i){var s=Pt(n)?gi:dt.current;return s=hs(e,s),ss(e,i),n=im(t,e,n,r,s,i),r=sm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Ce&&r&&qp(e),e.flags|=1,gt(t,e,n,i),e.child)}function j0(t,e,n,r,i){if(Pt(n)){var s=!0;Jl(e)}else s=!1;if(ss(e,i),e.stateNode===null)Ol(t,e),$w(e,n,r),nh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ln(c):(c=Pt(n)?gi:dt.current,c=hs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&S0(e,o,r,c),fr=!1;var h=e.memoizedState;o.state=h,rc(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Nt.current||fr?(typeof f=="function"&&(th(e,n,f,r),l=e.memoizedState),(a=fr||b0(e,n,a,r,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:gn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ln(l):(l=Pt(n)?gi:dt.current,l=hs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&S0(e,o,r,l),fr=!1,h=e.memoizedState,o.state=h,rc(e,r,o,i);var m=e.memoizedState;a!==d||h!==m||Nt.current||fr?(typeof g=="function"&&(th(e,n,g,r),m=e.memoizedState),(c=fr||b0(e,n,c,r,h,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return sh(t,e,n,r,s,i)}function sh(t,e,n,r,i,s){mx(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&y0(e,n,!1),nr(t,e,s);r=e.stateNode,NT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ms(e,t.child,null,s),e.child=ms(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&y0(e,n,!0),e.child}function gx(t){var e=t.stateNode;e.pendingContext?g0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&g0(t,e.context,!1),em(t,e.containerInfo)}function I0(t,e,n,r,i){return ps(),Yp(i),e.flags|=256,gt(t,e,n,r),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function yx(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Re,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uu(o,r,0,null),t=di(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ah(n),e.memoizedState=oh,t):lm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return PT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Rr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Rr(a,s):(s=di(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oh,r}return s=t.child,t=s.sibling,r=Rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lm(t,e){return e=uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&Yp(r),ms(e,t.child,null,n),t=lm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ad(Error(I(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=uu({mode:"visible",children:r.children},i,0,null),s=di(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ms(e,t.child,null,o),e.child.memoizedState=ah(o),e.memoizedState=oh,s);if(!(e.mode&1))return al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Ad(s,r,void 0),al(t,e,o,r)}if(a=(o&t.childLanes)!==0,Tt||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),bn(r,t,i,-1))}return pm(),r=Ad(Error(I(421))),al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Er(i.nextSibling),Ut=e,Ce=!0,vn=null,t!==null&&(Xt[Jt++]=qn,Xt[Jt++]=Kn,Xt[Jt++]=yi,qn=t.id,Kn=t.overflow,yi=e),e=lm(e,r.children),e.flags|=4096,e)}function A0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),eh(t.return,e,n)}function Dd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vx(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&A0(t,n,e);else if(t.tag===19)A0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ic(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ic(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dd(e,!0,n,null,s);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jT(t,e,n){switch(e.tag){case 3:gx(e),ps();break;case 5:Vw(e);break;case 1:Pt(e.type)&&Jl(e);break;case 4:em(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(tc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?yx(t,e,n):(ge(Re,Re.current&1),t=nr(t,e,n),t!==null?t.sibling:null);ge(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,px(t,e,n)}return nr(t,e,n)}var _x,lh,wx,xx;_x=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lh=function(){};wx=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,oi(Mn.current);var s=null;switch(n){case"input":i=Nf(t,i),r=Nf(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=If(t,i),r=If(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ql)}Df(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xx=function(t,e,n,r){n!==r&&(e.flags|=4)};function ao(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IT(t,e,n){var r=e.pendingProps;switch(Kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Pt(e.type)&&Xl(),at(e),null;case 3:return r=e.stateNode,gs(),xe(Nt),xe(dt),nm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(gh(vn),vn=null))),lh(t,e),at(e),null;case 5:tm(e);var i=oi(Xo.current);if(n=e.type,t!==null&&e.stateNode!=null)wx(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return at(e),null}if(t=oi(Mn.current),sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jn]=e,r[Go]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<wo.length;i++)_e(wo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Wg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Vg(r,s),_e("invalid",r)}Df(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&il(r.textContent,a,t),i=["children",""+a]):Fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Qa(r),Hg(r,s,!0);break;case"textarea":Qa(r),qg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Y_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jn]=e,t[Go]=r,_x(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)_e(wo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Wg(t,r),i=Nf(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Vg(t,r),i=If(t,r),_e("invalid",t);break;default:i=r}Df(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?X_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&G_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bo(t,l):typeof l=="number"&&Bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&jp(t,s,l,o))}switch(n){case"input":Qa(t),Hg(t,r,!1);break;case"textarea":Qa(t),qg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)xx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=oi(Xo.current),oi(Mn.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[jn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jn]=e,e.stateNode=r}return at(e),null;case 13:if(xe(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Ft!==null&&e.mode&1&&!(e.flags&128))zw(),ps(),e.flags|=98560,s=!1;else if(s=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[jn]=e}else ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else vn!==null&&(gh(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?We===0&&(We=3):pm())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return gs(),lh(t,e),t===null&&Ko(e.stateNode.containerInfo),at(e),null;case 10:return Xp(e.type._context),at(e),null;case 17:return Pt(e.type)&&Xl(),at(e),null;case 19:if(xe(Re),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ao(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ic(t),o!==null){for(e.flags|=128,ao(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>vs&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304)}else{if(!r)if(t=ic(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return at(e),null}else 2*De()-s.renderingStartTime>vs&&n!==1073741824&&(e.flags|=128,r=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Re.current,ge(Re,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return hm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function AT(t,e){switch(Kp(e),e.tag){case 1:return Pt(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gs(),xe(Nt),xe(dt),nm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tm(e),null;case 13:if(xe(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Re),null;case 4:return gs(),null;case 10:return Xp(e.type._context),null;case 22:case 23:return hm(),null;case 24:return null;default:return null}}var ll=!1,lt=!1,DT=typeof WeakSet=="function"?WeakSet:Set,U=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function ch(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var D0=!1;function MT(t,e){if(qf=Kl,t=Cw(),Vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++f===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},Kl=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,w=m.memoizedState,v=e.stateNode,p=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:gn(e.type,_),w);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(x){Ie(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return m=D0,D0=!1,m}function Oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ch(e,n,s)}i=i.next}while(i!==r)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bx(t){var e=t.alternate;e!==null&&(t.alternate=null,bx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[Go],delete e[Qf],delete e[vT],delete e[_T])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sx(t){return t.tag===5||t.tag===3||t.tag===4}function M0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var rt=null,yn=!1;function lr(t,e,n){for(n=n.child;n!==null;)Ex(t,e,n),n=n.sibling}function Ex(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:lt||Ji(n,e);case 6:var r=rt,i=yn;rt=null,lr(t,e,n),rt=r,yn=i,rt!==null&&(yn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(yn?(t=rt,n=n.stateNode,t.nodeType===8?Rd(t.parentNode,n):t.nodeType===1&&Rd(t,n),Ho(t)):Rd(rt,n.stateNode));break;case 4:r=rt,i=yn,rt=n.stateNode.containerInfo,yn=!0,lr(t,e,n),rt=r,yn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ch(n,e,o),i=i.next}while(i!==r)}lr(t,e,n);break;case 1:if(!lt&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,lr(t,e,n),lt=r):lr(t,e,n);break;default:lr(t,e,n)}}function L0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DT),e.forEach(function(r){var i=VT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,yn=!1;break e;case 3:rt=a.stateNode.containerInfo,yn=!0;break e;case 4:rt=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(rt===null)throw Error(I(160));Ex(s,o,i),rt=null,yn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cx(e,t),e=e.sibling}function Cx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),On(t),r&4){try{Oo(3,t,t.return),lu(3,t)}catch(_){Ie(t,t.return,_)}try{Oo(5,t,t.return)}catch(_){Ie(t,t.return,_)}}break;case 1:pn(e,t),On(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(pn(e,t),On(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{Bo(i,"")}catch(_){Ie(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&q_(i,s),Mf(a,o);var c=Mf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?X_(i,d):f==="dangerouslySetInnerHTML"?G_(i,d):f==="children"?Bo(i,d):jp(i,f,d,c)}switch(a){case"input":Pf(i,s);break;case"textarea":K_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ts(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ts(i,!!s.multiple,s.defaultValue,!0):ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[Go]=s}catch(_){Ie(t,t.return,_)}}break;case 6:if(pn(e,t),On(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ie(t,t.return,_)}}break;case 3:if(pn(e,t),On(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(_){Ie(t,t.return,_)}break;case 4:pn(e,t),On(t);break;case 13:pn(e,t),On(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dm=De())),r&4&&L0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(c=lt)||f,pn(e,t),lt=c):pn(e,t),On(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(U=t,f=t.child;f!==null;){for(d=U=f;U!==null;){switch(h=U,g=h.child,h.tag){case 0:case 11:case 14:case 15:Oo(4,h,h.return);break;case 1:Ji(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){Ie(r,n,_)}}break;case 5:Ji(h,h.return);break;case 22:if(h.memoizedState!==null){F0(d);continue}}g!==null?(g.return=h,U=g):F0(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Q_("display",o))}catch(_){Ie(t,t.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){Ie(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pn(e,t),On(t),r&4&&L0(t);break;case 21:break;default:pn(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sx(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bo(i,""),r.flags&=-33);var s=M0(t);fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=M0(t);dh(t,a,o);break;default:throw Error(I(161))}}catch(l){Ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LT(t,e,n){U=t,kx(t)}function kx(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=ll;var c=lt;if(ll=o,(lt=l)&&!c)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?B0(i):l!==null?(l.return=o,U=l):B0(i);for(;s!==null;)U=s,kx(s),s=s.sibling;U=i,ll=a,lt=c}z0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):z0(t)}}function z0(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||lu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&x0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}x0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}lt||e.flags&512&&uh(e)}catch(h){Ie(e,e.return,h)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function F0(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function B0(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){Ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ie(e,i,l)}}var s=e.return;try{uh(e)}catch(l){Ie(e,s,l)}break;case 5:var o=e.return;try{uh(e)}catch(l){Ie(e,o,l)}}}catch(l){Ie(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var zT=Math.ceil,ac=sr.ReactCurrentDispatcher,cm=sr.ReactCurrentOwner,sn=sr.ReactCurrentBatchConfig,se=0,Je=null,Fe=null,it=0,zt=0,Zi=qr(0),We=0,ta=null,_i=0,cu=0,um=0,No=null,Ct=null,dm=0,vs=1/0,$n=null,lc=!1,hh=null,kr=null,cl=!1,yr=null,cc=0,Po=0,ph=null,Nl=-1,Pl=0;function wt(){return se&6?De():Nl!==-1?Nl:Nl=De()}function Tr(t){return t.mode&1?se&2&&it!==0?it&-it:xT.transition!==null?(Pl===0&&(Pl=cw()),Pl):(t=de,t!==0||(t=window.event,t=t===void 0?16:gw(t.type)),t):1}function bn(t,e,n,r){if(50<Po)throw Po=0,ph=null,Error(I(185));Ea(t,n,r),(!(se&2)||t!==Je)&&(t===Je&&(!(se&2)&&(cu|=n),We===4&&mr(t,it)),jt(t,r),n===1&&se===0&&!(e.mode&1)&&(vs=De()+500,su&&Kr()))}function jt(t,e){var n=t.callbackNode;xk(t,e);var r=ql(t,t===Je?it:0);if(r===0)n!==null&&Gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gg(n),e===1)t.tag===0?wT(U0.bind(null,t)):Dw(U0.bind(null,t)),gT(function(){!(se&6)&&Kr()}),n=null;else{switch(uw(r)){case 1:n=Lp;break;case 4:n=aw;break;case 16:n=Vl;break;case 536870912:n=lw;break;default:n=Vl}n=Ax(n,Tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Tx(t,e){if(Nl=-1,Pl=0,se&6)throw Error(I(327));var n=t.callbackNode;if(os()&&t.callbackNode!==n)return null;var r=ql(t,t===Je?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var i=se;se|=2;var s=Ox();(Je!==t||it!==e)&&($n=null,vs=De()+500,ui(t,e));do try{UT();break}catch(a){Rx(t,a)}while(!0);Qp(),ac.current=s,se=i,Fe!==null?e=0:(Je=null,it=0,e=We)}if(e!==0){if(e===2&&(i=Uf(t),i!==0&&(r=i,e=mh(t,i))),e===1)throw n=ta,ui(t,0),mr(t,r),jt(t,De()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!FT(i)&&(e=uc(t,r),e===2&&(s=Uf(t),s!==0&&(r=s,e=mh(t,s))),e===1))throw n=ta,ui(t,0),mr(t,r),jt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:ei(t,Ct,$n);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=dm+500-De(),10<e)){if(ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gf(ei.bind(null,t,Ct,$n),e);break}ei(t,Ct,$n);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-xn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zT(r/1960))-r,10<r){t.timeoutHandle=Gf(ei.bind(null,t,Ct,$n),r);break}ei(t,Ct,$n);break;case 5:ei(t,Ct,$n);break;default:throw Error(I(329))}}}return jt(t,De()),t.callbackNode===n?Tx.bind(null,t):null}function mh(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=uc(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&gh(e)),t}function gh(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function FT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~um,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xn(e),r=1<<n;t[n]=-1,e&=~r}}function U0(t){if(se&6)throw Error(I(327));os();var e=ql(t,0);if(!(e&1))return jt(t,De()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=Uf(t);r!==0&&(e=r,n=mh(t,r))}if(n===1)throw n=ta,ui(t,0),mr(t,e),jt(t,De()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ei(t,Ct,$n),jt(t,De()),null}function fm(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(vs=De()+500,su&&Kr())}}function wi(t){yr!==null&&yr.tag===0&&!(se&6)&&os();var e=se;se|=1;var n=sn.transition,r=de;try{if(sn.transition=null,de=1,t)return t()}finally{de=r,sn.transition=n,se=e,!(se&6)&&Kr()}}function hm(){zt=Zi.current,xe(Zi)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mT(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Kp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:gs(),xe(Nt),xe(dt),nm();break;case 5:tm(r);break;case 4:gs();break;case 13:xe(Re);break;case 19:xe(Re);break;case 10:Xp(r.type._context);break;case 22:case 23:hm()}n=n.return}if(Je=t,Fe=t=Rr(t.current,null),it=zt=e,We=0,ta=null,um=cu=_i=0,Ct=No=null,si!==null){for(e=0;e<si.length;e++)if(n=si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}si=null}return t}function Rx(t,e){do{var n=Fe;try{if(Qp(),Tl.current=oc,sc){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sc=!1}if(vi=0,Ke=Ue=Ne=null,Ro=!1,Jo=0,cm.current=null,n===null||n.return===null){We=1,ta=e,Fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=it,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=R0(o);if(g!==null){g.flags&=-257,O0(g,o,a,s,e),g.mode&1&&T0(s,c,e),e=g,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){T0(s,c,e),pm();break e}l=Error(I(426))}}else if(Ce&&a.mode&1){var w=R0(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),O0(w,o,a,s,e),Yp(ys(l,a));break e}}s=l=ys(l,a),We!==4&&(We=2),No===null?No=[s]:No.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=dx(s,l,e);w0(s,v);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kr===null||!kr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=fx(s,a,e);w0(s,x);break e}}s=s.return}while(s!==null)}Px(n)}catch(b){e=b,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function Ox(){var t=ac.current;return ac.current=oc,t===null?oc:t}function pm(){(We===0||We===3||We===2)&&(We=4),Je===null||!(_i&268435455)&&!(cu&268435455)||mr(Je,it)}function uc(t,e){var n=se;se|=2;var r=Ox();(Je!==t||it!==e)&&($n=null,ui(t,e));do try{BT();break}catch(i){Rx(t,i)}while(!0);if(Qp(),se=n,ac.current=r,Fe!==null)throw Error(I(261));return Je=null,it=0,We}function BT(){for(;Fe!==null;)Nx(Fe)}function UT(){for(;Fe!==null&&!fk();)Nx(Fe)}function Nx(t){var e=Ix(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?Px(t):Fe=e,cm.current=null}function Px(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AT(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Fe=null;return}}else if(n=IT(n,e,zt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);We===0&&(We=5)}function ei(t,e,n){var r=de,i=sn.transition;try{sn.transition=null,de=1,$T(t,e,n,r)}finally{sn.transition=i,de=r}return null}function $T(t,e,n,r){do os();while(yr!==null);if(se&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bk(t,s),t===Je&&(Fe=Je=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Ax(Vl,function(){return os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=de;de=1;var a=se;se|=4,cm.current=null,MT(t,n),Cx(n,t),lT(Kf),Kl=!!qf,Kf=qf=null,t.current=n,LT(n),hk(),se=a,de=o,sn.transition=s}else t.current=n;if(cl&&(cl=!1,yr=t,cc=i),s=t.pendingLanes,s===0&&(kr=null),gk(n.stateNode),jt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lc)throw lc=!1,t=hh,hh=null,t;return cc&1&&t.tag!==0&&os(),s=t.pendingLanes,s&1?t===ph?Po++:(Po=0,ph=t):Po=0,Kr(),null}function os(){if(yr!==null){var t=uw(cc),e=sn.transition,n=de;try{if(sn.transition=null,de=16>t?16:t,yr===null)var r=!1;else{if(t=yr,yr=null,cc=0,se&6)throw Error(I(331));var i=se;for(se|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(U=c;U!==null;){var f=U;switch(f.tag){case 0:case 11:case 15:Oo(8,f,s)}var d=f.child;if(d!==null)d.return=f,U=d;else for(;U!==null;){f=U;var h=f.sibling,g=f.return;if(bx(f),f===c){U=null;break}if(h!==null){h.return=g,U=h;break}U=g}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,U=v;break e}U=s.return}}var p=t.current;for(U=p;U!==null;){o=U;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,U=y;else e:for(o=p;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(b){Ie(a,a.return,b)}if(a===o){U=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,U=x;break e}U=a.return}}if(se=i,Kr(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(eu,t)}catch{}r=!0}return r}finally{de=n,sn.transition=e}}return!1}function $0(t,e,n){e=ys(n,e),e=dx(t,e,1),t=Cr(t,e,1),e=wt(),t!==null&&(Ea(t,1,e),jt(t,e))}function Ie(t,e,n){if(t.tag===3)$0(t,t,n);else for(;e!==null;){if(e.tag===3){$0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=ys(n,t),t=fx(e,t,1),e=Cr(e,t,1),t=wt(),e!==null&&(Ea(e,1,t),jt(e,t));break}}e=e.return}}function WT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(it&n)===n&&(We===4||We===3&&(it&130023424)===it&&500>De()-dm?ui(t,0):um|=n),jt(t,e)}function jx(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=wt();t=tr(t,e),t!==null&&(Ea(t,e,n),jt(t,n))}function HT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jx(t,n)}function VT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),jx(t,n)}var Ix;Ix=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,jT(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,Ce&&e.flags&1048576&&Mw(e,ec,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ol(t,e),t=e.pendingProps;var i=hs(e,dt.current);ss(e,n),i=im(null,e,r,t,i,n);var s=sm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,Jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zp(e),i.updater=ou,e.stateNode=i,i._reactInternals=e,nh(e,r,t,n),e=sh(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&qp(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=KT(r),t=gn(r,t),i){case 0:e=ih(null,e,r,t,n);break e;case 1:e=j0(null,e,r,t,n);break e;case 11:e=N0(null,e,r,t,n);break e;case 14:e=P0(null,e,r,gn(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),j0(t,e,r,i,n);case 3:e:{if(gx(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bw(t,e),rc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ys(Error(I(423)),e),e=I0(t,e,r,n,i);break e}else if(r!==i){i=ys(Error(I(424)),e),e=I0(t,e,r,n,i);break e}else for(Ft=Er(e.stateNode.containerInfo.firstChild),Ut=e,Ce=!0,vn=null,n=Hw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ps(),r===i){e=nr(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return Vw(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yf(r,i)?o=null:s!==null&&Yf(r,s)&&(e.flags|=32),mx(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return yx(t,e,n);case 4:return em(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ms(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),N0(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(tc,r._currentValue),r._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===i.children&&!Nt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Gn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),eh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ss(e,n),i=ln(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=gn(r,e.pendingProps),i=gn(r.type,i),P0(t,e,r,i,n);case 15:return hx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),Ol(t,e),e.tag=1,Pt(r)?(t=!0,Jl(e)):t=!1,ss(e,n),$w(e,r,i),nh(e,r,i,n),sh(null,e,r,!0,t,n);case 19:return vx(t,e,n);case 22:return px(t,e,n)}throw Error(I(156,e.tag))};function Ax(t,e){return ow(t,e)}function qT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new qT(t,e,n,r)}function mm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KT(t){if(typeof t=="function")return mm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ap)return 11;if(t===Dp)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wi:return di(n.children,i,s,e);case Ip:o=8,i|=8;break;case kf:return t=en(12,n,e,i|2),t.elementType=kf,t.lanes=s,t;case Tf:return t=en(13,n,e,i),t.elementType=Tf,t.lanes=s,t;case Rf:return t=en(19,n,e,i),t.elementType=Rf,t.lanes=s,t;case W_:return uu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U_:o=10;break e;case $_:o=9;break e;case Ap:o=11;break e;case Dp:o=14;break e;case dr:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function di(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function uu(t,e,n,r){return t=en(22,t,r,e),t.elementType=W_,t.lanes=n,t.stateNode={isHidden:!1},t}function Md(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yd(0),this.expirationTimes=yd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gm(t,e,n,r,i,s,o,a,l){return t=new YT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zp(s),t}function GT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dx(t){if(!t)return Dr;t=t._reactInternals;e:{if(Pi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Pt(n))return Aw(t,n,e)}return e}function Mx(t,e,n,r,i,s,o,a,l){return t=gm(n,r,!0,t,i,s,o,a,l),t.context=Dx(null),n=t.current,r=wt(),i=Tr(n),s=Gn(r,i),s.callback=e??null,Cr(n,s,i),t.current.lanes=i,Ea(t,i,r),jt(t,r),t}function du(t,e,n,r){var i=e.current,s=wt(),o=Tr(i);return n=Dx(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cr(i,e,o),t!==null&&(bn(t,i,o,s),kl(t,i,o)),o}function dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function W0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ym(t,e){W0(t,e),(t=t.alternate)&&W0(t,e)}function QT(){return null}var Lx=typeof reportError=="function"?reportError:function(t){console.error(t)};function vm(t){this._internalRoot=t}fu.prototype.render=vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));du(t,e,null,null)};fu.prototype.unmount=vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){du(null,t,null,null)}),e[er]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=hw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&mw(t)}};function _m(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function H0(){}function XT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=dc(o);s.call(c)}}var o=Mx(e,r,t,0,null,!1,!1,"",H0);return t._reactRootContainer=o,t[er]=o.current,Ko(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=dc(l);a.call(c)}}var l=gm(t,0,!1,null,null,!1,!1,"",H0);return t._reactRootContainer=l,t[er]=l.current,Ko(t.nodeType===8?t.parentNode:t),wi(function(){du(e,l,n,r)}),l}function pu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=dc(o);a.call(l)}}du(e,o,t,i)}else o=XT(n,e,t,i,r);return dc(o)}dw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(zp(e,n|1),jt(e,De()),!(se&6)&&(vs=De()+500,Kr()))}break;case 13:wi(function(){var r=tr(t,1);if(r!==null){var i=wt();bn(r,t,1,i)}}),ym(t,1)}};Fp=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=wt();bn(e,t,134217728,n)}ym(t,134217728)}};fw=function(t){if(t.tag===13){var e=Tr(t),n=tr(t,e);if(n!==null){var r=wt();bn(n,t,e,r)}ym(t,e)}};hw=function(){return de};pw=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};zf=function(t,e,n){switch(e){case"input":if(Pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=iu(r);if(!i)throw Error(I(90));V_(r),Pf(r,i)}}}break;case"textarea":K_(t,n);break;case"select":e=n.value,e!=null&&ts(t,!!n.multiple,e,!1)}};ew=fm;tw=wi;var JT={usingClientEntryPoint:!1,Events:[ka,Ki,iu,J_,Z_,fm]},lo={findFiberByHostInstance:ii,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ZT={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iw(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||QT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{eu=ul.inject(ZT),Dn=ul}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_m(e))throw Error(I(200));return GT(t,e,null,n)};Kt.createRoot=function(t,e){if(!_m(t))throw Error(I(299));var n=!1,r="",i=Lx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gm(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,Ko(t.nodeType===8?t.parentNode:t),new vm(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=iw(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return wi(t)};Kt.hydrate=function(t,e,n){if(!hu(e))throw Error(I(200));return pu(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!_m(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Mx(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,Ko(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fu(e)};Kt.render=function(t,e,n){if(!hu(e))throw Error(I(200));return pu(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!hu(t))throw Error(I(40));return t._reactRootContainer?(wi(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Kt.unstable_batchedUpdates=fm;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hu(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return pu(t,e,n,!1,r)};Kt.version="18.2.0-next-9e3b772b8-20220608";function zx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zx)}catch(t){console.error(t)}}zx(),M_.exports=Kt;var eR=M_.exports,V0=eR;Ef.createRoot=V0.createRoot,Ef.hydrateRoot=V0.hydrateRoot;var Fx={exports:{}},Bx={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=E;function tR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nR=typeof Object.is=="function"?Object.is:tR,rR=Ra.useSyncExternalStore,iR=Ra.useRef,sR=Ra.useEffect,oR=Ra.useMemo,aR=Ra.useDebugValue;Bx.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=iR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=oR(function(){function l(g){if(!c){if(c=!0,f=g,g=r(g),i!==void 0&&o.hasValue){var m=o.value;if(i(m,g))return d=m}return d=g}if(m=d,nR(f,g))return m;var _=r(g);return i!==void 0&&i(m,_)?m:(f=g,d=_)}var c=!1,f,d,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=rR(t,s[0],s[1]);return sR(function(){o.hasValue=!0,o.value=a},[a]),aR(a),a};Fx.exports=Bx;var lR=Fx.exports,Bt="default"in Sf?_t:Sf,q0=Symbol.for("react-redux-context"),K0=typeof globalThis<"u"?globalThis:{};function cR(){if(!Bt.createContext)return{};const t=K0[q0]??(K0[q0]=new Map);let e=t.get(Bt.createContext);return e||(e=Bt.createContext(null),t.set(Bt.createContext,e)),e}var Mr=cR(),uR=()=>{throw new Error("uSES not initialized!")};function wm(t=Mr){return function(){return Bt.useContext(t)}}var Ux=wm(),$x=uR,dR=t=>{$x=t},fR=(t,e)=>t===e;function hR(t=Mr){const e=t===Mr?Ux:wm(t),n=(r,i={})=>{const{equalityFn:s=fR,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:c,stabilityCheck:f,identityFunctionCheck:d}=e();Bt.useRef(!0);const h=Bt.useCallback({[r.name](m){return r(m)}}[r.name],[r,f,o.stabilityCheck]),g=$x(l.addNestedSub,a.getState,c||a.getState,h,s);return Bt.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var ve=hR();function pR(t){t()}function mR(){let t=null,e=null;return{clear(){t=null,e=null},notify(){pR(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Y0={notify(){},get:()=>[]};function gR(t,e){let n,r=Y0,i=0,s=!1;function o(_){f();const w=r.subscribe(_);let v=!1;return()=>{v||(v=!0,w(),d())}}function a(){r.notify()}function l(){m.onStateChange&&m.onStateChange()}function c(){return s}function f(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=mR())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Y0)}function h(){s||(s=!0,f())}function g(){s&&(s=!1,d())}const m={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:h,tryUnsubscribe:g,getListeners:()=>r};return m}var yR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vR=yR?Bt.useLayoutEffect:Bt.useEffect;function _R({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Bt.useMemo(()=>{const c=gR(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Bt.useMemo(()=>t.getState(),[t]);vR(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const l=e||Mr;return Bt.createElement(l.Provider,{value:o},n)}var wR=_R;function Wx(t=Mr){const e=t===Mr?Ux:wm(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var xR=Wx();function bR(t=Mr){const e=t===Mr?xR:Wx(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Gt=bR();dR(lR.useSyncExternalStoreWithSelector);function nt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var SR=typeof Symbol=="function"&&Symbol.observable||"@@observable",G0=SR,zd=()=>Math.random().toString(36).substring(7).split("").join("."),ER={INIT:`@@redux/INIT${zd()}`,REPLACE:`@@redux/REPLACE${zd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${zd()}`},fc=ER;function xm(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Hx(t,e,n){if(typeof t!="function")throw new Error(nt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(nt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(nt(1));return n(Hx)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function c(){o===s&&(o=new Map,s.forEach((w,v)=>{o.set(v,w)}))}function f(){if(l)throw new Error(nt(3));return i}function d(w){if(typeof w!="function")throw new Error(nt(4));if(l)throw new Error(nt(5));let v=!0;c();const p=a++;return o.set(p,w),function(){if(v){if(l)throw new Error(nt(6));v=!1,c(),o.delete(p),s=null}}}function h(w){if(!xm(w))throw new Error(nt(7));if(typeof w.type>"u")throw new Error(nt(8));if(typeof w.type!="string")throw new Error(nt(17));if(l)throw new Error(nt(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(p=>{p()}),w}function g(w){if(typeof w!="function")throw new Error(nt(10));r=w,h({type:fc.REPLACE})}function m(){const w=d;return{subscribe(v){if(typeof v!="object"||v===null)throw new Error(nt(11));function p(){const x=v;x.next&&x.next(f())}return p(),{unsubscribe:w(p)}},[G0](){return this}}}return h({type:fc.INIT}),{dispatch:h,subscribe:d,getState:f,replaceReducer:g,[G0]:m}}function CR(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:fc.INIT})>"u")throw new Error(nt(12));if(typeof n(void 0,{type:fc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(nt(13))})}function kR(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{CR(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const c={};for(let f=0;f<r.length;f++){const d=r[f],h=n[d],g=o[d],m=h(g,a);if(typeof m>"u")throw a&&a.type,new Error(nt(14));c[d]=m,l=l||m!==g}return l=l||r.length!==Object.keys(o).length,l?c:o}}function hc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function TR(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(nt(15))};const o={getState:i.getState,dispatch:(l,...c)=>s(l,...c)},a=t.map(l=>l(o));return s=hc(...a)(i.dispatch),{...i,dispatch:s}}}function RR(t){return xm(t)&&"type"in t&&typeof t.type=="string"}var Vx=Symbol.for("immer-nothing"),Q0=Symbol.for("immer-draftable"),Wt=Symbol.for("immer-state");function _n(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var _s=Object.getPrototypeOf;function Lr(t){return!!t&&!!t[Wt]}function rr(t){var e;return t?qx(t)||Array.isArray(t)||!!t[Q0]||!!((e=t.constructor)!=null&&e[Q0])||gu(t)||yu(t):!1}var OR=Object.prototype.constructor.toString();function qx(t){if(!t||typeof t!="object")return!1;const e=_s(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===OR}function pc(t,e){mu(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function mu(t){const e=t[Wt];return e?e.type_:Array.isArray(t)?1:gu(t)?2:yu(t)?3:0}function yh(t,e){return mu(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Kx(t,e,n){const r=mu(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function NR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function gu(t){return t instanceof Map}function yu(t){return t instanceof Set}function ti(t){return t.copy_||t.base_}function vh(t,e){if(gu(t))return new Map(t);if(yu(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&qx(t))return _s(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[Wt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(_s(t),n)}function bm(t,e=!1){return vu(t)||Lr(t)||!rr(t)||(mu(t)>1&&(t.set=t.add=t.clear=t.delete=PR),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>bm(r,!0))),t}function PR(){_n(2)}function vu(t){return Object.isFrozen(t)}var jR={};function xi(t){const e=jR[t];return e||_n(0,t),e}var na;function Yx(){return na}function IR(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function X0(t,e){e&&(xi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function _h(t){wh(t),t.drafts_.forEach(AR),t.drafts_=null}function wh(t){t===na&&(na=t.parent_)}function J0(t){return na=IR(na,t)}function AR(t){const e=t[Wt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Z0(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Wt].modified_&&(_h(e),_n(4)),rr(t)&&(t=mc(e,t),e.parent_||gc(e,t)),e.patches_&&xi("Patches").generateReplacementPatches_(n[Wt].base_,t,e.patches_,e.inversePatches_)):t=mc(e,n,[]),_h(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==Vx?t:void 0}function mc(t,e,n){if(vu(e))return e;const r=e[Wt];if(!r)return pc(e,(i,s)=>ey(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return gc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),pc(s,(a,l)=>ey(t,r,i,a,l,n,o)),gc(t,i,!1),n&&t.patches_&&xi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function ey(t,e,n,r,i,s,o){if(Lr(i)){const a=s&&e&&e.type_!==3&&!yh(e.assigned_,r)?s.concat(r):void 0,l=mc(t,i,a);if(Kx(n,r,l),Lr(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(rr(i)&&!vu(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;mc(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&gc(t,i)}}function gc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&bm(e,n)}function DR(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:Yx(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Sm;n&&(i=[r],s=ra);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Sm={get(t,e){if(e===Wt)return t;const n=ti(t);if(!yh(n,e))return MR(t,n,e);const r=n[e];return t.finalized_||!rr(r)?r:r===Fd(t.base_,e)?(Bd(t),t.copy_[e]=bh(r,t)):r},has(t,e){return e in ti(t)},ownKeys(t){return Reflect.ownKeys(ti(t))},set(t,e,n){const r=Gx(ti(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Fd(ti(t),e),s=i==null?void 0:i[Wt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(NR(n,i)&&(n!==void 0||yh(t.base_,e)))return!0;Bd(t),xh(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Fd(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Bd(t),xh(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=ti(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){_n(11)},getPrototypeOf(t){return _s(t.base_)},setPrototypeOf(){_n(12)}},ra={};pc(Sm,(t,e)=>{ra[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ra.deleteProperty=function(t,e){return ra.set.call(this,t,e,void 0)};ra.set=function(t,e,n){return Sm.set.call(this,t[0],e,n,t[0])};function Fd(t,e){const n=t[Wt];return(n?ti(n):t)[e]}function MR(t,e,n){var i;const r=Gx(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function Gx(t,e){if(!(e in t))return;let n=_s(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=_s(n)}}function xh(t){t.modified_||(t.modified_=!0,t.parent_&&xh(t.parent_))}function Bd(t){t.copy_||(t.copy_=vh(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var LR=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...c){return o.produce(l,f=>n.call(this,f,...c))}}typeof n!="function"&&_n(6),r!==void 0&&typeof r!="function"&&_n(7);let i;if(rr(e)){const s=J0(this),o=bh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?_h(s):wh(s)}return X0(s,r),Z0(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===Vx&&(i=void 0),this.autoFreeze_&&bm(i,!0),r){const s=[],o=[];xi("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else _n(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){rr(t)||_n(8),Lr(t)&&(t=Qx(t));const e=J0(this),n=bh(t,void 0);return n[Wt].isManual_=!0,wh(e),n}finishDraft(t,e){const n=t&&t[Wt];(!n||!n.isManual_)&&_n(9);const{scope_:r}=n;return X0(r,e),Z0(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=xi("Patches").applyPatches_;return Lr(t)?r(t,e):this.produce(t,i=>r(i,e))}};function bh(t,e){const n=gu(t)?xi("MapSet").proxyMap_(t,e):yu(t)?xi("MapSet").proxySet_(t,e):DR(t,e);return(e?e.scope_:Yx()).drafts_.push(n),n}function Qx(t){return Lr(t)||_n(10,t),Xx(t)}function Xx(t){if(!rr(t)||vu(t))return t;const e=t[Wt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=vh(t,e.scope_.immer_.useStrictShallowCopy_)}else n=vh(t,!0);return pc(n,(r,i)=>{Kx(n,r,Xx(i))}),e&&(e.finalized_=!1),n}var Ht=new LR,Jx=Ht.produce;Ht.produceWithPatches.bind(Ht);Ht.setAutoFreeze.bind(Ht);Ht.setUseStrictShallowCopy.bind(Ht);Ht.applyPatches.bind(Ht);Ht.createDraft.bind(Ht);Ht.finishDraft.bind(Ht);function zR(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function FR(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function BR(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var ty=t=>Array.isArray(t)?t:[t];function UR(t){const e=Array.isArray(t[0])?t[0]:t;return BR(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function $R(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var WR=class{constructor(t){this.value=t}deref(){return this.value}},HR=typeof WeakRef<"u"?WeakRef:WR,VR=0,ny=1;function dl(){return{s:VR,v:void 0,o:null,p:null}}function Em(t,e={}){let n=dl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let h=0,g=l;h<g;h++){const m=arguments[h];if(typeof m=="function"||typeof m=="object"&&m!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const w=_.get(m);w===void 0?(a=dl(),_.set(m,a)):a=w}else{let _=a.p;_===null&&(a.p=_=new Map);const w=_.get(m);w===void 0?(a=dl(),_.set(m,a)):a=w}}const c=a;let f;if(a.s===ny?f=a.v:(f=t.apply(null,arguments),s++),c.s=ny,r){const h=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;h!=null&&r(h,f)&&(f=h,s!==0&&s--),i=typeof f=="object"&&f!==null||typeof f=="function"?new HR(f):f}return c.v=f,f}return o.clearCache=()=>{n=dl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function Zx(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},c=i.pop();typeof c=="object"&&(l=c,c=i.pop()),zR(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const f={...n,...l},{memoize:d,memoizeOptions:h=[],argsMemoize:g=Em,argsMemoizeOptions:m=[],devModeChecks:_={}}=f,w=ty(h),v=ty(m),p=UR(i),y=d(function(){return s++,c.apply(null,arguments)},...w),x=g(function(){o++;const S=$R(p,arguments);return a=y.apply(null,S),a},...v);return Object.assign(x,{resultFunc:c,memoizedResultFunc:y,dependencies:p,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:g})};return Object.assign(r,{withTypes:()=>r}),r}var qR=Zx(Em),KR=Object.assign((t,e=qR)=>{FR(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>KR});function e1(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var YR=e1(),GR=e1,QR=(...t)=>{const e=Zx(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(Lr(o)?Qx(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};QR(Em);var XR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?hc:hc.apply(null,arguments)};function ws(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(It(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>RR(r)&&r.type===t,n}var t1=class xo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,xo.prototype)}static get[Symbol.species](){return xo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new xo(...e[0].concat(this)):new xo(...e.concat(this))}};function ry(t){return rr(t)?Jx(t,()=>{}):t}function iy(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(It(10));const r=n.insert(e,t);return t.set(e,r),r}function JR(t){return typeof t=="boolean"}var ZR=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new t1;return n&&(JR(n)?o.push(YR):o.push(GR(n.extraArgument))),o},eO="RTK_autoBatch",n1=t=>e=>{setTimeout(e,t)},tO=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:n1(10),nO=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?tO:t.type==="callback"?t.queueNotification:n1(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(f=>f()))};return Object.assign({},r,{subscribe(f){const d=()=>i&&f(),h=r.subscribe(d);return a.add(f),()=>{h(),a.delete(f)}},dispatch(f){var d;try{return i=!((d=f==null?void 0:f.meta)!=null&&d[eO]),s=!i,s&&(o||(o=!0,l(c))),r.dispatch(f)}finally{i=!0}}})},rO=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new t1(t);return r&&i.push(nO(typeof r=="object"?r:void 0)),i},iO=!0;function sO(t){const e=ZR(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(xm(n))a=kR(n);else throw new Error(It(1));let l;typeof r=="function"?l=r(e):l=e();let c=hc;i&&(c=XR({trace:!iO,...typeof i=="object"&&i}));const f=TR(...l),d=rO(f);let h=typeof o=="function"?o(d):d();const g=c(...h);return Hx(a,s,g)}function r1(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(It(28));if(a in e)throw new Error(It(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function oO(t){return typeof t=="function"}function aO(t,e){let[n,r,i]=r1(e),s;if(oO(t))s=()=>ry(t());else{const a=ry(t);s=()=>a}function o(a=s(),l){let c=[n[l.type],...r.filter(({matcher:f})=>f(l)).map(({reducer:f})=>f)];return c.filter(f=>!!f).length===0&&(c=[i]),c.reduce((f,d)=>{if(d)if(Lr(f)){const g=d(f,l);return g===void 0?f:g}else{if(rr(f))return Jx(f,h=>d(h,l));{const h=d(f,l);if(h===void 0){if(f===null)return f;throw new Error(It(9))}return h}}return f},a)}return o.getInitialState=s,o}var lO="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",cO=(t=21)=>{let e="",n=t;for(;n--;)e+=lO[Math.random()*64|0];return e},uO=Symbol.for("rtk-slice-createasyncthunk");function dO(t,e){return`${t}/${e}`}function fO({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[uO];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(It(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(pO()):i.reducers)||{},l=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(y,x){const b=typeof y=="string"?y:y.type;if(!b)throw new Error(It(12));if(b in c.sliceCaseReducersByType)throw new Error(It(13));return c.sliceCaseReducersByType[b]=x,f},addMatcher(y,x){return c.sliceMatchers.push({matcher:y,reducer:x}),f},exposeAction(y,x){return c.actionCreators[y]=x,f},exposeCaseReducer(y,x){return c.sliceCaseReducersByName[y]=x,f}};l.forEach(y=>{const x=a[y],b={reducerName:y,type:dO(s,y),createNotation:typeof i.reducers=="function"};gO(x)?vO(b,x,f,e):mO(b,x,f)});function d(){const[y={},x=[],b=void 0]=typeof i.extraReducers=="function"?r1(i.extraReducers):[i.extraReducers],S={...y,...c.sliceCaseReducersByType};return aO(i.initialState,C=>{for(let R in S)C.addCase(R,S[R]);for(let R of c.sliceMatchers)C.addMatcher(R.matcher,R.reducer);for(let R of x)C.addMatcher(R.matcher,R.reducer);b&&C.addDefaultCase(b)})}const h=y=>y,g=new Map;let m;function _(y,x){return m||(m=d()),m(y,x)}function w(){return m||(m=d()),m.getInitialState()}function v(y,x=!1){function b(C){let R=C[y];return typeof R>"u"&&x&&(R=w()),R}function S(C=h){const R=iy(g,x,{insert:()=>new WeakMap});return iy(R,C,{insert:()=>{const N={};for(const[T,L]of Object.entries(i.selectors??{}))N[T]=hO(L,C,w,x);return N}})}return{reducerPath:y,getSelectors:S,get selectors(){return S(b)},selectSlice:b}}const p={name:s,reducer:_,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:w,...v(o),injectInto(y,{reducerPath:x,...b}={}){const S=x??o;return y.inject({reducerPath:S,reducer:_},b),{...p,...v(S,!0)}}};return p}}function hO(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var Oa=fO();function pO(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function mO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!yO(r))throw new Error(It(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?ws(t,o):ws(t))}function gO(t){return t._reducerDefinitionType==="asyncThunk"}function yO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function vO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(It(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:c,options:f}=n,d=i(t,s,f);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(e,{fulfilled:o||fl,pending:a||fl,rejected:l||fl,settled:c||fl})}function fl(){}var _O=(t,e)=>{if(typeof t!="function")throw new Error(It(32))},Cm="listenerMiddleware",wO=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=ws(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(It(21));return _O(s),{predicate:i,type:e,effect:s}},xO=Object.assign(t=>{const{type:e,predicate:n,effect:r}=wO(t);return{id:cO(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(It(22))}}},{withTypes:()=>xO}),bO=Object.assign(ws(`${Cm}/add`),{withTypes:()=>bO});ws(`${Cm}/removeAll`);var SO=Object.assign(ws(`${Cm}/remove`),{withTypes:()=>SO});function It(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const i1=Oa({name:"news",initialState:{title:""},reducers:{getTitle(t,e){t.title=e.payload}}}),{getTitle:EO}=i1.actions,CO=i1.reducer;function s1(t,e){return function(){return t.apply(e,arguments)}}const{toString:kO}=Object.prototype,{getPrototypeOf:km}=Object,_u=(t=>e=>{const n=kO.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Un=t=>(t=t.toLowerCase(),e=>_u(e)===t),wu=t=>e=>typeof e===t,{isArray:qs}=Array,ia=wu("undefined");function TO(t){return t!==null&&!ia(t)&&t.constructor!==null&&!ia(t.constructor)&&on(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const o1=Un("ArrayBuffer");function RO(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&o1(t.buffer),e}const OO=wu("string"),on=wu("function"),a1=wu("number"),xu=t=>t!==null&&typeof t=="object",NO=t=>t===!0||t===!1,Il=t=>{if(_u(t)!=="object")return!1;const e=km(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},PO=Un("Date"),jO=Un("File"),IO=Un("Blob"),AO=Un("FileList"),DO=t=>xu(t)&&on(t.pipe),MO=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||on(t.append)&&((e=_u(t))==="formdata"||e==="object"&&on(t.toString)&&t.toString()==="[object FormData]"))},LO=Un("URLSearchParams"),zO=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Na(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),qs(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function l1(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const c1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,u1=t=>!ia(t)&&t!==c1;function Sh(){const{caseless:t}=u1(this)&&this||{},e={},n=(r,i)=>{const s=t&&l1(e,i)||i;Il(e[s])&&Il(r)?e[s]=Sh(e[s],r):Il(r)?e[s]=Sh({},r):qs(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Na(arguments[r],n);return e}const FO=(t,e,n,{allOwnKeys:r}={})=>(Na(e,(i,s)=>{n&&on(i)?t[s]=s1(i,n):t[s]=i},{allOwnKeys:r}),t),BO=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),UO=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},$O=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&km(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},WO=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},HO=t=>{if(!t)return null;if(qs(t))return t;let e=t.length;if(!a1(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},VO=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&km(Uint8Array)),qO=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},KO=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},YO=Un("HTMLFormElement"),GO=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),sy=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),QO=Un("RegExp"),d1=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Na(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},XO=t=>{d1(t,(e,n)=>{if(on(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(on(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},JO=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return qs(t)?r(t):r(String(t).split(e)),n},ZO=()=>{},eN=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ud="abcdefghijklmnopqrstuvwxyz",oy="0123456789",f1={DIGIT:oy,ALPHA:Ud,ALPHA_DIGIT:Ud+Ud.toUpperCase()+oy},tN=(t=16,e=f1.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function nN(t){return!!(t&&on(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const rN=t=>{const e=new Array(10),n=(r,i)=>{if(xu(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=qs(r)?[]:{};return Na(r,(o,a)=>{const l=n(o,i+1);!ia(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},iN=Un("AsyncFunction"),sN=t=>t&&(xu(t)||on(t))&&on(t.then)&&on(t.catch),O={isArray:qs,isArrayBuffer:o1,isBuffer:TO,isFormData:MO,isArrayBufferView:RO,isString:OO,isNumber:a1,isBoolean:NO,isObject:xu,isPlainObject:Il,isUndefined:ia,isDate:PO,isFile:jO,isBlob:IO,isRegExp:QO,isFunction:on,isStream:DO,isURLSearchParams:LO,isTypedArray:VO,isFileList:AO,forEach:Na,merge:Sh,extend:FO,trim:zO,stripBOM:BO,inherits:UO,toFlatObject:$O,kindOf:_u,kindOfTest:Un,endsWith:WO,toArray:HO,forEachEntry:qO,matchAll:KO,isHTMLForm:YO,hasOwnProperty:sy,hasOwnProp:sy,reduceDescriptors:d1,freezeMethods:XO,toObjectSet:JO,toCamelCase:GO,noop:ZO,toFiniteNumber:eN,findKey:l1,global:c1,isContextDefined:u1,ALPHABET:f1,generateString:tN,isSpecCompliantForm:nN,toJSONObject:rN,isAsyncFn:iN,isThenable:sN};function ie(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}O.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const h1=ie.prototype,p1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{p1[t]={value:t}});Object.defineProperties(ie,p1);Object.defineProperty(h1,"isAxiosError",{value:!0});ie.from=(t,e,n,r,i,s)=>{const o=Object.create(h1);return O.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ie.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const oN=null;function Eh(t){return O.isPlainObject(t)||O.isArray(t)}function m1(t){return O.endsWith(t,"[]")?t.slice(0,-2):t}function ay(t,e,n){return t?t.concat(e).map(function(i,s){return i=m1(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function aN(t){return O.isArray(t)&&!t.some(Eh)}const lN=O.toFlatObject(O,{},null,function(e){return/^is[A-Z]/.test(e)});function bu(t,e,n){if(!O.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=O.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,w){return!O.isUndefined(w[_])});const r=n.metaTokens,i=n.visitor||f,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(e);if(!O.isFunction(i))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(O.isDate(m))return m.toISOString();if(!l&&O.isBlob(m))throw new ie("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(m)||O.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,_,w){let v=m;if(m&&!w&&typeof m=="object"){if(O.endsWith(_,"{}"))_=r?_:_.slice(0,-2),m=JSON.stringify(m);else if(O.isArray(m)&&aN(m)||(O.isFileList(m)||O.endsWith(_,"[]"))&&(v=O.toArray(m)))return _=m1(_),v.forEach(function(y,x){!(O.isUndefined(y)||y===null)&&e.append(o===!0?ay([_],x,s):o===null?_:_+"[]",c(y))}),!1}return Eh(m)?!0:(e.append(ay(w,_,s),c(m)),!1)}const d=[],h=Object.assign(lN,{defaultVisitor:f,convertValue:c,isVisitable:Eh});function g(m,_){if(!O.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(m),O.forEach(m,function(v,p){(!(O.isUndefined(v)||v===null)&&i.call(e,v,O.isString(p)?p.trim():p,_,h))===!0&&g(v,_?_.concat(p):[p])}),d.pop()}}if(!O.isObject(t))throw new TypeError("data must be an object");return g(t),e}function ly(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Tm(t,e){this._pairs=[],t&&bu(t,this,e)}const g1=Tm.prototype;g1.append=function(e,n){this._pairs.push([e,n])};g1.toString=function(e){const n=e?function(r){return e.call(this,r,ly)}:ly;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function cN(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function y1(t,e,n){if(!e)return t;const r=n&&n.encode||cN,i=n&&n.serialize;let s;if(i?s=i(e,n):s=O.isURLSearchParams(e)?e.toString():new Tm(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class cy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){O.forEach(this.handlers,function(r){r!==null&&e(r)})}}const v1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},uN=typeof URLSearchParams<"u"?URLSearchParams:Tm,dN=typeof FormData<"u"?FormData:null,fN=typeof Blob<"u"?Blob:null,hN={isBrowser:!0,classes:{URLSearchParams:uN,FormData:dN,Blob:fN},protocols:["http","https","file","blob","url","data"]},_1=typeof window<"u"&&typeof document<"u",pN=(t=>_1&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),mN=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",gN=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_1,hasStandardBrowserEnv:pN,hasStandardBrowserWebWorkerEnv:mN},Symbol.toStringTag,{value:"Module"})),An={...gN,...hN};function yN(t,e){return bu(t,new An.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return An.isNode&&O.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function vN(t){return O.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function _N(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function w1(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&O.isArray(i)?i.length:o,l?(O.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!O.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&O.isArray(i[o])&&(i[o]=_N(i[o])),!a)}if(O.isFormData(t)&&O.isFunction(t.entries)){const n={};return O.forEachEntry(t,(r,i)=>{e(vN(r),i,n,0)}),n}return null}function wN(t,e,n){if(O.isString(t))try{return(e||JSON.parse)(t),O.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Rm={transitional:v1,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=O.isObject(e);if(s&&O.isHTMLForm(e)&&(e=new FormData(e)),O.isFormData(e))return i?JSON.stringify(w1(e)):e;if(O.isArrayBuffer(e)||O.isBuffer(e)||O.isStream(e)||O.isFile(e)||O.isBlob(e))return e;if(O.isArrayBufferView(e))return e.buffer;if(O.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yN(e,this.formSerializer).toString();if((a=O.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return bu(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),wN(e)):e}],transformResponse:[function(e){const n=this.transitional||Rm.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&O.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ie.from(a,ie.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:An.classes.FormData,Blob:An.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],t=>{Rm.headers[t]={}});const Om=Rm,xN=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bN=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&xN[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},uy=Symbol("internals");function co(t){return t&&String(t).trim().toLowerCase()}function Al(t){return t===!1||t==null?t:O.isArray(t)?t.map(Al):String(t)}function SN(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const EN=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function $d(t,e,n,r,i){if(O.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!O.isString(e)){if(O.isString(r))return e.indexOf(r)!==-1;if(O.isRegExp(r))return r.test(e)}}function CN(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function kN(t,e){const n=O.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Su{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,c){const f=co(l);if(!f)throw new Error("header name must be a non-empty string");const d=O.findKey(i,f);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||l]=Al(a))}const o=(a,l)=>O.forEach(a,(c,f)=>s(c,f,l));return O.isPlainObject(e)||e instanceof this.constructor?o(e,n):O.isString(e)&&(e=e.trim())&&!EN(e)?o(bN(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=co(e),e){const r=O.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return SN(i);if(O.isFunction(n))return n.call(this,i,r);if(O.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=co(e),e){const r=O.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||$d(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=co(o),o){const a=O.findKey(r,o);a&&(!n||$d(r,r[a],a,n))&&(delete r[a],i=!0)}}return O.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||$d(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return O.forEach(this,(i,s)=>{const o=O.findKey(r,s);if(o){n[o]=Al(i),delete n[s];return}const a=e?CN(s):String(s).trim();a!==s&&delete n[s],n[a]=Al(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return O.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&O.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[uy]=this[uy]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=co(o);r[a]||(kN(i,o),r[a]=!0)}return O.isArray(e)?e.forEach(s):s(e),this}}Su.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(Su.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});O.freezeMethods(Su);const Qn=Su;function Wd(t,e){const n=this||Om,r=e||n,i=Qn.from(r.headers);let s=r.data;return O.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function x1(t){return!!(t&&t.__CANCEL__)}function Pa(t,e,n){ie.call(this,t??"canceled",ie.ERR_CANCELED,e,n),this.name="CanceledError"}O.inherits(Pa,ie,{__CANCEL__:!0});function TN(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ie("Request failed with status code "+n.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const RN=An.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];O.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),O.isString(r)&&o.push("path="+r),O.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ON(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function NN(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function b1(t,e){return t&&!ON(e)?NN(t,e):e}const PN=An.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=O.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function jN(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function IN(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),f=r[s];o||(o=c),n[i]=l,r[i]=c;let d=s,h=0;for(;d!==i;)h+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const g=f&&c-f;return g?Math.round(h*1e3/g):void 0}}function dy(t,e){let n=0;const r=IN(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),c=s<=o;n=s;const f={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:i};f[e?"download":"upload"]=!0,t(f)}}const AN=typeof XMLHttpRequest<"u",DN=AN&&function(t){return new Promise(function(n,r){let i=t.data;const s=Qn.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function c(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let f;if(O.isFormData(i)){if(An.hasStandardBrowserEnv||An.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((f=s.getContentType())!==!1){const[_,...w]=f?f.split(";").map(v=>v.trim()).filter(Boolean):[];s.setContentType([_||"multipart/form-data",...w].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const _=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(_+":"+w))}const h=b1(t.baseURL,t.url);d.open(t.method.toUpperCase(),y1(h,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function g(){if(!d)return;const _=Qn.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:_,config:t,request:d};TN(function(y){n(y),c()},function(y){r(y),c()},v),d=null}if("onloadend"in d?d.onloadend=g:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(g)},d.onabort=function(){d&&(r(new ie("Request aborted",ie.ECONNABORTED,t,d)),d=null)},d.onerror=function(){r(new ie("Network Error",ie.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||v1;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new ie(w,v.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,t,d)),d=null},An.hasStandardBrowserEnv&&(a&&O.isFunction(a)&&(a=a(t)),a||a!==!1&&PN(h))){const _=t.xsrfHeaderName&&t.xsrfCookieName&&RN.read(t.xsrfCookieName);_&&s.set(t.xsrfHeaderName,_)}i===void 0&&s.setContentType(null),"setRequestHeader"in d&&O.forEach(s.toJSON(),function(w,v){d.setRequestHeader(v,w)}),O.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),o&&o!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",dy(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",dy(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=_=>{d&&(r(!_||_.type?new Pa(null,t,d):_),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const m=jN(h);if(m&&An.protocols.indexOf(m)===-1){r(new ie("Unsupported protocol "+m+":",ie.ERR_BAD_REQUEST,t));return}d.send(i||null)})},Ch={http:oN,xhr:DN};O.forEach(Ch,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const fy=t=>`- ${t}`,MN=t=>O.isFunction(t)||t===null||t===!1,S1={getAdapter:t=>{t=O.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!MN(n)&&(r=Ch[(o=String(n)).toLowerCase()],r===void 0))throw new ie(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(fy).join(`
`):" "+fy(s[0]):"as no adapter specified";throw new ie("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ch};function Hd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Pa(null,t)}function hy(t){return Hd(t),t.headers=Qn.from(t.headers),t.data=Wd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),S1.getAdapter(t.adapter||Om.adapter)(t).then(function(r){return Hd(t),r.data=Wd.call(t,t.transformResponse,r),r.headers=Qn.from(r.headers),r},function(r){return x1(r)||(Hd(t),r&&r.response&&(r.response.data=Wd.call(t,t.transformResponse,r.response),r.response.headers=Qn.from(r.response.headers))),Promise.reject(r)})}const py=t=>t instanceof Qn?{...t}:t;function xs(t,e){e=e||{};const n={};function r(c,f,d){return O.isPlainObject(c)&&O.isPlainObject(f)?O.merge.call({caseless:d},c,f):O.isPlainObject(f)?O.merge({},f):O.isArray(f)?f.slice():f}function i(c,f,d){if(O.isUndefined(f)){if(!O.isUndefined(c))return r(void 0,c,d)}else return r(c,f,d)}function s(c,f){if(!O.isUndefined(f))return r(void 0,f)}function o(c,f){if(O.isUndefined(f)){if(!O.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function a(c,f,d){if(d in e)return r(c,f);if(d in t)return r(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,f)=>i(py(c),py(f),!0)};return O.forEach(Object.keys(Object.assign({},t,e)),function(f){const d=l[f]||i,h=d(t[f],e[f],f);O.isUndefined(h)&&d!==a||(n[f]=h)}),n}const E1="1.6.8",Nm={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Nm[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const my={};Nm.transitional=function(e,n,r){function i(s,o){return"[Axios v"+E1+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ie(i(o," has been removed"+(n?" in "+n:"")),ie.ERR_DEPRECATED);return n&&!my[o]&&(my[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function LN(t,e,n){if(typeof t!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ie("option "+s+" must be "+l,ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ie("Unknown option "+s,ie.ERR_BAD_OPTION)}}const kh={assertOptions:LN,validators:Nm},cr=kh.validators;class yc{constructor(e){this.defaults=e,this.interceptors={request:new cy,response:new cy}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=xs(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&kh.assertOptions(r,{silentJSONParsing:cr.transitional(cr.boolean),forcedJSONParsing:cr.transitional(cr.boolean),clarifyTimeoutError:cr.transitional(cr.boolean)},!1),i!=null&&(O.isFunction(i)?n.paramsSerializer={serialize:i}:kh.assertOptions(i,{encode:cr.function,serialize:cr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&O.merge(s.common,s[n.method]);s&&O.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=Qn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let f,d=0,h;if(!l){const m=[hy.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),h=m.length,f=Promise.resolve(n);d<h;)f=f.then(m[d++],m[d++]);return f}h=a.length;let g=n;for(d=0;d<h;){const m=a[d++],_=a[d++];try{g=m(g)}catch(w){_.call(this,w);break}}try{f=hy.call(this,g)}catch(m){return Promise.reject(m)}for(d=0,h=c.length;d<h;)f=f.then(c[d++],c[d++]);return f}getUri(e){e=xs(this.defaults,e);const n=b1(e.baseURL,e.url);return y1(n,e.params,e.paramsSerializer)}}O.forEach(["delete","get","head","options"],function(e){yc.prototype[e]=function(n,r){return this.request(xs(r||{},{method:e,url:n,data:(r||{}).data}))}});O.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(xs(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}yc.prototype[e]=n(),yc.prototype[e+"Form"]=n(!0)});const Dl=yc;class Pm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Pa(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Pm(function(i){e=i}),cancel:e}}}const zN=Pm;function FN(t){return function(n){return t.apply(null,n)}}function BN(t){return O.isObject(t)&&t.isAxiosError===!0}const Th={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Th).forEach(([t,e])=>{Th[e]=t});const UN=Th;function C1(t){const e=new Dl(t),n=s1(Dl.prototype.request,e);return O.extend(n,Dl.prototype,e,{allOwnKeys:!0}),O.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return C1(xs(t,i))},n}const Be=C1(Om);Be.Axios=Dl;Be.CanceledError=Pa;Be.CancelToken=zN;Be.isCancel=x1;Be.VERSION=E1;Be.toFormData=bu;Be.AxiosError=ie;Be.Cancel=Be.CanceledError;Be.all=function(e){return Promise.all(e)};Be.spread=FN;Be.isAxiosError=BN;Be.mergeConfig=xs;Be.AxiosHeaders=Qn;Be.formToJSON=t=>w1(O.isHTMLForm(t)?new FormData(t):t);Be.getAdapter=S1.getAdapter;Be.HttpStatusCode=UN;Be.default=Be;const k1=Oa({name:"products",initialState:{products:[],carts:[]},reducers:{initProducts(t,e){t.products=e.payload},addToCart(t,e){const n=e.payload,r=t.carts.find(i=>i.id==n);r?r.qty++:t.carts.push({id:e.payload,qty:1})},qtyUpdate(t,e){let{id:n,newQty:r}=e.payload,i=t.carts.find(s=>s.id==n);console.log(i),i&&(i.qty=r)},removeCartItem(t,e){let n=e.payload;t.carts=t.carts.filter(r=>r.id!==n)}}}),{initProducts:$N,addToCart:gy,qtyUpdate:WN,removeCartItem:HN}=k1.actions,jm=()=>async t=>{try{const e=await Be.get("./assets/data/products.json");t($N(e.data))}catch(e){console.error("Error fetching products:",e)}},VN=k1.reducer,T1=Oa({name:"card",initialState:{name:"",series:"",onoff:"",modal:""},reducers:{getName(t,e){t.name=e.payload},getSeries(t,e){t.series=e.payload},getOnoff(t,e){t.onoff=e.payload},getModal(t,e){t.modal=e.payload}}}),{getName:qN,getSeries:KN,getOnoff:R1,getModal:YN}=T1.actions,GN=T1.reducer;var yy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw Ks(e)},Ks=function(t){return new Error("Firebase Database ("+O1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,f=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),r.push(n[f],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(N1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new XN;const h=s<<2|a>>4;if(r.push(h),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const m=c<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P1=function(t){const e=N1(t);return Im.encodeByteArray(e,!0)},vc=function(t){return P1(t).replace(/\./g,"")},Rh=function(t){try{return Im.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){return sa(void 0,t)}function sa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZN(n)||(t[n]=sa(t[n],e[n]));return t}function ZN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=()=>eP().__FIREBASE_DEFAULTS__,nP=()=>{if(typeof process>"u"||typeof yy>"u")return;const t=yy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rh(t[1]);return e&&JSON.parse(e)},iP=()=>{try{return tP()||nP()||rP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},j1=()=>{var t;return(t=iP())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vc(JSON.stringify(n)),vc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sP())}function D1(){return typeof self=="object"&&self.self===self}function oP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M1(){return O1.NODE_ADMIN===!0}function aP(){try{return typeof indexedDB=="object"}catch{return!1}}function lP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="FirebaseError";class ji extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cP,Object.setPrototypeOf(this,ji.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eu.prototype.create)}}class Eu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ji(i,a,r)}}function uP(t,e){return t.replace(dP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){return JSON.parse(t)}function $e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=oa(Rh(s[0])||""),n=oa(Rh(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},fP=function(t){const e=L1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hP=function(t){const e=L1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Oh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _c(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Nh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vy(s)&&vy(o)){if(!Nh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),f=1518500249):(c=s^o^a,f=1859775393):d<60?(c=s&o|a&(s|o),f=2400959708):(c=s^o^a,f=3395469782);const h=(i<<5|i>>>27)+c+l+f+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function gP(t,e){const n=new yP(t,e);return n.subscribe.bind(n)}class yP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vd),i.error===void 0&&(i.error=Vd),i.complete===void 0&&(i.complete=Vd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vd(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function At(t,e){return`${t} failed: ${e} argument `}function Ye(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(At(t,e)+"must be a valid function.")}function _y(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(At(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xP(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wP(t){return t===ni?void 0:t}function xP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ph(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=[];var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const z1={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},bP=he.INFO,SP={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},EP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=SP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ku{constructor(e){this.name=e,this._logLevel=bP,this._logHandler=EP,this._userLogHandler=null,Dm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}function CP(t){Dm.forEach(e=>{e.setLogLevel(t)})}function kP(t,e){for(const n of Dm){let r=null;e&&e.level&&(r=z1[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:he[s].toLowerCase(),message:a,args:o,type:i.name})}}}const TP=(t,e)=>e.some(n=>t instanceof n);let wy,xy;function RP(){return wy||(wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OP(){return xy||(xy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F1=new WeakMap,jh=new WeakMap,B1=new WeakMap,qd=new WeakMap,Mm=new WeakMap;function NP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&F1.set(n,t)}).catch(()=>{}),Mm.set(e,t),e}function PP(t){if(jh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jh.set(t,e)}let Ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jP(t){Ih=t(Ih)}function IP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kd(this),e,...n);return B1.set(r,e.sort?e.sort():[e]),Or(r)}:OP().includes(t)?function(...e){return t.apply(Kd(this),e),Or(F1.get(this))}:function(...e){return Or(t.apply(Kd(this),e))}}function AP(t){return typeof t=="function"?IP(t):(t instanceof IDBTransaction&&PP(t),TP(t,RP())?new Proxy(t,Ih):t)}function Or(t){if(t instanceof IDBRequest)return NP(t);if(qd.has(t))return qd.get(t);const e=AP(t);return e!==t&&(qd.set(t,e),Mm.set(e,t)),e}const Kd=t=>Mm.get(t);function DP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Or(o.result),l.oldVersion,l.newVersion,Or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const MP=["get","getKey","getAll","getAllKeys","count"],LP=["put","add","delete","clear"],Yd=new Map;function by(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yd.get(e))return Yd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=LP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Yd.set(e,s),s}jP(t=>({...t,get:(e,n,r)=>by(e,n)||t.get(e,n,r),has:(e,n)=>!!by(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wc="@firebase/app",Ah="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new ku("@firebase/app"),BP="@firebase/app-compat",UP="@firebase/analytics-compat",$P="@firebase/analytics",WP="@firebase/app-check-compat",HP="@firebase/app-check",VP="@firebase/auth",qP="@firebase/auth-compat",KP="@firebase/database",YP="@firebase/database-compat",GP="@firebase/functions",QP="@firebase/functions-compat",XP="@firebase/installations",JP="@firebase/installations-compat",ZP="@firebase/messaging",ej="@firebase/messaging-compat",tj="@firebase/performance",nj="@firebase/performance-compat",rj="@firebase/remote-config",ij="@firebase/remote-config-compat",sj="@firebase/storage",oj="@firebase/storage-compat",aj="@firebase/firestore",lj="@firebase/firestore-compat",cj="firebase",uj="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]",dj={[wc]:"fire-core",[BP]:"fire-core-compat",[$P]:"fire-analytics",[UP]:"fire-analytics-compat",[HP]:"fire-app-check",[WP]:"fire-app-check-compat",[VP]:"fire-auth",[qP]:"fire-auth-compat",[KP]:"fire-rtdb",[YP]:"fire-rtdb-compat",[GP]:"fire-fn",[QP]:"fire-fn-compat",[XP]:"fire-iid",[JP]:"fire-iid-compat",[ZP]:"fire-fcm",[ej]:"fire-fcm-compat",[tj]:"fire-perf",[nj]:"fire-perf-compat",[rj]:"fire-rc",[ij]:"fire-rc-compat",[sj]:"fire-gcs",[oj]:"fire-gcs-compat",[aj]:"fire-fst",[lj]:"fire-fst-compat","fire-js":"fire-js",[cj]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map,bs=new Map,Ss=new Map;function aa(t,e){try{t.container.addComponent(e)}catch(n){Si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function U1(t,e){t.container.addOrOverwriteComponent(e)}function Ei(t){const e=t.name;if(Ss.has(e))return Si.debug(`There were multiple attempts to register component ${e}.`),!1;Ss.set(e,t);for(const n of Fr.values())aa(n,t);for(const n of bs.values())aa(n,t);return!0}function $1(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fj(t,e,n=zr){$1(t,e).clearInstance(n)}function W1(t){return t.options!==void 0}function hj(t){return t.settings!==void 0}function pj(){Ss.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mj={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new Eu("app","Firebase",mj);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H1=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gj extends H1{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Sn(wc,Ah,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){zm(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw an.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=uj;function Lm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=j1()),!n)throw an.create("no-options");const s=Fr.get(i);if(s){if(Nh(n,s.options)&&Nh(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new Am(i);for(const l of Ss.values())o.addComponent(l);const a=new H1(n,r,o);return Fr.set(i,a),a}function yj(t,e){if(D1())throw an.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;W1(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((f,d)=>Math.imul(31,f)+d.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw an.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=bs.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new Am(s);for(const c of Ss.values())a.addComponent(c);const l=new gj(n,e,s,a);return bs.set(s,l),l}function vj(t=zr){const e=Fr.get(t);if(!e&&t===zr&&j1())return Lm();if(!e)throw an.create("no-app",{appName:t});return e}function _j(){return Array.from(Fr.values())}async function zm(t){let e=!1;const n=t.name;Fr.has(n)?(e=!0,Fr.delete(n)):bs.has(n)&&t.decRefCount()<=0&&(bs.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Sn(t,e,n){var r;let i=(r=dj[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Si.warn(a.join(" "));return}Ei(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function V1(t,e){if(t!==null&&typeof t!="function")throw an.create("invalid-log-argument");kP(t,e)}function q1(t){CP(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wj="firebase-heartbeat-database",xj=1,la="firebase-heartbeat-store";let Gd=null;function K1(){return Gd||(Gd=DP(wj,xj,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(la)}catch(n){console.warn(n)}}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),Gd}async function bj(t){try{const n=(await K1()).transaction(la),r=await n.objectStore(la).get(Y1(t));return await n.done,r}catch(e){if(e instanceof ji)Si.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Si.warn(n.message)}}}async function Sy(t,e){try{const r=(await K1()).transaction(la,"readwrite");await r.objectStore(la).put(e,Y1(t)),await r.done}catch(n){if(n instanceof ji)Si.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Si.warn(r.message)}}}function Y1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sj=1024,Ej=30*24*60*60*1e3;class Cj{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tj(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ey();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ej}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ey(),{heartbeatsToSend:r,unsentEntries:i}=kj(this._heartbeatsCache.heartbeats),s=vc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ey(){return new Date().toISOString().substring(0,10)}function kj(t,e=Sj){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tj{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aP()?lP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bj(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cy(t){return vc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rj(t){Ei(new Tn("platform-logger",e=>new zP(e),"PRIVATE")),Ei(new Tn("heartbeat",e=>new Cj(e),"PRIVATE")),Sn(wc,Ah,t),Sn(wc,Ah,"esm2017"),Sn("fire-js","")}Rj("");const Oj=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ji,SDK_VERSION:Tu,_DEFAULT_ENTRY_NAME:zr,_addComponent:aa,_addOrOverwriteComponent:U1,_apps:Fr,_clearComponents:pj,_components:Ss,_getProvider:$1,_isFirebaseApp:W1,_isFirebaseServerApp:hj,_registerComponent:Ei,_removeServiceInstance:fj,_serverApps:bs,deleteApp:zm,getApp:vj,getApps:_j,initializeApp:Lm,initializeServerApp:yj,onLog:V1,registerVersion:Sn,setLogLevel:q1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(e,n){this._delegate=e,this.firebase=n,aa(e,new Tn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),zm(this._delegate)))}_getService(e,n=zr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=zr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){aa(this._delegate,e)}_addOrOverwriteComponent(e){U1(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pj={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ky=new Eu("app-compat","Firebase",Pj);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jj(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Sn,setLogLevel:q1,onLog:V1,apps:null,SDK_VERSION:Tu,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Oj}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||zr,!Vt(e,c))throw ky.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,f={}){const d=Lm(c,f);if(Vt(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const f=c.name,d=f.replace("-compat","");if(Ei(c)&&c.type==="PUBLIC"){const h=(g=i())=>{if(typeof g[d]!="function")throw ky.create("invalid-app-argument",{appName:f});return g[d]()};c.serviceProps!==void 0&&sa(h,c.serviceProps),n[d]=h,t.prototype[d]=function(...g){return this._getService.bind(this,f).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[d]:null}function l(c,f){return f==="serverAuth"?null:f}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(){const t=jj(Nj);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:G1,extendNamespace:e,createSubscribe:gP,ErrorFactory:Eu,deepExtend:sa});function e(n){sa(t,n)}return t}const Ij=G1();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new ku("@firebase/app-compat"),Aj="@firebase/app-compat",Dj="0.2.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mj(t){Sn(Aj,Dj,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(D1()&&self.firebase!==void 0){Ty.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ty.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ru=Ij;Mj();var Lj="firebase",zj="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ru.registerVersion(Lj,zj,"app-compat");var Ry={};const Oy="@firebase/database",Ny="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q1="";function X1(t){Q1=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bj{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Fj(e)}}catch{}return new Bj},ai=J1("localStorage"),Dh=J1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new ku("@firebase/database"),Z1=function(){let t=1;return function(){return t++}}(),eb=function(t){const e=_P(t),n=new mP;n.update(e);const r=n.digest();return Im.encodeByteArray(r)},ja=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ja.apply(null,r):typeof r=="object"?e+=$e(r):e+=r,e+=" "}return e};let fi=null,Py=!0;const tb=function(t,e){D(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(as.logLevel=he.VERBOSE,fi=as.log.bind(as),e&&Dh.set("logging_enabled",!0)):typeof t=="function"?fi=t:(fi=null,Dh.remove("logging_enabled"))},Xe=function(...t){if(Py===!0&&(Py=!1,fi===null&&Dh.get("logging_enabled")===!0&&tb(!0)),fi){const e=ja.apply(null,t);fi(e)}},Ia=function(t){return function(...e){Xe(t,...e)}},Mh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ja(...t);as.error(e)},Fn=function(...t){const e=`FIREBASE FATAL ERROR: ${ja(...t)}`;throw as.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+ja(...t);as.warn(e)},Uj=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ou=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$j=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Br="[MIN_NAME]",ir="[MAX_NAME]",Ii=function(t,e){if(t===e)return 0;if(t===Br||e===ir)return-1;if(e===Br||t===ir)return 1;{const n=jy(t),r=jy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Wj=function(t,e){return t===e?0:t<e?-1:1},uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+$e(e))},Fm=function(t){if(typeof t!="object"||t===null)return $e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=$e(e[r]),n+=":",n+=Fm(t[e[r]]);return n+="}",n},nb=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const rb=function(t){D(!Ou(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const f=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(f.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Hj=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vj=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qj(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Kj=new RegExp("^-?(0*)\\d{1,10}$"),Yj=-2147483648,Gj=2147483647,jy=function(t){if(Kj.test(t)){const e=Number(t);if(e>=Yj&&e<=Gj)return e}return null},Ys=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},Qj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},jo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ls.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="5",ib="v",sb="s",ob="r",ab="f",lb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cb="ls",ub="p",Lh="ac",db="websocket",fb="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ai.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ai.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Zj(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pb(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===db)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fb)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Zj(t)&&(n.ns=t.namespace);const i=[];return Ze(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd={},Xd={};function Um(t){const e=t.toString();return Qd[e]||(Qd[e]=new e2),Qd[e]}function t2(t,e){const n=t.toString();return Xd[n]||(Xd[n]=e()),Xd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ys(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="start",r2="close",i2="pLPCommand",s2="pRTLPCB",mb="id",gb="pw",yb="ser",o2="cb",a2="seg",l2="ts",c2="d",u2="dframe",vb=1870,_b=30,d2=vb-_b,f2=25e3,h2=3e4;class vr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ia(e),this.stats_=Um(n),this.urlFn=l=>(this.appCheckToken&&(l[Lh]=this.appCheckToken),pb(n,fb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new n2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(h2)),$j(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $m((...s)=>{const[o,a,l,c,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Iy)this.id=a,this.password=l;else if(o===r2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Iy]="t",r[yb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[o2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ib]=Bm,this.transportSessionId&&(r[sb]=this.transportSessionId),this.lastSessionId&&(r[cb]=this.lastSessionId),this.applicationId&&(r[ub]=this.applicationId),this.appCheckToken&&(r[Lh]=this.appCheckToken),typeof location<"u"&&location.hostname&&lb.test(location.hostname)&&(r[ob]=ab);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vr.forceAllow_=!0}static forceDisallow(){vr.forceDisallow_=!0}static isAvailable(){return vr.forceAllow_?!0:!vr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hj()&&!Vj()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=P1(n),i=nb(r,d2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[u2]="t",r[mb]=e,r[gb]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $m{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Z1(),window[i2+this.uniqueCallbackIdentifier]=e,window[s2+this.uniqueCallbackIdentifier]=n,this.myIFrame=$m.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Xe("frame writing exception"),a.stack&&Xe(a.stack),Xe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mb]=this.myID,e[gb]=this.myPW,e[yb]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_b+r.length<=vb;){const o=this.pendingSegs.shift();r=r+"&"+a2+i+"="+o.seg+"&"+l2+i+"="+o.ts+"&"+c2+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(f2)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=16384,m2=45e3;let xc=null;typeof MozWebSocket<"u"?xc=MozWebSocket:typeof WebSocket<"u"&&(xc=WebSocket);class Zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ia(this.connId),this.stats_=Um(n),this.connURL=Zt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[ib]=Bm,typeof location<"u"&&location.hostname&&lb.test(location.hostname)&&(o[ob]=ab),n&&(o[sb]=n),r&&(o[cb]=r),i&&(o[Lh]=i),s&&(o[ub]=s),pb(e,db,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ai.set("previous_websocket_failure",!0);try{let r;M1(),this.mySock=new xc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xc!==null&&!Zt.forceDisallow_}static previouslyFailed(){return ai.isInMemoryStorage||ai.get("previous_websocket_failure")===!0}markConnectionHealthy(){ai.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=oa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=nb(n,p2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(m2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vr,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let r=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const i=this.transports_=[];for(const s of Es.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=6e4,y2=5e3,v2=10*1024,_2=100*1024,Jd="t",Ay="d",w2="s",Dy="r",x2="e",My="o",Ly="a",zy="n",Fy="p",b2="h";class S2{constructor(e,n,r,i,s,o,a,l,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ia("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=jo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>v2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jd in e){const n=e[Jd];n===Ly?this.upgradeIfSecondaryHealthy_():n===Dy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===My&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ly,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=uo("t",e),r=uo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=uo(Jd,e);if(Ay in e){const r=e[Ay];if(n===b2){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===zy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===w2?this.onConnectionShutdown_(r):n===Dy?this.onReset_(r):n===x2?Mh("Server Error: "+r):n===My?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bm!==r&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),jo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(g2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):jo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(y2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ai.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends xb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!A1()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bc}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=32,Uy=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new ue("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ur(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function Wm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function E2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ca(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function bb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ue)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ue(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function vt(t,e){const n=X(t),r=X(e);if(n===null)return e;if(n===r)return vt(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function C2(t,e){const n=ca(t,0),r=ca(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ii(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Hm(t,e){if(Ur(t)!==Ur(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ur(t)>Ur(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class k2{constructor(e,n){this.errorPrefix_=n,this.parts_=ca(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Cu(this.parts_[r]);Sb(this)}}function T2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Cu(e),Sb(t)}function R2(t){const e=t.parts_.pop();t.byteLength_-=Cu(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sb(t){if(t.byteLength_>Uy)throw new Error(t.errorPrefix_+"has a key path longer than "+Uy+" bytes ("+t.byteLength_+").");if(t.parts_.length>By)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+By+") or object contains a cycle "+ri(t))}function ri(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm extends xb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vm}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=1e3,O2=60*5*1e3,$y=30*1e3,N2=1.3,P2=3e4,j2="server_kill",Wy=3;class Xn extends wb{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xn.nextPersistentConnectionId_++,this.log_=Ia("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fo,this.maxReconnectDelay_=O2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!M1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_($e(s)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new kt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Xn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const r=bi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$y)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mh("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>P2&&(this.reconnectDelay_=fo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*N2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){D(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new S2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ut(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(j2)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ut(d),l())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Oh(this.interruptReasons_)&&(this.reconnectDelay_=fo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Fm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ue(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wy&&(this.reconnectDelay_=$y,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Q1.replace(/\./g,"-")]=1,A1()?e["framework.cordova"]=1:oP()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bc.getInstance().currentlyOnline();return Oh(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Z(Br,e),i=new Z(Br,n);return this.compare(r,i)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;class Eb extends Nu{static get __EMPTY_NODE(){return hl}static set __EMPTY_NODE(e){hl=e}compare(e,n){return Ii(e.name,n.name)}isDefinedOn(e){throw Ks("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(ir,hl)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,hl)}toString(){return".key"}}const Ln=new Eb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Rt.EMPTY_NODE,this.right=s??Rt.EMPTY_NODE}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class I2{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,n=Rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pl(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new I2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(t,e){return Ii(t.name,e.name)}function qm(t,e){return Ii(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh;function D2(t){zh=t}const Cb=function(t){return typeof t=="number"?"number:"+rb(t):"string:"+t},kb=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else D(t===zh||t.isEmpty(),"priority of unexpected type.");D(t===zh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hy;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kb(this.priorityNode_)}static set __childrenNodeConstructor(e){Hy=e}static get __childrenNodeConstructor(){return Hy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:X(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=X(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=rb(this.value_):e+=this.value_,this.lazyHash_=eb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(r);return D(i>=0,"Unknown leaf type: "+n),D(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tb,Rb;function M2(t){Tb=t}function L2(t){Rb=t}class z2 extends Nu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ii(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(ir,new qe("[PRIORITY-POST]",Rb))}makePost(e,n){const r=Tb(e);return new Z(n,new qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ye=new z2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=Math.log(2);class B2{constructor(e){const n=s=>parseInt(Math.log(s)/F2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sc=function(t,e,n,r){t.sort(e);const i=function(l,c){const f=c-l;let d,h;if(f===0)return null;if(f===1)return d=t[l],h=n?n(d):d,new Ge(h,d.node,Ge.BLACK,null,null);{const g=parseInt(f/2,10)+l,m=i(l,g),_=i(g+1,c);return d=t[g],h=n?n(d):d,new Ge(h,d.node,Ge.BLACK,m,_)}},s=function(l){let c=null,f=null,d=t.length;const h=function(m,_){const w=d-m,v=d;d-=m;const p=i(w+1,v),y=t[w],x=n?n(y):y;g(new Ge(x,y.node,_,null,p))},g=function(m){c?(c.left=m,c=m):(f=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(m+1));_?h(w,Ge.BLACK):(h(w,Ge.BLACK),h(w,Ge.RED))}return f},o=new B2(t.length),a=s(o);return new Rt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zd;const zi={};class Yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(zi&&ye,"ChildrenNode.ts has not been loaded"),Zd=Zd||new Yn({".priority":zi},{".priority":ye}),Zd}get(e){const n=bi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Rt?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Ln,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Sc(r,e.getCompare()):a=zi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new Yn(f,c)}addToIndexes(e,n){const r=_c(this.indexes_,(i,s)=>{const o=bi(this.indexSet_,s);if(D(o,"Missing index implementation for "+s),i===zi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Sc(a,o.getCompare())}else return zi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new Yn(r,this.indexSet_)}removeFromIndexes(e,n){const r=_c(this.indexes_,i=>{if(i===zi)return i;{const s=n.get(e.name);return s?i.remove(new Z(e.name,s)):i}});return new Yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&kb(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ho||(ho=new Y(new Rt(qm),null,Yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ho}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ho:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ho:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=X(e);if(r===null)return n;{D(X(e)!==".priority"||Ur(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(pe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ye,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cb(this.getPriority().val())+":"),this.forEachChild(ye,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":eb(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Aa?-1:0}withIndex(e){if(e===Ln||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ln||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ye),i=n.getIterator(ye);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ln?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class U2 extends Y{constructor(){super(new Rt(qm),Y.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Aa=new U2;Object.defineProperties(Z,{MIN:{value:new Z(Br,Y.EMPTY_NODE)},MAX:{value:new Z(ir,Aa)}});Eb.__EMPTY_NODE=Y.EMPTY_NODE;qe.__childrenNodeConstructor=Y;D2(Aa);L2(Aa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=!0;function Oe(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,Oe(e))}if(!(t instanceof Array)&&$2){const n=[];let r=!1;if(Ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Oe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const s=Sc(n,A2,o=>o.name,qm);if(r){const o=Sc(n,ye.getCompare());return new Y(s,Oe(e),new Yn({".priority":o},{".priority":ye}))}else return new Y(s,Oe(e),Yn.Default)}else{let n=Y.EMPTY_NODE;return Ze(t,(r,i)=>{if(Vt(t,r)&&r.substring(0,1)!=="."){const s=Oe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Oe(e))}}M2(Oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends Nu{constructor(e){super(),this.indexPath_=e,D(!J(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ii(e.name,n.name):s}makePost(e,n){const r=Oe(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new Z(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Aa);return new Z(ir,e)}toString(){return ca(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2 extends Nu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ii(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const r=Oe(e);return new Z(n,r)}toString(){return".value"}}const Ym=new W2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(t){return{type:"value",snapshotNode:t}}function Cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ua(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function da(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function H2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ua(n,a)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Cs(n,r)):o.trackChildChange(da(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,s)=>{n.hasChild(i)||r.trackChildChange(ua(i,s))}),n.isLeafNode()||n.forEachChild(ye,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(da(i,s,o))}else r.trackChildChange(Cs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.indexedFilter_=new Gm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fa.getStartPost_(e),this.endPost_=fa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Z(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild(ye,(o,a)=>{s.matches(new Z(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new fa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Z(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const a=e;D(a.numChildren()===this.limit_,"");const l=new Z(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(f&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(da(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ua(n,d));const _=a.updateImmediateChild(n,Y.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Cs(h.name,h.node)),_.updateImmediateChild(h.name,h.node)):_}}else return r.isEmpty()?e:f&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ua(c.name,c.node)),s.trackChildChange(Cs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Br}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new Pu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function q2(t){return t.loadsAllData()?new Gm(t.getIndex()):t.hasLimit()?new V2(t):new fa(t)}function K2(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Y2(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Fh(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function G2(t,e,n){let r;return t.index_===Ln||n?r=Fh(t,e,n):r=Fh(t,e,ir),r.startAfterSet_=!0,r}function Bh(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Q2(t,e,n){let r;return t.index_===Ln||n?r=Bh(t,e,n):r=Bh(t,e,Br),r.endBeforeSet_=!0,r}function ju(t,e){const n=t.copy();return n.index_=e,n}function Vy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===Ym?n="$value":t.index_===Ln?n="$key":(D(t.index_ instanceof Km,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=$e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=$e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+$e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=$e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+$e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends wb{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ia("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ec.getListenId_(e,r),a={};this.listens_[o]=a;const l=Vy(e._queryParams);this.restRequest_(s+".json",l,(c,f)=>{let d=f;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),bi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Ec.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vy(e._queryParams),r=e._path.toString(),i=new kt;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pP(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=oa(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return{value:null,children:new Map}}function Gs(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=X(e);t.children.has(r)||t.children.set(r,Cc());const i=t.children.get(r);e=pe(e),Gs(i,e,n)}}function Uh(t,e){if(J(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ye,(r,i)=>{Gs(t,new ue(r),i)}),Uh(t,e)}}else if(t.children.size>0){const n=X(e);return e=pe(e),t.children.has(n)&&Uh(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function $h(t,e,n){t.value!==null?n(e,t.value):J2(t,(r,i)=>{const s=new ue(e.toString()+"/"+r);$h(i,s,n)})}function J2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=10*1e3,eI=30*1e3,tI=5*60*1e3;class nI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Z2(e);const r=Ky+(eI-Ky)*Math.random();jo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ze(e,(i,s)=>{s>0&&Vt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),jo(this.reportStats_.bind(this),Math.floor(Math.random()*2*tI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wn||(wn={}));function Qm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wn.ACK_USER_WRITE,this.source=Qm()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new kc(oe(),n,this.revert)}}else return D(X(this.path)===e,"operationForChild called for unrelated child."),new kc(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.source=e,this.path=n,this.type=wn.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new ha(this.source,oe()):new ha(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wn.OVERWRITE}operationForChild(e){return J(this.path)?new Ci(this.source,oe(),this.snap.getImmediateChild(e)):new Ci(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wn.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new Ci(this.source,oe(),n.value):new ks(this.source,oe(),n)}else return D(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(H2(o.childName,o.snapshotNode))}),po(t,i,"child_removed",e,r,n),po(t,i,"child_added",e,r,n),po(t,i,"child_moved",s,r,n),po(t,i,"child_changed",e,r,n),po(t,i,"value",e,r,n),i}function po(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>oI(t,a,l)),o.forEach(a=>{const l=sI(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function sI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oI(t,e,n){if(e.childName==null||n.childName==null)throw Ks("Should only compare child_ events.");const r=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t,e){return{eventCache:t,serverCache:e}}function Io(t,e,n,r){return Iu(new $r(e,n,r),t.serverCache)}function Nb(t,e,n,r){return Iu(t.eventCache,new $r(e,n,r))}function Tc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ki(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef;const aI=()=>(ef||(ef=new Rt(Wj)),ef);class me{constructor(e,n=aI()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return Ze(e,(r,i)=>{n=n.set(new ue(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(J(e))return null;{const r=X(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(pe(e),n);return s!=null?{path:ke(new ue(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=X(e),r=this.children.get(n);return r!==null?r.subtree(pe(e)):new me(null)}}set(e,n){if(J(e))return new me(n,this.children);{const r=X(e),s=(this.children.get(r)||new me(null)).set(pe(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=X(e),r=this.children.get(n);if(r){const i=r.remove(pe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=X(e),r=this.children.get(n);return r?r.get(pe(e)):null}}setTree(e,n){if(J(e))return n;{const r=X(e),s=(this.children.get(r)||new me(null)).setTree(pe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=X(e),o=this.children.get(s);return o?o.findOnPath_(pe(e),ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=X(e),s=this.children.get(i);return s?s.foreachOnPath_(pe(e),ke(n,i),r):new me(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new me(null))}}function Ao(t,e,n){if(J(e))return new En(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=vt(i,e);return s=s.updateChild(o,n),new En(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new En(s)}}}function Wh(t,e,n){let r=t;return Ze(n,(i,s)=>{r=Ao(r,ke(e,i),s)}),r}function Yy(t,e){if(J(e))return En.empty();{const n=t.writeTree_.setTree(e,new me(null));return new En(n)}}function Hh(t,e){return Ai(t,e)!=null}function Ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(vt(n.path,e)):null}function Gy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(r,i)=>{e.push(new Z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Z(r,i.value))}),e}function Nr(t,e){if(J(e))return t;{const n=Ai(t,e);return n!=null?new En(new me(n)):new En(t.writeTree_.subtree(e))}}function Vh(t){return t.writeTree_.isEmpty()}function Ts(t,e){return Pb(oe(),t.writeTree_,e)}function Pb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(D(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Pb(ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t,e){return Db(e,t)}function lI(t,e,n,r,i){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ao(t.visibleWrites,e,n)),t.lastWriteId=r}function cI(t,e,n,r){D(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Wh(t.visibleWrites,e,n),t.lastWriteId=r}function uI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function dI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fI(a,r.path)?i=!1:tn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return hI(t),!0;if(r.snap)t.visibleWrites=Yy(t.visibleWrites,r.path);else{const a=r.children;Ze(a,l=>{t.visibleWrites=Yy(t.visibleWrites,ke(r.path,l))})}return!0}else return!1}function fI(t,e){if(t.snap)return tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tn(ke(t.path,n),e))return!0;return!1}function hI(t){t.visibleWrites=jb(t.allWrites,pI,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pI(t){return t.visible}function jb(t,e,n){let r=En.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)tn(n,o)?(a=vt(n,o),r=Ao(r,a,s.snap)):tn(o,n)&&(a=vt(o,n),r=Ao(r,oe(),s.snap.getChild(a)));else if(s.children){if(tn(n,o))a=vt(n,o),r=Wh(r,a,s.children);else if(tn(o,n))if(a=vt(o,n),J(a))r=Wh(r,oe(),s.children);else{const l=bi(s.children,X(a));if(l){const c=l.getChild(pe(a));r=Ao(r,oe(),c)}}}else throw Ks("WriteRecord should have .snap or .children")}}return r}function Ib(t,e,n,r,i){if(!r&&!i){const s=Ai(t.visibleWrites,e);if(s!=null)return s;{const o=Nr(t.visibleWrites,e);if(Vh(o))return n;if(n==null&&!Hh(o,oe()))return null;{const a=n||Y.EMPTY_NODE;return Ts(o,a)}}}else{const s=Nr(t.visibleWrites,e);if(!i&&Vh(s))return n;if(!i&&n==null&&!Hh(s,oe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(tn(c.path,e)||tn(e,c.path))},a=jb(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return Ts(a,l)}}}function mI(t,e,n){let r=Y.EMPTY_NODE;const i=Ai(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Nr(t.visibleWrites,e);return n.forEachChild(ye,(o,a)=>{const l=Ts(Nr(s,new ue(o)),a);r=r.updateImmediateChild(o,l)}),Gy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Nr(t.visibleWrites,e);return Gy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gI(t,e,n,r,i){D(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ke(e,n);if(Hh(t.visibleWrites,s))return null;{const o=Nr(t.visibleWrites,s);return Vh(o)?i.getChild(n):Ts(o,i.getChild(n))}}function yI(t,e,n,r){const i=ke(e,n),s=Ai(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Nr(t.visibleWrites,i);return Ts(o,r.getNode().getImmediateChild(n))}else return null}function vI(t,e){return Ai(t.visibleWrites,e)}function _I(t,e,n,r,i,s,o){let a;const l=Nr(t.visibleWrites,e),c=Ai(l,oe());if(c!=null)a=c;else if(n!=null)a=Ts(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&f.length<i;)d(g,r)!==0&&f.push(g),g=h.getNext();return f}else return[]}function wI(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function Rc(t,e,n,r){return Ib(t.writeTree,t.treePath,e,n,r)}function Zm(t,e){return mI(t.writeTree,t.treePath,e)}function Qy(t,e,n,r){return gI(t.writeTree,t.treePath,e,n,r)}function Oc(t,e){return vI(t.writeTree,ke(t.treePath,e))}function xI(t,e,n,r,i,s){return _I(t.writeTree,t.treePath,e,n,r,i,s)}function eg(t,e,n){return yI(t.writeTree,t.treePath,e,n)}function Ab(t,e){return Db(ke(t.treePath,e),t.writeTree)}function Db(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,da(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ua(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Cs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,da(r,e.snapshotNode,i.oldSnap));else throw Ks("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Mb=new SI;class tg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return eg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ki(this.viewCache_),s=xI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){return{filter:t}}function CI(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function kI(t,e,n,r,i){const s=new bI;let o,a;if(n.type===wn.OVERWRITE){const c=n;c.source.fromUser?o=qh(t,e,c.path,c.snap,r,i,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Nc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===wn.MERGE){const c=n;c.source.fromUser?o=RI(t,e,c.path,c.children,r,i,s):(D(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Kh(t,e,c.path,c.children,r,i,a,s))}else if(n.type===wn.ACK_USER_WRITE){const c=n;c.revert?o=PI(t,e,c.path,r,i,s):o=OI(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===wn.LISTEN_COMPLETE)o=NI(t,e,n.path,r,s);else throw Ks("Unknown operation type: "+n.type);const l=s.getChanges();return TI(e,o,l),{viewCache:o,changes:l}}function TI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Tc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ob(Tc(e)))}}function Lb(t,e,n,r,i,s){const o=e.eventCache;if(Oc(r,n)!=null)return e;{let a,l;if(J(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ki(e),f=c instanceof Y?c:Y.EMPTY_NODE,d=Zm(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Rc(r,ki(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=X(n);if(c===".priority"){D(Ur(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const d=Qy(r,n,f,l);d!=null?a=t.filter.updatePriority(f,d):a=o.getNode()}else{const f=pe(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Qy(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(f,h):d=o.getNode().getImmediateChild(c)}else d=eg(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,f,i,s):a=o.getNode()}}return Io(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Nc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=f.updateFullNode(l.getNode(),g,null)}else{const g=X(n);if(!l.isCompleteForPath(n)&&Ur(n)>1)return e;const m=pe(n),w=l.getNode().getImmediateChild(g).updateChild(m,r);g===".priority"?c=f.updatePriority(l.getNode(),w):c=f.updateChild(l.getNode(),g,w,m,Mb,null)}const d=Nb(e,c,l.isFullyInitialized()||J(n),f.filtersNodes()),h=new tg(i,d,s);return Lb(t,d,n,i,h,a)}function qh(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const f=new tg(i,e,s);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Io(e,c,!0,t.filter.filtersNodes());else{const d=X(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Io(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=pe(n),g=a.getNode().getImmediateChild(d);let m;if(J(h))m=r;else{const _=f.getCompleteChild(d);_!=null?Wm(h)===".priority"&&_.getChild(bb(h)).isEmpty()?m=_:m=_.updateChild(h,r):m=Y.EMPTY_NODE}if(g.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),d,m,h,f,o);l=Io(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Xy(t,e){return t.eventCache.isCompleteForChild(e)}function RI(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const f=ke(n,l);Xy(e,X(f))&&(a=qh(t,a,f,c,i,s,o))}),r.foreach((l,c)=>{const f=ke(n,l);Xy(e,X(f))||(a=qh(t,a,f,c,i,s,o))}),a}function Jy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Kh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=r:c=new me(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(f.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),m=Jy(t,g,h);l=Nc(t,l,new ue(d),m,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!f.hasChild(d)&&!g){const m=e.serverCache.getNode().getImmediateChild(d),_=Jy(t,m,h);l=Nc(t,l,new ue(d),_,i,s,o,a)}}),l}function OI(t,e,n,r,i,s,o){if(Oc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Nc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let c=new me(null);return l.getNode().forEachChild(Ln,(f,d)=>{c=c.set(new ue(f),d)}),Kh(t,e,n,c,i,s,a,o)}else return e}else{let c=new me(null);return r.foreach((f,d)=>{const h=ke(n,f);l.isCompleteForPath(h)&&(c=c.set(f,l.getNode().getChild(h)))}),Kh(t,e,n,c,i,s,a,o)}}function NI(t,e,n,r,i){const s=e.serverCache,o=Nb(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return Lb(t,o,n,r,Mb,i)}function PI(t,e,n,r,i,s){let o;if(Oc(r,n)!=null)return e;{const a=new tg(r,e,i),l=e.eventCache.getNode();let c;if(J(n)||X(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Rc(r,ki(e));else{const d=e.serverCache.getNode();D(d instanceof Y,"serverChildren would be complete if leaf node"),f=Zm(r,d)}f=f,c=t.filter.updateFullNode(l,f,s)}else{const f=X(n);let d=eg(r,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=l.getImmediateChild(f)),d!=null?c=t.filter.updateChild(l,f,d,pe(n),a,s):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(l,f,Y.EMPTY_NODE,pe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rc(r,ki(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Oc(r,oe())!=null,Io(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Gm(r.getIndex()),s=q2(r);this.processor_=EI(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),f=new $r(l,o.isFullyInitialized(),i.filtersNodes()),d=new $r(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Iu(d,f),this.eventGenerator_=new rI(this.query_)}get query(){return this.query_}}function II(t){return t.viewCache_.serverCache.getNode()}function AI(t){return Tc(t.viewCache_)}function DI(t,e){const n=ki(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function Zy(t){return t.eventRegistrations_.length===0}function MI(t,e){t.eventRegistrations_.push(e)}function ev(t,e,n){const r=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function tv(t,e,n,r){e.type===wn.MERGE&&e.source.queryId!==null&&(D(ki(t.viewCache_),"We should always have a full cache before handling merges"),D(Tc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=kI(t.processor_,i,e,n,r);return CI(t.processor_,s.viewCache),D(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,zb(t,s.changes,s.viewCache.eventCache.getNode(),null)}function LI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(s,o)=>{r.push(Cs(s,o))}),n.isFullyInitialized()&&r.push(Ob(n.getNode())),zb(t,r,n.getNode(),e)}function zb(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return iI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;class Fb{constructor(){this.views=new Map}}function zI(t){D(!Pc,"__referenceConstructor has already been defined"),Pc=t}function FI(){return D(Pc,"Reference.ts has not been loaded"),Pc}function BI(t){return t.views.size===0}function ng(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return D(s!=null,"SyncTree gave us an op for an invalid query."),tv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(tv(o,e,n,r));return s}}function Bb(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Rc(n,i?r:null),l=!1;a?l=!0:r instanceof Y?(a=Zm(n,r),l=!1):(a=Y.EMPTY_NODE,l=!1);const c=Iu(new $r(a,l,!1),new $r(r,i,!1));return new jI(e,c)}return o}function UI(t,e,n,r,i,s){const o=Bb(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),MI(o,n),LI(o,n)}function $I(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Wr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(ev(c,n,r)),Zy(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(ev(l,n,r)),Zy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Wr(t)&&s.push(new(FI())(e._repo,e._path)),{removed:s,events:o}}function Ub(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pr(t,e){let n=null;for(const r of t.views.values())n=n||DI(r,e);return n}function $b(t,e){if(e._queryParams.loadsAllData())return Du(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Wb(t,e){return $b(t,e)!=null}function Wr(t){return Du(t)!=null}function Du(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;function WI(t){D(!jc,"__referenceConstructor has already been defined"),jc=t}function HI(){return D(jc,"Reference.ts has not been loaded"),jc}let VI=1;class nv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=wI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rg(t,e,n,r,i){return lI(t.pendingWriteTree_,e,n,r,i),i?Qs(t,new Ci(Qm(),e,n)):[]}function qI(t,e,n,r){cI(t.pendingWriteTree_,e,n,r);const i=me.fromObject(n);return Qs(t,new ks(Qm(),e,i))}function _r(t,e,n=!1){const r=uI(t.pendingWriteTree_,e);if(dI(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(oe(),!0):Ze(r.children,o=>{s=s.set(new ue(o),!0)}),Qs(t,new kc(r.path,s,n))}else return[]}function Da(t,e,n){return Qs(t,new Ci(Xm(),e,n))}function KI(t,e,n){const r=me.fromObject(n);return Qs(t,new ks(Xm(),e,r))}function YI(t,e){return Qs(t,new ha(Xm(),e))}function GI(t,e,n){const r=ig(t,n);if(r){const i=sg(r),s=i.path,o=i.queryId,a=vt(s,e),l=new ha(Jm(o),a);return og(t,s,l)}else return[]}function Ic(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Wb(o,e))){const l=$I(o,e,n,r);BI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const f=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,g)=>Wr(g));if(f&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=JI(h);for(let m=0;m<g.length;++m){const _=g[m],w=_.query,v=Kb(t,_);t.listenProvider_.startListening(Do(w),pa(t,w),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(Do(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(Lu(h));t.listenProvider_.stopListening(Do(h),g)}))}ZI(t,c)}return a}function Hb(t,e,n,r){const i=ig(t,r);if(i!=null){const s=sg(i),o=s.path,a=s.queryId,l=vt(o,e),c=new Ci(Jm(a),l,n);return og(t,o,c)}else return[]}function QI(t,e,n,r){const i=ig(t,r);if(i){const s=sg(i),o=s.path,a=s.queryId,l=vt(o,e),c=me.fromObject(n),f=new ks(Jm(a),l,c);return og(t,o,f)}else return[]}function Yh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const m=vt(h,i);s=s||Pr(g,m),o=o||Wr(g)});let a=t.syncPointTree_.get(i);a?(o=o||Wr(a),s=s||Pr(a,oe())):(a=new Fb,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=Y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,m)=>{const _=Pr(m,oe());_&&(s=s.updateImmediateChild(g,_))}));const c=Wb(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Lu(e);D(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=eA();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const f=Au(t.pendingWriteTree_,i);let d=UI(a,e,n,f,s,l);if(!c&&!o&&!r){const h=$b(a,e);d=d.concat(tA(t,e,h))}return d}function Mu(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=vt(o,e),c=Pr(a,l);if(c)return c});return Ib(i,e,s,n,!0)}function XI(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const d=vt(c,n);r=r||Pr(f,d)});let i=t.syncPointTree_.get(n);i?r=r||Pr(i,oe()):(i=new Fb,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new $r(r,!0,!1):null,a=Au(t.pendingWriteTree_,e._path),l=Bb(i,e,a,s?o.getNode():Y.EMPTY_NODE,s);return AI(l)}function Qs(t,e){return Vb(e,t.syncPointTree_,null,Au(t.pendingWriteTree_,oe()))}function Vb(t,e,n,r){if(J(t.path))return qb(t,e,n,r);{const i=e.get(oe());n==null&&i!=null&&(n=Pr(i,oe()));let s=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,f=Ab(r,o);s=s.concat(Vb(a,l,c,f))}return i&&(s=s.concat(ng(i,t,r,n))),s}}function qb(t,e,n,r){const i=e.get(oe());n==null&&i!=null&&(n=Pr(i,oe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ab(r,o),f=t.operationForChild(o);f&&(s=s.concat(qb(f,a,l,c)))}),i&&(s=s.concat(ng(i,t,r,n))),s}function Kb(t,e){const n=e.query,r=pa(t,n);return{hashFn:()=>(II(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?GI(t,n._path,r):YI(t,n._path);{const s=qj(i,n);return Ic(t,n,null,s)}}}}function pa(t,e){const n=Lu(e);return t.queryToTagMap.get(n)}function Lu(t){return t._path.toString()+"$"+t._queryIdentifier}function ig(t,e){return t.tagToQueryMap.get(e)}function sg(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function og(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const i=Au(t.pendingWriteTree_,e);return ng(r,n,i,null)}function JI(t){return t.fold((e,n,r)=>{if(n&&Wr(n))return[Du(n)];{let i=[];return n&&(i=Ub(n)),Ze(r,(s,o)=>{i=i.concat(o)}),i}})}function Do(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(HI())(t._repo,t._path):t}function ZI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Lu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function eA(){return VI++}function tA(t,e,n){const r=e._path,i=pa(t,e),s=Kb(t,n),o=t.listenProvider_.startListening(Do(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)D(!Wr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,f,d)=>{if(!J(c)&&f&&Wr(f))return[Du(f).query];{let h=[];return f&&(h=h.concat(Ub(f).map(g=>g.query))),Ze(d,(g,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const f=l[c];t.listenProvider_.stopListening(Do(f),pa(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ag(n)}node(){return this.node_}}class lg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new lg(this.syncTree_,n)}node(){return Mu(this.syncTree_,this.path_)}}const nA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rv=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return iA(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},iA=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Yb=function(t,e,n,r){return ug(e,new lg(n,t),r)},cg=function(t,e,n){return ug(t,new ag(e),n)};function ug(t,e,n){const r=t.getPriority().val(),i=rv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=rv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,Oe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new qe(i))),o.forEachChild(ye,(a,l)=>{const c=ug(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function zu(t,e){let n=e instanceof ue?e:new ue(e),r=t,i=X(n);for(;i!==null;){const s=bi(r.node.children,i)||{children:{},childCount:0};r=new dg(i,r,s),n=pe(n),i=X(n)}return r}function Di(t){return t.node.value}function fg(t,e){t.node.value=e,Gh(t)}function Gb(t){return t.node.childCount>0}function sA(t){return Di(t)===void 0&&!Gb(t)}function Fu(t,e){Ze(t.node.children,(n,r)=>{e(new dg(n,t,r))})}function Qb(t,e,n,r){n&&!r&&e(t),Fu(t,i=>{Qb(i,e,!0,r)}),n&&r&&e(t)}function oA(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ma(t){return new ue(t.parent===null?t.name:Ma(t.parent)+"/"+t.name)}function Gh(t){t.parent!==null&&aA(t.parent,t.name,t)}function aA(t,e,n){const r=sA(n),i=Vt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Gh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=/[\[\].#$\/\u0000-\u001F\u007F]/,cA=/[\[\].#$\u0000-\u001F\u007F]/,tf=10*1024*1024,Bu=function(t){return typeof t=="string"&&t.length!==0&&!lA.test(t)},Xb=function(t){return typeof t=="string"&&t.length!==0&&!cA.test(t)},uA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xb(t)},ma=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ou(t)||t&&typeof t=="object"&&Vt(t,".sv")},Bn=function(t,e,n,r){r&&e===void 0||La(At(t,"value"),e,n)},La=function(t,e,n){const r=n instanceof ue?new k2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ri(r));if(typeof e=="function")throw new Error(t+"contains a function "+ri(r)+" with contents = "+e.toString());if(Ou(e))throw new Error(t+"contains "+e.toString()+" "+ri(r));if(typeof e=="string"&&e.length>tf/3&&Cu(e)>tf)throw new Error(t+"contains a string greater than "+tf+" utf8 bytes "+ri(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Bu(o)))throw new Error(t+" contains an invalid key ("+o+") "+ri(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);T2(r,o),La(t,a,r),R2(r)}),i&&s)throw new Error(t+' contains ".value" child '+ri(r)+" in addition to actual children.")}},dA=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ca(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Bu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(C2);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&tn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Jb=function(t,e,n,r){if(r&&e===void 0)return;const i=At(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ze(e,(o,a)=>{const l=new ue(o);if(La(i,a,ke(n,l)),Wm(l)===".priority"&&!ma(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),dA(i,s)},hg=function(t,e,n){if(!(n&&e===void 0)){if(Ou(e))throw new Error(At(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ma(e))throw new Error(At(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},za=function(t,e,n,r){if(!(r&&n===void 0)&&!Bu(n))throw new Error(At(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},ga=function(t,e,n,r){if(!(r&&n===void 0)&&!Xb(n))throw new Error(At(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ga(t,e,n,r)},nn=function(t,e){if(X(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Zb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uA(n))throw new Error(At(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Hm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function eS(t,e,n){Uu(t,n),tS(t,r=>Hm(r,e))}function qt(t,e,n){Uu(t,n),tS(t,r=>tn(r,e)||tn(e,r))}function tS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(pA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function pA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();fi&&Xe("event: "+n.toString()),Ys(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="repo_interrupt",mA=25;class gA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cc(),this.transactionQueueTree_=new dg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yA(t,e,n){if(t.stats_=Um(t.repoInfo_),t.forceRestClient_||Qj())t.server_=new Ec(t.repoInfo_,(r,i,s,o)=>{iv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Xn(t.repoInfo_,e,(r,i,s,o)=>{iv(t,r,i,s,o)},r=>{sv(t,r)},r=>{vA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=t2(t.repoInfo_,()=>new nI(t.stats_,t.server_)),t.infoData_=new X2,t.infoSyncTree_=new nv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Da(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pg(t,"connected",!1),t.serverSyncTree_=new nv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);qt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function rS(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fa(t){return nA({timestamp:rS(t)})}function iv(t,e,n,r,i){t.dataUpdateCount++;const s=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=_c(n,c=>Oe(c));o=QI(t.serverSyncTree_,s,l,i)}else{const l=Oe(n);o=Hb(t.serverSyncTree_,s,l,i)}else if(r){const l=_c(n,c=>Oe(c));o=KI(t.serverSyncTree_,s,l)}else{const l=Oe(n);o=Da(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Rs(t,s)),qt(t.eventQueue_,a,o)}function sv(t,e){pg(t,"connected",e),e===!1&&xA(t)}function vA(t,e){Ze(e,(n,r)=>{pg(t,n,r)})}function pg(t,e,n){const r=new ue("/.info/"+e),i=Oe(n);t.infoData_.updateSnapshot(r,i);const s=Da(t.infoSyncTree_,r,i);qt(t.eventQueue_,r,s)}function $u(t){return t.nextWriteId_++}function _A(t,e,n){const r=XI(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Oe(i).withIndex(e._queryParams.getIndex());Yh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Da(t.serverSyncTree_,e._path,s);else{const a=pa(t.serverSyncTree_,e);o=Hb(t.serverSyncTree_,e._path,s,a)}return qt(t.eventQueue_,e._path,o),Ic(t.serverSyncTree_,e,n,null,!0),s},i=>(Xs(t,"get for query "+$e(e)+" failed: "+i),Promise.reject(new Error(i))))}function mg(t,e,n,r,i){Xs(t,"set",{path:e.toString(),value:n,priority:r});const s=Fa(t),o=Oe(n,r),a=Mu(t.serverSyncTree_,e),l=cg(o,a,s),c=$u(t),f=rg(t.serverSyncTree_,e,l,c,!0);Uu(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const m=h==="ok";m||ut("set at "+e+" failed: "+h);const _=_r(t.serverSyncTree_,c,!m);qt(t.eventQueue_,e,_),Hr(t,i,h,g)});const d=yg(t,e);Rs(t,d),qt(t.eventQueue_,d,[])}function wA(t,e,n,r){Xs(t,"update",{path:e.toString(),value:n});let i=!0;const s=Fa(t),o={};if(Ze(n,(a,l)=>{i=!1,o[a]=Yb(ke(e,a),Oe(l),t.serverSyncTree_,s)}),i)Xe("update() called with empty data.  Don't do anything."),Hr(t,r,"ok",void 0);else{const a=$u(t),l=qI(t.serverSyncTree_,e,o,a);Uu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,f)=>{const d=c==="ok";d||ut("update at "+e+" failed: "+c);const h=_r(t.serverSyncTree_,a,!d),g=h.length>0?Rs(t,e):e;qt(t.eventQueue_,g,h),Hr(t,r,c,f)}),Ze(n,c=>{const f=yg(t,ke(e,c));Rs(t,f)}),qt(t.eventQueue_,e,[])}}function xA(t){Xs(t,"onDisconnectEvents");const e=Fa(t),n=Cc();$h(t.onDisconnect_,oe(),(i,s)=>{const o=Yb(i,s,t.serverSyncTree_,e);Gs(n,i,o)});let r=[];$h(n,oe(),(i,s)=>{r=r.concat(Da(t.serverSyncTree_,i,s));const o=yg(t,i);Rs(t,o)}),t.onDisconnect_=Cc(),qt(t.eventQueue_,oe(),r)}function bA(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Uh(t.onDisconnect_,e),Hr(t,n,r,i)})}function ov(t,e,n,r){const i=Oe(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Gs(t.onDisconnect_,e,i),Hr(t,r,s,o)})}function SA(t,e,n,r,i){const s=Oe(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Gs(t.onDisconnect_,e,s),Hr(t,i,o,a)})}function EA(t,e,n,r){if(Oh(n)){Xe("onDisconnect().update() called with empty data.  Don't do anything."),Hr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Ze(n,(o,a)=>{const l=Oe(a);Gs(t.onDisconnect_,ke(e,o),l)}),Hr(t,r,i,s)})}function CA(t,e,n){let r;X(e._path)===".info"?r=Yh(t.infoSyncTree_,e,n):r=Yh(t.serverSyncTree_,e,n),eS(t.eventQueue_,e._path,r)}function Qh(t,e,n){let r;X(e._path)===".info"?r=Ic(t.infoSyncTree_,e,n):r=Ic(t.serverSyncTree_,e,n),eS(t.eventQueue_,e._path,r)}function iS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nS)}function kA(t){t.persistentConnection_&&t.persistentConnection_.resume(nS)}function Xs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Xe(n,...e)}function Hr(t,e,n,r){e&&Ys(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function TA(t,e,n,r,i,s){Xs(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Z1(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=gg(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{La("transaction failed: Data returned ",l,o.path),o.status=0;const c=zu(t.transactionQueueTree_,e),f=Di(c)||[];f.push(o),fg(c,f);let d;typeof l=="object"&&l!==null&&Vt(l,".priority")?(d=bi(l,".priority"),D(ma(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Mu(t.serverSyncTree_,e)||Y.EMPTY_NODE).getPriority().val();const h=Fa(t),g=Oe(l,d),m=cg(g,a,h);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=m,o.currentWriteId=$u(t);const _=rg(t.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);qt(t.eventQueue_,e,_),Wu(t,t.transactionQueueTree_)}}function gg(t,e,n){return Mu(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function Wu(t,e=t.transactionQueueTree_){if(e||Hu(t,e),Di(e)){const n=oS(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&RA(t,Ma(e),n)}else Gb(e)&&Fu(e,n=>{Wu(t,n)})}function RA(t,e,n){const r=n.map(c=>c.currentWriteId),i=gg(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];D(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=vt(e,f.path);s=s.updateChild(d,f.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Xs(t,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(_r(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Hu(t,zu(t.transactionQueueTree_,e)),Wu(t,t.transactionQueueTree_),qt(t.eventQueue_,e,f);for(let h=0;h<d.length;h++)Ys(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ut("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Rs(t,e)}},o)}function Rs(t,e){const n=sS(t,e),r=Ma(n),i=oS(t,n);return OA(t,i,r),r}function OA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=vt(n,l.path);let f=!1,d;if(D(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,d=l.abortReason,i=i.concat(_r(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=mA)f=!0,d="maxretry",i=i.concat(_r(t.serverSyncTree_,l.currentWriteId,!0));else{const h=gg(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){La("transaction failed: Data returned ",g,l.path);let m=Oe(g);typeof g=="object"&&g!=null&&Vt(g,".priority")||(m=m.updatePriority(h.getPriority()));const w=l.currentWriteId,v=Fa(t),p=cg(m,h,v);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=$u(t),o.splice(o.indexOf(w),1),i=i.concat(rg(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(_r(t.serverSyncTree_,w,!0))}else f=!0,d="nodata",i=i.concat(_r(t.serverSyncTree_,l.currentWriteId,!0))}qt(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Hu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ys(r[a]);Wu(t,t.transactionQueueTree_)}function sS(t,e){let n,r=t.transactionQueueTree_;for(n=X(e);n!==null&&Di(r)===void 0;)r=zu(r,n),e=pe(e),n=X(e);return r}function oS(t,e){const n=[];return aS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function aS(t,e,n){const r=Di(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Fu(e,i=>{aS(t,i,n)})}function Hu(t,e){const n=Di(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,fg(e,n.length>0?n:void 0)}Fu(e,r=>{Hu(t,r)})}function yg(t,e){const n=Ma(sS(t,e)),r=zu(t.transactionQueueTree_,e);return oA(r,i=>{nf(t,i)}),nf(t,r),Qb(r,i=>{nf(t,i)}),n}function nf(t,e){const n=Di(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_r(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?fg(e,void 0):n.length=s+1,qt(t.eventQueue_,Ma(e),i);for(let o=0;o<r.length;o++)Ys(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function PA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Xh=function(t,e){const n=jA(t),r=n.namespace;n.domain==="firebase.com"&&Fn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Fn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Uj();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hb(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ue(n.pathString)}},jA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(f,d)),f<d&&(i=NA(t.substring(f,d)));const h=PA(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",IA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=av.charAt(n%64),n=Math.floor(n/64);D(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=av.charAt(e[i]);return D(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class cS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AA=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new kt;return bA(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){nn("OnDisconnect.remove",this._path);const e=new kt;return ov(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){nn("OnDisconnect.set",this._path),Bn("OnDisconnect.set",e,this._path,!1);const n=new kt;return ov(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){nn("OnDisconnect.setWithPriority",this._path),Bn("OnDisconnect.setWithPriority",e,this._path,!1),hg("OnDisconnect.setWithPriority",n,!1);const r=new kt;return SA(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){nn("OnDisconnect.update",this._path),Jb("OnDisconnect.update",e,this._path,!1);const n=new kt;return EA(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:Wm(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=qy(this._queryParams),n=Fm(e);return n==="{}"?"default":n}get _queryObject(){return qy(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof Dt))return!1;const n=this._repo===e._repo,r=Hm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+E2(this._path)}}function Vu(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Yr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Ln){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Br)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==ir)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===ye){if(e!=null&&!ma(e)||n!=null&&!ma(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(D(t.getIndex()instanceof Km||t.getIndex()===Ym,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function qu(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class dn extends Dt{constructor(e,n){super(e,n,new Pu,!1)}get parent(){const e=bb(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Ku=class Jh{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),r=Ti(this.ref,e);return new Jh(this._node.getChild(n),r,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Jh(i,Ti(this.ref,r),ye)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function uS(t,e){return t=Me(t),t._checkNotDeleted("ref"),e!==void 0?Ti(t._root,e):t._root}function lv(t,e){t=Me(t),t._checkNotDeleted("refFromURL");const n=Xh(e,t._repo.repoInfo_.nodeAdmin);Zb("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&Fn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),uS(t,n.path.toString())}function Ti(t,e){return t=Me(t),X(t._path)===null?fA("child","path",e,!1):ga("child","path",e,!1),new dn(t._repo,ke(t._path,e))}function DA(t,e){t=Me(t),nn("push",t._path),Bn("push",e,t._path,!0);const n=rS(t._repo),r=IA(n),i=Ti(t,r),s=Ti(t,r);let o;return e!=null?o=_g(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function MA(t){return nn("remove",t._path),_g(t,null)}function _g(t,e){t=Me(t),nn("set",t._path),Bn("set",e,t._path,!1);const n=new kt;return mg(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function LA(t,e){t=Me(t),nn("setPriority",t._path),hg("setPriority",e,!1);const n=new kt;return mg(t._repo,ke(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function zA(t,e,n){if(nn("setWithPriority",t._path),Bn("setWithPriority",e,t._path,!1),hg("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new kt;return mg(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function FA(t,e){Jb("update",e,t._path,!1);const n=new kt;return wA(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function BA(t){t=Me(t);const e=new vg(()=>{}),n=new Ba(e);return _A(t._repo,t,n).then(r=>new Ku(r,new dn(t._repo,t._path),t._queryParams.getIndex()))}class Ba{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new lS("value",this,new Ku(e.snapshotNode,new dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cS(this,e,n):null}matches(e){return e instanceof Ba?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Yu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cS(this,e,n):null}createEvent(e,n){D(e.childName!=null,"Child events should have a childName.");const r=Ti(new dn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new lS(e.type,this,new Ku(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Yu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ua(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(f,d)=>{Qh(t._repo,t,a),l(f,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new vg(n,s||void 0),a=e==="value"?new Ba(o):new Yu(e,o);return CA(t._repo,t,a),()=>Qh(t._repo,t,a)}function Zh(t,e,n,r){return Ua(t,"value",e,n,r)}function cv(t,e,n,r){return Ua(t,"child_added",e,n,r)}function uv(t,e,n,r){return Ua(t,"child_changed",e,n,r)}function dv(t,e,n,r){return Ua(t,"child_moved",e,n,r)}function fv(t,e,n,r){return Ua(t,"child_removed",e,n,r)}function hv(t,e,n){let r=null;const i=n?new vg(n):null;e==="value"?r=new Ba(i):e&&(r=new Yu(e,i)),Qh(t._repo,t,r)}class Rn{}class dS extends Rn{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Bn("endAt",this._value,e._path,!0);const n=Bh(e._queryParams,this._value,this._key);if(qu(n),Yr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Dt(e._repo,e._path,n,e._orderByCalled)}}function UA(t,e){return za("endAt","key",e,!0),new dS(t,e)}class $A extends Rn{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){Bn("endBefore",this._value,e._path,!1);const n=Q2(e._queryParams,this._value,this._key);if(qu(n),Yr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Dt(e._repo,e._path,n,e._orderByCalled)}}function WA(t,e){return za("endBefore","key",e,!0),new $A(t,e)}class fS extends Rn{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Bn("startAt",this._value,e._path,!0);const n=Fh(e._queryParams,this._value,this._key);if(qu(n),Yr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Dt(e._repo,e._path,n,e._orderByCalled)}}function HA(t=null,e){return za("startAt","key",e,!0),new fS(t,e)}class VA extends Rn{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){Bn("startAfter",this._value,e._path,!1);const n=G2(e._queryParams,this._value,this._key);if(qu(n),Yr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Dt(e._repo,e._path,n,e._orderByCalled)}}function qA(t,e){return za("startAfter","key",e,!0),new VA(t,e)}class KA extends Rn{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Dt(e._repo,e._path,K2(e._queryParams,this._limit),e._orderByCalled)}}function YA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new KA(t)}class GA extends Rn{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Dt(e._repo,e._path,Y2(e._queryParams,this._limit),e._orderByCalled)}}function QA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new GA(t)}class XA extends Rn{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Vu(e,"orderByChild");const n=new ue(this._path);if(J(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Km(n),i=ju(e._queryParams,r);return Yr(i),new Dt(e._repo,e._path,i,!0)}}function JA(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ga("orderByChild","path",t,!1),new XA(t)}class ZA extends Rn{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Vu(e,"orderByKey");const n=ju(e._queryParams,Ln);return Yr(n),new Dt(e._repo,e._path,n,!0)}}function e5(){return new ZA}class t5 extends Rn{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){Vu(e,"orderByPriority");const n=ju(e._queryParams,ye);return Yr(n),new Dt(e._repo,e._path,n,!0)}}function n5(){return new t5}class r5 extends Rn{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){Vu(e,"orderByValue");const n=ju(e._queryParams,Ym);return Yr(n),new Dt(e._repo,e._path,n,!0)}}function i5(){return new r5}class s5 extends Rn{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Bn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new dS(this._value,this._key)._apply(new fS(this._value,this._key)._apply(e))}}function o5(t,e){return za("equalTo","key",e,!0),new s5(t,e)}function mn(t,...e){let n=Me(t);for(const r of e)n=r._apply(n);return n}zI(dn);WI(dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a5="FIREBASE_DATABASE_EMULATOR_HOST",ep={};let l5=!1;function c5(t,e,n,r){t.repoInfo_=new hb(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function hS(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Fn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Xh(s,i),a=o.repoInfo,l,c;typeof process<"u"&&Ry&&(c=Ry[a5]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Xh(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const f=i&&l?new ls(ls.OWNER):new Jj(t.name,t.options,e);Zb("Invalid Firebase Database URL",o),J(o.path)||Fn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=d5(a,t,f,new Xj(t.name,n));return new f5(d,t)}function u5(t,e){const n=ep[e];(!n||n[t.key]!==t)&&Fn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iS(t),delete n[t.key]}function d5(t,e,n,r){let i=ep[e.name];i||(i={},ep[e.name]=i);let s=i[t.toURLString()];return s&&Fn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new gA(t,l5,n,r),i[t.toURLString()]=s,s}let f5=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(u5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fn("Cannot call "+e+" on a deleted database.")}};function pS(){Es.IS_TRANSPORT_INITIALIZED&&ut("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function h5(){pS(),vr.forceDisallow()}function p5(){pS(),Zt.forceDisallow(),vr.forceAllow()}function m5(t,e,n,r={}){t=Me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Fn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Fn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ls(ls.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:I1(r.mockUserToken,t.app.options.projectId);s=new ls(o)}c5(i,e,n,s)}function g5(t){t=Me(t),t._checkNotDeleted("goOffline"),iS(t._repo)}function y5(t){t=Me(t),t._checkNotDeleted("goOnline"),kA(t._repo)}function v5(t,e){tb(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _5(t){X1(Tu),Ei(new Tn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return hS(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Sn(Oy,Ny,t),Sn(Oy,Ny,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w5={".sv":"timestamp"};function x5(){return w5}function b5(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S5=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function E5(t,e,n){var r;if(t=Me(t),nn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new kt,o=(l,c,f)=>{let d=null;l?s.reject(l):(d=new Ku(f,new dn(t._repo,t._path),ye),s.resolve(new S5(c,d)))},a=Zh(t,()=>{});return TA(t._repo,t._path,e,o,a,i),s.promise}Xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_5();const C5="@firebase/database-compat",k5="1.0.4";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T5=new ku("@firebase/database-compat"),mS=function(t){const e="FIREBASE WARNING: "+t;T5.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R5=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(At(t,e)+"must be a boolean.")},O5=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(At(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5{constructor(e){this._delegate=e}cancel(e){G("OnDisconnect.cancel",0,1,arguments.length),Ye("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){G("OnDisconnect.remove",0,1,arguments.length),Ye("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){G("OnDisconnect.set",1,2,arguments.length),Ye("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){G("OnDisconnect.setWithPriority",2,3,arguments.length),Ye("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(G("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,mS("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ye("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P5{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return G("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this._database=e,this._delegate=n}val(){return G("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return G("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return G("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return G("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return G("DataSnapshot.child",0,1,arguments.length),e=String(e),ga("DataSnapshot.child","path",e,!1),new jr(this._database,this._delegate.child(e))}hasChild(e){return G("DataSnapshot.hasChild",1,1,arguments.length),ga("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return G("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return G("DataSnapshot.forEach",1,1,arguments.length),Ye("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new jr(this._database,n)))}hasChildren(){return G("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return G("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return G("DataSnapshot.ref",0,0,arguments.length),new li(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class tt{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;G("Query.on",2,4,arguments.length),Ye("Query.on","callback",n,!1);const o=tt.getCancelAndContextArgs_("Query.on",r,i),a=(c,f)=>{n.call(o.context,new jr(this.database,c),f)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Zh(this._delegate,a,l),n;case"child_added":return cv(this._delegate,a,l),n;case"child_removed":return fv(this._delegate,a,l),n;case"child_changed":return uv(this._delegate,a,l),n;case"child_moved":return dv(this._delegate,a,l),n;default:throw new Error(At("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(G("Query.off",0,3,arguments.length),O5("Query.off",e,!0),Ye("Query.off","callback",n,!0),_y("Query.off","context",r,!0),n){const i=()=>{};i.userCallback=n,i.context=r,hv(this._delegate,e,i)}else hv(this._delegate,e)}get(){return BA(this._delegate).then(e=>new jr(this.database,e))}once(e,n,r,i){G("Query.once",1,4,arguments.length),Ye("Query.once","callback",n,!0);const s=tt.getCancelAndContextArgs_("Query.once",r,i),o=new kt,a=(c,f)=>{const d=new jr(this.database,c);n&&n.call(s.context,d,f),o.resolve(d)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":Zh(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":cv(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":fv(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":uv(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":dv(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(At("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return G("Query.limitToFirst",1,1,arguments.length),new tt(this.database,mn(this._delegate,YA(e)))}limitToLast(e){return G("Query.limitToLast",1,1,arguments.length),new tt(this.database,mn(this._delegate,QA(e)))}orderByChild(e){return G("Query.orderByChild",1,1,arguments.length),new tt(this.database,mn(this._delegate,JA(e)))}orderByKey(){return G("Query.orderByKey",0,0,arguments.length),new tt(this.database,mn(this._delegate,e5()))}orderByPriority(){return G("Query.orderByPriority",0,0,arguments.length),new tt(this.database,mn(this._delegate,n5()))}orderByValue(){return G("Query.orderByValue",0,0,arguments.length),new tt(this.database,mn(this._delegate,i5()))}startAt(e=null,n){return G("Query.startAt",0,2,arguments.length),new tt(this.database,mn(this._delegate,HA(e,n)))}startAfter(e=null,n){return G("Query.startAfter",0,2,arguments.length),new tt(this.database,mn(this._delegate,qA(e,n)))}endAt(e=null,n){return G("Query.endAt",0,2,arguments.length),new tt(this.database,mn(this._delegate,UA(e,n)))}endBefore(e=null,n){return G("Query.endBefore",0,2,arguments.length),new tt(this.database,mn(this._delegate,WA(e,n)))}equalTo(e,n){return G("Query.equalTo",1,2,arguments.length),new tt(this.database,mn(this._delegate,o5(e,n)))}toString(){return G("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return G("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(G("Query.isEqual",1,1,arguments.length),!(e instanceof tt)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,Ye(e,"cancel",i.cancel,!0),i.context=r,_y(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(At(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new li(this.database,new dn(this._delegate._repo,this._delegate._path))}}let li=class Ui extends tt{constructor(e,n){super(e,new Dt(n._repo,n._path,new Pu,!1)),this.database=e,this._delegate=n}getKey(){return G("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return G("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Ui(this.database,Ti(this._delegate,e))}getParent(){G("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Ui(this.database,e):null}getRoot(){return G("Reference.root",0,0,arguments.length),new Ui(this.database,this._delegate.root)}set(e,n){G("Reference.set",1,2,arguments.length),Ye("Reference.set","onComplete",n,!0);const r=_g(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(G("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,mS("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}nn("Reference.update",this._delegate._path),Ye("Reference.update","onComplete",n,!0);const r=FA(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){G("Reference.setWithPriority",2,3,arguments.length),Ye("Reference.setWithPriority","onComplete",r,!0);const i=zA(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){G("Reference.remove",0,1,arguments.length),Ye("Reference.remove","onComplete",e,!0);const n=MA(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){G("Reference.transaction",1,3,arguments.length),Ye("Reference.transaction","transactionUpdate",e,!1),Ye("Reference.transaction","onComplete",n,!0),R5("Reference.transaction","applyLocally",r,!0);const i=E5(this._delegate,e,{applyLocally:r}).then(s=>new P5(s.committed,new jr(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){G("Reference.setPriority",1,2,arguments.length),Ye("Reference.setPriority","onComplete",n,!0);const r=LA(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){G("Reference.push",0,2,arguments.length),Ye("Reference.push","onComplete",n,!0);const r=DA(this._delegate,e),i=r.then(o=>new Ui(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new Ui(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return nn("Reference.onDisconnect",this._delegate._path),new N5(new AA(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:h5,forceLongPolling:p5}}useEmulator(e,n,r={}){m5(this._delegate,e,n,r)}ref(e){if(G("database.ref",0,1,arguments.length),e instanceof li){const n=lv(this._delegate,e.toString());return new li(this,n)}else{const n=uS(this._delegate,e);return new li(this,n)}}refFromURL(e){G("database.refFromURL",1,1,arguments.length);const r=lv(this._delegate,e);return new li(this,r)}goOffline(){return G("database.goOffline",0,0,arguments.length),g5(this._delegate)}goOnline(){return G("database.goOnline",0,0,arguments.length),y5(this._delegate)}}ya.ServerValue={TIMESTAMP:x5(),increment:t=>b5(t)};function j5({app:t,url:e,version:n,customAuthImpl:r,customAppCheckImpl:i,namespace:s,nodeAdmin:o=!1}){X1(n);const a=new Am("database-standalone"),l=new Ph("auth-internal",a);l.setComponent(new Tn("auth-internal",()=>r,"PRIVATE"));let c;return i&&(c=new Ph("app-check-internal",a),c.setComponent(new Tn("app-check-internal",()=>i,"PRIVATE"))),{instance:new ya(hS(t,l,c,e,o),t),namespace:s}}var I5=Object.freeze({__proto__:null,initStandalone:j5});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A5=ya.ServerValue;function D5(t){t.INTERNAL.registerComponent(new Tn("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new ya(i,r)},"PUBLIC").setServiceProps({Reference:li,Query:tt,Database:ya,DataSnapshot:jr,enableLogging:v5,INTERNAL:I5,ServerValue:A5}).setMultipleInstances(!0)),t.registerVersion(C5,k5)}D5(Ru);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="firebasestorage.googleapis.com",yS="storageBucket",M5=2*60*1e3,L5=10*60*1e3,z5=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends ji{constructor(e,n,r=0){super(rf(e),`Firebase Storage: ${n} (${rf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function rf(t){return"storage/"+t}function wg(){const t="An unknown error occurred, please check the error payload for server response.";return new je(be.UNKNOWN,t)}function F5(t){return new je(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function B5(t){return new je(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function U5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je(be.UNAUTHENTICATED,t)}function $5(){return new je(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function W5(t){return new je(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vS(){return new je(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _S(){return new je(be.CANCELED,"User canceled the upload/download.")}function H5(t){return new je(be.INVALID_URL,"Invalid URL '"+t+"'.")}function V5(t){return new je(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function q5(){return new je(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yS+"' property when initializing the app?")}function wS(){return new je(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function K5(){return new je(be.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Y5(){return new je(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function G5(t){return new je(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cs(t){return new je(be.INVALID_ARGUMENT,t)}function xS(){return new je(be.APP_DELETED,"The Firebase app was deleted.")}function bS(t){return new je(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Mo(t,e){return new je(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function mo(t){throw new je(be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ct.makeFromUrl(e,n)}catch{return new ct(e,"")}if(r.path==="")return r;throw V5(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${f}/b/${i}/o${h}`,"i"),m={bucket:1,path:3},_=n===gS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",v=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:g,indices:m,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<y.length;x++){const b=y[x],S=b.regex.exec(e);if(S){const C=S[b.indices.bucket];let R=S[b.indices.path];R||(R=""),r=new ct(C,R),b.postModify(r);break}}if(r==null)throw H5(e);return r}}class Q5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X5(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function f(...w){c||(c=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(g,l())},w)}function h(){s&&clearTimeout(s)}function g(w,...v){if(c){h();return}if(w){h(),f.call(null,w,...v);return}if(l()||o){h(),f.call(null,w,...v);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let m=!1;function _(w){m||(m=!0,h(),!c&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function J5(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z5(t){return t!==void 0}function e4(t){return typeof t=="function"}function t4(t){return typeof t=="object"&&!Array.isArray(t)}function Gu(t){return typeof t=="string"||t instanceof String}function pv(t){return xg()&&t instanceof Blob}function xg(){return typeof Blob<"u"}function tp(t,e,n,r){if(r<e)throw cs(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw cs(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function SS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hi||(hi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,n,r,i,s,o,a,l,c,f,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ml(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===hi.NO_ERROR,l=s.getStatus();if(!a||ES(l,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===hi.ABORT;r(!1,new ml(!1,null,f));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ml(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Z5(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=wg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?xS():_S();o(l)}else{const l=vS();o(l)}};this.canceled_?n(!1,new ml(!1,null,!0)):this.backoffId_=X5(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&J5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ml{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function r4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function i4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function s4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function o4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function a4(t,e,n,r,i,s,o=!0){const a=SS(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return s4(c,e),r4(c,n),i4(c,s),o4(c,r),new n4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function c4(...t){const e=l4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xg())return new Blob(t);throw new je(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function u4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d4(t){if(typeof atob>"u")throw G5("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sf{constructor(e,n){this.data=e,this.contentType=n||null}}function CS(t,e){switch(t){case rn.RAW:return new sf(kS(e));case rn.BASE64:case rn.BASE64URL:return new sf(TS(t,e));case rn.DATA_URL:return new sf(h4(e),p4(e))}throw wg()}function kS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function f4(t){let e;try{e=decodeURIComponent(t)}catch{throw Mo(rn.DATA_URL,"Malformed data URL.")}return kS(e)}function TS(t,e){switch(t){case rn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Mo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case rn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Mo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=d4(e)}catch(i){throw i.message.includes("polyfill")?i:Mo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class RS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Mo(rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=m4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function h4(t){const e=new RS(t);return e.base64?TS(rn.BASE64,e.rest):f4(e.rest)}function p4(t){return new RS(t).contentType}function m4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){let r=0,i="";pv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(pv(this.data_)){const r=this.data_,i=u4(r,e,n);return i===null?null:new Vn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Vn(r,!0)}}static getBlob(...e){if(xg()){const n=e.map(r=>r instanceof Vn?r.data_:r);return new Vn(c4.apply(null,n))}else{const n=e.map(o=>Gu(o)?CS(rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Vn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){let e;try{e=JSON.parse(t)}catch{return null}return t4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function y4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function OS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(t,e){return e}class ht{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||v4}}let gl=null;function _4(t){return!Gu(t)||t.length<2?t:OS(t)}function Qu(){if(gl)return gl;const t=[];t.push(new ht("bucket")),t.push(new ht("generation")),t.push(new ht("metageneration")),t.push(new ht("name","fullPath",!0));function e(s,o){return _4(o)}const n=new ht("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,t.push(i),t.push(new ht("timeCreated")),t.push(new ht("updated")),t.push(new ht("md5Hash",null,!0)),t.push(new ht("cacheControl",null,!0)),t.push(new ht("contentDisposition",null,!0)),t.push(new ht("contentEncoding",null,!0)),t.push(new ht("contentLanguage",null,!0)),t.push(new ht("contentType",null,!0)),t.push(new ht("metadata","customMetadata",!0)),gl=t,gl}function w4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ct(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function x4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return w4(r,t),r}function NS(t,e,n){const r=bg(e);return r===null?null:x4(t,r,n)}function b4(t,e,n,r){const i=bg(e);if(i===null||!Gu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,d=t.fullPath,h="/b/"+o(f)+"/o/"+o(d),g=Gr(h,n,r),m=SS({alt:"media",token:c});return g+m})[0]}function Sg(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="prefixes",gv="items";function S4(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[mv])for(const i of n[mv]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new ct(e,s));r.prefixes.push(o)}if(n[gv])for(const i of n[gv]){const s=t._makeStorageReference(new ct(e,i.name));r.items.push(s)}return r}function E4(t,e,n){const r=bg(n);return r===null?null:S4(t,e,r)}class or{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){if(!t)throw wg()}function Xu(t,e){function n(r,i){const s=NS(t,i,e);return zn(s!==null),s}return n}function C4(t,e){function n(r,i){const s=E4(t,e,i);return zn(s!==null),s}return n}function k4(t,e){function n(r,i){const s=NS(t,i,e);return zn(s!==null),b4(s,i,t.host,t._protocol)}return n}function Js(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=$5():i=U5():n.getStatus()===402?i=B5(t.bucket):n.getStatus()===403?i=W5(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Ju(t){const e=Js(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=F5(t.path)),s.serverResponse=i.serverResponse,s}return n}function PS(t,e,n){const r=e.fullServerUrl(),i=Gr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new or(i,s,Xu(t,n),o);return a.errorHandler=Ju(e),a}function T4(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Gr(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,f=new or(a,l,C4(t,e.bucket),c);return f.urlParams=s,f.errorHandler=Js(e),f}function R4(t,e,n){const r=e.fullServerUrl(),i=Gr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new or(i,s,k4(t,n),o);return a.errorHandler=Ju(e),a}function O4(t,e,n,r){const i=e.fullServerUrl(),s=Gr(i,t.host,t._protocol),o="PATCH",a=Sg(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,f=new or(s,o,Xu(t,r),c);return f.headers=l,f.body=a,f.errorHandler=Ju(e),f}function N4(t,e){const n=e.fullServerUrl(),r=Gr(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new or(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Ju(e),a}function P4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=P4(null,e)),r}function j4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let x=0;x<2;x++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=jS(e,r,i),f=Sg(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=Vn.getBlob(d,r,h);if(g===null)throw wS();const m={name:c.fullPath},_=Gr(s,t.host,t._protocol),w="POST",v=t.maxUploadRetryTime,p=new or(_,w,Xu(t,n),v);return p.urlParams=m,p.headers=o,p.body=g.uploadData(),p.errorHandler=Js(e),p}class Ac{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Eg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{zn(!1)}return zn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function I4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=jS(e,r,i),a={name:o.fullPath},l=Gr(s,t.host,t._protocol),c="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=Sg(o,n),h=t.maxUploadRetryTime;function g(_){Eg(_);let w;try{w=_.getResponseHeader("X-Goog-Upload-URL")}catch{zn(!1)}return zn(Gu(w)),w}const m=new or(l,c,g,h);return m.urlParams=a,m.headers=f,m.body=d,m.errorHandler=Js(e),m}function A4(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const f=Eg(c,["active","final"]);let d=null;try{d=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{zn(!1)}d||zn(!1);const h=Number(d);return zn(!isNaN(h)),new Ac(h,r.size(),f==="final")}const o="POST",a=t.maxUploadRetryTime,l=new or(n,o,s,a);return l.headers=i,l.errorHandler=Js(e),l}const yv=256*1024;function D4(t,e,n,r,i,s,o,a){const l=new Ac(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw K5();const c=l.total-l.current;let f=c;i>0&&(f=Math.min(f,i));const d=l.current,h=d+f;let g="";f===0?g="finalize":c===f?g="upload, finalize":g="upload";const m={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(d,h);if(_===null)throw wS();function w(x,b){const S=Eg(x,["active","final"]),C=l.current+f,R=r.size();let N;return S==="final"?N=Xu(e,s)(x,b):N=null,new Ac(C,R,S==="final",N)}const v="POST",p=e.maxUploadRetryTime,y=new or(n,v,w,p);return y.headers=m,y.body=_.uploadData(),y.progressCallback=a||null,y.errorHandler=Js(t),y}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4={STATE_CHANGED:"state_changed"},yt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function of(t){switch(t){case"running":case"pausing":case"canceling":return yt.RUNNING;case"paused":return yt.PAUSED;case"success":return yt.SUCCESS;case"canceled":return yt.CANCELED;case"error":return yt.ERROR;default:return yt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(e,n,r){if(e4(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class z4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw mo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw mo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw mo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw mo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw mo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class F4 extends z4{initXhr(){this.xhr_.responseType="text"}}function In(){return new F4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Qu(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(be.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(ES(i.status,[]))if(s)i=vS();else{this.sleepTime=Math.max(this.sleepTime*2,z5),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(be.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=I4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,In,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=A4(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,In,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=yv*this._chunkMultiplier,n=new Ac(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=D4(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,In,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){yv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=PS(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,In,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=j4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,In,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=_S(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=of(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new L4(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(of(this._state)){case yt.SUCCESS:Fi(this._resolve.bind(null,this.snapshot))();break;case yt.CANCELED:case yt.ERROR:const n=this._reject;Fi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(of(this._state)){case yt.RUNNING:case yt.PAUSED:e.next&&Fi(e.next.bind(e,this.snapshot))();break;case yt.SUCCESS:e.complete&&Fi(e.complete.bind(e))();break;case yt.CANCELED:case yt.ERROR:e.error&&Fi(e.error.bind(e,this._error))();break;default:e.error&&Fi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this._service=e,n instanceof ct?this._location=n:this._location=ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ri(e,n)}get root(){const e=new ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return OS(this._location.path)}get storage(){return this._service}get parent(){const e=g4(this._location.path);if(e===null)return null;const n=new ct(this._location.bucket,e);return new Ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bS(e)}}function B4(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new IS(t,new Vn(e),n)}function U4(t){const e={prefixes:[],items:[]};return AS(t,e).then(()=>e)}async function AS(t,e,n){const i=await DS(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await AS(t,e,i.nextPageToken)}function DS(t,e){e!=null&&typeof e.maxResults=="number"&&tp("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=T4(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,In)}function $4(t){t._throwIfRoot("getMetadata");const e=PS(t.storage,t._location,Qu());return t.storage.makeRequestWithTokens(e,In)}function W4(t,e){t._throwIfRoot("updateMetadata");const n=O4(t.storage,t._location,e,Qu());return t.storage.makeRequestWithTokens(n,In)}function H4(t){t._throwIfRoot("getDownloadURL");const e=R4(t.storage,t._location,Qu());return t.storage.makeRequestWithTokens(e,In).then(n=>{if(n===null)throw Y5();return n})}function V4(t){t._throwIfRoot("deleteObject");const e=N4(t.storage,t._location);return t.storage.makeRequestWithTokens(e,In)}function MS(t,e){const n=y4(t._location.path,e),r=new ct(t._location.bucket,n);return new Ri(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q4(t){return/^[A-Za-z]+:\/\//.test(t)}function K4(t,e){return new Ri(t,e)}function LS(t,e){if(t instanceof Cg){const n=t;if(n._bucket==null)throw q5();const r=new Ri(n,n._bucket);return e!=null?LS(r,e):r}else return e!==void 0?MS(t,e):t}function Y4(t,e){if(e&&q4(e)){if(t instanceof Cg)return K4(t,e);throw cs("To use ref(service, url), the first argument must be a Storage instance.")}else return LS(t,e)}function vv(t,e){const n=e==null?void 0:e[yS];return n==null?null:ct.makeFromBucketSpec(n,t)}function G4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:I1(i,t.app.options.projectId))}class Cg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=M5,this._maxUploadRetryTime=L5,this._requests=new Set,i!=null?this._bucket=ct.makeFromBucketSpec(i,this._host):this._bucket=vv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ct.makeFromBucketSpec(this._url,e):this._bucket=vv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){tp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){tp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ri(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Q5(xS());{const o=a4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const _v="@firebase/storage",wv="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4="storage";function X4(t,e,n){return t=Me(t),B4(t,e,n)}function J4(t){return t=Me(t),$4(t)}function Z4(t,e){return t=Me(t),W4(t,e)}function eD(t,e){return t=Me(t),DS(t,e)}function tD(t){return t=Me(t),U4(t)}function nD(t){return t=Me(t),H4(t)}function rD(t){return t=Me(t),V4(t)}function xv(t,e){return t=Me(t),Y4(t,e)}function iD(t,e){return MS(t,e)}function sD(t,e,n,r={}){G4(t,e,n,r)}function oD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Cg(n,r,i,e,Tu)}function aD(){Ei(new Tn(Q4,oD,"PUBLIC").setMultipleInstances(!0)),Sn(_v,wv,""),Sn(_v,wv,"esm2017")}aD();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new yl(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new yl(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new yl(o,this,this._ref)):s={next:n.next?o=>n.next(new yl(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class Sv{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Jn(e,this._service))}get items(){return this._delegate.items.map(e=>new Jn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=iD(this._delegate,e);return new Jn(n,this.storage)}get root(){return new Jn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Jn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new bv(X4(this._delegate,e,n),this)}putString(e,n=rn.RAW,r){this._throwIfRoot("putString");const i=CS(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new bv(new IS(this._delegate,new Vn(i.data,!0),s),this)}listAll(){return tD(this._delegate).then(e=>new Sv(e,this.storage))}list(e){return eD(this._delegate,e||void 0).then(n=>new Sv(n,this.storage))}getMetadata(){return J4(this._delegate)}updateMetadata(e){return Z4(this._delegate,e)}getDownloadURL(){return nD(this._delegate)}delete(){return this._throwIfRoot("delete"),rD(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw bS(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Ev(e))throw cs("ref() expected a child path but got a URL, use refFromURL instead.");return new Jn(xv(this._delegate,e),this)}refFromURL(e){if(!Ev(e))throw cs("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ct.makeFromUrl(e,this._delegate.host)}catch{throw cs("refFromUrl() expected a valid full URL but got an invalid one.")}return new Jn(xv(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){sD(this._delegate,e,n,r)}}function Ev(t){return/^[A-Za-z]+:\/\//.test(t)}const lD="@firebase/storage-compat",cD="0.3.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD="storage-compat";function dD(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new zS(n,r)}function fD(t){const e={TaskState:yt,TaskEvent:M4,StringFormat:rn,Storage:zS,Reference:Jn};t.INTERNAL.registerComponent(new Tn(uD,dD,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(lD,cD)}fD(Ru);const FS=Ru.initializeApp({apiKey:"AIzaSyBk_TI-0VyBLWAf9mCdGN6cgCzj8yQXzFE",authDomain:"soo-project-73ca3.firebaseapp.com",databaseURL:"https://soo-project-73ca3-default-rtdb.firebaseio.com/",projectId:"soo-project-73ca3",storageBucket:"soo-project-73ca3.appspot.com",messagingSenderId:"512535586432",appId:"1:512535586432:web:6254d32353d8d9848ba865"}),$a=FS.database();$a.ref("products");$a.ref("carts");const BS=$a.ref("members"),Os=$a.ref("notice"),Ns=$a.ref("review");FS.storage();const US=Oa({name:"member",initialState:{members:[],user:null,admin:!1},reducers:{initMembers(t,e){t.members=e.payload},userLogin(t,e){t.user=e.payload,localStorage.loging=JSON.stringify(e.payload),e.payload.userId=="tsalt@hanmail.net"?(localStorage.admin=JSON.stringify(!0),t.admin=!0):(localStorage.admin=JSON.stringify(!1),t.admin=!1)},userLogout(t,e){t.user=e.payload,t.admin=!1,localStorage.clear()}}}),{initMembers:hD,userLogin:$S,userLogout:pD}=US.actions,WS=()=>async t=>{try{BS.on("value",e=>{const n=e.val(),r=Object.values(n);t(hD(r))})}catch(e){console.error("오류:",e)}},mD=US.reducer,HS=Oa({name:"boards",initialState:{notice:[],review:[],type:"관리자",list:[]},reducers:{initNotice(t,e){t.notice=e.payload.sort((n,r)=>n.key>r.key?-1:1),t.list=e.payload.sort((n,r)=>n.key>r.key?-1:1)},initReview(t,e){t.review=e.payload.sort((n,r)=>n.key>r.key?-1:1),t.list=e.payload.sort((n,r)=>n.key>r.key?-1:1)},changeType(t,e){t.type=e.payload,e.payload=="관리자"?t.list=t.notice:e.payload=="유저"&&(t.list=t.review)}}}),{initNotice:gD,initReview:yD,changeType:np}=HS.actions,VS=()=>async t=>{try{Os.on("value",e=>{const n=e.val();console.log("파이어객체",n);const r=Object.entries(n).map(([i,s])=>({key:i,...s}));console.log("파이어배열",r),t(gD(r))})}catch(e){console.error("Error fetching notice:",e)}},qS=()=>async t=>{try{Ns.on("value",e=>{const n=e.val(),r=Object.entries(n).map(([i,s])=>({key:i,...s}));t(yD(r))})}catch(e){console.error("Error fetching review:",e)}},vD=HS.reducer,kg=sO({reducer:{news:CO,products:VN,card:GN,members:mD,boards:vD}});/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const Cv="popstate";function _D(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return rp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Dc(i)}return xD(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function KS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wD(){return Math.random().toString(36).substr(2,8)}function kv(t,e){return{usr:t.state,key:t.key,idx:e}}function rp(t,e,n,r){return n===void 0&&(n=null),va({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zs(e):e,{state:n,key:e&&e.key||r||wD()})}function Dc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wr.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(va({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=wr.Pop;let w=f(),v=w==null?null:w-c;c=w,l&&l({action:a,location:_.location,delta:v})}function h(w,v){a=wr.Push;let p=rp(_.location,w,v);n&&n(p,w),c=f()+1;let y=kv(p,c),x=_.createHref(p);try{o.pushState(y,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(x)}s&&l&&l({action:a,location:_.location,delta:1})}function g(w,v){a=wr.Replace;let p=rp(_.location,w,v);n&&n(p,w),c=f();let y=kv(p,c),x=_.createHref(p);o.replaceState(y,"",x),s&&l&&l({action:a,location:_.location,delta:0})}function m(w){let v=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:Dc(w);return p=p.replace(/ $/,"%20"),Ae(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cv,d),l=w,()=>{i.removeEventListener(Cv,d),l=null}},createHref(w){return e(i,w)},createURL:m,encodeLocation(w){let v=m(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:g,go(w){return o.go(w)}};return _}var Tv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tv||(Tv={}));function bD(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Zs(e):e,i=Ps(r.pathname||"/",n);if(i==null)return null;let s=YS(t);SD(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=AD(i);o=jD(s[a],l)}return o}function YS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ir([r,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),YS(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ND(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of GS(s.path))i(s,o,l)}),e}function GS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=GS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function SD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ED=/^:[\w-]+$/,CD=3,kD=2,TD=1,RD=10,OD=-2,Rv=t=>t==="*";function ND(t,e){let n=t.split("/"),r=n.length;return n.some(Rv)&&(r+=OD),e&&(r+=kD),n.filter(i=>!Rv(i)).reduce((i,s)=>i+(ED.test(s)?CD:s===""?TD:RD),r)}function PD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",f=ip({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!f)return null;Object.assign(r,f.params);let d=a.route;s.push({params:r,pathname:Ir([i,f.pathname]),pathnameBase:zD(Ir([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=Ir([i,f.pathnameBase]))}return s}function ip(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ID(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:h,isOptional:g}=f;if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[d];return g&&!m?c[h]=void 0:c[h]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function ID(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),KS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function AD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return KS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ps(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function DD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zs(t):t;return{pathname:n?n.startsWith("/")?n:MD(n,e):e,search:FD(r),hash:BD(i)}}function MD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function af(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function QS(t,e){let n=LD(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function XS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zs(t):(i=va({},t),Ae(!i.pathname||!i.pathname.includes("?"),af("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),af("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),af("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=DD(i,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),zD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),FD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function UD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const JS=["post","put","patch","delete"];new Set(JS);const $D=["get",...JS];new Set($D);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_a.apply(this,arguments)}const Zu=E.createContext(null),ZS=E.createContext(null),Qr=E.createContext(null),ed=E.createContext(null),Xr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),eE=E.createContext(null);function WD(t,e){let{relative:n}=e===void 0?{}:e;Wa()||Ae(!1);let{basename:r,navigator:i}=E.useContext(Qr),{hash:s,pathname:o,search:a}=td(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ir([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Wa(){return E.useContext(ed)!=null}function ar(){return Wa()||Ae(!1),E.useContext(ed).location}function tE(t){E.useContext(Qr).static||E.useLayoutEffect(t)}function Mi(){let{isDataRoute:t}=E.useContext(Xr);return t?i3():HD()}function HD(){Wa()||Ae(!1);let t=E.useContext(Zu),{basename:e,future:n,navigator:r}=E.useContext(Qr),{matches:i}=E.useContext(Xr),{pathname:s}=ar(),o=JSON.stringify(QS(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return tE(()=>{a.current=!0}),E.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=XS(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ir([e,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[e,r,o,s,t])}const VD=E.createContext(null);function qD(t){let e=E.useContext(Xr).outlet;return e&&E.createElement(VD.Provider,{value:t},e)}function td(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(Qr),{matches:i}=E.useContext(Xr),{pathname:s}=ar(),o=JSON.stringify(QS(i,r.v7_relativeSplatPath));return E.useMemo(()=>XS(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function KD(t,e){return YD(t,e)}function YD(t,e,n,r){Wa()||Ae(!1);let{navigator:i}=E.useContext(Qr),{matches:s}=E.useContext(Xr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=ar(),f;if(e){var d;let w=typeof e=="string"?Zs(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||Ae(!1),f=w}else f=c;let h=f.pathname||"/",g=h;if(l!=="/"){let w=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let m=bD(t,{pathname:g}),_=ZD(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Ir([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Ir([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?E.createElement(ed.Provider,{value:{location:_a({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:wr.Pop}},_):_}function GD(){let t=r3(),e=UD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const QD=E.createElement(GD,null);class XD extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(Xr.Provider,{value:this.props.routeContext},E.createElement(eE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JD(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Zu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Xr.Provider,{value:e},r)}function ZD(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));f>=0||Ae(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:h,errors:g}=n,m=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||m){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let g,m=!1,_=null,w=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||QD,l&&(c<0&&h===0?(s3("route-fallback",!1),m=!0,w=null):c===h&&(m=!0,w=d.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,h+1)),p=()=>{let y;return g?y=_:m?y=w:d.route.Component?y=E.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=f,E.createElement(JD,{match:d,routeContext:{outlet:f,matches:v,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?E.createElement(XD,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:p(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):p()},null)}var nE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(nE||{}),Mc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Mc||{});function e3(t){let e=E.useContext(Zu);return e||Ae(!1),e}function t3(t){let e=E.useContext(ZS);return e||Ae(!1),e}function n3(t){let e=E.useContext(Xr);return e||Ae(!1),e}function rE(t){let e=n3(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function r3(){var t;let e=E.useContext(eE),n=t3(Mc.UseRouteError),r=rE(Mc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function i3(){let{router:t}=e3(nE.UseNavigateStable),e=rE(Mc.UseNavigateStable),n=E.useRef(!1);return tE(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,_a({fromRouteId:e},s)))},[t,e])}const Ov={};function s3(t,e,n){!e&&!Ov[t]&&(Ov[t]=!0)}function o3(t){return qD(t.context)}function Ve(t){Ae(!1)}function a3(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1,future:a}=t;Wa()&&Ae(!1);let l=e.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:l,navigator:s,static:o,future:_a({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Zs(r));let{pathname:f="/",search:d="",hash:h="",state:g=null,key:m="default"}=r,_=E.useMemo(()=>{let w=Ps(f,l);return w==null?null:{location:{pathname:w,search:d,hash:h,state:g,key:m},navigationType:i}},[l,f,d,h,g,m,i]);return _==null?null:E.createElement(Qr.Provider,{value:c},E.createElement(ed.Provider,{children:n,value:_}))}function l3(t){let{children:e,location:n}=t;return KD(sp(e),n)}new Promise(()=>{});function sp(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,sp(r.props.children,s));return}r.type!==Ve&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lc(){return Lc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lc.apply(this,arguments)}function iE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function c3(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function u3(t,e){return t.button===0&&(!e||e==="_self")&&!c3(t)}const d3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],f3=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],h3="6";try{window.__reactRouterVersion=h3}catch{}const p3=E.createContext({isTransitioning:!1}),m3="startTransition",Nv=Sf[m3];function g3(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=_D({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=E.useCallback(d=>{c&&Nv?Nv(()=>l(d)):l(d)},[l,c]);return E.useLayoutEffect(()=>o.listen(f),[o,f]),E.createElement(a3,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const y3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,unstable_viewTransition:d}=e,h=iE(e,d3),{basename:g}=E.useContext(Qr),m,_=!1;if(typeof c=="string"&&v3.test(c)&&(m=c,y3))try{let y=new URL(window.location.href),x=c.startsWith("//")?new URL(y.protocol+c):new URL(c),b=Ps(x.pathname,g);x.origin===y.origin&&b!=null?c=b+x.search+x.hash:_=!0}catch{}let w=WD(c,{relative:i}),v=w3(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:d});function p(y){r&&r(y),y.defaultPrevented||v(y)}return E.createElement("a",Lc({},h,{href:m||w,onClick:_||s?r:p,ref:n,target:l}))}),Qt=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:c,children:f}=e,d=iE(e,f3),h=td(l,{relative:d.relative}),g=ar(),m=E.useContext(ZS),{navigator:_,basename:w}=E.useContext(Qr),v=m!=null&&x3(h)&&c===!0,p=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,y=g.pathname,x=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(y=y.toLowerCase(),x=x?x.toLowerCase():null,p=p.toLowerCase()),x&&w&&(x=Ps(x,w)||x);const b=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let S=y===p||!o&&y.startsWith(p)&&y.charAt(b)==="/",C=x!=null&&(x===p||!o&&x.startsWith(p)&&x.charAt(p.length)==="/"),R={isActive:S,isPending:C,isTransitioning:v},N=S?r:void 0,T;typeof s=="function"?T=s(R):T=[s,S?"active":null,C?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let L=typeof a=="function"?a(R):a;return E.createElement(Ee,Lc({},d,{"aria-current":N,className:T,ref:n,style:L,to:l,unstable_viewTransition:c}),typeof f=="function"?f(R):f)});var op;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(op||(op={}));var Pv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pv||(Pv={}));function _3(t){let e=E.useContext(Zu);return e||Ae(!1),e}function w3(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Mi(),c=ar(),f=td(t,{relative:o});return E.useCallback(d=>{if(u3(d,n)){d.preventDefault();let h=r!==void 0?r:Dc(c)===Dc(f);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,f,r,i,n,t,s,o,a])}function x3(t,e){e===void 0&&(e={});let n=E.useContext(p3);n==null&&Ae(!1);let{basename:r}=_3(op.useViewTransitionState),i=td(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ps(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ps(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ip(i.pathname,o)!=null||ip(i.pathname,s)!=null}var Ot=function(){return Ot=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ot.apply(this,arguments)};function wa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var we="-ms-",Lo="-moz-",ce="-webkit-",sE="comm",nd="rule",Tg="decl",b3="@import",oE="@keyframes",S3="@layer",aE=Math.abs,Rg=String.fromCharCode,ap=Object.assign;function E3(t,e){return Qe(t,0)^45?(((e<<2^Qe(t,0))<<2^Qe(t,1))<<2^Qe(t,2))<<2^Qe(t,3):0}function lE(t){return t.trim()}function Wn(t,e){return(t=e.exec(t))?t[0]:t}function Q(t,e,n){return t.replace(e,n)}function Ml(t,e,n){return t.indexOf(e,n)}function Qe(t,e){return t.charCodeAt(e)|0}function js(t,e,n){return t.slice(e,n)}function Pn(t){return t.length}function cE(t){return t.length}function bo(t,e){return e.push(t),t}function C3(t,e){return t.map(e).join("")}function jv(t,e){return t.filter(function(n){return!Wn(n,e)})}var rd=1,Is=1,uE=0,un=0,ze=0,eo="";function id(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:rd,column:Is,length:o,return:"",siblings:a}}function ur(t,e){return ap(id("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Bi(t){for(;t.root;)t=ur(t.root,{children:[t]});bo(t,t.siblings)}function k3(){return ze}function T3(){return ze=un>0?Qe(eo,--un):0,Is--,ze===10&&(Is=1,rd--),ze}function Cn(){return ze=un<uE?Qe(eo,un++):0,Is++,ze===10&&(Is=1,rd++),ze}function pi(){return Qe(eo,un)}function Ll(){return un}function sd(t,e){return js(eo,t,e)}function lp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R3(t){return rd=Is=1,uE=Pn(eo=t),un=0,[]}function O3(t){return eo="",t}function lf(t){return lE(sd(un-1,cp(t===91?t+2:t===40?t+1:t)))}function N3(t){for(;(ze=pi())&&ze<33;)Cn();return lp(t)>2||lp(ze)>3?"":" "}function P3(t,e){for(;--e&&Cn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return sd(t,Ll()+(e<6&&pi()==32&&Cn()==32))}function cp(t){for(;Cn();)switch(ze){case t:return un;case 34:case 39:t!==34&&t!==39&&cp(ze);break;case 40:t===41&&cp(t);break;case 92:Cn();break}return un}function j3(t,e){for(;Cn()&&t+ze!==57;)if(t+ze===84&&pi()===47)break;return"/*"+sd(e,un-1)+"*"+Rg(t===47?t:Cn())}function I3(t){for(;!lp(pi());)Cn();return sd(t,un)}function A3(t){return O3(zl("",null,null,null,[""],t=R3(t),0,[0],t))}function zl(t,e,n,r,i,s,o,a,l){for(var c=0,f=0,d=o,h=0,g=0,m=0,_=1,w=1,v=1,p=0,y="",x=i,b=s,S=r,C=y;w;)switch(m=p,p=Cn()){case 40:if(m!=108&&Qe(C,d-1)==58){Ml(C+=Q(lf(p),"&","&\f"),"&\f",aE(c?a[c-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:C+=lf(p);break;case 9:case 10:case 13:case 32:C+=N3(m);break;case 92:C+=P3(Ll()-1,7);continue;case 47:switch(pi()){case 42:case 47:bo(D3(j3(Cn(),Ll()),e,n,l),l);break;default:C+="/"}break;case 123*_:a[c++]=Pn(C)*v;case 125*_:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+f:v==-1&&(C=Q(C,/\f/g,"")),g>0&&Pn(C)-d&&bo(g>32?Av(C+";",r,n,d-1,l):Av(Q(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if(bo(S=Iv(C,e,n,c,f,i,a,y,x=[],b=[],d,s),s),p===123)if(f===0)zl(C,e,S,S,x,s,d,a,b);else switch(h===99&&Qe(C,3)===110?100:h){case 100:case 108:case 109:case 115:zl(t,S,S,r&&bo(Iv(t,S,S,0,0,i,a,y,i,x=[],d,b),b),i,b,d,a,r?x:b);break;default:zl(C,S,S,S,[""],b,0,a,b)}}c=f=g=0,_=v=1,y=C="",d=o;break;case 58:d=1+Pn(C),g=m;default:if(_<1){if(p==123)--_;else if(p==125&&_++==0&&T3()==125)continue}switch(C+=Rg(p),p*_){case 38:v=f>0?1:(C+="\f",-1);break;case 44:a[c++]=(Pn(C)-1)*v,v=1;break;case 64:pi()===45&&(C+=lf(Cn())),h=pi(),f=d=Pn(y=C+=I3(Ll())),p++;break;case 45:m===45&&Pn(C)==2&&(_=0)}}return s}function Iv(t,e,n,r,i,s,o,a,l,c,f,d){for(var h=i-1,g=i===0?s:[""],m=cE(g),_=0,w=0,v=0;_<r;++_)for(var p=0,y=js(t,h+1,h=aE(w=o[_])),x=t;p<m;++p)(x=lE(w>0?g[p]+" "+y:Q(y,/&\f/g,g[p])))&&(l[v++]=x);return id(t,e,n,i===0?nd:a,l,c,f,d)}function D3(t,e,n,r){return id(t,e,n,sE,Rg(k3()),js(t,2,-2),0,r)}function Av(t,e,n,r,i){return id(t,e,n,Tg,js(t,0,r),js(t,r+1,-1),r,i)}function dE(t,e,n){switch(E3(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return Lo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+Lo+t+we+t+t;case 5936:switch(Qe(t,e+11)){case 114:return ce+t+we+Q(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+we+Q(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+we+Q(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+we+t+t;case 6165:return ce+t+we+"flex-"+t+t;case 5187:return ce+t+Q(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return ce+t+we+"flex-item-"+Q(t,/flex-|-self/g,"")+(Wn(t,/flex-|baseline/)?"":we+"grid-row-"+Q(t,/flex-|-self/g,""))+t;case 4675:return ce+t+we+"flex-line-pack"+Q(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+we+Q(t,"shrink","negative")+t;case 5292:return ce+t+we+Q(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+Q(t,"-grow","")+ce+t+we+Q(t,"grow","positive")+t;case 4554:return ce+Q(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return Q(Q(Q(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return Q(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return Q(Q(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!Wn(t,/flex-|baseline/))return we+"grid-column-align"+js(t,e)+t;break;case 2592:case 3360:return we+Q(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Wn(r.props,/grid-\w+-end/)})?~Ml(t+(n=n[e].value),"span",0)?t:we+Q(t,"-start","")+t+we+"grid-row-span:"+(~Ml(n,"span",0)?Wn(n,/\d+/):+Wn(n,/\d+/)-+Wn(t,/\d+/))+";":we+Q(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Wn(r.props,/grid-\w+-start/)})?t:we+Q(Q(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Q(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pn(t)-1-e>6)switch(Qe(t,e+1)){case 109:if(Qe(t,e+4)!==45)break;case 102:return Q(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Lo+(Qe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ml(t,"stretch",0)?dE(Q(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Q(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return we+i+":"+s+c+(o?we+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(Qe(t,e+6)===121)return Q(t,":",":"+ce)+t;break;case 6444:switch(Qe(t,Qe(t,14)===45?18:11)){case 120:return Q(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Qe(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+we+"$2box$3")+t;case 100:return Q(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(t,"scroll-","scroll-snap-")+t}return t}function zc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function M3(t,e,n,r){switch(t.type){case S3:if(t.children.length)break;case b3:case Tg:return t.return=t.return||t.value;case sE:return"";case oE:return t.return=t.value+"{"+zc(t.children,r)+"}";case nd:if(!Pn(t.value=t.props.join(",")))return""}return Pn(n=zc(t.children,r))?t.return=t.value+"{"+n+"}":""}function L3(t){var e=cE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function z3(t){return function(e){e.root||(e=e.return)&&t(e)}}function F3(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Tg:t.return=dE(t.value,t.length,n);return;case oE:return zc([ur(t,{value:Q(t.value,"@","@"+ce)})],r);case nd:if(t.length)return C3(n=t.props,function(i){switch(Wn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bi(ur(t,{props:[Q(i,/:(read-\w+)/,":"+Lo+"$1")]})),Bi(ur(t,{props:[i]})),ap(t,{props:jv(n,r)});break;case"::placeholder":Bi(ur(t,{props:[Q(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Bi(ur(t,{props:[Q(i,/:(plac\w+)/,":"+Lo+"$1")]})),Bi(ur(t,{props:[Q(i,/:(plac\w+)/,we+"input-$1")]})),Bi(ur(t,{props:[i]})),ap(t,{props:jv(n,r)});break}return""})}}var B3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},As=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",fE="active",hE="data-styled-version",od="6.1.8",Og=`/*!sc*/
`,Ng=typeof window<"u"&&"HTMLElement"in window,U3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),ad=Object.freeze([]),Ds=Object.freeze({});function $3(t,e,n){return n===void 0&&(n=Ds),t.theme!==n.theme&&t.theme||e||n.theme}var pE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),W3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H3=/(^-|-$)/g;function Dv(t){return t.replace(W3,"-").replace(H3,"")}var V3=/(a)(d)/gi,vl=52,Mv=function(t){return String.fromCharCode(t+(t>25?39:97))};function up(t){var e,n="";for(e=Math.abs(t);e>vl;e=e/vl|0)n=Mv(e%vl)+n;return(Mv(e%vl)+n).replace(V3,"$1-$2")}var cf,mE=5381,es=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},gE=function(t){return es(mE,t)};function yE(t){return up(gE(t)>>>0)}function q3(t){return t.displayName||t.name||"Component"}function uf(t){return typeof t=="string"&&!0}var vE=typeof Symbol=="function"&&Symbol.for,_E=vE?Symbol.for("react.memo"):60115,K3=vE?Symbol.for("react.forward_ref"):60112,Y3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},G3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Q3=((cf={})[K3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cf[_E]=wE,cf);function Lv(t){return("type"in(e=t)&&e.type.$$typeof)===_E?wE:"$$typeof"in t?Q3[t.$$typeof]:Y3;var e}var X3=Object.defineProperty,J3=Object.getOwnPropertyNames,zv=Object.getOwnPropertySymbols,Z3=Object.getOwnPropertyDescriptor,eM=Object.getPrototypeOf,Fv=Object.prototype;function xE(t,e,n){if(typeof e!="string"){if(Fv){var r=eM(e);r&&r!==Fv&&xE(t,r,n)}var i=J3(e);zv&&(i=i.concat(zv(e)));for(var s=Lv(t),o=Lv(e),a=0;a<i.length;++a){var l=i[a];if(!(l in G3||n&&n[l]||o&&l in o||s&&l in s)){var c=Z3(e,l);try{X3(t,l,c)}catch{}}}}return t}function Ms(t){return typeof t=="function"}function Pg(t){return typeof t=="object"&&"styledComponentId"in t}function ci(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function dp(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function xa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function fp(t,e,n){if(n===void 0&&(n=!1),!n&&!xa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=fp(t[r],e[r]);else if(xa(e))for(var r in e)t[r]=fp(t[r],e[r]);return t}function jg(t,e){Object.defineProperty(t,"toString",{value:e})}function Ha(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var tM=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ha(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Og);return n},t}(),Fl=new Map,Fc=new Map,Bl=1,_l=function(t){if(Fl.has(t))return Fl.get(t);for(;Fc.has(Bl);)Bl++;var e=Bl++;return Fl.set(t,e),Fc.set(e,t),e},nM=function(t,e){Bl=e+1,Fl.set(t,e),Fc.set(e,t)},rM="style[".concat(As,"][").concat(hE,'="').concat(od,'"]'),iM=new RegExp("^".concat(As,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sM=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},oM=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Og),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(iM);if(l){var c=0|parseInt(l[1],10),f=l[2];c!==0&&(nM(f,c),sM(t,f,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function aM(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var bE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(As,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(As,fE),r.setAttribute(hE,od);var o=aM();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},lM=function(){function t(e){this.element=bE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ha(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),cM=function(){function t(e){this.element=bE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),uM=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Bv=Ng,dM={isServer:!Ng,useCSSOMInjection:!U3},SE=function(){function t(e,n,r){e===void 0&&(e=Ds),n===void 0&&(n={});var i=this;this.options=Ot(Ot({},dM),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ng&&Bv&&(Bv=!1,function(s){for(var o=document.querySelectorAll(rM),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(As)!==fE&&(oM(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),jg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(d){var h=function(v){return Fc.get(v)}(d);if(h===void 0)return"continue";var g=s.names.get(h),m=o.getGroup(d);if(g===void 0||m.length===0)return"continue";var _="".concat(As,".g").concat(d,'[id="').concat(h,'"]'),w="";g!==void 0&&g.forEach(function(v){v.length>0&&(w+="".concat(v,","))}),l+="".concat(m).concat(_,'{content:"').concat(w,'"}').concat(Og)},f=0;f<a;f++)c(f);return l}(i)})}return t.registerId=function(e){return _l(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ot(Ot({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new uM(i):r?new lM(i):new cM(i)}(this.options),new tM(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(_l(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(_l(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(_l(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),fM=/&/g,hM=/^\s*\/\/.*$/gm;function EE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=EE(n.children,e)),n})}function pM(t){var e,n,r,i=t===void 0?Ds:t,s=i.options,o=s===void 0?Ds:s,a=i.plugins,l=a===void 0?ad:a,c=function(h,g,m){return m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(e):h},f=l.slice();f.push(function(h){h.type===nd&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(fM,n).replace(r,c))}),o.prefix&&f.push(F3),f.push(M3);var d=function(h,g,m,_){g===void 0&&(g=""),m===void 0&&(m=""),_===void 0&&(_="&"),e=_,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var w=h.replace(hM,""),v=A3(m||g?"".concat(m," ").concat(g," { ").concat(w," }"):w);o.namespace&&(v=EE(v,o.namespace));var p=[];return zc(v,L3(f.concat(z3(function(y){return p.push(y)})))),p};return d.hash=l.length?l.reduce(function(h,g){return g.name||Ha(15),es(h,g.name)},mE).toString():"",d}var mM=new SE,hp=pM(),CE=_t.createContext({shouldForwardProp:void 0,styleSheet:mM,stylis:hp});CE.Consumer;_t.createContext(void 0);function Uv(){return E.useContext(CE)}var kE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=hp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,jg(this,function(){throw Ha(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=hp),this.name+e.hash},t}(),gM=function(t){return t>="A"&&t<="Z"};function $v(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;gM(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var TE=function(t){return t==null||t===!1||t===""},RE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!TE(s)&&(Array.isArray(s)&&s.isCss||Ms(s)?r.push("".concat($v(i),":"),s,";"):xa(s)?r.push.apply(r,wa(wa(["".concat(i," {")],RE(s),!1),["}"],!1)):r.push("".concat($v(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in B3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mi(t,e,n,r){if(TE(t))return[];if(Pg(t))return[".".concat(t.styledComponentId)];if(Ms(t)){if(!Ms(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return mi(i,e,n,r)}var s;return t instanceof kE?n?(t.inject(n,r),[t.getName(r)]):[t]:xa(t)?RE(t):Array.isArray(t)?Array.prototype.concat.apply(ad,t.map(function(o){return mi(o,e,n,r)})):[t.toString()]}function yM(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ms(n)&&!Pg(n))return!1}return!0}var vM=gE(od),_M=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yM(e),this.componentId=n,this.baseHash=es(vM,n),this.baseStyle=r,SE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ci(i,this.staticRulesId);else{var s=dp(mi(this.rules,e,n,r)),o=up(es(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ci(i,o),this.staticRulesId=o}else{for(var l=es(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")c+=d;else if(d){var h=dp(mi(d,e,n,r));l=es(l,h+f),c+=h}}if(c){var g=up(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=ci(i,g)}}return i},t}(),OE=_t.createContext(void 0);OE.Consumer;var df={};function wM(t,e,n){var r=Pg(t),i=t,s=!uf(t),o=e.attrs,a=o===void 0?ad:o,l=e.componentId,c=l===void 0?function(x,b){var S=typeof x!="string"?"sc":Dv(x);df[S]=(df[S]||0)+1;var C="".concat(S,"-").concat(yE(od+S+df[S]));return b?"".concat(b,"-").concat(C):C}(e.displayName,e.parentComponentId):l,f=e.displayName,d=f===void 0?function(x){return uf(x)?"styled.".concat(x):"Styled(".concat(q3(x),")")}(t):f,h=e.displayName&&e.componentId?"".concat(Dv(e.displayName),"-").concat(e.componentId):e.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;m=function(x,b){return _(x,b)&&w(x,b)}}else m=_}var v=new _M(n,h,r?i.componentStyle:void 0);function p(x,b){return function(S,C,R){var N=S.attrs,T=S.componentStyle,L=S.defaultProps,W=S.foldedComponentIds,V=S.styledComponentId,A=S.target,z=_t.useContext(OE),j=Uv(),B=S.shouldForwardProp||j.shouldForwardProp,k=$3(C,z,L)||Ds,P=function(fe,Le,et){for(var hn,ft=Ot(Ot({},Le),{className:void 0,theme:et}),He=0;He<fe.length;He+=1){var Mt=Ms(hn=fe[He])?hn(ft):hn;for(var St in Mt)ft[St]=St==="className"?ci(ft[St],Mt[St]):St==="style"?Ot(Ot({},ft[St]),Mt[St]):Mt[St]}return Le.className&&(ft.className=ci(ft.className,Le.className)),ft}(N,C,k),M=P.as||A,$={};for(var q in P)P[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&P.theme===k||(q==="forwardedAs"?$.as=P.forwardedAs:B&&!B(q,M)||($[q]=P[q]));var re=function(fe,Le){var et=Uv(),hn=fe.generateAndInjectStyles(Le,et.styleSheet,et.stylis);return hn}(T,P),le=ci(W,V);return re&&(le+=" "+re),P.className&&(le+=" "+P.className),$[uf(M)&&!pE.has(M)?"class":"className"]=le,$.ref=R,E.createElement(M,$)}(y,x,b)}p.displayName=d;var y=_t.forwardRef(p);return y.attrs=g,y.componentStyle=v,y.displayName=d,y.shouldForwardProp=m,y.foldedComponentIds=r?ci(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=h,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(b){for(var S=[],C=1;C<arguments.length;C++)S[C-1]=arguments[C];for(var R=0,N=S;R<N.length;R++)fp(b,N[R],!0);return b}({},i.defaultProps,x):x}}),jg(y,function(){return".".concat(y.styledComponentId)}),s&&xE(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Wv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Hv=function(t){return Object.assign(t,{isCss:!0})};function NE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ms(t)||xa(t))return Hv(mi(Wv(ad,wa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?mi(r):Hv(mi(Wv(r,e)))}function pp(t,e,n){if(n===void 0&&(n=Ds),!e)throw Ha(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,NE.apply(void 0,wa([i],s,!1)))};return r.attrs=function(i){return pp(t,e,Ot(Ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return pp(t,e,Ot(Ot({},n),i))},r}var PE=function(t){return pp(wM,t)},H=PE;pE.forEach(function(t){H[t]=PE(t)});function xM(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=dp(NE.apply(void 0,wa([t],e,!1))),i=yE(r);return new kE(i,r)}var jE={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(jE);var Va=jE.exports;const bM=$s(Va);var IE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vv=_t.createContext&&_t.createContext(IE),SM=["attr","size","title"];function EM(t,e){if(t==null)return{};var n=CM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function CM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bc.apply(this,arguments)}function qv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Uc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qv(Object(n),!0).forEach(function(r){kM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kM(t,e,n){return e=TM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function TM(t){var e=RM(t,"string");return typeof e=="symbol"?e:String(e)}function RM(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function AE(t){return t&&t.map((e,n)=>_t.createElement(e.tag,Uc({key:n},e.attr),AE(e.child)))}function fn(t){return e=>_t.createElement(OM,Bc({attr:Uc({},t.attr)},e),AE(t.child))}function OM(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=EM(t,SM),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),_t.createElement("svg",Bc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Uc(Uc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&_t.createElement("title",null,s),t.children)};return Vv!==void 0?_t.createElement(Vv.Consumer,null,n=>e(n)):e(IE)}function Kv(t){return fn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"},child:[]},{tag:"path",attr:{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"},child:[]}]})(t)}function NM(t){return fn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function PM(t){return fn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function jM(t){return fn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6 45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8L589.6 240zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function IM(t){return fn({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(t)}var Ig={};Ig.match=FM;Ig.parse=DE;var AM=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,DM=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,MM=/^(?:(min|max)-)?(.+)/,LM=/(em|rem|px|cm|mm|in|pt|pc)?$/,zM=/(dpi|dpcm|dppx)?$/;function FM(t,e){return DE(t).some(function(n){var r=n.inverse,i=n.type==="all"||e.type===n.type;if(i&&r||!(i||r))return!1;var s=n.expressions.every(function(o){var a=o.feature,l=o.modifier,c=o.value,f=e[a];if(!f)return!1;switch(a){case"orientation":case"scan":return f.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=Qv(c),f=Qv(f);break;case"resolution":c=Gv(c),f=Gv(f);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=Yv(c),f=Yv(f);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,f=parseInt(f,10)||0;break}switch(l){case"min":return f>=c;case"max":return f<=c;default:return f===c}});return s&&!r||!s&&r})}function DE(t){return t.split(",").map(function(e){e=e.trim();var n=e.match(AM),r=n[1],i=n[2],s=n[3]||"",o={};return o.inverse=!!r&&r.toLowerCase()==="not",o.type=i?i.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],o.expressions=s.map(function(a){var l=a.match(DM),c=l[1].toLowerCase().match(MM);return{modifier:c[1],feature:c[2],value:l[2]}}),o})}function Yv(t){var e=Number(t),n;return e||(n=t.match(/^(\d+)\s*\/\s*(\d+)$/),e=n[1]/n[2]),e}function Gv(t){var e=parseFloat(t),n=String(t).match(zM)[1];switch(n){case"dpcm":return e/2.54;case"dppx":return e*96;default:return e}}function Qv(t){var e=parseFloat(t),n=String(t).match(LM)[1];switch(n){case"em":return e*16;case"rem":return e*16;case"cm":return e*96/2.54;case"mm":return e*96/2.54/10;case"in":return e*96;case"pt":return e*72;case"pc":return e*72/12;default:return e}}var BM=Ig.match,Xv=typeof window<"u"?window.matchMedia:null;function UM(t,e,n){var r=this,i;Xv&&!n&&(i=Xv.call(window,t)),i?(this.matches=i.matches,this.media=i.media,i.addListener(a)):(this.matches=BM(t,e),this.media=t),this.addListener=s,this.removeListener=o,this.dispose=l;function s(c){i&&i.addListener(c)}function o(c){i&&i.removeListener(c)}function a(c){r.matches=c.matches,r.media=c.media}function l(){i&&i.removeListener(a)}}function $M(t,e,n){return new UM(t,e,n)}var WM=$M;const HM=$s(WM);var VM=/[A-Z]/g,qM=/^ms-/,ff={};function KM(t){return"-"+t.toLowerCase()}function ME(t){if(ff.hasOwnProperty(t))return ff[t];var e=t.replace(VM,KM);return ff[t]=qM.test(e)?"-"+e:e}function YM(t,e){if(t===e)return!0;if(!t||!e)return!1;const n=Object.keys(t),r=Object.keys(e),i=n.length;if(r.length!==i)return!1;for(let s=0;s<i;s++){const o=n[s];if(t[o]!==e[o]||!Object.prototype.hasOwnProperty.call(e,o))return!1}return!0}var LE={exports:{}},GM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",QM=GM,XM=QM;function zE(){}function FE(){}FE.resetWarningCache=zE;var JM=function(){function t(r,i,s,o,a,l){if(l!==XM){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:FE,resetWarningCache:zE};return n.PropTypes=n,n};LE.exports=JM();var ZM=LE.exports;const ae=$s(ZM),mt=ae.oneOfType([ae.string,ae.number]),Ag={all:ae.bool,grid:ae.bool,aural:ae.bool,braille:ae.bool,handheld:ae.bool,print:ae.bool,projection:ae.bool,screen:ae.bool,tty:ae.bool,tv:ae.bool,embossed:ae.bool},BE={orientation:ae.oneOf(["portrait","landscape"]),scan:ae.oneOf(["progressive","interlace"]),aspectRatio:ae.string,deviceAspectRatio:ae.string,height:mt,deviceHeight:mt,width:mt,deviceWidth:mt,color:ae.bool,colorIndex:ae.bool,monochrome:ae.bool,resolution:mt,type:Object.keys(Ag)},{type:y8,...eL}=BE,UE={minAspectRatio:ae.string,maxAspectRatio:ae.string,minDeviceAspectRatio:ae.string,maxDeviceAspectRatio:ae.string,minHeight:mt,maxHeight:mt,minDeviceHeight:mt,maxDeviceHeight:mt,minWidth:mt,maxWidth:mt,minDeviceWidth:mt,maxDeviceWidth:mt,minColor:ae.number,maxColor:ae.number,minColorIndex:ae.number,maxColorIndex:ae.number,minMonochrome:ae.number,maxMonochrome:ae.number,minResolution:mt,maxResolution:mt,...eL},tL={...Ag,...UE};var nL={all:tL,types:Ag,matchers:BE,features:UE};const rL=t=>`not ${t}`,iL=(t,e)=>{const n=ME(t);return typeof e=="number"&&(e=`${e}px`),e===!0?n:e===!1?rL(n):`(${n}: ${e})`},sL=t=>t.join(" and "),oL=t=>{const e=[];return Object.keys(nL.all).forEach(n=>{const r=t[n];r!=null&&e.push(iL(n,r))}),sL(e)},aL=E.createContext(void 0),lL=t=>t.query||oL(t),Jv=t=>t?Object.keys(t).reduce((n,r)=>(n[ME(r)]=t[r],n),{}):void 0,$E=()=>{const t=E.useRef(!1);return E.useEffect(()=>{t.current=!0},[]),t.current},cL=t=>{const e=E.useContext(aL),n=()=>Jv(t)||Jv(e),[r,i]=E.useState(n);return E.useEffect(()=>{const s=n();YM(r,s)||i(s)},[t,e]),r},uL=t=>{const e=()=>lL(t),[n,r]=E.useState(e);return E.useEffect(()=>{const i=e();n!==i&&r(i)},[t]),n},dL=(t,e)=>{const n=()=>HM(t,e||{},!!e),[r,i]=E.useState(n),s=$E();return E.useEffect(()=>{if(s){const o=n();return i(o),()=>{o&&o.dispose()}}},[t,e]),r},fL=t=>{const[e,n]=E.useState(t.matches);return E.useEffect(()=>{const r=i=>{n(i.matches)};return t.addListener(r),n(t.matches),()=>{t.removeListener(r)}},[t]),e},hL=(t,e,n)=>{const r=cL(e),i=uL(t);if(!i)throw new Error("Invalid or missing MediaQuery!");const s=dL(i,r),o=fL(s),a=$E();return E.useEffect(()=>{a&&n&&n(o)},[o]),E.useEffect(()=>()=>{s&&s.dispose()},[]),o};function pL(t){return fn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(t)}function WE(t){return fn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(t)}function mL(t){return fn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M14.5 12a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0zm7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8z"},child:[]}]})(t)}const gL=H.div`
position: fixed;
z-index: 999;
top:0;
left: 0;
right: 0;
  .header__wrap{
    height: 120px;
    padding:0 20px;
    background: #fff;
    position: relative;
    display:flex;
    justify-content: space-between;
    align-items:center;
    @media(max-width: 991px){
      height: 70px;
      padding: 0;
    }
    h1 {
      width: 20%;
      display:flex;
      justify-content: center;
      @media(max-width: 991px){
        position:absolute;
        left: 50%;
        top: 50%;
        transform:translate(-50%, -50%)
      }
    }
    #header__nav { 
      width: 1250px;
      ul {
        display: flex;
        justify-content: center;
        height: 120px;
        li { 
          font-size: 20px;
          padding: 0 20px;
          display:flex;
          align-items: center;
          transition: all 0.5s;
          font-weight: 500;
          &:nth-child(1):hover {
            background: #ff5d0e;
            color: #fff;
          }
          &:nth-child(2):hover  {
            background: #ffa70e;
            color: #fff;
          }
          &:nth-child(3):hover {
            background: #ffcb06;
            color: #fff;
          }
          &:nth-child(4):hover {
            background: #04a6e2;
            color: #fff;
          }
          &:nth-child(5):hover {
            background: #9b43ff;
            color: #fff;
          }
          &:nth-child(6):hover {
            background: #eb3690;
            color: #fff;
          }
          a {
            height: 120px;
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .closeNav { display: none; }
    }
    .member{
      width: 20%;
      display:flex;
      align-items:center;
      justify-content: center;
      font-size:40px;
      color:#333;
      gap: 10px;
    a{
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 14px;
        @media(max-width: 991px){
          display: none;
        }
      }
    }
   }
}

`,yL=H.div`
  position: fixed;
  right:60px;
  bottom:190px;
  background:yellow;
  border-radius: 20%;
  z-index:9999999999999999999999;

  
  span {
    position: absolute;
    top: -10px;
    right: 45px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background:#ff5d0e;
    color: #fff;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    font-weight: bold;
  }

  @media(max-width: 991px){
    position: fixed;
    right:15px;
    bottom:112px;
    background:yellow;
    border-radius: 20%;
    z-index:9999999999999999999999;
  
    
    span {
      position: absolute;
      top: -10px;
      right: 45px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background:#ff5d0e;
      color: #fff;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      font-weight: bold;
    }
  

  }
`,vL=H.div`

position: fixed;
right:66px;
bottom:130px;
z-index:9999999999999999999999;
.quick{
  display:flex;
  align-items: center;
  justify-content:space-between;
  cursor:pointer;
  li {
    cursor: pointer; 
    
  }
  #top{
    margin-left:7px;
    cursor:pointer;
    
  }
}

@media(max-width: 991px){
  position: fixed;
  right:24px;
  bottom:56px;
  z-index:9999999999999999999999;
  .quick{
    display:flex;
    align-items: center;
    justify-content:space-between;
    #top{
      margin-left:7px;
    }
  }

}


`,_L=H.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  color: #fff;
  background: #000;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`,wL=H.nav`
  position: fixed;
  top: 0;
  left: 100%;
  bottom: 0;
  right: 0px;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
  transition: all 0.5s;
  overflow:hidden;
  &.on{left: 0;}
  .closeNav {
    font-size: 30px;
    color: #000;
    position: absolute;
    top: 20px;
    z-index: 99999;
    transition: all 0.3s;
    &.on {top: 0; right: 0; height: 70px; width: 50px; color: #fff; transition: all 0.5s;}
  }
  ul {
    position:absolute;
    top:0;
    right: -200px;
    height: 100%;
    width: 100%;
    background: #fff;
    transition: all 0.3s 0.2s;
    &.on {right:0;}
    li {
      text-align: left;
      margin-left: 20px;
      transition: all 0.2s;
      &:nth-child(1){
        margin-left: 0;
      }
      &:nth-child(2):hover {
        background: #ff5d0e;
        color: #fff;
      }
      &:nth-child(3):hover  {
        background: #ffa70e;
        color: #fff;
      }
      &:nth-child(4):hover {
        background: #ffcb06;
        color: #fff;
      }
      &:nth-child(5):hover {
        background: #04a6e2;
        color: #fff;
      }
      &:nth-child(6):hover {
        background: #9b43ff;
        color: #fff;
      }
      &:nth-child(7):hover {
        background: #eb3690;
        color: #fff;
      }
      a {
        display: block;
        border-bottom: 1px solid #000;
        line-height: 60px;
        transition: all 0.5s;
        font-weight: 500;
        font-size: 17px;
        padding-left: 20px;
        &:hover, &.active { color: #000; }
      }
      &:nth-child(1) {
        height: 70px;
        background: #000;
      }
    }
  }
`,xL=()=>{const t=Gt(),e=ve(l=>l.products.carts),n=ve(l=>l.members.user),r=hL({maxWidth:991}),[i,s]=E.useState(!1),o=l=>{l.preventDefault(),t(pD())};E.useEffect(()=>{t(jm());let l=localStorage.loging;l&&t($S(JSON.parse(l)))},[t]);const a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs(gL,{children:[u.jsxs("div",{className:"header__wrap",children:[u.jsx("h1",{className:"header__logo",children:u.jsx(Ee,{to:"/",children:u.jsx("img",{src:"./assets/image/card_main_logo.png",alt:""})})}),r&&u.jsx(_L,{onClick:()=>s(!0),children:u.jsx(NM,{})}),r||u.jsx("nav",{id:"header__nav",children:u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(Qt,{to:"/news",children:"새소식"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/product",children:"제품정보"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/play",children:"놀이방법"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/event",children:"이벤트"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/search",children:"카드검색"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/application",children:"대회신청"})})]})}),n?u.jsx("div",{className:"member",children:u.jsx("a",{href:"#",onClick:o,children:u.jsx(jM,{})})}):u.jsxs("div",{className:"member",children:[u.jsxs(Ee,{to:"/login",children:[u.jsx(mL,{}),u.jsx("span",{children:"로그인"})]}),u.jsxs(Ee,{to:"/join",children:[u.jsx(IM,{}),u.jsx("span",{children:"회원가입"})]})]})]}),u.jsx(yL,{children:u.jsxs(Ee,{to:"/cart",children:[u.jsx("img",{src:"./assets/image/cart.png",alt:""}),u.jsx("span",{children:e.length})]})}),u.jsx(vL,{children:u.jsxs("ul",{class:"quick",children:[u.jsx("li",{children:u.jsx("a",{href:"/product",children:u.jsx("img",{src:"./assets/image/btn_wish.svg",alt:""})})}),u.jsx("li",{id:"top",onClick:a,children:u.jsx("img",{src:"./assets/image/btn_up.svg",alt:""})})]})}),r&&u.jsxs(wL,{className:i&&"on",children:[u.jsx(pL,{className:bM("closeNav",i&&"on"),onClick:()=>s(!1)}),u.jsxs("ul",{className:i&&"on",children:[u.jsx("li",{}),u.jsx("li",{children:u.jsx(Qt,{to:"/news",onClick:()=>s(!1),children:"새소식"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/product",onClick:()=>s(!1),children:"제품정보"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/play",onClick:()=>s(!1),children:"놀이방법"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/event",onClick:()=>s(!1),children:"이벤트"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/search",onClick:()=>s(!1),children:"카드검색"})}),u.jsx("li",{children:u.jsx(Qt,{to:"/application",onClick:()=>s(!1),children:"대회신청"})})]})]})]})},bL=H.div`
    background: #000;
    color: #fff;
    padding:20px 0 3px 0;
   
   
  
    .footer__nav {
       display:flex;
       justify-content: space-between;
         padding: 50px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        a { margin-right: 17px; }

        .na{
            span {
                position: relative;
                margin-left: 14px;
                &::before {
                    content: '';
                    position: absolute;
                    top: 5px;
                    left: 1px;
                    width: 1px;
                    height: 14px;
                    background: #fff;
                }
            }
        }

        .logo{
            text-align:left;
            display:inline-block;
            left:0;
        }
    }
    .footer__info {
        display:flex;
        justify-content: space-between;
        align-items:center;
        background: #1a1a1a;
        width:100%;
        padding:35px 46px;
        .hc{
            p{
                margin:4px 0;
            }
      
    }

    .sns{
       
        .sn2{
            display:flex;
            align-items:center;

            li{
                 margin:0 7px;
            }
        }
        
        
    }
}

.footer__lo{
    display:flex;
    justify-content: center;
    align-items:center;
    background: #000;
    text-align:center;
    width:100%;
    
 .hb{
 img{
    margin:60px 0;
    width:100%;
    background:#fff;
    border-radius:15px;
    padding:0px 2px 7px 2px;
 }

 }

}

@media (max-width:768px) {

    background: #000;
    color: #fff;
    padding:20px 0 3px 0;
   
   
  
    .footer__nav {
       display:block;
       justify-content: space-between;
         padding: 50px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        a { margin-right: 17px; }

        .na{  text-align:center;
            margin-top:30px;
           a{
           
            display: inline-block;
            border: 1px solid #ddd;
             margin:5px 3px;
            width: 45%;
          padding:10px 1px;
          text-align:center;

          
           }
           span {
            margin-left: 0px;
            display: block;
            &::before {
              display: none;
            }
          }
        }

        .logo{
            text-align:center;
            display:block;
            left:0;
           
        }
    }
    .footer__info {
        display:block;
        text-align:center;
        justify-content: space-between;
        align-items:center;
        background: #1a1a1a;
        width:100%;
        padding:50px 46px;
        .hc{
            p{
                margin:4px 0;
            }
        span {
            position: relative;
            margin-left: 14px;
            &::before {
                content: '';
                position: absolute;
                top: 5px;
                left: -10px;
                width: 1px;
                height: 14px;
                background: #fff;
            }
        }
    }

    .sns{  display:block;
             margin-top:30px;
        .sn2{
            display:flex;
            justify-content: center;
            align-items:center;

            li{
                 margin:0 7px;
            }
        }
        
        
    }
}

.footer__lo{
    display:flex;
    justify-content: center;
    align-items:center;
    background: #000;
    text-align:center;
    width:100%;
    
 .hb{
 img{
    margin:60px 0;
    width:100%;
    background:#fff;
    border-radius:15px;
    padding:0px 2px 7px 2px;
 }

 }

}   
      
}
   
 
    }

    
`,SL=()=>u.jsxs(bL,{children:[u.jsxs("div",{className:"footer__nav",children:[u.jsx("div",{className:"logo",children:u.jsx("img",{src:"./assets/image/ft_logo.png",alt:""})}),u.jsxs("div",{className:"na",children:[u.jsxs(Ee,{to:"/",children:["회사소개 ",u.jsx("span",{})]}),u.jsxs("a",{href:"#",children:["사업내용 ",u.jsx("span",{})]}),u.jsxs("a",{href:"#",children:["제휴안내 ",u.jsx("span",{})]}),u.jsxs("a",{href:"http://www.naver.com",target:"_blank",children:["이용약관 ",u.jsx("span",{})]}),u.jsxs(Ee,{to:"/",children:["개인정보처리방침 ",u.jsx("span",{})]}),u.jsxs("a",{href:"#",children:["이메일무단수집거부 ",u.jsx("span",{})]}),u.jsx("a",{href:"#",children:"고객센터"})]})]}),u.jsxs("div",{className:"footer__info",children:[u.jsxs("div",{className:"hc",children:[u.jsx("p",{children:"(주)포켓몬코리아   경기도 용인시 수지구 신수로 801, 4층"}),u.jsx("p",{children:"대표이사:임재범   개인정보관리책임자:임재범   사업자등록번호:113-86-07676"}),u.jsx("p",{children:"©2024 Pokémon. ©1995-2024 Nintendo/Creatures Inc./GAME FREAK inc."})]}),u.jsx("div",{className:"sns",children:u.jsxs("ul",{className:"sn2",children:[u.jsx("li",{children:u.jsx("a",{href:"/",children:u.jsx("img",{src:"./assets/image/icon_faceb.png",alt:""})})}),u.jsx("li",{children:u.jsx("a",{href:"/",children:u.jsx("img",{src:"./assets/image/icon_insta.png",alt:""})})}),u.jsx("li",{children:u.jsx("a",{href:"/",children:u.jsx("img",{src:"./assets/image/icon_youtube.png",alt:""})})}),u.jsx("li",{children:u.jsx("a",{href:"/",children:u.jsx("img",{src:"./assets/image/icon_pokemon.png",alt:""})})})]})})]}),u.jsx("div",{className:"footer__lo",children:u.jsx("div",{className:"hb",children:u.jsx("img",{src:"./assets/image/fo-logo.png",alt:""})})})]});function HE(t){return fn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10.243 3.757c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM13 8c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM11.243 12.243c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM7 14c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.757 12.243c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.257 3.757c0 0 0 0 0 0 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM0.875 8c0-0.621 0.504-1.125 1.125-1.125s1.125 0.504 1.125 1.125c0 0.621-0.504 1.125-1.125 1.125s-1.125-0.504-1.125-1.125z"},child:[]}]})(t)}const EL=H.div`
    height:100vh;
    display:flex; justify-content:center; align-items:center;
    .loadIcon {
        font-size : 80px; 
        animation : loadSpin 5s linear infinite;
    }
    @keyframes loadSpin {
        0% { transform : rotate(0deg) }
        100% { transform : rotate(3turn) }
    }
`,CL=H.div`
main {
    padding-top: 6%;
}
`,kL=()=>{const t=Gt(),[e,n]=E.useState(!0);return E.useEffect(()=>{t(jm()),setTimeout(()=>{n(!0)},2e3)},[]),e?u.jsxs(CL,{children:[u.jsx(xL,{}),u.jsx("main",{children:u.jsx(o3,{})}),u.jsx(SL,{})]}):u.jsx("div",{children:u.jsx(EL,{children:u.jsx(HE,{className:"loadIcon"})})})},TL=H.div`
position: absolute;
z-index: 3;
width: 100%;
margin-top:70px;
@media (max-width:993px) {
 
}
form{
    display: flex;
    justify-content: center;
}
    .search_wrap{
        width: 60%;
        display: flex;
        align-items: center;
        flex-direction:column;
        @media (max-width:993px) {
            width: 100%;
        }
        h2{
            color: #fff;
            font-size: 50px;
            margin: 0 0 15px;
            @media (max-width:993px) {
                font-size: 29px;
            }
        }
        .search_container {
            position: relative;
            background: transparent;
            overflow: hidden;
            width: 60%;
            @media (max-width:993px) {
                height: 40px;
                font-size: 15px;
                width: 80%;
            }
            &::before {
                content: '';
                position: absolute;
                left: 0px;
                top: 0;
                bottom: 0;
                width: 12px;
                background: url("/assets/image/search_left.png");
                background-size: cover;
                @media (max-width:993px) {
                    top: 0px;
                }
                }
                .test{
                    padding-left: 12px;
                    display:flex;
                    align-items: center;
                    input{
                        padding: 20px;
                        width: 100%;
                        height: 55px;
                        outline: none;
                        font-size: 16px;
                        @media (max-width:993px) {
                            padding: 0;
                            height: 40px;
                        }
                    }::placeholder {
                        font-size: 16px;
                        font-family: "Noto Sans", "Noto Sans KR";
                        font-weight: 400;
                        color: #B7B8B7;
                    }
                    button{
                        width: 50px;
                        height: 55px;
                        color: #fff;
                        background: #DA343C;
                        font-size: 15px;
                        @media (max-width:993px) {
                        height: 40px;       
                        }
                    }
                    p{
                        position: relative;
                        font-size: 20px;
                        &::after {
                            content: '';
                            position: absolute;
                            top: -18px;
                            left: -20px;
                            width: 21px;
                            height: 27px;
                            background-color: #fff;
                            transform: skew(-40deg);
                            @media (max-width:993px) {
                                top: -14px;
                            }
                        }
                    }
                }
        }
    
}
`,RL=()=>{const t=Gt(),[e,n]=E.useState(""),r=i=>{i.preventDefault(),e&&(t(YN(e)),t(R1(!0)))};return u.jsx(TL,{children:u.jsx("form",{onSubmit:r,children:u.jsx("div",{className:"search_wrap",children:u.jsx("div",{className:"search_container",children:u.jsxs("div",{className:"test",children:[u.jsx("input",{type:"text",placeholder:"검색 할 카드를 입력해주세요",onChange:i=>n(i.target.value)}),u.jsx("button",{type:"submit",children:u.jsx("p",{children:u.jsx(PM,{})})})]})})})})})};var VE={},qE={},ld={},KE={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(KE);var OL="Expected a function",Zv=NaN,NL="[object Symbol]",PL=/^\s+|\s+$/g,jL=/^[-+]0x[0-9a-f]+$/i,IL=/^0b[01]+$/i,AL=/^0o[0-7]+$/i,DL=parseInt,ML=typeof go=="object"&&go&&go.Object===Object&&go,LL=typeof self=="object"&&self&&self.Object===Object&&self,zL=ML||LL||Function("return this")(),FL=Object.prototype,BL=FL.toString,UL=Math.max,$L=Math.min,hf=function(){return zL.Date.now()};function WL(t,e,n){var r,i,s,o,a,l,c=0,f=!1,d=!1,h=!0;if(typeof t!="function")throw new TypeError(OL);e=e_(e)||0,mp(n)&&(f=!!n.leading,d="maxWait"in n,s=d?UL(e_(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h);function g(S){var C=r,R=i;return r=i=void 0,c=S,o=t.apply(R,C),o}function m(S){return c=S,a=setTimeout(v,e),f?g(S):o}function _(S){var C=S-l,R=S-c,N=e-C;return d?$L(N,s-R):N}function w(S){var C=S-l,R=S-c;return l===void 0||C>=e||C<0||d&&R>=s}function v(){var S=hf();if(w(S))return p(S);a=setTimeout(v,_(S))}function p(S){return a=void 0,h&&r?g(S):(r=i=void 0,o)}function y(){a!==void 0&&clearTimeout(a),c=0,r=l=i=a=void 0}function x(){return a===void 0?o:p(hf())}function b(){var S=hf(),C=w(S);if(r=arguments,i=this,l=S,C){if(a===void 0)return m(l);if(d)return a=setTimeout(v,e),g(l)}return a===void 0&&(a=setTimeout(v,e)),o}return b.cancel=y,b.flush=x,b}function mp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function HL(t){return!!t&&typeof t=="object"}function VL(t){return typeof t=="symbol"||HL(t)&&BL.call(t)==NL}function e_(t){if(typeof t=="number")return t;if(VL(t))return Zv;if(mp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=mp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(PL,"");var n=IL.test(t);return n||AL.test(t)?DL(t.slice(2),n?2:8):jL.test(t)?Zv:+t}var qL=WL,F={},Dg={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(E);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return e.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return e.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=r})(Dg);Object.defineProperty(F,"__esModule",{value:!0});F.checkSpecKeys=F.checkNavigable=F.changeSlide=F.canUseDOM=F.canGoNext=void 0;F.clamp=GE;F.extractObject=void 0;F.filterSettings=a6;F.validSettings=F.swipeStart=F.swipeMove=F.swipeEnd=F.slidesOnRight=F.slidesOnLeft=F.slideHandler=F.siblingDirection=F.safePreventDefault=F.lazyStartIndex=F.lazySlidesOnRight=F.lazySlidesOnLeft=F.lazyEndIndex=F.keyHandler=F.initializedState=F.getWidth=F.getTrackLeft=F.getTrackCSS=F.getTrackAnimateCSS=F.getTotalSlides=F.getSwipeDirection=F.getSlideCount=F.getRequiredLazySlides=F.getPreClones=F.getPostClones=F.getOnDemandLazySlides=F.getNavigableIndexes=F.getHeight=void 0;var KL=YE(E),YL=YE(Dg);function YE(t){return t&&t.__esModule?t:{default:t}}function ba(t){"@babel/helpers - typeof";return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ba(t)}function t_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Se(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?t_(Object(n),!0).forEach(function(r){GL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):t_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function GL(t,e,n){return e=QL(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QL(t){var e=XL(t,"string");return ba(e)=="symbol"?e:String(e)}function XL(t,e){if(ba(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ba(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function GE(t,e,n){return Math.max(e,Math.min(t,n))}var us=F.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},QE=F.getOnDemandLazySlides=function(e){for(var n=[],r=XE(e),i=JE(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};F.getRequiredLazySlides=function(e){for(var n=[],r=XE(e),i=JE(e),s=r;s<i;s++)n.push(s);return n};var XE=F.lazyStartIndex=function(e){return e.currentSlide-JL(e)},JE=F.lazyEndIndex=function(e){return e.currentSlide+ZL(e)},JL=F.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},ZL=F.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},gp=F.getWidth=function(e){return e&&e.offsetWidth||0},ZE=F.getHeight=function(e){return e&&e.offsetHeight||0},eC=F.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"},tC=F.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};F.extractObject=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};F.initializedState=function(e){var n=KL.default.Children.count(e.children),r=e.listRef,i=Math.ceil(gp(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(gp(s)),a;if(e.vertical)a=i;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/e.slidesToShow)}var c=r&&ZE(r.querySelector('[data-index="0"]')),f=c*e.slidesToShow,d=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(d=n-1-e.initialSlide);var h=e.lazyLoadedList||[],g=QE(Se(Se({},e),{},{currentSlide:d,lazyLoadedList:h}));h=h.concat(g);var m={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:d,slideHeight:c,listHeight:f,lazyLoadedList:h};return e.autoplaying===null&&e.autoplay&&(m.autoplaying="playing"),m};F.slideHandler=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,l=e.lazyLoad,c=e.currentSlide,f=e.centerMode,d=e.slidesToScroll,h=e.slidesToShow,g=e.useCSS,m=e.lazyLoadedList;if(n&&r)return{};var _=o,w,v,p,y={},x={},b=s?o:GE(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?_=o+a:o>=a&&(_=o-a),l&&m.indexOf(_)<0&&(m=m.concat(_)),y={animating:!0,currentSlide:_,lazyLoadedList:m,targetSlide:_},x={animating:!1,targetSlide:_}}else w=_,_<0?(w=_+a,s?a%d!==0&&(w=a-a%d):w=0):!tC(e)&&_>c?_=w=c:f&&_>=a?(_=s?a:a-1,w=s?0:a-1):_>=a&&(w=_-a,s?a%d!==0&&(w=0):w=a-h),!s&&_+h>=a&&(w=a-h),v=Wc(Se(Se({},e),{},{slideIndex:_})),p=Wc(Se(Se({},e),{},{slideIndex:w})),s||(v===p&&(_=w),v=p),l&&(m=m.concat(QE(Se(Se({},e),{},{currentSlide:_})))),g?(y={animating:!0,currentSlide:w,trackStyle:nC(Se(Se({},e),{},{left:v})),lazyLoadedList:m,targetSlide:b},x={animating:!1,currentSlide:w,trackStyle:$c(Se(Se({},e),{},{left:p})),swipeLeft:null,targetSlide:b}):y={currentSlide:w,trackStyle:$c(Se(Se({},e),{},{left:p})),lazyLoadedList:m,targetSlide:b};return{state:y,nextState:x}};F.changeSlide=function(e,n){var r,i,s,o,a,l=e.slidesToScroll,c=e.slidesToShow,f=e.slideCount,d=e.currentSlide,h=e.targetSlide,g=e.lazyLoad,m=e.infinite;if(o=f%l!==0,r=o?0:(f-d)%l,n.message==="previous")s=r===0?l:c-r,a=d-s,g&&!m&&(i=d-s,a=i===-1?f-1:i),m||(a=h-l);else if(n.message==="next")s=r===0?l:r,a=d+s,g&&!m&&(a=(d+l)%f+r),m||(a=h+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,m){var _=r6(Se(Se({},e),{},{targetSlide:a}));a>n.currentSlide&&_==="left"?a=a-f:a<n.currentSlide&&_==="right"&&(a=a+f)}}else n.message==="index"&&(a=Number(n.index));return a};F.keyHandler=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};F.swipeStart=function(e,n,r){return e.target.tagName==="IMG"&&us(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};F.swipeMove=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,c=n.currentSlide,f=n.edgeFriction,d=n.edgeDragged,h=n.onEdge,g=n.swiped,m=n.swiping,_=n.slideCount,w=n.slidesToScroll,v=n.infinite,p=n.touchObject,y=n.swipeEvent,x=n.listHeight,b=n.listWidth;if(!r){if(i)return us(e);s&&o&&a&&us(e);var S,C={},R=Wc(n);p.curX=e.touches?e.touches[0].pageX:e.clientX,p.curY=e.touches?e.touches[0].pageY:e.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var N=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!m&&N>10)return{scrolling:!0};a&&(p.swipeLength=N);var T=(l?-1:1)*(p.curX>p.startX?1:-1);a&&(T=p.curY>p.startY?1:-1);var L=Math.ceil(_/w),W=eC(n.touchObject,a),V=p.swipeLength;return v||(c===0&&(W==="right"||W==="down")||c+1>=L&&(W==="left"||W==="up")||!tC(n)&&(W==="left"||W==="up"))&&(V=p.swipeLength*f,d===!1&&h&&(h(W),C.edgeDragged=!0)),!g&&y&&(y(W),C.swiped=!0),s?S=R+V*(x/b)*T:l?S=R-V*T:S=R+V*T,a&&(S=R+V*T),C=Se(Se({},C),{},{touchObject:p,swipeLeft:S,trackStyle:$c(Se(Se({},n),{},{left:S}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(C.swiping=!0,us(e)),C}};F.swipeEnd=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,c=n.listHeight,f=n.swipeToSlide,d=n.scrolling,h=n.onSwipe,g=n.targetSlide,m=n.currentSlide,_=n.infinite;if(!r)return i&&us(e),{};var w=l?c/a:o/a,v=eC(s,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!s.swipeLength)return p;if(s.swipeLength>w){us(e),h&&h(v);var y,x,b=_?m:g;switch(v){case"left":case"up":x=b+r_(n),y=f?n_(n,x):x,p.currentDirection=0;break;case"right":case"down":x=b-r_(n),y=f?n_(n,x):x,p.currentDirection=1;break;default:y=b}p.triggerSlideHandler=y}else{var S=Wc(n);p.trackStyle=nC(Se(Se({},n),{},{left:S}))}return p};var e6=F.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s},n_=F.checkNavigable=function(e,n){var r=e6(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n},r_=F.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+ZE(l)/2>e.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+gp(l)/2>e.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll},Mg=F.checkSpecKeys=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)},$c=F.getTrackCSS=function(e){Mg(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=n6(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=Se(Se({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s},nC=F.getTrackAnimateCSS=function(e){Mg(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=$c(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},Wc=F.getTrackLeft=function(e){if(e.unslick)return 0;Mg(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,c=e.slideWidth,f=e.listWidth,d=e.variableWidth,h=e.slideHeight,g=e.fade,m=e.vertical,_=0,w,v,p=0;if(g||e.slideCount===1)return 0;var y=0;if(i?(y=-Ul(e),o%l!==0&&n+l>o&&(y=-(n>o?a-(n-o):o%l)),s&&(y+=parseInt(a/2))):(o%l!==0&&n+l>o&&(y=a-o%l),s&&(y=parseInt(a/2))),_=y*c,p=y*h,m?w=n*h*-1+p:w=n*c*-1+_,d===!0){var x,b=r&&r.node;if(x=n+Ul(e),v=b&&b.childNodes[x],w=v?v.offsetLeft*-1:0,s===!0){x=i?n+Ul(e):n,v=b&&b.children[x],w=0;for(var S=0;S<x;S++)w-=b&&b.children[S]&&b.children[S].offsetWidth;w-=parseInt(e.centerPadding),w+=v&&(f-v.offsetWidth)/2}}return w},Ul=F.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},t6=F.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},n6=F.getTotalSlides=function(e){return e.slideCount===1?1:Ul(e)+e.slideCount+t6(e)},r6=F.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+i6(e)?"left":"right":e.targetSlide<e.currentSlide-s6(e)?"right":"left"},i6=F.slidesOnRight=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1},s6=F.slidesOnLeft=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};F.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var o6=F.validSettings=Object.keys(YL.default);function a6(t){return o6.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var cd={};Object.defineProperty(cd,"__esModule",{value:!0});cd.Track=void 0;var hr=rC(E),pf=rC(Va),mf=F;function rC(t){return t&&t.__esModule?t:{default:t}}function Ls(t){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ls(t)}function yp(){return yp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yp.apply(this,arguments)}function l6(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,sC(r.key),r)}}function c6(t,e,n){return e&&i_(t.prototype,e),n&&i_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u6(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&vp(t,e)}function vp(t,e){return vp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},vp(t,e)}function d6(t){var e=iC();return function(){var r=Hc(t),i;if(e){var s=Hc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return f6(this,i)}}function f6(t,e){if(e&&(Ls(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _p(t)}function _p(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function iC(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(iC=function(){return!!t})()}function Hc(t){return Hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Hc(t)}function s_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Et(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?s_(Object(n),!0).forEach(function(r){wp(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wp(t,e,n){return e=sC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sC(t){var e=h6(t,"string");return Ls(e)=="symbol"?e:String(e)}function h6(t,e){if(Ls(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ls(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var gf=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},p6=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},yf=function(e,n){return e.key||n},m6=function(e){var n,r=[],i=[],s=[],o=hr.default.Children.count(e.children),a=(0,mf.lazyStartIndex)(e),l=(0,mf.lazyEndIndex)(e);return hr.default.Children.forEach(e.children,function(c,f){var d,h={message:"children",index:f,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(f)>=0?d=c:d=hr.default.createElement("div",null);var g=p6(Et(Et({},e),{},{index:f})),m=d.props.className||"",_=gf(Et(Et({},e),{},{index:f}));if(r.push(hr.default.cloneElement(d,{key:"original"+yf(d,f),"data-index":f,className:(0,pf.default)(_,m),tabIndex:"-1","aria-hidden":!_["slick-active"],style:Et(Et({outline:"none"},d.props.style||{}),g),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&e.fade===!1){var w=o-f;w<=(0,mf.getPreClones)(e)&&(n=-w,n>=a&&(d=c),_=gf(Et(Et({},e),{},{index:n})),i.push(hr.default.cloneElement(d,{key:"precloned"+yf(d,n),"data-index":n,tabIndex:"-1",className:(0,pf.default)(_,m),"aria-hidden":!_["slick-active"],style:Et(Et({},d.props.style||{}),g),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(h)}}))),n=o+f,n<l&&(d=c),_=gf(Et(Et({},e),{},{index:n})),s.push(hr.default.cloneElement(d,{key:"postcloned"+yf(d,n),"data-index":n,tabIndex:"-1",className:(0,pf.default)(_,m),"aria-hidden":!_["slick-active"],style:Et(Et({},d.props.style||{}),g),onClick:function(p){d.props&&d.props.onClick&&d.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(h)}}))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)};cd.Track=function(t){u6(n,t);var e=d6(n);function n(){var r;l6(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),wp(_p(r),"node",null),wp(_p(r),"handleRef",function(a){r.node=a}),r}return c6(n,[{key:"render",value:function(){var i=m6(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,c={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return hr.default.createElement("div",yp({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}(hr.default.PureComponent);var ud={};function zs(t){"@babel/helpers - typeof";return zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zs(t)}Object.defineProperty(ud,"__esModule",{value:!0});ud.Dots=void 0;var wl=oC(E),g6=oC(Va),o_=F;function oC(t){return t&&t.__esModule?t:{default:t}}function a_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function y6(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?a_(Object(n),!0).forEach(function(r){v6(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function v6(t,e,n){return e=aC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _6(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,aC(r.key),r)}}function w6(t,e,n){return e&&l_(t.prototype,e),n&&l_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function aC(t){var e=x6(t,"string");return zs(e)=="symbol"?e:String(e)}function x6(t,e){if(zs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(zs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function b6(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&xp(t,e)}function xp(t,e){return xp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},xp(t,e)}function S6(t){var e=lC();return function(){var r=Vc(t),i;if(e){var s=Vc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return E6(this,i)}}function E6(t,e){if(e&&(zs(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C6(t)}function C6(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function lC(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lC=function(){return!!t})()}function Vc(t){return Vc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Vc(t)}var k6=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};ud.Dots=function(t){b6(n,t);var e=S6(n);function n(){return _6(this,n),e.apply(this,arguments)}return w6(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,c=i.slidesToScroll,f=i.slidesToShow,d=i.slideCount,h=i.currentSlide,g=k6({slideCount:d,slidesToScroll:c,slidesToShow:f,infinite:l}),m={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},_=[],w=0;w<g;w++){var v=(w+1)*c-1,p=l?v:(0,o_.clamp)(v,0,d-1),y=p-(c-1),x=l?y:(0,o_.clamp)(y,0,d-1),b=(0,g6.default)({"slick-active":l?h>=x&&h<=p:h===x}),S={message:"dots",index:w,slidesToScroll:c,currentSlide:h},C=this.clickHandler.bind(this,S);_=_.concat(wl.default.createElement("li",{key:w,className:b},wl.default.cloneElement(this.props.customPaging(w),{onClick:C})))}return wl.default.cloneElement(this.props.appendDots(_),y6({className:this.props.dotsClass},m))}}]),n}(wl.default.PureComponent);var Fs={};function Bs(t){"@babel/helpers - typeof";return Bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bs(t)}Object.defineProperty(Fs,"__esModule",{value:!0});Fs.PrevArrow=Fs.NextArrow=void 0;var ds=uC(E),cC=uC(Va),T6=F;function uC(t){return t&&t.__esModule?t:{default:t}}function qc(){return qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qc.apply(this,arguments)}function c_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Kc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?c_(Object(n),!0).forEach(function(r){R6(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function R6(t,e,n){return e=hC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,hC(r.key),r)}}function fC(t,e,n){return e&&u_(t.prototype,e),n&&u_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function hC(t){var e=O6(t,"string");return Bs(e)=="symbol"?e:String(e)}function O6(t,e){if(Bs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Bs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&bp(t,e)}function bp(t,e){return bp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},bp(t,e)}function mC(t){var e=gC();return function(){var r=Yc(t),i;if(e){var s=Yc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return N6(this,i)}}function N6(t,e){if(e&&(Bs(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P6(t)}function P6(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gC(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(gC=function(){return!!t})()}function Yc(t){return Yc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Yc(t)}Fs.PrevArrow=function(t){pC(n,t);var e=mC(n);function n(){return dC(this,n),e.apply(this,arguments)}return fC(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,cC.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=ds.default.cloneElement(this.props.prevArrow,Kc(Kc({},o),a)):l=ds.default.createElement("button",qc({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(ds.default.PureComponent);Fs.NextArrow=function(t){pC(n,t);var e=mC(n);function n(){return dC(this,n),e.apply(this,arguments)}return fC(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,T6.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,cC.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=ds.default.cloneElement(this.props.nextArrow,Kc(Kc({},o),a)):l=ds.default.createElement("button",qc({key:"1",type:"button"},o)," ","Next"),l}}]),n}(ds.default.PureComponent);var yC=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),Sp=typeof window<"u"&&typeof document<"u"&&window.document===document,Gc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),j6=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Gc):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),I6=2;function A6(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){j6(s)}function a(){var l=Date.now();if(n){if(l-i<I6)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=l}return a}var D6=20,M6=["top","right","bottom","left","width","height","size","weight"],L6=typeof MutationObserver<"u",z6=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=A6(this.refresh.bind(this),D6)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Sp||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),L6?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Sp||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=M6.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),vC=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},Us=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||Gc},_C=dd(0,0,0,0);function Qc(t){return parseFloat(t)||0}function d_(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+Qc(s)},0)}function F6(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=Qc(o)}return n}function B6(t){var e=t.getBBox();return dd(0,0,e.width,e.height)}function U6(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return _C;var r=Us(t).getComputedStyle(t),i=F6(r),s=i.left+i.right,o=i.top+i.bottom,a=Qc(r.width),l=Qc(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=d_(r,"left","right")+s),Math.round(l+o)!==n&&(l-=d_(r,"top","bottom")+o)),!W6(t)){var c=Math.round(a+s)-e,f=Math.round(l+o)-n;Math.abs(c)!==1&&(a-=c),Math.abs(f)!==1&&(l-=f)}return dd(i.left,i.top,a,l)}var $6=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Us(t).SVGGraphicsElement}:function(t){return t instanceof Us(t).SVGElement&&typeof t.getBBox=="function"}}();function W6(t){return t===Us(t).document.documentElement}function H6(t){return Sp?$6(t)?B6(t):U6(t):_C}function V6(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return vC(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function dd(t,e,n,r){return{x:t,y:e,width:n,height:r}}var q6=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=dd(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=H6(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),K6=function(){function t(e,n){var r=V6(n);vC(this,{target:e,contentRect:r})}return t}(),Y6=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new yC,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Us(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new q6(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Us(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new K6(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),wC=typeof WeakMap<"u"?new WeakMap:new yC,xC=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=z6.getInstance(),r=new Y6(e,n,this);wC.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){xC.prototype[t]=function(){var e;return(e=wC.get(this))[t].apply(e,arguments)}});var G6=function(){return typeof Gc.ResizeObserver<"u"?Gc.ResizeObserver:xC}();const Q6=Object.freeze(Object.defineProperty({__proto__:null,default:G6},Symbol.toStringTag,{value:"Module"})),X6=OC(Q6);Object.defineProperty(ld,"__esModule",{value:!0});ld.InnerSlider=void 0;var pt=qa(E),J6=qa(KE),Z6=qa(qL),ez=qa(Va),Te=F,tz=cd,nz=ud,f_=Fs,rz=qa(X6);function qa(t){return t&&t.__esModule?t:{default:t}}function Oi(t){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oi(t)}function Xc(){return Xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xc.apply(this,arguments)}function iz(t,e){if(t==null)return{};var n=sz(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function sz(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function h_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h_(Object(n),!0).forEach(function(r){te(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oz(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,SC(r.key),r)}}function az(t,e,n){return e&&p_(t.prototype,e),n&&p_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function lz(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ep(t,e)}function Ep(t,e){return Ep=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ep(t,e)}function cz(t){var e=bC();return function(){var r=Jc(t),i;if(e){var s=Jc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return uz(this,i)}}function uz(t,e){if(e&&(Oi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ee(t)}function ee(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bC(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bC=function(){return!!t})()}function Jc(t){return Jc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Jc(t)}function te(t,e,n){return e=SC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function SC(t){var e=dz(t,"string");return Oi(e)=="symbol"?e:String(e)}function dz(t,e){if(Oi(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}ld.InnerSlider=function(t){lz(n,t);var e=cz(n);function n(r){var i;oz(this,n),i=e.call(this,r),te(ee(i),"listRefHandler",function(o){return i.list=o}),te(ee(i),"trackRefHandler",function(o){return i.track=o}),te(ee(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Te.getHeight)(o)+"px"}}),te(ee(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,Te.getOnDemandLazySlides)(K(K({},i.props),i.state));o.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=K({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new rz.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),te(ee(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),te(ee(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Te.getOnDemandLazySlides)(K(K({},i.props),i.state));a.length>0&&(i.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=K(K({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(o);c&&i.updateState(l,c,function(){i.state.currentSlide>=pt.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:pt.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),te(ee(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,Z6.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),te(ee(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var l=K(K({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),te(ee(i),"updateState",function(o,a,l){var c=(0,Te.initializedState)(o);o=K(K(K({},o),c),{},{slideIndex:c.currentSlide});var f=(0,Te.getTrackLeft)(o);o=K(K({},o),{},{left:f});var d=(0,Te.getTrackCSS)(o);(a||pt.default.Children.count(i.props.children)!==pt.default.Children.count(o.children))&&(c.trackStyle=d),i.setState(c,l)}),te(ee(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,l=[],c=(0,Te.getPreClones)(K(K(K({},i.props),i.state),{},{slideCount:i.props.children.length})),f=(0,Te.getPostClones)(K(K(K({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(C){l.push(C.props.style.width),o+=C.props.style.width});for(var d=0;d<c;d++)a+=l[l.length-1-d],o+=l[l.length-1-d];for(var h=0;h<f;h++)o+=l[h];for(var g=0;g<i.state.currentSlide;g++)a+=l[g];var m={width:o+"px",left:-a+"px"};if(i.props.centerMode){var _="".concat(l[i.state.currentSlide],"px");m.left="calc(".concat(m.left," + (100% - ").concat(_,") / 2 ) ")}return{trackStyle:m}}var w=pt.default.Children.count(i.props.children),v=K(K(K({},i.props),i.state),{},{slideCount:w}),p=(0,Te.getPreClones)(v)+(0,Te.getPostClones)(v)+w,y=100/i.props.slidesToShow*p,x=100/p,b=-x*((0,Te.getPreClones)(v)+i.state.currentSlide)*y/100;i.props.centerMode&&(b+=(100-x*y/100)/2);var S={width:y+"%",left:b+"%"};return{slideWidth:x+"%",trackStyle:S}}),te(ee(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(c){var f=function(){return++l&&l>=a&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var d=c.onclick;c.onclick=function(h){d(h),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=f,c.onerror=function(){f(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),te(ee(i),"progressiveLazyLoad",function(){for(var o=[],a=K(K({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,Te.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var c=i.state.currentSlide-1;c>=-(0,Te.getPreClones)(a);c--)if(i.state.lazyLoadedList.indexOf(c)<0){o.push(c);break}o.length>0?(i.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),te(ee(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,c=l.asNavFor,f=l.beforeChange,d=l.onLazyLoad,h=l.speed,g=l.afterChange,m=i.state.currentSlide,_=(0,Te.slideHandler)(K(K(K({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),w=_.state,v=_.nextState;if(w){f&&f(m,w.currentSlide);var p=w.lazyLoadedList.filter(function(y){return i.state.lazyLoadedList.indexOf(y)<0});d&&p.length>0&&d(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),g&&g(m),delete i.animationEndCallback),i.setState(w,function(){c&&i.asNavForIndex!==o&&(i.asNavForIndex=o,c.innerSlider.slideHandler(o)),v&&(i.animationEndCallback=setTimeout(function(){var y=v.animating,x=iz(v,["animating"]);i.setState(x,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:y})},10)),g&&g(w.currentSlide),delete i.animationEndCallback})},h))})}}),te(ee(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=K(K({},i.props),i.state),c=(0,Te.changeSlide)(l,o);if(!(c!==0&&!c)&&(a===!0?i.slideHandler(c,a):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var f=i.list.querySelectorAll(".slick-current");f[0]&&f[0].focus()}}),te(ee(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),te(ee(i),"keyHandler",function(o){var a=(0,Te.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),te(ee(i),"selectHandler",function(o){i.changeSlide(o)}),te(ee(i),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),te(ee(i),"enableBodyScroll",function(){window.ontouchmove=null}),te(ee(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Te.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),te(ee(i),"swipeMove",function(o){var a=(0,Te.swipeMove)(o,K(K(K({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),te(ee(i),"swipeEnd",function(o){var a=(0,Te.swipeEnd)(o,K(K(K({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),te(ee(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),te(ee(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),te(ee(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),te(ee(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),te(ee(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,Te.canGoNext)(K(K({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),te(ee(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),te(ee(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),te(ee(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),te(ee(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),te(ee(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),te(ee(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),te(ee(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),te(ee(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),te(ee(i),"render",function(){var o=(0,ez.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=K(K({},i.props),i.state),l=(0,Te.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;l=K(K({},l),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var f;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,Te.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),h=i.props.pauseOnDotsHover;d=K(K({},d),{},{clickHandler:i.changeSlide,onMouseEnter:h?i.onDotsLeave:null,onMouseOver:h?i.onDotsOver:null,onMouseLeave:h?i.onDotsLeave:null}),f=pt.default.createElement(nz.Dots,d)}var g,m,_=(0,Te.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);_.clickHandler=i.changeSlide,i.props.arrows&&(g=pt.default.createElement(f_.PrevArrow,_),m=pt.default.createElement(f_.NextArrow,_));var w=null;i.props.vertical&&(w={height:i.state.listHeight});var v=null;i.props.vertical===!1?i.props.centerMode===!0&&(v={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(v={padding:i.props.centerPadding+" 0px"});var p=K(K({},w),v),y=i.props.touchMove,x={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:y?i.swipeStart:null,onMouseMove:i.state.dragging&&y?i.swipeMove:null,onMouseUp:y?i.swipeEnd:null,onMouseLeave:i.state.dragging&&y?i.swipeEnd:null,onTouchStart:y?i.swipeStart:null,onTouchMove:i.state.dragging&&y?i.swipeMove:null,onTouchEnd:y?i.touchEnd:null,onTouchCancel:i.state.dragging&&y?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},b={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(x={className:"slick-list"},b={className:o}),pt.default.createElement("div",b,i.props.unslick?"":g,pt.default.createElement("div",Xc({ref:i.listRefHandler},x),pt.default.createElement(tz.Track,Xc({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":m,i.props.unslick?"":f)}),i.list=null,i.track=null,i.state=K(K({},J6.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:pt.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=K(K({},i.state),s),i}return az(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!i.hasOwnProperty(l)){s=!0;break}if(!(Oi(i[l])==="object"||typeof i[l]=="function"||isNaN(i[l]))&&i[l]!==this.props[l]){s=!0;break}}return s||pt.default.Children.count(this.props.children)!==pt.default.Children.count(i.children)}}]),n}(pt.default.Component);var fz=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},hz=fz,pz=hz,mz=function(t){var e=/[height|width]$/;return e.test(t)},m_=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=pz(r),mz(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},gz=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=m_(n),r<t.length-1&&(e+=", ")}),e):m_(t)},yz=gz,vf,g_;function vz(){if(g_)return vf;g_=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},vf=t,vf}var _f,y_;function EC(){if(y_)return _f;y_=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return _f={isFunction:n,isArray:e,each:t},_f}var wf,v_;function _z(){if(v_)return wf;v_=1;var t=vz(),e=EC().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},wf=n,wf}var xf,__;function wz(){if(__)return xf;__=1;var t=_z(),e=EC(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var c=this.queries,f=l&&this.browserIsIncapable;return c[o]||(c[o]=new t(o,f)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(d){r(d)&&(d={match:d}),c[o].addHandler(d)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},xf=s,xf}var bf,w_;function xz(){if(w_)return bf;w_=1;var t=wz();return bf=new t,bf}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(E),n=ld,r=o(yz),i=o(Dg),s=F;function o(N){return N&&N.__esModule?N:{default:N}}function a(N){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},a(N)}function l(){return l=Object.assign?Object.assign.bind():function(N){for(var T=1;T<arguments.length;T++){var L=arguments[T];for(var W in L)Object.prototype.hasOwnProperty.call(L,W)&&(N[W]=L[W])}return N},l.apply(this,arguments)}function c(N,T){var L=Object.keys(N);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(N);T&&(W=W.filter(function(V){return Object.getOwnPropertyDescriptor(N,V).enumerable})),L.push.apply(L,W)}return L}function f(N){for(var T=1;T<arguments.length;T++){var L=arguments[T]!=null?arguments[T]:{};T%2?c(Object(L),!0).forEach(function(W){b(N,W,L[W])}):Object.getOwnPropertyDescriptors?Object.defineProperties(N,Object.getOwnPropertyDescriptors(L)):c(Object(L)).forEach(function(W){Object.defineProperty(N,W,Object.getOwnPropertyDescriptor(L,W))})}return N}function d(N,T){if(!(N instanceof T))throw new TypeError("Cannot call a class as a function")}function h(N,T){for(var L=0;L<T.length;L++){var W=T[L];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(N,S(W.key),W)}}function g(N,T,L){return T&&h(N.prototype,T),L&&h(N,L),Object.defineProperty(N,"prototype",{writable:!1}),N}function m(N,T){if(typeof T!="function"&&T!==null)throw new TypeError("Super expression must either be null or a function");N.prototype=Object.create(T&&T.prototype,{constructor:{value:N,writable:!0,configurable:!0}}),Object.defineProperty(N,"prototype",{writable:!1}),T&&_(N,T)}function _(N,T){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(W,V){return W.__proto__=V,W},_(N,T)}function w(N){var T=y();return function(){var W=x(N),V;if(T){var A=x(this).constructor;V=Reflect.construct(W,arguments,A)}else V=W.apply(this,arguments);return v(this,V)}}function v(N,T){if(T&&(a(T)==="object"||typeof T=="function"))return T;if(T!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(N)}function p(N){if(N===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return N}function y(){try{var N=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(y=function(){return!!N})()}function x(N){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},x(N)}function b(N,T,L){return T=S(T),T in N?Object.defineProperty(N,T,{value:L,enumerable:!0,configurable:!0,writable:!0}):N[T]=L,N}function S(N){var T=C(N,"string");return a(T)=="symbol"?T:String(T)}function C(N,T){if(a(N)!="object"||!N)return N;var L=N[Symbol.toPrimitive];if(L!==void 0){var W=L.call(N,T||"default");if(a(W)!="object")return W;throw new TypeError("@@toPrimitive must return a primitive value.")}return(T==="string"?String:Number)(N)}var R=(0,s.canUseDOM)()&&xz();t.default=function(N){m(L,N);var T=w(L);function L(W){var V;return d(this,L),V=T.call(this,W),b(p(V),"innerSliderRefHandler",function(A){return V.innerSlider=A}),b(p(V),"slickPrev",function(){return V.innerSlider.slickPrev()}),b(p(V),"slickNext",function(){return V.innerSlider.slickNext()}),b(p(V),"slickGoTo",function(A){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return V.innerSlider.slickGoTo(A,z)}),b(p(V),"slickPause",function(){return V.innerSlider.pause("paused")}),b(p(V),"slickPlay",function(){return V.innerSlider.autoPlay("play")}),V.state={breakpoint:null},V._responsiveMediaHandlers=[],V}return g(L,[{key:"media",value:function(V,A){R.register(V,A),this._responsiveMediaHandlers.push({query:V,handler:A})}},{key:"componentDidMount",value:function(){var V=this;if(this.props.responsive){var A=this.props.responsive.map(function(j){return j.breakpoint});A.sort(function(j,B){return j-B}),A.forEach(function(j,B){var k;B===0?k=(0,r.default)({minWidth:0,maxWidth:j}):k=(0,r.default)({minWidth:A[B-1]+1,maxWidth:j}),(0,s.canUseDOM)()&&V.media(k,function(){V.setState({breakpoint:j})})});var z=(0,r.default)({minWidth:A.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(z,function(){V.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(V){R.unregister(V.query,V.handler)})}},{key:"render",value:function(){var V=this,A,z;this.state.breakpoint?(z=this.props.responsive.filter(function(fe){return fe.breakpoint===V.state.breakpoint}),A=z[0].settings==="unslick"?"unslick":f(f(f({},i.default),this.props),z[0].settings)):A=f(f({},i.default),this.props),A.centerMode&&(A.slidesToScroll>1,A.slidesToScroll=1),A.fade&&(A.slidesToShow>1,A.slidesToScroll>1,A.slidesToShow=1,A.slidesToScroll=1);var j=e.default.Children.toArray(this.props.children);j=j.filter(function(fe){return typeof fe=="string"?!!fe.trim():!!fe}),A.variableWidth&&(A.rows>1||A.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),A.variableWidth=!1);for(var B=[],k=null,P=0;P<j.length;P+=A.rows*A.slidesPerRow){for(var M=[],$=P;$<P+A.rows*A.slidesPerRow;$+=A.slidesPerRow){for(var q=[],re=$;re<$+A.slidesPerRow&&(A.variableWidth&&j[re].props.style&&(k=j[re].props.style.width),!(re>=j.length));re+=1)q.push(e.default.cloneElement(j[re],{key:100*P+10*$+re,tabIndex:-1,style:{width:"".concat(100/A.slidesPerRow,"%"),display:"inline-block"}}));M.push(e.default.createElement("div",{key:10*P+$},q))}A.variableWidth?B.push(e.default.createElement("div",{key:P,style:{width:k}},M)):B.push(e.default.createElement("div",{key:P},M))}if(A==="unslick"){var le="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:le},j)}else B.length<=A.slidesToShow&&!A.infinite&&(A.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(A)),B)}}]),L}(e.default.Component)})(qE);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(qE);function n(r){return r&&r.__esModule?r:{default:r}}t.default=e.default})(VE);const CC=$s(VE),zo=[{evo:"normal",name:"피카츄",code:"sv5m",img:"/assets/image/SV5M_023.png",people:"노경현"},{evo:"normal",name:"피카츄ex",code:"svi",img:"/assets/image/SVI_018_P.png",people:"강명수"},{evo:"normal",name:"피카츄",code:"sv4a",img:"/assets/image/SV4a_055.png",people:"노경현"},{evo:"normal",name:"피카츄",code:"sv4a",img:"/assets/image/SV4a_055m.png",people:"강명수"},{evo:"normal",name:"피카츄",code:"sv4a",img:"/assets/image/SV4a_236.png",people:"노경현"},{evo:"normal",name:"파이리",code:"sv4a",img:"/assets/image/SV4a_025.png",people:"강명수"},{evo:"normal",name:"파이리",code:"sv4a",img:"/assets/image/SV4a_025m.png",people:"노경현"},{evo:"normal",name:"파이리",code:"sv4a",img:"/assets/image/SV4a_210.png",people:"강명수"},{evo:"normal",name:"파이리",code:"svg",img:"/assets/image/SVG_051.png",people:"노경현"},{evo:"normal",name:"꼬부기",code:"svg",img:"/assets/image/SVG_014.png",people:"강명수"},{evo:"normal",name:"꼬부기",code:"svg",img:"/assets/image/SVG_052.png",people:"노경현"},{evo:"normal",name:"꼬부기",code:"sv-p",img:"/assets/image/SV-P_041.png",people:"강명수"},{evo:"normal",name:"꼬부기",code:"sv2a",img:"/assets/image/SV2a_170.png",people:"노경현"},{evo:"normal",name:"로젤리아",code:"sv5k",img:"/assets/image/SV5K_001.png",people:"강명수"},{evo:"normal",name:"로젤리아",code:"s9a",img:"/assets/image/S9a_006_m.png",people:"노경현"},{evo:"normal",name:"로젤리아",code:"s9a",img:"/assets/image/S9a_006.png",people:"강명수"},{evo:"normal",name:"로젤리아",code:"s1w",img:"/assets/image/S1W_001.png",people:"노경현"},{evo:"1",name:"로즈레이드",code:"sv5k",img:"/assets/image/SV5K_002.png",people:"강명수"},{evo:"1",name:"로즈레이드",code:"s9a",img:"/assets/image/S9a_068.png",people:"노경현"},{evo:"1",name:"로즈레이드",code:"s9a",img:"/assets/image/S9a_007_m.png",people:"강명수"},{evo:"1",name:"로즈레이드",code:"sm5s",img:"/assets/image/SM5S_004.png",people:"노경현"},{evo:"normal",name:"모부기",code:"sv5k",img:"/assets/image/SV5K_003.png",people:"강명수"},{evo:"normal",name:"모부기",code:"s12a",img:"/assets/image/S12a_206.png",people:"노경현"},{evo:"normal",name:"모부기",code:"s12a",img:"/assets/image/S12a_006_m.png",people:"강명수"},{evo:"normal",name:"모부기",code:"sm5plus",img:"/assets/image/SM5plus_057.png",people:"노경현"},{evo:"normal",name:"고동치는달",code:"sv5k",img:"/assets/image/SV5K_051.png",series:"old"},{evo:"normal",name:"날뛰는 우레 ex",code:"sv5k",img:"/assets/image/SV5K_053.png",series:"old"},{evo:"normal",name:"무쇠무인",code:"sv5m",img:"/assets/image/SV5M_035.png",series:"new"},{evo:"normal",name:"무쇠 잎새 ex",code:"sv5m",img:"/assets/image/SV5M_016.png",series:"new"},{evo:"normal",name:"무쇠 감투 ex",code:"sv5m",img:"/assets/image/SV5M_036.png",series:"new"},{evo:"normal",name:"무쇠 암석 ex",code:"sv5m",img:"/assets/image/SV5M_041.png",series:"new"},{evo:"normal",name:"위대한 엄니",code:"sv5k",img:"/assets/image/SV5K_042.png",series:"old"},{evo:"normal",name:"날개치는 머리",code:"sv5k",img:"/assets/image/SV5K_033.png",series:"old"},{evo:"normal",name:"코라이돈",code:"sv5k",img:"/assets/image/SV5K_052.png",series:"old"},{evo:"normal",name:"미라이돈",code:"sv5m",img:"/assets/image/SV5M_052.png",series:"new"},{evo:"normal",name:"무쇠가시",code:"sv5m",img:"/assets/image/SV5M_030.png",series:"new"},{evo:"normal",name:"무쇠바퀴",code:"sv5m",img:"/assets/image/SV5M_051.png",series:"new"},{evo:"normal",name:"굽이치는물결 ex",code:"sv5k",img:"/assets/image/SV5K_024.png",series:"old"},{evo:"normal",name:"꿰뚫는화염 ex",code:"sv5k",img:"/assets/image/SV5K_012.png",series:"old"},{evo:"support",name:"탐험가의 선도",code:"sv5k",img:"/assets/image/SV5K_069.png",series:"old"},{evo:"tool",name:"부스트에너지 고대",code:"sv5k",img:"/assets/image/SV5K_066.png",series:"old"},{evo:"support",name:"암호마니아의 해독",code:"sv5m",img:"/assets/image/SV5M_069.png",series:"new"},{evo:"normal",name:"부스트에너지 미래",code:"sv5m",img:"/assets/image/SV5M_064.png",series:"new"}],bz="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAKe0lEQVR4nO2dWWwUyR2Hfx5gAeMAWmKOBzCGmCsskAQD2QSKQ7mAhyy7XCaAxB3YGNgECQkpmxW8ocSYDSwCQQIWh0OWfeBQdqMgCtACAgQYh/vmgStGQMy1XNGvUz0ql3t6esae6W7bnzSCqTn6X9+0q6vrzHjz5g28IoTw/N5EkFJmAMgD0AdAbwBdAOQC+DaANgCaA8hSX1kJ4CmACgD/AXBVPcoBnAJwUQjhPVOJxen5vY1TEYAXpJTfAfBzAD8D8C6Atz1+NEs9stXzHxuv35dSfg3gSwD/EEJcSm/O/k9axUopOwGYDGA8gHdSdBj+QKPVg8c8DaAUQIkQ4kaKjlmNlBcF6s/8pwB+A+AXACI1iLcmvOYZDGAlgK+SKS4CURQooe8B+FiVna48fvwY58+fx82bN3Hjxg3rcffuXTx8+BDPnz/HkydP0KRJEzRv3hxZWVnWv23atEGnTp2sR8eOHdG9e3e0aNEi1mH4g45UjzIp5ScAvkhVeZySM1ZK+SMAxQB+EOs9r1+/xsmTJ3HkyBHrcf36dSutJkQiEeTk5GDAgAEYNGgQ+vXrZ6W5cBzAAiHEQY/58hxdrYqVUvKC8icAk/jdTu+5dOkSdu/ejb179+LBgweej50MrVu3xvDhwzFy5Ejk5eXF+gYK2AzgIyHEvTj58xxFrYmVUn4A4DNVRaoCz8SDBw+itLQU5eXlno9Xm/Tu3Rvjxo3D4MGDY53FrLrNE0L8zSWPniOqsVgpZSaATwFMc/rMgQMHsH79ely9etXzcVJJbm4upk+fbgmOwV8AfCiEeOKQV8+R1UislJIV+c8B9DPfe+XKFRQXF1vlaBBh+Tt//nx06dLFKToG/b4Q4kqyYpOu+kgpBwE4ZEp9+fKldYbOmjUrsFIJY5s5c6YVK2M2YJ4OqzwmRVJipZSjAOwF0FZPZ1Vp7ty52LRpE168eFHjzKcaCmWsjJmxG/BCvFflNWESFiulfB/ADnX/HoVl6ezZs626aNhgzIydeTBgHneoPCdEQmWsqlx/AeAtPXH79u1YtWoVEvyuwJGRkYF58+Zh7NixZmjfABgDYLfXmBMRO1D9+WfaCfzs2rVrsWXLlhBqjE1BQYF1jaBoDdYShgM44uU7vIrNVV9otyhZUpcvX25V9usio0aNwqJFi0y5vIHgBe1KvCx7KWPfUq1D2XriypUr66xUwrwxjwbZqnqZGe/zXsQuB5CvJ2zevBk7duxIPuqQwDwyrwb9VAuZK/HE/lI190XZv38/1q1bV+el2jCvzLPBdAAfuH3OrYzlPf9Z/d6fTXlz5syxmvjqE2yKXLNmjdU8qcG2hZ7q32q4nbFFulRW+JctW1bvpEK1FTPvxk0P3ayI9ZlYYgerpr8oJSUloaz81xbM+8aNG81vK1CuquEklvWLP+rtqWxQcSjE6x1bt27F5cuXXV3ZOIl9z6wFsJXKoaGi3kEHDlWwfOXMVSzN/15P4P1zkFup0g1dONQSPjbPWlMse1P72k/Y8s9mtQaqsmHDBrN/ro9yF1Psh/oTdqcEpeU/SNCJQ0tYof5EF9tWjUyJwsI6yMTpgU0p27ZtM7+e7nKcxBbo4wzYm3rmzJnAaqXUBQsW+HZ8url48WKVkAD8Sn9iM0V/186dO9MUYuLYUocMGeJrHLt27TKTxtv/scVygNr37MRXr15h37596YovIYIildARXWm8o0ZNRsWO1F8tKytL+WCKZAiSVEJHp06dMpM5Pi0q9if6K4cOHUpXbJ6h1IULFwZGqs3hw4fNJMtlRFVs39VfOXbsWJrDc8eWag6y4KA5vzl69KgZAV1mRFSZEB30W1lZGai6q5vUJUuW+BaXzbVr1yxnGnSZR7Hd9dRz587VeNRfbRFP6r17rmPY0gJd0ZlBH4rtoaexJatBamI4OOtT7YxlL4HfhEkq4dheg1y7jI1y69YtH0MMn1Ry+/ZtMymHYtvpKX4GHkapcHbWLqLmUUV59OhR2gODVvkPm1Q4O3ubYpvqKZxIkW5i3VGFQSp59uyZmdSMYr+lp3B2SjoJu1Ty9OlTMynLvwZNDWN8lEXYRy5S7H/1hMzMuMOSahVWsIuKiqq1yLdr187qy8/Ozk55DDWFc84MKim2SqHatGnT2j9yHGy5ZiddWOQ2a9bMTHoWUbOoo7Rs2TLtgUHJXbFiRSjPXAdn9yn2jp7iZwbCWiw4xHWHYqt03LRv3z6tQZmEUa6Ds+sUW2VAFuei+k3Y5Do4u0qxVdq8YkwoSzthkuvg7HS1M7ZHjx6+9tfrhEEuXdGZQZldxt6307kWAOebBoV4cv2mc+fOljMNurwQUdPKv9Zf6d+/f2DEIo5cv8nPzzcjoMs39t/8P/VXuIhC0Igl128GDhxoRmC5tMXu0V/p27evtYhCg1x36IizyA24elJULJdQOmG/3qhRIwwdOjQQwZsESS4d0ZVGuV0Z0C//m/R3jB49Or1RJkBQ5HL2okGp/VQXywmx0fHwXEOlV69e6Y00AWy5fkE33bp104/OMQMl9hNd7F27fLCZMGFCcEw64Of4h/Hjx5tJdBftrjXvBD7Vn7D/KUh12qBAJw5jyIr1J6bYr3jXEH0xEsG0aY5r6NRr6MS4Oz2t3MUUy5uFT/QE/jIOVYp6C6uiDmfrH5S7mGKhVtA4ricUFhaicWPfFu4MDHTAlY8MjilnVXASS/ML9V+ga9eumDhxYv0xGAM6oAsNOvrIPFvhMpf2gKp+RZk6daq1KGN9hVUrOjDYplxVw21aPdvkzjRMq3edVt9LLWdSDbeGV35gln6a84sXL17sOA6grsK8Ms+GVPLrWFLhYYUNFsp/1hN4ReQKa/UF5tWhFsD1D//upsBLV8Hv1JUvyqRJkzBmzJg6r5Z5ZF4NTplTY53wIpaLeY0zT3tWwRwaIeoMzBvzaHBPLWwWd4Bbw4JmDqRzQTObUWpdw4Yl+OKQUHesEGK3msz8jZ7OQJYuXeq28HjgYezMQwypBSrvnkm4n1sI8bn69aoMCmVLGOt6RhtlKGDMjN1hFWTmcYzKc0IkNYBA/XojzAsa63qrV6/GlClTQtG2wBgnT55sxexQT+UNwIhEz1SbpEdmCCE44faHatnlKNyrgGtg86IW5FYxxsYYZ8yYYcVswCrVIJXHpGhY/Lw6f1Wry/u3+LlxUK71t8achQPVhcJBxVyu369VO9hHxe4U3kXFGEJVoYSWOr2IoG8wceHCBezZs8faYILbnaSSVq1aYdiwYVZl3+Wiam8w8VshhOt0ct/EagEMUYJdt0Q5ceKENd+fU9Nrc0sUDvuxt0Qx+v1Njiuhnoz5LhZJbuJz9uxZa4k7Nk9y6mlFRYV1VnO6jz2XiuP9OZmCZyM38enQoYN1RWcDdM+ePb3WpctUF1RCm/gEQqwWjL3tVKHaFM31FEohr1QXdbi3nbJRGWCGvpRStlXlL5dR+n6qj604oQZSbBFC3PH0iVrAtz0TpZTd1SI/I1R92OvWfvG4r3YU+RcH+wkham1t1lDsmagyzEeRKi542ea6it+NsRmlXXiyX8jcjJIrMfxbVewvpGrzM88A+B/xd5xEJXIYtQAAAABJRU5ErkJggg==",Sz="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAKuElEQVR4nO2daYwUxxmGXwYw1waQCRh+cIczGEjCFSdQHMphwFKCwx1A4lQI4XCCxA+IYwESEko4jAiHwAbEwpqAf3AodhREATIgsICFcCw3/ICFgIBwn9Hbqe7U1HTP9uzOTNfs+pFGu101O/1979RW1/lVpV69eiFqpJSVALQC0BFABwAtADQH8G0A9QDUAJCnzHwA4DGA2wD+DeCSep0EcBzAOSHE62y4JKUMzKsSlaZSyu8A+DmAnwF4B8CbIf80T73qq+sfG/l3pJRfAfgCwN+FEOfTbHoosiqslLIJgFEAhgJ4O0O34Rc0UL14zxMACgBsEEJczdA9E8h4VaD+zX8K4HcA3gUQy+gNg3nFEgxgKYAv01FdRFIVKEF/CeBDVXcm5eHDhzh79iyuXbuGq1evOq+bN2/i3r17ePr0KR49eoSqVauiRo0ayMvLc37Wq1cPTZo0cV6NGzdGmzZtUKtWraDb8Avtr16FUsqPAHyeqfo4IyVWSvkjAEsA/CDoPa9evcKxY8dw6NAh53XlyhUnrSzEYjE0bdoU3bp1Q48ePdC5c2cnLQlfA5guhNhfSj8D89IqrJSSD5S/ABjJz/Z7z/nz57Fz507s3r0bd+/eTdu9/ahbty769u2L/v37o1WrVkFvY4ndCOADIcStVD4/K8JKKX8F4K+qiRQHS+L+/ftRUFCAkydPpuV+qdKhQwcMGTIEPXv2DCrFbLr9VgjxWdiPzqiwUsqaAD4GMNYvf9++fVizZg0uXbpUpvuki+bNm2PcuHGOwAF8AmCKEOJRCN8D88okrJSSDfmtADqbeRcvXsSSJUucetRGWP9OmzYNLVq08LOORr8vhLhYgv+BeaVu+kgpewA4YIr64sULp4ROnDjRWlEJbZswYYJjK202oE8HlY+lolTCSikHANgNoIGezqbS5MmTsX79ejx//rzMzmcaCkpbaTNtN+CDeLfyNWVSFlZK+T6Abar/7sG6dNKkSU5bNNegzbSdPhjQx23K55RISVgpJRvX+QDe0NO3bNmCOXPmOI38XIW20wf6YkBf81MtuaGFlVJ2p4a6qK9fv8bKlSuxbNky5/dchz7QF/pk+EOfP1MapE9YKSWH8LYDqKmLunDhQuTn5+e8oCb0ib4Z4tL37aolVCIlCiulfEONDtXX05cuXer0oMor9I0+GlCDrartnpQwJXYhgK56wsaNG7Ft27ZyK6oLfaSvBp3VCFlSkgorpfyFGu7z2Lt3L1avXp1pn6yBvtJng3GqCx9IoLBSSvb5V+uDKRzKW7BgQbl4UIWFvtJn+m7gOy7ikqzELtL/kA3+efPm5XSTqrTQZ/pudHqozeKgj/QVVkrZUw39eWzYsCEnG//pgr6vW7fO/LQRAHxHcxKEVSP/f9arAA6o+FTiFY5NmzbhwoULutsJWgUKq6ZT4loBHKXyGaiocFADnyZYV6VZsLCqtP5RT2P/2eZRqmxDLXxaCR+apdYssZxN7eRecOSfw2rfEM/atWvN+bmOSrtAYafoF5xOsWXk3yaoic9I2FT9whNWStlArUzxYGUdFSXMrkbO5s2bTROoXdMEYVXTwVtnwNnUU6dORWb/jBkzrBaX2pw7d05PorG/1i9cRuvv2r59e5ZM9IeTfbaLu2PHDjNpqPuLY7VaoPY9N/Hly5fYs2dPFk30x3ZxqRG10nhbrZr0Smx/PbewsDDjiynCYrO41Oj48eNmMtenecL+RM85cOBAtmwLhc3iHjx40ExytIypTsE7es6RI0eyaZsvxcXFcckUd/r06daJe/jwYTOJWlaKqTrBW/T74MEDK9qus2fPThCXi0tsE/fy5cuOZhrUshUtbKOnnjlzpsyr/tLBrVu3ckJcakXNDDrSurZ6GkeybCFXxPXRrGNCifUZKY+UXBCXa3sNmrt1rMf169cjNNEf28W9ceOGmdSUFr2lp9AJG7FZXB/N3oqpfVQe9+/fz7phYbFVXB/N3qQl1fQUbqSwmWTiRtWJePLkiZlUnVZ8S0/h7hTbCRI3qh7a48ePzaQ8uwc9S6BSJd/9I1ZAYf+jG1KzZonLkiKnfv36mD9/Pho0iFv37MxFLVq0KOsdHO45M3hAYeMq1WrVqgX8uR0kE3Xx4sWR9BqrV69uJj2JqV3UHrVr1866YWGxUVT4a3aHwsY9AWi8jdgqKvw1K6awcRM3DRs2zKpRYbBZVPhrdoXCxi3I4l5Um7BdVPhrdonCxo15BWwoi4RcEBX+mp1IKLFt27a1YsQoV0SlVtTMoNCtY++46YwFwP2mUZMLopJmzZo5mmlQy6KYCoTwlZ7TpUuXiMz8P7kgKunatauZRC1fu//z/9BzGETBJmwVlXTvnrD1y9HSFXaXntOpUycniIIN2CwqNeIucgNGT/qfsCqE0lE3v3Llyujdu3dkBrvYLCqhRtRK46TbGNAf/+v1dwwcODC7VhrYLioZMCBhe22B+4suLPdueuvhGUOlffv22bDPF9tFpTatW7fWk2jsBvfCE1YIcdOtH1yGDRuWPUsNbBaVDB061Eyidt50rdkT+Fi/4Ii8DW1a26AmPiFflugXprBfstfgZcZiGDvWN4ZOhYaaGL3TE0o7f2FVZ+EjPY3fjE+TosLCpqhPaf2Tit8VWGLJ5yqCmsfUqVNRpUpkgTutgRow8pHBEaVZHAnCqlI7Q/8GWrZsieHDh1coEf2gBtRCgxp9YJZWBO2lFULsU80vjzFjxjhBGSsqbFpRAwNunUnYlxQorGKGCkvnwEiYnMtPEu2y3EKfGYiHGmhQm4R6oURhVQDFiXoxZzjRWbNmWT2fn27oK32m7wa/4dqRoNslHdEWQrBSXqan8YnICGsVBfrq0wr4RAjxt2QShJkq+IN68nmMHDkSgwYNKvfS0kf6anDc3BrrR4nCCiGeARhiFns2wXwGIcoN9I0+GlCDQWEidYaa3BJCcLfHe1wz56ax7pk5cyZGjBhR7kSlT/TNeJbQ9/dKitDpEnrWUAhxSJXcZ24ab8yYgFOmTCkXDzT6QF/ok+GP81+rNAhFStOxQoidajPzMz198ODBmDt3bk43xWg7faAvBvR1hPI9NCnPcwshGIh3kDo9w4MjYStWrDDHKHMC2kzbfaIgP1Z16tZU/SjVAgL17fUzH2hs6y1fvhyjR4/OibEF2jhq1CjHZp92KjsA/VItqS6lXpkhhOCG2x+qsMse7J0wBvaqVausHhWjbbRx/PjxZo8KqknVQ/lYKr4Jfp7Ipyq6fHTBz42bMNbfCnMXDtQ0CycHGa4/qqgdnKPidAr9DVhCdVsJWuCX6YdVB0wUFRVh165dzgETPO4kk9SpUwd9+vRxGvtJHqruARO/V/N+qfgbmJepI1F6KYGTHoly9OhRZ78/t6an80gULvtxj0Qx5v1NvlaCBiuUhKwLi1Ie4nP69GknxB3383Lr6e3bt51Sze0+7l4qrvfnZgqWRh7i06hRI+eJzgHodu3ahW1LF6opqDId4hOJsNrN3WOnpqpD0ZIWoQzyUk1R5/axUy7KATr0hYrtNVKFUfp+pu+tOKoWUuQLIYpD/UUaiOzMRCllGxXkp59qD4c92q8k7qgTRf7JxX5CiIzFZo20KgiDqi742GZcxe8GHEbpVp6MDGweRskRp3+phn1R5IdRAvgvJ0WSUsw0clAAAAAASUVORK5CYII=",Ez=H.div`
  margin: 0 auto;
  position: relative;
  padding: 77px 0 37px;
  background: ${({series:t})=>Tz(t)} no-repeat center / cover;
  transition: background-image 0.5s ease;
  img { 
    width: 100%;
  }
  h3 {
    text-align: center;
    color: #fff;
    font-size: 30px;
  }
  .slick-list {
    padding: 140px 50px 0px !important;
    position: relative;
    @media (max-width:700px){
      padding-top: 90px !important;
    }
    @media (max-width:600px){
      padding-top: 90px !important;
    }
  }
  .slick-arrow {
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%); 
    color: #000;
    width: 90px;
    height: 90px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s ease;
    &.slick-prev { 
      left: 25%;
      z-index: 2;
      @media (max-width:500px){
        left: 0%;
      }
      &:hover {
        content: url("/assets/image/swiper_prev_dark_hover.png");
      }
    }
    &.slick-next { 
      right: 25%;
      @media (max-width:500px){
        right: 0%;
      }
      &:hover {
        content: url("/assets/image/swiper_next_dark_hover.png");
      }
    } 
  }
  .slick-current {
    border-radius: 15px;
    transform: translateY(-10%);
    opacity: 1 !important;
  }
  .card {
    padding: 0 7px 25px;
    cursor: zoom-in;
  }
  .slick-slide {
    opacity:0;
    transition: all 0.2s;
  }
  .slick-slider {
    @media(max-width:768px) {
      margin-top: 0 !important;
    }
  }
  .slick-slider:hover .slick-arrow {
      opacity: 1;
  }
  .slick-slider:hover .slick-slide {
    opacity: 0.7;
  }
  .slick-current .card-content {
    margin-top: 0px;
    display: block;
    padding: 15px;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
    @media(max-width:600px){
      font-size: 15px;
    }
  }
  .slick-slide .slick-current  {
    opacity: 1 important;
  }
  .slick-current .card {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000);
    border-radius: 15px;
  }
  .card-content {
    display: none;
  }
    .character {
      position: absolute;
      top: 45%;
      left: 0;
      background: url("/assets/image/koraidon.png") no-repeat;
      width: 0%;
      height: 57%;
      z-index: 3;
    }
  }
`,x_=H.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: none;
    .noResult {
      position: absolute;
    }
`,b_=H.div`
  width: 450px;
  position: relative;
    @media(max-width:600px){
      width: 50%;
    }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(105deg,
    transparent 40%,
    rgba(255, 219, 112, 0.8) 45%,
    rgba(132, 50, 255, 0.6) 50%,
    transparent 54%);
    filter: brightness(1.1) opacity(0.8);
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
  }
`,Cz=H.img`
  width: 300px;
`,kz=H.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 15px;

  h3 {
    font-size: 28px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`,Tz=t=>{switch(t){case"old":return'url("/assets/image/korai_bg.jpg")';case"new":return'url("/assets/image/miraidon_bg.jpg")';default:return'url("/assets/image/korai_bg.jpg")'}},Rz=()=>{const[t,e]=E.useState({rotateX:0,rotateY:0}),[n,r]=E.useState({x:0,y:0});function i(R){const N=R.nativeEvent.offsetX,T=R.nativeEvent.offsetY,L=-1/5*N+43,W=4/30*T-43;e({rotateX:W,rotateY:L}),r({x:N,y:T})}const s=ve(R=>R.card.series),o="old",a=s?zo.filter(R=>R.series===s):zo.filter(R=>R.series===o),l=Gt(),c=()=>{l(R1(!1))},[f,d]=E.useState(!1),[h,g]=E.useState(null),m=R=>{g(R),d(!0),v({...w,arrows:!1})},_=()=>{g(null),d(!1),v({...w,arrows:!0})},[w,v]=E.useState({rows:1,dots:!1,autoplay:!1,infinite:!0,speed:400,delay:400,slidesToScroll:1,slidesToShow:7,arrows:!0,prevArrow:u.jsx("img",{src:bz,alt:"Previous"}),nextArrow:u.jsx("img",{src:Sz,alt:"Next"}),centerMode:!0,initialSlide:0,responsive:[{breakpoint:1899,settings:{slidesToShow:5}},{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:3}}]}),p=ve(R=>R.card.modal),y=ve(R=>R.card.onoff),b=[...zo].filter(R=>R.name.toLowerCase().includes(p.toLowerCase()));let S,C;if(p&&b.length>0){const R=b[0];S=u.jsx("div",{className:"card1",children:u.jsx("div",{className:"container",onMouseMove:i,children:u.jsx("img",{src:R.img,alt:R.name})})},R.id)}else p&&!b.length&&(C=u.jsxs(kz,{children:[u.jsx("div",{children:u.jsx("img",{src:"/assets/image/no_result2.png",alt:""})}),u.jsx("h3",{children:"검색결과가 없습니다."}),u.jsx("p",{children:"다른 키워드로 검색해주세요"})]}));return u.jsxs(Ez,{series:s,children:[u.jsx(CC,{...w,children:a.map((R,N)=>u.jsxs("div",{className:"card",onClick:()=>m(R),children:[u.jsx("img",{src:R.img,alt:R.name}),u.jsx("div",{className:"card-content",children:R.name})]},N))}),u.jsx("div",{className:"character"}),f&&u.jsx(x_,{children:u.jsxs(b_,{onClick:_,onMouseMove:i,style:{transform:`perspective(350px) rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg)`},children:[u.jsx("div",{className:"overlay",style:{backgroundPosition:`${n.x/1+n.y/1}%`}}),u.jsx(Cz,{src:h.img,alt:h.name})]})}),y&&u.jsxs(x_,{onClick:c,children:[u.jsxs(b_,{onClick:c,onMouseMove:i,style:{transform:`perspective(350px) rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg)`},children:[u.jsx("div",{className:"overlay",style:{backgroundPosition:`${n.x/1+n.y/1}%`}}),S]}),u.jsx("div",{className:"noResult",children:C})]})]})},S_=xM`
0%, 100%{
    transform: scale(1);
}
50% {
    transform: scale(1.1);
}
`,Oz=H.div`
    height: 60%;
    background: #242424;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        top: -29px;
        left: 0;
        right: 0;
        width: 100%;
        height: 29px;
        background-size: cover;
        background-image: url(/assets/image/bg_top_dark.png);
        background-repeat: no-repeat;
    }
}
    .card_pack {
        max-width: 1250px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .left,
        .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            width: 30%;
            z-index: 2;
            @media(max-width:700px){
                width: 240px;
            }
            img{
                width: 100%;
            }
            .deckname {
                width: 100%;
                transition: all 0.2s;
                cursor: pointer;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
        .left.active > .deckname {
            animation: ${S_} 2s infinite; /* 애니메이션 적용 */
        }
        .right.active > .deckname {
            animation: ${S_} 2s infinite; /* 애니메이션 적용 */
        }
        .left:hover .detail1 {
            opacity: 1;
            @media(max-width:1550px) {
                opacity: 0;
            }
        }
        .right:hover .detail2 {
            opacity: 1;
            @media(max-width:1550px) {
                opacity: 0;
            }
        }
        .detail1 {
            position: absolute;
            left: -100%;
            top: 22%;
            transition: all 0.4s ease-in-out;
            z-index: 0;
            opacity: 0;
            width: 90%;
            .image1 {
                width: 50%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
            .image2 {
                width: 50%;
                position: absolute;
                top: -10%;
                left: 33%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
            .image3 {
                width: 50%;
                position: absolute;
                left: 70%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
        }
        .detail2 {
            position: absolute;
            right: -93%;
            top: 15%;
            transition: all 0.5s ease-in-out;
            z-index: 0;
            opacity: 0;
            width: 100%;
            .image1 {
                width: 50%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
            .image2 {
                width: 50%;
                position: absolute;
                top: -10%;
                left: 26%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
            .image3 {
                width: 50%; 
                position: absolute;
                left: 56%;
                box-shadow: 5px 5px 10px black;
                border-radius: 10px;
            }
        }

    }
`,Nz=()=>{const t=Gt(),[e,n]=E.useState("old"),r=i=>{window.scrollTo({top:-500,behavior:"smooth"}),t(KN(i)),n(i),console.log(i)};return u.jsx(Oz,{className:"first",children:u.jsxs("div",{className:"card_pack",children:[u.jsxs("div",{className:`left ${e==="old"?"active":""}`,children:[u.jsx("img",{className:"deckname",onClick:()=>r("old"),src:"/assets/image/pr1.png",alt:""}),u.jsx("img",{className:"logo1",src:"/assets/image/코라이돈.png",alt:""}),u.jsxs("div",{className:"detail1",children:[u.jsx("img",{className:"image1",src:"/assets/image/SV5K_052.png",alt:""}),u.jsx("img",{className:"image2",src:"/assets/image/SV5K_024.png",alt:""}),u.jsx("img",{className:"image3",src:"/assets/image/SV5K_053.png",alt:""})]})]}),u.jsxs("div",{className:`right ${e==="new"?"active":""}`,children:[u.jsx("img",{className:"deckname",onClick:()=>r("new"),src:"/assets/image/pr2.png",alt:""}),u.jsx("img",{className:"logo2",src:"/assets/image/미라이돈.png",alt:""}),u.jsxs("div",{className:"detail2",children:[u.jsx("img",{className:"image1",src:"/assets/image/SV5M_052.png",alt:""}),u.jsx("img",{className:"image2",src:"/assets/image/SV5M_035.png",alt:""}),u.jsx("img",{className:"image3",src:"/assets/image/SV5M_016.png",alt:""})]})]})]})})},Pz=H.div`
`,jz=()=>u.jsxs(Pz,{children:[u.jsx(RL,{}),u.jsx(Rz,{}),u.jsx(Nz,{})]}),Cp=[{date:"2024-04-25",title:"2024 코리안리그 파이널 개최!",type:"카드게임",img:"/assets/image/2024-04-15_19-26-44-53541-1713176804.jpg",badge:"yes",main:"true"},{date:"2024-04-22",title:"코스트코에서 포켓몬 카드게임「배틀 아카데미」를 만나보자!",type:"카드게임",img:"/assets/image/2024-04-12_19-22-55-39717-1712917375.png",badge:"yes",main:"true"},{date:"2024-04-22",title:"2024 코리안리그 시즌3 대회 참가 안내",type:"카드게임",img:"/assets/image/2024-04-05_17-15-09-72223-1712304909.jpg",badge:"yes",main:"true"},{date:"2024-04-22",title:"2024 코리안리그 시즌3 in 부산 개최!",type:"카드게임",img:"/assets/image/2024-03-08_13-14-49-96369-1709871289.jpg",badge:"yes",main:"true"},{date:"2024-03-07",title:"2024 포켓몬 카드샵 대항전 대표 선수 결원 보충 및 추가 선발 안내",type:"카드게임",img:"/assets/image/2024-01-30_19-11-09-88842-1706609469.jpg",main:"true"},{date:"2024-03-06",title:"레귤레이션 변경 안내",type:"카드게임",img:"/assets/image/2024-02-22_18-16-17-10263-1708593377.png",main:"true"},{date:"2024-02-23",title:"확장팩「와일드포스」발매 기념 토너먼트 개최!",type:"카드게임",img:"/assets/image/2024-02-23_20-56-53-16906-1708689413.png",main:"true"},{date:"2024-02-23",title:"확장팩「사이버저지」발매 기념 토너먼트 개최",type:"카드게임",img:"/assets/image/2024-02-23_19-10-38-77079-1708683038.png",main:"true"},{date:"2024-02-21",title:"스칼렛&바이올렛 확장팩 「와일드포스」",type:"카드게임",img:"/assets/image/2024-02-21_18-23-11-71515-1708507391.png"},{date:"2024-02-19",title:"2024 코리안리그 시즌2 대회 참가 안내",type:"카드게임",img:"/assets/image/2024-02-16_17-53-00-44377-1708073580.jpg"},{date:"2024-02-16",title:"스칼렛&바이올렛 스타터 덱&강화 세트 「고대의 코라이돈 ex」",type:"카드게임",img:"/assets/image/2024-02-16_19-00-43-37415-1708077643.png"},{date:"2024-02-16",title:"포켓몬 카드 게임 플레이매트 「MELEEP IN A DREAM」",type:"카드게임",img:"/assets/image/2024-02-16_13-54-03-36210-1708059243.png"}],Iz=H.div`
background: url("/assets/image/bg_pattern.jpg");
width: 100%;
padding: 50px 0 130px;
    h2{
        text-align: center;
        margin-bottom: 20px;
        font-size: 50px;
        letter-spacing: -0.07em;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
        max-width: 1250px;
        margin: 0 auto;
        
        .news {
            flex: 0 0 25%;
            padding: 10px; 10px;
            @media(max-width:993px) {
                flex: 0 0 50%;
            }
            .newsWrap {
                display: flex;
                flex-direction: column;
                height: 100%;
                transition: all 0.3s;
                cursor: pointer;
                &:hover{
                    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, .3);
                }
                .thum{
                    width: 100%;
                    background: #fff;
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .badge{
                        position: absolute;
                        top:0;
                        left: 0;
                        z-index: 9999;
                        width: 59px;
                        height: 59px;
                    }
                }
                .text {
                    background: #fff;
                    height: 100%;
                    min-height: 157px;
                    padding: 20px;
                    border-bottom: 4px solid #0080FF;
                    position: relative;
                    
                    h3 {
                        font-size: 20px;
                        font-weight: 500;
                        min-height: 56px;
                        max-height: 2.858em;
                        word-spacing: 0.1rem;
                        letter-spacing: -0.1em;
                        margin-bottom: 40px;
                        display: -webkit-box;
                        overflow: hidden;
                        line-height: 1.429em;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-wrap: break-word;
                        word-break: keep-all;
                        white-space: normal;
                    }
                    .detail {
                        position: absolute;
                        left: 20px;
                        bottom: 20px;
                        font-size: 14px;
                        color: #666666;
                        font-weight: 500;
                    }
                }
            }
        }
    }
    .more {
        margin-top: 20px;
        text-align: center;
        button{
            padding:15px 125px;
            transform: skew(-20deg);
            color: #fff;
            display: inline-block;
            position: relative;
            background: linear-gradient(to right, #55bcb5, #85c083, #bec449, #f7c90e);
            border: 0;
            z-index: 2;
            outline: none;
            ::before {
                content: '';
                position: absolute;
                left: 4px;
                top: 4px;
                width: 97%;
                height: 86%;
                background-color: #fff;
                z-index: 0;
            }
            .p_contain{        
                p {
                    transform: skew(20deg);
                    font-size: 21px;
                    font-weight: bold;
                    color: #000;
                    z-index: 3;
                    letter-spacing: -0.07em;
                }
                svg {
                    position: absolute;
                    color: #D0D0D0;
                    right: 20%;
                    top: 26%;
                    transform: skew(20deg);
                    font-size: 30px;
                }
            }
        }
        button p::before {
            content: none; /* p 요소에 직접 적용된 before 가상 요소 제거 */
        }
    }
`,Az=()=>{const t=Cp.filter(n=>n.main);let e;return e=t.map((n,r)=>u.jsx("div",{className:"news",children:u.jsxs("div",{className:"newsWrap",children:[u.jsx("div",{className:"thum",children:u.jsx("img",{src:n.img,alt:n.title})}),u.jsxs("div",{className:"text",children:[u.jsx("h3",{children:n.title}),u.jsxs("div",{className:"detail",children:[u.jsx("span",{children:n.type}),u.jsx("span",{children:n.date})]})]})]})},r)),u.jsxs(Iz,{children:[u.jsx("h2",{"data-aos":"fade-down",children:"새로운 소식"}),u.jsx("div",{className:"container","data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000",children:e}),u.jsx("div",{className:"more",children:u.jsx(Ee,{to:"/news",children:u.jsx("button",{children:u.jsxs("div",{className:"p_contain",children:[u.jsx("p",{children:"더보기"}),u.jsx(WE,{})]})})})})]})},Dz=H.div`
margin:50px auto;
overflow: hidden;
.sec1{
    padding:20px;
    display:flex;
    
    // justify-content: center;
    

    .three{position:relative;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        
      
     :before{
        content: '';
        position: absolute;
        top: -20px;
        bottom: -20px;
        z-index:-1;
        left: 20px;
        right: -20px;
        border: 1px solid #d5d5d5;
     }

     .bm{
        background:#fee682;
        padding:5px 26px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:20px 0 12px 0;

        .p1{
            font-weight:700;
            font-size:16px;
            margin:3px 0;
        }
        h3{
            font-weight:800;
            font-size:25px;
        }
     }
     .bm2{
        background:#dbdcdc;
        padding:5px 26px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    

        .p1{
            font-weight:700;
            font-size:16px;
            margin:3px 0;
        }
        h3{
            font-weight:800;
            font-size:25px;
        }
     }
     .bm3{
        background:#fee682;
        padding:5px 26px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:12px 0;

        .p1{
            font-weight:700;
            font-size:16px;
            margin:3px 0;
        }
        h3{
            font-weight:800;
            font-size:25px;
        }
     }

    }

    .ur{
        margin:0 0 0 60px;
        position:relative;
        flex: 0 0 60.666667%;
        max-width: 60.666667%;

        :before{
            content: '';
            position: absolute;
            top: -20px;
            bottom: -20px;
            z-index:-1;
            left: -29px;
            right: -29px;
            border: 1px solid #d5d5d5;
         }

         .tit{font-size:1.625em;
        font-weight:800;
        margin-top:20px;
        
        
        
        :before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            border-left: 4px solid #cfcfcf;
    }
    }
    }


}

@media (max-width:1023px) {



    
overflow: none;
.sec1{
    padding:20px;
    display:block;
    
  // justify-content: center;
    

  .three{position:relative;
    flex: 0 0 100%;
    max-width: 100%;
    
  
 :before{
    content: '';
    position: absolute;
    top: -20px;
    bottom: -20px;
    z-index:-1;
    left: 20px;
    right: -20px;
    border: 1px solid #d5d5d5;
 }

 .bm{
    background:#fee682;
    padding:5px 26px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:20px 0 12px 0;

    .p1{
        font-weight:700;
        font-size:16px;
        margin:3px 0;
    }
    h3{
        font-weight:800;
        font-size:25px;
    }
 }
 .bm2{
    background:#dbdcdc;
    padding:5px 26px;
    display:flex;
    justify-content:space-between;
    align-items:center;


    .p1{
        font-weight:700;
        font-size:16px;
        margin:3px 0;
    }
    h3{
        font-weight:800;
        font-size:25px;
    }
 }
 .bm3{
    background:#fee682;
    padding:5px 26px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:12px 0;

    .p1{
        font-weight:700;
        font-size:16px;
        margin:3px 0;
    }
    h3{
        font-weight:800;
        font-size:25px;
    }
 }

}

    .ur{
        margin:0 0 0 0px;
        position:relative;
        display:block;
        width: 100%;
        max-width:100%;

    
        .mo {
            width: 100%;
            height: 0;
            padding-top: 56.25%; /* 16:9 비율 비디오의 높이를 조정합니다. */
            position: relative;
            overflow: hidden;
        }
        
        .mo iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: contain; /* 비디오가 잘릴 때 전체 비디오를 보존하고 화면에 맞게 조정됩니다. */
        }

        :before{
            display:none;
         }

         .tit{font-size:16px;
        font-weight:800;
        margin-top:20px;
        
        
        
        :before{
            display:none;
    }
    }
    }


}
    
}


`,Mz=()=>u.jsx(Dz,{className:"row",children:u.jsxs("div",{className:"sec1",children:[u.jsxs("div",{className:"three",children:[u.jsxs("div",{className:"bm",children:[u.jsxs("div",{className:"tt",children:[u.jsx("p",{className:"p1",children:"포켓몬 카드 게임"}),u.jsx("h3",{children:"자판기"})]}),u.jsx("a",{href:"/search",children:u.jsx("img",{src:"./assets/image/c1.png",alt:"","data-aos":"fade-left"})})]}),u.jsxs("div",{className:"bm2",children:[u.jsxs("div",{className:"tt",children:[u.jsx("p",{className:"p1",children:"포켓몬 카드 게임"}),u.jsx("h3",{children:"포켓몬스쿨"})]}),u.jsx("a",{href:"/search",children:u.jsx("img",{src:"./assets/image/c3.png",alt:"","data-aos":"fade-right"})})]}),u.jsxs("div",{className:"bm3",children:[u.jsxs("div",{className:"tt",children:[u.jsx("p",{className:"p1",children:"포켓몬 카드 게임"}),u.jsx("h3",{children:"포켓몬 카드샵"})]}),u.jsx("a",{href:"/search",children:u.jsx("img",{src:"./assets/image/c1.png",alt:"","data-aos":"fade-left"})})]})]}),u.jsxs("div",{className:"ur",children:[u.jsx("div",{className:"mo",children:u.jsx("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/vJoCo_2UeNI?si=d37QSQacLOuPicL5",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),u.jsx("div",{className:"tit",children:"포켓몬 카드 게임 스칼렛&바이올렛 확장팩 「와일드포스」 「사이버저지」"})]})]})});function Lz(t){return fn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z"},child:[]}]})(t)}function zz(t){return fn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm244.5 0l-81.9-81.1c-7.5-7.5-7.5-19.8 0-27.3s19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81z"},child:[]}]})(t)}const Fz=H.div`
position:relative;
margin:90px auto;
.newyou {
    overflow: hidden;
    position: relative;
    padding: 172px 0 0;
    text-align: center; /* 부모 요소를 수평으로 가운데 정렬 */

    @media (max-width:768px) {
      overflow: hidden;
      position: relative;
      padding: 132px 0 0;
      text-align: center; /* 부모 요소를 수평으로 가운데 정렬 */
  }
  
    .bg {
      position: absolute;
      top: 50px;
      right: 0;
      left: 0;
      z-index: -1;
      height: 420px;
      background: #ffe100;
    }
  
    .bg::before,
    .bg::after {
      content: ""; /* content 속성 추가 */
      position: absolute;
      right: 0;
      left: 0;
      height: 54px;
      background-repeat: repeat-x;
      animation: bg_wave 20s linear infinite;
    }
  
    .bg::before {
      top: -50px;
      background-image: url("./assets/image/img_up.png");
    }
  
    .bg::after {
      bottom: -50px;
      background-image: url("./assets/image/img_down.png");
    }
  
    @keyframes bg_wave {
      0% {
        background-position-x: 0;
      }
      100% {
        background-position-x: 100vw;
      }
    }
  }
.slide {
     width:100%;
   margin:60px 0;
    background-position:center;
    padding: 0 20px;
    text-align:center;
  
   
 
}

.title{
    font-size:40px;
    text-align:center;
    color:#191919;
    font-weight:800;
    font-family: 'Poppins', sans-serif;
    span{
        color:#E60012;
    }
}
.more{
    font-size: 20px;
    padding: 20px 100px;
    text-align: center;
    color: #fff;
    background-color: #000;
    display: inline-block;
    font-weight:800;
    border-radius: 0;
    transform: skew(-20deg);
    display:flex;
    align-items:center;
    justify-content: center;

    p{
        
    transform: skew(20deg);
    text-align: center;
    align-items:center;

   svg{
    font-size: 44px;
    position: absolute;
    left:72px;
    height:28px;
    line-height:67px;
   }
    
    }

   
 
}
    .slick-arrow {
        position: absolute; bottom:92%;   transform: translateX(-50%);
        font-size: 80px; color:#000;
        &.slick-prev {right:85px; z-index:9999}
        &.slick-next {right:0px;}
    }
    .slick-slide {
        margin: 0 !important; /* 좌우 마진 제거 */
        width: calc(100% / 3); /* 슬라이드 너비 조정 */
        flex: 0 0 auto; /* 슬라이드의 크기가 고정되도록 설정 */
    }
    .slide iframe {
        width: 100%; /* 슬라이드 너비에 맞게 설정 */
        aspect-ratio: 16 / 9; /* 비디오의 가로 세로 비율 설정 */
    }

  
}


@media (max-width:768px) {
 .slick-slider{
  margin-top:37px;
 }


 
}

`,Bz=()=>{const t={dots:!1,autoplay:!0,autoplaySpeed:2e3,slidesToShow:3,slidesToScroll:1,prevArrow:u.jsx(Lz,{}),nextArrow:u.jsx(zz,{}),responsive:[{breakpoint:769,settings:{slidesToShow:1,slideToScroll:1}}]};return u.jsx(Fz,{children:u.jsxs("div",{className:"newyou",children:[u.jsx("div",{className:"bg"}),u.jsxs("div",{className:"title",children:["POKÉMON in ",u.jsx("span",{"data-aos":"zoom-in",children:" YOUTUBE"}),u.jsxs(CC,{...t,children:[u.jsx("div",{className:"slide slide1",children:u.jsx("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/i4MvhzqDoc8?si=eLwL5Q0PjULwTvhK",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),u.jsx("div",{className:"slide slide2",children:u.jsx("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/pPnv_kPMpvc?si=C7nKC2PoWxGnU4ym",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),u.jsx("div",{className:"slide slide3",children:u.jsx("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/sAilovtGuvY?si=IoCGyz0odrq6Sowy",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),u.jsx("div",{className:"slide slide4",children:u.jsx("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/UA0REx_Btso?si=_bAvLgOLKHSGxFNF",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),u.jsx("div",{className:"slide slide5",children:u.jsx("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/XW2WPvfmiL0?si=R38DsXudESnXu_aP",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),u.jsx("div",{className:"slide slide6",children:u.jsx("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/gHm2ojoJAk8?si=obUBzapo9t6IOnMj",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})})]}),u.jsx("a",{href:"/play",children:u.jsx("div",{className:"more",children:u.jsxs("p",{children:["더보기 ",u.jsx(WE,{})]})})})]})]})})},Uz=H.div``,$z=()=>u.jsxs(Uz,{children:[u.jsx(jz,{}),u.jsx(Mz,{}),u.jsx(Az,{}),u.jsx(Bz,{})]}),Wz=H.div`
    font-size:40px;
    text-align:center;
    margin:50px 0;
    font-weight: 700;

    @media (max-width:768px) {
        font-size:35px;
        text-align:center;
        margin:50px 0;
    }

    

`,Jr=({title:t})=>u.jsx(Wz,{children:t}),Hz=H.div`
    display: flex;
    justify-content: center;
    border-bottom:1px solid #000;
    
    li{
        list-style:none;
        width:33.33%;
    button {
        width:100%;
        font-size:25px;
       
        padding-bottom: 15px;
      
        background:#fff;

      
        
        &.on {
            background:#fff;
            color:#ffa70e;
            border-bottom:5px solid #ffa70e;
            font-weight:700;
        }
    }
        @media (max-width:768px) {
            display: flex;
            justify-content: center;
            border-bottom:1px solid #000;
            li{
                list-style:none;
                width:33.33%;
            button {
                width:300px;
                font-size:25px;
                margin:0 10px;
                padding-bottom: 15px;
              
                background:#fff;
                
                &.on {
                    background:#fff;
                    color:#ffa70e;
                    border-bottom:5px solid #ffa70e;
                    font-weight:700;
                }
            }
        }
        
      }
`,Vz=({changeTitle:t,title:e})=>{const n=["전체상품","구축덱","특별제품"];return u.jsx(Hz,{className:"row",children:n.map((r,i)=>u.jsx("li",{children:u.jsx("button",{type:"button",onClick:()=>t(r),className:e==r&&"on",children:r},i)}))})};function E_(t){return fn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.50488 2H17.5049C17.8196 2 18.116 2.14819 18.3049 2.4L21.0049 6V21C21.0049 21.5523 20.5572 22 20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V6L5.70488 2.4C5.89374 2.14819 6.19013 2 6.50488 2ZM18.5049 6L17.0049 4H7.00488L5.50488 6H18.5049ZM9.00488 10H7.00488V12C7.00488 14.7614 9.24346 17 12.0049 17C14.7663 17 17.0049 14.7614 17.0049 12V10H15.0049V12C15.0049 13.6569 13.6617 15 12.0049 15C10.348 15 9.00488 13.6569 9.00488 12V10Z"},child:[]}]})(t)}const C_=H.div`
margin-bottom:90px;
  .info p {
    font-size: 17px;
    font-weight: 800;
    text-overflow: ellipsis;
    text-align: center;
  }
  .info .dam {
    margin-top: 6px;
    text-align: center;
    background: #343434;
    padding: 11px 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background: #343434;
      color: #fff;
      font-size: 16px;
    }
    span {
      margin-left: 6px;
    }
  }

  /* Modal CSS */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color:#1d1d1d;
  margin: 15% auto;
  padding: 20px 30px;
  border: 1px solid #888;
  width: 80%;
  
  color:#fff;
  .co2{ display:flex;
    justify-content: center;
    align-items: center;
  img{width:40%;}
  .mk{ 
  p{  font-size: 30px;
    font-weight:900;
    color:#fff;
    margin:32px 0}
    .dam2 {
        margin-top: 6px;
        text-align: center;
        background: #fff;
        padding: 11px 5px;
        color: #000;
        border-radius:5px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          background: #fff;
          color: #000;
          font-size: 16px;
        }
        span {
          margin-left: 6px;
        }
      }
  .tx{ font-size: 13px;
margin-top:30px;}
  }
  }
}

/* Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 34px;
  font-weight: bold;
  background:#fff;
  text-align: center;
  border-radius:50%;
  width:40px;
  height:33px;
 line-height:28px;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

@media (max-width:768px) {
  margin-bottom:90px;
  .info p {
    font-size: 17px;
    font-weight: 800;
    text-overflow: ellipsis;
    text-align: center;
  }
  .info .dam {
    margin-top: 6px;
    text-align: center;
    background: #343434;
    padding: 11px 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background: #343434;
      color: #fff;
      font-size: 16px;
    }
    span {
      margin-left: 6px;
    }
  }

  /* Modal CSS */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color:#1d1d1d;
  margin: 15% auto;
  padding: 10px 30px 30px 20px;
  border: 1px solid #888;
  width: 80%;
  
  color:#fff;
  .co2{ display:block;
    justify-content: center;
    align-items: center;
  img{width:100%;}
  .mk{ 
  p{  font-size: 30px;
    font-weight:900;
    color:#fff;
    margin:32px 0;
  text-align:center;}
    .dam2 {
        margin-top: 6px;
        text-align: center;
        background: #fff;
        padding: 11px 5px;
        color: #000;
        border-radius:5px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          background: #fff;
          color: #000;
          font-size: 34px;
        height:42px;
        line-height:53px;
        }
        span {
          margin-left: 6px;
        }
      }
  .tx{ font-size: 15px;
    text-align: center;
margin-top:30px;}
  }
  }
}

/* Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 34px;
  font-weight: bold;
  background:#fff;
  text-align: center;
  border-radius:50%;
  width:40px;
  height:33px;
 line-height:28px;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
}
`,qz=H.ul`
  border: 0px solid #000;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 50px;
`,Kz=H.li`
  flex: 0 0 21%;
  margin: 20px 2%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* 그림자 효과 추가 */




  @media (max-width:768px) {


    flex: 0 0 45%;
    margin: 20px 2%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* 그림자 효과 추가 */
}

  .photo {
    cursor: pointer;
    transition: transform 0.5s ease; /* transform에 전환 추가 */
  }

  &:hover .photo {
    transform: rotate(20deg) scale(1.1); /* 호버 시 이미지를 20도 회전하고 약간 확대 */
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7); /* 반투명 배경 추가 */
    color: #fff;
    padding: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease; /* transform에 전환 추가 */
    visibility: hidden;
    opacity: 0;
  }

  &:hover .info {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }

  .info p {
    margin: 5px 0;
    font-size: 14px;
  }

  @media (max-width:468px) {
    .photo {
      cursor: pointer;
      transition: transform 0.5s ease; /* transform에 전환 추가 */
    }
  
    &:hover .photo {
      transform: rotate(20deg) scale(1.1); /* 호버 시 이미지를 20도 회전하고 약간 확대 */
    }
  
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.7); /* 반투명 배경 추가 */
      color: #fff;
      padding: 10px;
      transform: translateY(100%);
      transition: transform 0.3s ease; /* transform에 전환 추가 */
      visibility: hidden;
      opacity: 0;
    }
  
    &:hover .info {
      transform: translateY(10%);
      visibility: visible;
      opacity: 1;
    }
  
    .info p {
      margin: 5px 0;
      font-size: 14px;
    }
}
`,Yz=H.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  .loadIcon {
    font-size: 80px;
    animation: loadSpin 5s linear infinite;
  }
  @keyframes loadSpin {
    0% {
      transform: rotate(0deg)
    }

    100% {
      transform: rotate(3turn)
    }
  }
`,Gz=H.div`
  button {
    margin: 50px 5px;
    padding: 5px 10px;
    &.on {
      background: red;
      color: #fff
    }
  }
  
`,Qz=({title:t})=>{const e=Gt(),n=ve(w=>w.products.carts),r=ve(w=>w.products.products),[i,s]=E.useState(!1),[o,a]=E.useState(r),[l,c]=E.useState(null),[f,d]=E.useState(!1);E.useEffect(()=>{e(jm())},[]),E.useEffect(()=>{r.length>0&&(s(!0),a(t==="전체상품"?r:r.filter(w=>w.category===t)))},[r,t]);const h=w=>{let v=n.find(p=>p.id==w);return v?v.qty:0},g=(w,v)=>{w.preventDefault(),c(v),d(!0)},m=()=>{d(!1),c(null)},_=({item:w,onClose:v})=>u.jsx("div",{className:"modal",style:{display:"block"},children:u.jsxs("div",{className:"modal-content",children:[u.jsx("span",{className:"close",onClick:v,children:"×"}),u.jsxs("div",{className:"co2",children:[u.jsx("img",{src:w.image}),u.jsxs("div",{className:"mk",children:[u.jsx("p",{children:u.jsx("a",{href:"#",children:w.title})}),u.jsxs("div",{className:"dam2",children:[w.inventory!==h(w.id)?u.jsx("button",{onClick:()=>e(gy(w.id)),children:u.jsx(E_,{})}):u.jsx("button",{children:u.jsx(Kv,{})}),w.inventory!==h(w.id)?u.jsxs("span",{children:[w.inventory-h(w.id),"개 남았습니다!!!!!"]}):u.jsx("span",{children:"품절입니다!!!!"})]}),u.jsxs("ul",{className:"tx",children:[u.jsxs("li",{children:[u.jsx("b",{children:"발매일"})," 2024-03-06 "]}),u.jsxs("li",{children:[u.jsx("b",{children:"가격"})," 1,000원(1팩), 30,000원(1상자) "]}),u.jsxs("li",{children:[u.jsx("b",{children:"구성물"})," 1팩 : 5장 / 1상자 : 30팩 (카드 150장)"]}),u.jsxs("li",{children:[u.jsx("b",{children:"주의"})," *한 팩에는 무작위로 5장의 카드가 들어 있으며, 제품의 특성상 동일한 카드가 연속하여 나오거나, 전 종의 카드를 모으기 어려운 경우가 있습니다. *점포에 따라 1상자(30팩) 단위로 판매하는 곳도 있습니다. "]})]})]})]})]})});return i?u.jsxs(C_,{className:"row",children:[u.jsx(Gz,{}),u.jsx(qz,{children:o.map((w,v)=>u.jsxs(Kz,{children:[" ",u.jsx("div",{className:"photo",onClick:p=>g(p,w),children:u.jsx("img",{src:w.image,alt:w.title})}),u.jsxs("div",{className:"info",children:[u.jsx("p",{children:u.jsx("a",{href:"#",children:w.title})}),u.jsx("p",{children:w.price.toLocaleString()}),u.jsxs("div",{className:"dam",children:[w.inventory!==h(w.id)?u.jsx("button",{onClick:()=>e(gy(w.id)),children:u.jsx(E_,{})}):u.jsx("button",{children:u.jsx(Kv,{})}),w.inventory!==h(w.id)?u.jsxs("span",{children:[w.inventory-h(w.id),"개 남았습니다!!!!!"]}):u.jsx("span",{children:"품절입니다!!!!"})]})]})]},v))}),f&&l&&u.jsx(_,{item:l,onClose:m})]}):u.jsx(C_,{className:"row",children:u.jsx(Yz,{children:u.jsx(HE,{className:"loadIcon"})})})},Xz=()=>{const[t,e]=E.useState("전체상품"),n=r=>{e(r)};return u.jsxs("div",{children:[u.jsx(Jr,{title:"제품정보"}),u.jsx(Vz,{changeTitle:n,title:t,className:"row"}),u.jsx(Qz,{title:t,className:"row"})]})},Jz=H.table`
// table-layout: fixed;
background: linear-gradient(to bottom, #FFDE00, #FFAC00); /* 그라데이션 배경 추가 */
border: 2px solid #FFAC00; /* 실선 테두리 추가 */
  border-radius: 15px; /* 둥근 테두리 적용 */
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5); /* 그림자 효과 추가 */
transition: transform 0.3s ease; /* 변형에 대한 애니메이션 추가 */
color: #000; /* 글꼴 색상 변경 */
font-family: 'Arial', sans-serif; /* 글꼴 변경 */
cursor: pointer; /* 마우스 커서 변경 */
transition: transform 0.3s ease; /* 변형에 대한 애니메이션 추가 */
col:nth-child(1) { width: 100px; }
col:nth-child(2) { width: auto; }
col:nth-child(3) { width: 100px; }
col:nth-child(4) { width: 100px; }
col:nth-child(5) { width: 100px; }
th,
  td {
    padding: 7px;
  }
  tbody {
    td:nth-child(3) {
      text-align: center;
      input {
        border: 1px solid #000;
        text-align: center;
        padding: 5px 0;
        width: 50px;
      }
    }
    td:nth-child(4) {
      text-align: right;
    }
    td:nth-child(5) {
      text-align: center;
      button {
        padding: 5px 8px;
        border-radius: 3px;
        background: blue;
        color: #fff;
      }
    }
  }
  tfoot {
    td {
      text-align: center;
    }
  }
 
  &:hover {
    transform: scale(1.05); /* 호버 시 크기 확대 효과 추가 */
  }


  @media (max-width:768px) {
    width:100%;
    table-layout: auto; 
    background: linear-gradient(to bottom, #FFDE00, #FFAC00); /* 그라데이션 배경 추가 */
    border: 2px solid #FFAC00; /* 실선 테두리 추가 */
      border-radius: 15px; /* 둥근 테두리 적용 */
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5); /* 그림자 효과 추가 */
    transition: transform 0.3s ease; /* 변형에 대한 애니메이션 추가 */
    color: #000; /* 글꼴 색상 변경 */
    font-family: 'Arial', sans-serif; /* 글꼴 변경 */
    cursor: pointer; /* 마우스 커서 변경 */
    transition: transform 0.3s ease; /* 변형에 대한 애니메이션 추가 */
    col:nth-child(1) { width: 100px; }
    col:nth-child(2) { width: auto; }
    col:nth-child(3) { width: 100px; }
    col:nth-child(4) { width: 100px; }
    col:nth-child(5) { width: 100px; }
    th,
      td {
        padding: 7px;
      }
      tbody {
        width:100%;
        td:nth-child(3) {
          text-align: center;
          input {
            border: 1px solid #000;
            text-align: center;
            padding: 5px 0;
            width: 50px;
          }
        }
        td:nth-child(4) {
          text-align: right;
        }
        td:nth-child(5) {
          text-align: center;
          button {
            padding: 5px 8px;
            border-radius: 3px;
            background: blue;
            color: #fff;
          }
        }
      }
      tfoot {
        td {
          text-align: center;
        }
      }
     
      &:hover {
        transform: scale(1.05); /* 호버 시 크기 확대 효과 추가 */
      }
}


}
`,Zz=()=>{const t=Gt(),e=ve(a=>a.products.products),r=ve(a=>a.products.carts).map(a=>({product:e.find(c=>c.id===a.id),qty:a.qty})),i=r.reduce((a,l)=>a+l.product.price*l.qty,0),s=r.reduce((a,l)=>a+l.qty,0),o=(a,l,c)=>{let f=parseInt(a.target.value);f<1&&(f=1),f>c&&(f=c),t(WN({id:l,newQty:f}))};return u.jsxs(Jz,{border:"1",children:[u.jsxs("colgroup",{children:[u.jsx("col",{}),u.jsx("col",{}),u.jsx("col",{}),u.jsx("col",{}),u.jsx("col",{})]}),r.length?u.jsx("tbody",{children:r.map((a,l)=>u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("img",{src:a.product.image,alt:a.product.title})}),u.jsxs("td",{children:[a.product.title," (",a.product.price.toLocaleString(),")"]}),u.jsx("td",{children:u.jsx("input",{type:"number",value:a.qty,onChange:c=>o(c,a.product.id,a.product.inventory)})}),u.jsx("td",{children:(a.product.price*a.qty).toLocaleString()}),u.jsx("td",{children:u.jsx("button",{type:"button",onClick:()=>t(HN(a.product.id)),children:"삭제"})})]},l))}):u.jsx("tbody",{children:u.jsx("tr",{children:u.jsx("td",{colSpan:"5",style:{padding:"100px 0",textAlign:"center",fontSize:"30px"},children:"비어있습니다."})})}),u.jsx("tfoot",{children:u.jsx("tr",{children:u.jsxs("td",{colSpan:"5",children:["합계 : ",i.toLocaleString()," ",u.jsx("br",{}),"주문수량 : ",r.length,"종 ",s,"개"]})})})]})},eF=H.div`
    max-width:900px; margin:50px auto;
`,tF=()=>u.jsxs(eF,{children:[u.jsx(Jr,{title:"포켓몬 스토어"}),u.jsx(Zz,{})]}),nF=H.div`
    max-width:600px; margin:50px auto; 
    border:1px solid #ddd;
    padding:39px 30px;
    h2{
        margin-bottom:24px;
    }
    table { 
        col:nth-child(1) { width:100px }
        col:nth-child(2) { width:auto }
        td { padding:5px; 
            &:nth-child(1) { text-align:left}
            input { border:1px solid #ddd; height:30px; width:100%;
                text-indent:1em; }
        }
    }
    .btn { text-align:center; margin-top:20px; 
        button { padding:15px 35px; background:#2da5da; color:#fff; border-radius:5px; }
    }
`,rF=()=>{const t=Mi(),e=Gt(),n=ve(f=>f.members.members),[r,i]=E.useState(""),[s,o]=E.useState(""),a=E.useRef(""),l=E.useRef("");E.useEffect(()=>{e(WS())},[]);const c=f=>{if(f.preventDefault(),!r){alert("이메일을 입력하세요."),a.current.focus();return}if(!s){alert("비밀번호를 입력하세요."),l.current.focus();return}let d=n.find(h=>h.userId==r);if(d){if(d.userPw!=s)return alert("비밀번호가 틀렸습니다."),l.current.focus(),!1;e($S(d)),t("/")}else return alert("회원이 아닙니다."),a.current.focus(),!1};return u.jsxs(nF,{children:[u.jsx("h2",{children:"로그인"}),u.jsxs("form",{onSubmit:c,children:[u.jsxs("table",{children:[u.jsxs("colgroup",{children:[u.jsx("col",{}),u.jsx("col",{})]}),u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("label",{htmlFor:"userId",children:"이메일 "})}),u.jsx("td",{children:u.jsx("input",{ref:a,type:"text",id:"userId",name:"userId",onChange:f=>i(f.target.value)})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("label",{htmlFor:"userPw",children:"비밀번호 "})}),u.jsx("td",{children:u.jsx("input",{ref:l,type:"password",id:"userPw",name:"userPw",onChange:f=>o(f.target.value)})})]})]})]}),u.jsx("div",{className:"btn",children:u.jsx("button",{type:"submit",children:"로그인"})})]})]})},iF=()=>u.jsx("div",{className:"row",children:u.jsx(rF,{})}),sF=H.div`
max-width:600px; margin:50px auto; 
border:1px solid #ddd;
padding:39px 30px;
h2{
    margin-bottom:24px;
}
table { 
    col:nth-child(1) { width:140px }
    col:nth-child(2) { width:auto }
    td { padding:5px; 
        &:nth-child(1) { text-align:left}
        input { border:1px solid #ddd; height:30px; width:100%;
            text-indent:1em; }
    }
}
.btn { text-align:center; margin-top:20px; 
    button { padding:15px 35px; background:#2da5da; color:#fff; border-radius:5px; }
}
`,oF=()=>{const t=Gt(),e=ve(m=>m.members.members),n=Mi(),r=E.useRef(""),i=E.useRef(""),s=E.useRef(""),[o,a]=E.useState(""),[l,c]=E.useState(""),[f,d]=E.useState(""),h=async m=>{if(m.preventDefault(),!o){alert("이메일을 입력하세요."),r.current.focus();return}if(!l){alert("비밀번호를 입력하세요."),i.current.focus();return}if(!f){alert("비밀번호를 입력하세요."),s.current.focus();return}if(l!=f){alert("비밀번호가 일치하지 않습니다."),i.current.focus();return}if(!g(o))return!1;const _={userId:o,userPw:l};try{await BS.push(_),alert("회원가입이 성공했습니다."),n("/login")}catch(w){console.log("오류 : ",w)}},g=m=>{let _=e.find(w=>w.userId==m);return console.log(_),_?(alert("중복된 아이디입니다."),r.current.focus(),!1):!0};return E.useEffect(()=>{t(WS())},[]),u.jsxs(sF,{children:[u.jsx("h2",{children:"회원가입"}),u.jsxs("form",{onSubmit:h,children:[u.jsxs("table",{border:"0",children:[u.jsxs("colgroup",{children:[u.jsx("col",{}),u.jsx("col",{})]}),u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("label",{htmlFor:"userId",children:"이메일  "})}),u.jsx("td",{children:u.jsx("input",{type:"text",name:"userId",id:"userId",ref:r,value:o,onChange:m=>{a(m.target.value),g(m.target.value)}})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("label",{htmlFor:"userPw",children:"비밀번호  "})}),u.jsx("td",{children:u.jsx("input",{type:"password",name:"userPw",id:"userPw",ref:i,value:l,onChange:m=>c(m.target.value)})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:u.jsx("label",{htmlFor:"userPwOk",children:"비밀번호확인  "})}),u.jsx("td",{children:u.jsx("input",{type:"password",name:"userPwOk",id:"userPwOk",ref:s,value:f,onChange:m=>d(m.target.value)})})]})]})]}),u.jsx("div",{className:"btn",children:u.jsx("button",{type:"submit",children:"회원가입"})})]})]})},aF=()=>u.jsx("div",{className:"row",children:u.jsx(oF,{})}),lF=()=>u.jsx("div",{}),cF=()=>u.jsxs("div",{className:"row",children:[u.jsx(Jr,{title:"Member Modify"}),u.jsx(lF,{})]}),kC=[{title:"2024 코리안리그 파이널 시즌 in 서울 롯데호텔월드!",img:"/assets/image/2024-04-22_16-52-44-28544-1713772364.jpg",fixed:"true"},{title:"2024 포켓몬 카드샵 대항전 8R LIVE 중계 기념 이벤트",img:"/assets/image/2024-04-11_17-19-23-59451-1712823563.png",fixed:"true"},{title:"2024 코리안리그 시즌3 in 부산!",img:"/assets/image/2024-04-04_22-49-43-85325-1712238583.jpg",fixed:"true"},{title:"2024 포켓몬 카드샵 대항전 7R LIVE 중계 기념 이벤트",img:"/assets/image/2024-03-19_15-23-39-74739-1710829419.jpg",fixed:"true"},{title:"포켓몬 카드샵 한정 증정 이벤트 개최!",img:"/assets/image/2024-03-14_17-49-29-91906-1710406169.png",fixed:"true"},{title:"2024 포켓몬 카드샵 대항전 6R LIVE 중계 기념 이벤트!",img:"/assets/image/2024-03-07_17-47-47-75141-1709801267.jpg",fixed:"false"},{title:"확장팩「와일드포스」발매 기념 토너먼트 개최!",img:"/assets/image/2024-02-23_19-20-56-10135-1708683656.png",fixed:"false"},{title:"확장팩「사이버저지」발매 기념 토너먼트 개최!",img:"/assets/image/2024-02-23_19-20-06-74118-1708683606.png",fixed:"false"},{title:"2024 포켓몬 카드샵 대항전 5R LIVE 중계 기념 이벤트!",img:"/assets/image/2024-02-22_10-12-59-23866-1708564379.jpg",fixed:"false"},{title:"2024 포켓몬 카드샵 미니리그 개최!",img:"/assets/image/2024-02-15_14-27-40-76049-1707974860.png",fixed:"false"},{title:"2024 포켓몬 카드샵 대항전 4R LIVE 중계 기념 이벤트!",img:"/assets/image/2024-01-31_19-09-46-73992-1706695786.png",fixed:"false"},{title:"2024 코리안리그 시즌2 in 광주!",img:"/assets/image/2024-01-30_18-55-46-74547-1706608546.jpg",fixed:"false"}],uF=H.div`
background-image: url('/assets/image/event-bg1.png');
width: 100%;
padding: 5%;
.bg {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    gap: 10px;
    @media (max-width:993px) {
        gap: 5px;
        justify-content: normal;
    }
    .list {
        flex: 0 0 24%;
        padding: 10px;
        background: #fff;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        @media (max-width:993px) {
            flex: 0 0 48%;
        }
        &:hover {
            box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
        }
        .container {
            .image_container{
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            h4 {
                margin-top: 15px;
                font-size: 14px;
                font-weight: 700;
                word-spacing: -0.1rem;
                letter-spacing: -0.04em;
                color: #454545;
                height: 50px;
            }
        }
    }
`,dF=H.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,fF=H.div`
  background: #1D1D1D;
  padding: 50px;
  border-radius: 10px;
  display: flex;
   .text {
    color: #fff;
    margin-left: 30px;
   }
   img {
    width: 400px;
    border: 5px solid #fff;
   }
`,hF=({onClose:t,event:e})=>u.jsx(dF,{onClick:t,children:u.jsxs(fF,{onClick:n=>n.stopPropagation(),children:[u.jsx("img",{src:e.img,alt:e.title}),u.jsxs("div",{className:"text",children:[u.jsx("h2",{children:e.title}),u.jsx("p",{children:e.description})]})]})}),pF=()=>{const t=kC.filter(s=>s.fixed=="true"),[e,n]=E.useState(null),r=s=>{n(s)},i=()=>{n(null)};return u.jsxs(uF,{children:[u.jsx("div",{className:"bg","data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000",children:t.map((s,o)=>u.jsx("div",{className:"list",onClick:()=>r(s),children:u.jsxs("div",{className:"container",children:[u.jsx("img",{src:s.img,alt:s.title}),u.jsx("h4",{children:s.title})]})},o))}),e&&u.jsx(hF,{onClose:i,event:e})]})},mF=H.div`
width: 100%;
padding: 5%;
    .bg {
        display: flex;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
        gap: 10px;
        @media (max-width:993px) {
            gap: 5px;
            justify-content: normal;
        }
        .list {
            flex: 0 0 24%;
            padding: 10px;
            background: #fff;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            @media (max-width:993px) {
                flex: 0 0 48%;
            }
            &:hover {
                box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
            }
            .container {
                .image_container{
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                h4 {
                    margin-top: 15px;
                    font-size: 14px;
                    font-weight: 700;
                    word-spacing: -0.1rem;
                    letter-spacing: -0.04em;
                    color: #454545;
                    height: 50px;
                }
            }
        }
    }
`,gF=H.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,yF=H.div`
  background: #1D1D1D;
  padding: 50px;
  border-radius: 10px;
  display: flex;
   .text {
    color: #fff;
    margin-left: 30px;
   }
   img {
    width: 400px;
    border: 5px solid #fff;
   }
`,vF=({onClose:t,event:e})=>u.jsx(gF,{onClick:t,children:u.jsxs(yF,{onClick:n=>n.stopPropagation(),children:[u.jsx("img",{src:e.img,alt:e.title}),u.jsxs("div",{className:"text",children:[u.jsx("h2",{children:e.title}),u.jsx("p",{children:e.description})]})]})}),_F=()=>{const t=kC,[e,n]=E.useState(null),r=s=>{n(s)},i=()=>{n(null)};return u.jsxs(mF,{children:[u.jsx("div",{className:"bg","data-aos":"flip-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000",children:t.map((s,o)=>u.jsx("div",{className:"list",onClick:()=>r(s),children:u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"image_container",children:u.jsx("img",{src:s.img,alt:s.title})}),u.jsx("h4",{className:"title",children:s.title})]})},o))}),e&&u.jsx(vF,{onClose:i,event:e})]})},wF=H.div``,xF=()=>u.jsxs(wF,{children:[u.jsx(Jr,{title:"이벤트"}),u.jsx(pF,{}),u.jsx(_F,{})]}),bF=H.div`
    h3 {
        text-align: center;
        font-size: 20px;
        margin: 50px 0;
    }
    .application__wrap {
        .application__type {
          display: flex;
          justify-content: center;
          border-bottom:1px solid #000;
          li{ list-style:none;
          a {
            text-align: center;
            width:300px;
            font-size:25px;
            margin:0 100px;
            padding-bottom: 15px;
          
            background:#fff;
            border-bottom:0px solid #000;
            &.on {
                background:#fff;
                color:#ffa70e;
                border-bottom:5px solid #ffa70e;
                font-weight:700;
            }
          }
        }
        }
        .application__member {
            text-align: center;
        
           
            .member__info {
         
           
              a { display: block;
                cursor: default; /* 원하는 마우스 커서 스타일로 변경하세요 */
                .member__photo { 
                   
                    img { width: 32%;
                        margin:30px auto; }
                        .tit{    font-size:32px;
                            font-weight:500;
                               color:#000;
                               margin:30px 0;

                               .t1{
                                background-color: rgb(255, 198, 156);
                                color:#000;
                                font-weight:800;
                               }
                               .t2{
                                background-color: rgb(255, 231, 206);
                                color:#000;
                                font-weight:800;
                               }

                        }
                        .tit2{    font-size:20px;
                            font-weight:500;
                               color:#000;
                               margin:40px 0;

                               .t1{
                                background-color: rgb(247, 198, 206);
                                color:#000;
                                font-weight:800;
                               }
                               .t2{
                                background-color: rgb(255, 239, 198);
                                color:#000;
                                font-weight:800;
                               }
                               .t3{
                                background-color: rgb(214, 239, 214);
                                color:#000;
                                font-weight:800;
                               }

                        }
                        .tit3 a{
                            cursor:pointer;
                        }
                        .tit4 a{
                            cursor:pointer;
                        }
                        .lang
                        img{
                            width:52%;
                            }
                        }
                     }
              }
            }
        }


        @media (max-width:768px) {
         
            
            h3 {
                text-align: center;
                font-size: 20px;
                margin: 50px 0;
            }
            .application__wrap {
                .application__type {
                  display: flex;
                  justify-content: center;
                  border-bottom:1px solid #000;
                  li{list-style:none;
                    width:49%;
                    
                  a {
               
                    width:95%;
                    font-size:25px;
                    margin:0 5px;
                    padding-bottom: 10px;
                  
                    background:#fff;
                    border-bottom:0px solid #000;
                    &.on {
                        background:#fff;
                        color:#ffa70e;
                        border-bottom:5px solid #ffa70e;
                        font-weight:700;
                       
                    }
                }
                  }
                }
                .application__member {
                    text-align: center;
                
                   
                    .member__info {
                 
                   
                      a { display: block;
                        .member__photo { 
                           
                            img { width: 32%;
                                margin:30px auto; }
                                .tit{    font-size:30px;
                                    font-weight:500;
                                       color:#000;
                                       margin:30px 0;
                                       padding:0 6px;
        
                                       .t1{
                                        background-color: rgb(255, 198, 156);
                                        color:#000;
                                        font-weight:800;
                                       }
                                       .t2{
                                        background-color: rgb(255, 231, 206);
                                        color:#000;
                                        font-weight:800;
                                       }
        
                                }
                                .tit2{    font-size:18px;
                                    font-weight:500;
                                       color:#000;
                                       margin:40px 0;
                                       padding:0 10px;
        
                                       .t1{
                                        background-color: rgb(247, 198, 206);
                                        color:#000;
                                        font-weight:800;
                                       }
                                       .t2{
                                        background-color: rgb(255, 239, 198);
                                        color:#000;
                                        font-weight:800;
                                       }
                                       .t3{
                                        background-color: rgb(214, 239, 214);
                                        color:#000;
                                        font-weight:800;
                                       }
        
                                }
                                .lang
                                img{
                                    width:80%;
                                    }
                                }
                             }
                      }
                    }
                }
        

            
        }
    }
`,SF=()=>{const[t,e]=E.useState(0),n=[{menu:"대회안내",id:0},{menu:"플레이어즈",id:1}],r=s=>{e(s)},i={0:[{applicationImg:"./assets/image/app_logo.png",link:"#"}],1:[]};return u.jsx(bF,{className:"row",children:u.jsxs("div",{className:"application__wrap",children:[u.jsx("div",{className:"application__type",children:n.map(s=>u.jsx("li",{children:u.jsx(Ee,{to:s.id===0?"/application":"/boardList",className:t===s.id?"on":"",onClick:()=>r(s.id),children:s.menu},s.id)}))}),u.jsx("div",{className:"application__member",children:i[t].map((s,o)=>u.jsx("div",{className:"member__info",children:u.jsx("a",{href:s.link,children:u.jsxs("figure",{className:"member__photo",children:[u.jsx("img",{src:s.applicationImg,"data-aos":"fade-down"}),u.jsxs("div",{className:"tit","data-aos":"fade-up",children:["포켓몬 카드 게임을 하고 포인트를 모아보아요! ",u.jsx("br",{}),"포인트를 쌓으면 ",u.jsx("span",{className:"t1",children:"랭킹"}),"도 올라가고, ",u.jsx("span",{className:"t2",children:"상품"}),"도 교환할 수 있어요!"]}),u.jsxs("div",{className:"tit2",children:["포켓몬스쿨과 공인 카드샵 미니리그에서 얻을 수 있는 포인트로 ",u.jsx("br",{}),"랭킹 순위를 정하는데 필요한 ",u.jsx("span",{className:"t1",children:"랭킹 포인트 (RP) "}),"와 ",u.jsx("br",{}),"포인트를 모아서 경품을 교환할 수 있는 ",u.jsx("span",{className:"t2",children:"포켓몬 카드 게임 포인트 (PP)"}),"가 있습니다. ",u.jsx("br",{}),"상위 포인트 획득자는 포켓몬 공식 사이트 메인 랭킹에서 확인 할 수 있습니다. ",u.jsx("br",{}),"랭킹 포인트를 모아 포켓몬 카드 게임 플레이어의 정상에 도전해보세요.",u.jsx("br",{}),"랭킹 포인트와 포켓몬 카드 게임 포인트 외",u.jsx("br",{}),"코리안리그 상위 입상을 통해 모은 승점을 통해",u.jsx("br",{}),"포켓몬 월드챔피언십에 진출할 수 있는 특별한  ",u.jsx("span",{className:"t3",children:"코리안리그 포인트(KP)"})," 도 있습니다. "]}),u.jsx("div",{className:"pt1","data-aos":"zoom-in",children:u.jsx("img",{src:"./assets/image/app_logo2.png",alt:""})}),u.jsx("div",{className:"tit3",children:u.jsx("a",{href:"/boardList",children:"[포켓몬 월드챔피언십2019 바로가기]"})}),u.jsx("div",{className:"pt2","data-aos":"zoom-in",children:u.jsx("img",{src:"./assets/image/app_logo3.png",alt:""})}),u.jsx("div",{className:"tit4",children:u.jsx("a",{href:"/boardList",children:"[포켓몬 월드챔피언십2019 바로가기]"})}),u.jsx("div",{className:"lang",children:u.jsx("img",{src:"./assets/image/app_txt.png",alt:""})})]})})},o))})]})})},EF=H.div``,CF=()=>u.jsxs(EF,{children:[u.jsx(Jr,{title:"플레이어즈"}),u.jsx(SF,{})]}),kF=H.div`
h3 {
    text-align: center;
    font-size: 20px;
    margin: 50px 0;
}
.play__wrap {
    .play__type {
      display: flex;
      justify-content: center;
      border-bottom:1px solid #000;
      button {
        width:300px;
        font-size:25px;
        margin:0 100px;
        padding-bottom: 15px;
      
        background:#fff;
        border-bottom:1px solid #000;
        &.on {
            background:#fff;
            color:#ffa70e;
            border-bottom:5px solid #ffa70e;
            font-weight:700;
        }
        
      }
    }
    .play__member {
        text-align: center;
    
       
        .member__info {
            p{
                margin:40px 0;
                font-size:35px;
                font-weight:800;
                color:rgb(57, 132, 198);
            }
     
       
          a { display: block;
            cursor: default; /* 원하는 마우스 커서 스타일로 변경하세요 */
              
            .member__photo { 
                  border:1px solid #34b1c4;
                  margin:50px 0;

               
                img { width: 32%;
                    margin:30px auto; }
                    .tit{    font-size:20px;
                        font-weight:500;
                           color:#858585;
                           margin:30px 0 10px 0;

                           

                    }
                    .tit2{    font-size:20px;
                        font-weight:500;
                           color:#858585;
                           margin:10px 0 40px 0;

                          

                    }
                    .pt1 {
                        margin: 10px auto; /* 이 부분을 수정하여 가운데 정렬 */
                        width: 70%;
                        text-align: center;
                        height: 0;
                        padding-bottom: 56.25%;
                        position: relative;
                        iframe {
                          position: absolute;
                          width: 100%;
                          height: 90%;
                          top:0;
                          left:0;
                          text-align: center;
                          margin: 0 auto; /* 이 부분을 수정하여 가운데 정렬 */
                        }
                      }
                      .pt2 {
                        margin: 10px auto; /* 이 부분을 수정하여 가운데 정렬 */
                        width: 70%;
                        text-align: center;
                        height: 0;
                        padding-bottom: 56.25%;
                        position: relative;
                        iframe {
                          position: absolute;
                          width: 100%;
                          height: 90%;
                          top:0;
                          left:0;
                          text-align: center;
                          margin: 0 auto; /* 이 부분을 수정하여 가운데 정렬 */
                        }
                      }
                      .pt3 {
                        margin: 10px auto; /* 이 부분을 수정하여 가운데 정렬 */
                        width: 70%;
                        text-align: center;
                        height: 0;
                        padding-bottom: 56.25%;
                        position: relative;
                        iframe {
                          position: absolute;
                          width: 100%;
                          height: 90%;
                          top:0;
                          left:0;
                          text-align: center;
                          margin: 0 auto; /* 이 부분을 수정하여 가운데 정렬 */
                        }
                      }
                      .pt4 {
                        margin: 10px auto; /* 이 부분을 수정하여 가운데 정렬 */
                        width: 70%;
                        text-align: center;
                        height: 0;
                        padding-bottom: 56.25%;
                        position: relative;
                        iframe {
                          position: absolute;
                          width: 100%;
                          height: 90%;
                          top:0;
                          left:0;
                          text-align: center;
                          margin: 0 auto; /* 이 부분을 수정하여 가운데 정렬 */
                        }
                      }
                    .lang
                    img{
                        width:52%;
                        }
                    }
                 }
          }
        }
    }
}

`,TF=()=>{const[t,e]=E.useState(0),n=[{menu:"놀이방법 영상",id:0}],r={0:[{title:"놀이방법 영상",link:"#"}]};return u.jsx(kF,{className:"row",children:u.jsxs("div",{className:"play__wrap",children:[u.jsx("div",{className:"play__type",children:n.map((i,s)=>u.jsx("button",{onClick:()=>{e(i.id)},className:t===i.id&&"on",children:i.menu},s))}),u.jsx("div",{className:"play__member",children:r[t].map((i,s)=>u.jsx("div",{className:"member__info",children:u.jsx("a",{href:i.link,children:u.jsxs("figure",{className:"member__photo",children:[u.jsxs("p",{children:[i.title," "]}),u.jsx("div",{className:"tit",children:"포켓몬 카드 게임의 기본 룰을 알기 쉽게 알려주는"}),u.jsx("div",{className:"tit2",children:"「포켓몬 카드 게임 놀이방법 영상」과 함께 포켓몬 카드 게임을 알아보아요! "}),u.jsx("div",{className:"pt1","data-aos":"fade-right",children:u.jsx("iframe",{width:"100%",height:"515",src:"https://www.youtube.com/embed/OdR51NdHt5g?si=a4yi4k5ONVK2Df6n",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),u.jsx("div",{className:"pt2","data-aos":"fade-left",children:u.jsx("iframe",{width:"70%",height:"515",src:"https://www.youtube.com/embed/vJoCo_2UeNI?si=KNlws8ZktyDwD6Ll",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),u.jsx("div",{className:"pt3","data-aos":"fade-right",children:u.jsx("iframe",{width:"70%",height:"515",src:"https://www.youtube.com/embed/yKie0cPHyVQ?si=mTlXEWLnc233ElSk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),u.jsx("div",{className:"pt4","data-aos":"fade-left",children:u.jsx("iframe",{width:"70%",height:"515",src:"https://www.youtube.com/embed/2kFuT2CGOTI?si=H8EFzjbue6lYuZF5",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})})]})})},s))})]})})},RF=H.div``,OF=()=>u.jsxs(RF,{children:[u.jsx(Jr,{title:"놀이방법"}),u.jsx(TF,{})]}),NF=H.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0 130px;
  .card_list {
    display: flex;
    flex-wrap: wrap;
      .card {
        flex: 0 0 18.3%;
        margin: 10px;
        display:flex;
        justify-content: center;
        @media (max-width: 680px) {
          flex: 0 0 45%;
          pointer-events: none;
        }
        .container {
          img {
            border-radius: 8px;
            z-index: 1;
            &:hover {
              transform: scale(1.8);
              box-shadow: 0 60px 20px 20px rgba(0, 0, 0, 0.4);
            }
          }
        }
        &:hover {
          z-index: 9999;
          transform: perspective(350px) rotateX(${t=>t.rotation.rotateX}deg) rotateY(${t=>t.rotation.rotateY}deg);
        }
      }
    }
`,PF=H.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 15px;

  h3 {
    font-size: 28px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`,jF=()=>{const t=ve(o=>o.card.name),[e,n]=E.useState({rotateX:0,rotateY:0});function r(o){const a=o.nativeEvent.offsetX,l=o.nativeEvent.offsetY,c=-1/5*a+20,f=4/30*l-20;n({rotateX:f,rotateY:c})}const i=zo.filter(o=>o.name.toLowerCase().includes(t.toLowerCase()));let s;return t&&i.length>0?s=i.map((o,a)=>u.jsx("div",{className:"card",children:u.jsx("div",{className:"container",onMouseMove:r,children:u.jsx("img",{src:o.img,alt:o.name})})},a)):t&&!i.length?s=u.jsxs(PF,{children:[u.jsx("div",{children:u.jsx("img",{src:"/assets/image/no_result2.png",alt:""})}),u.jsx("h3",{children:"검색결과가 없습니다."}),u.jsx("p",{children:"다른 키워드로 검색해주세요"})]}):s=zo.map((o,a)=>u.jsx("div",{className:"card",children:u.jsx("div",{className:"container",onMouseMove:r,children:u.jsx("img",{src:o.img,alt:o.name})})},a)),u.jsx(NF,{rotation:e,children:u.jsx("div",{className:"card_list",children:s})})},IF=H.div`
background: url("/assets/image/cards-bg.jpg");
padding: 50px 0;
.search_wrap{
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    height: 50px;
    @media(max-width:993px){
        height: 40px;
        padding: 0 20px;
    }
    input{
        width: 100%;
        border: 5px solid #484848;
        padding-left: 20px;
        outline: none;
    }::placeholder {
        font-size: 15px;
        font-family: "Noto Sans", "Noto Sans KR";
        font-weight: 400;
        color: #B7B8B7;
    }
     button{
        border: 5px solid #484848;
        color: #fff;
        background: #484848;
        font-size: 15px;
        padding: 10px 12px;
        @media(max-width:993px){
            height: 40px;
            padding: 0;
        }
    }
}
`,AF=()=>{const t=Gt(),[e,n]=E.useState(""),r=i=>{i.preventDefault(),t(qN(e))};return u.jsx(IF,{children:u.jsx("form",{onSubmit:r,children:u.jsxs("div",{className:"search_wrap",children:[u.jsx("input",{type:"text",placeholder:"카드검색 (포켓몬 이름 혹은 텍스트를 입력하세요)",onChange:i=>n(i.target.value)}),u.jsx("span",{children:u.jsx("button",{type:"submit",children:"검색"})})]})})})},DF=H.div`
display: flex;
flex-direction: column;
`,MF=()=>u.jsxs(DF,{children:[u.jsx(Jr,{title:"카드검색"}),u.jsx(AF,{}),u.jsx(jF,{})]}),LF=H.div`
background: url("/assets/image/nnews_nav_bg.jpg") center bottom;
width: 100%;
padding: 45px 0 60px;
margin-top:10px;
@media (max-width:993px) {
    margin-top:20px;
}
.search_wrap{
    display: flex;
    align-items: center;
    flex-direction:column;
    h2{
        color: #fff;
        font-size: 50px;
        margin: 0 0 15px;
        @media (max-width:993px) {
            font-size: 29px;
        }
    }
    .search_container {
        position: relative;
        background: transparent;
        overflow: hidden;
        width: 60%;
        @media (max-width:993px) {
            height: 40px;
            font-size: 15px;
            width: 80%;
        }
        &::before {
            content: '';
            position: absolute;
            left: 0px;
            top: 0;
            bottom: 0;
            width: 12px;
            background: url("/assets/image/search_left.png");
            background-size: cover;
            @media (max-width:993px) {
                top: 0px;
            }
            }
            .test{
                padding-left: 12px;
                display:flex;
                align-items: center;
                input{
                    padding: 20px;
                    width: 100%;
                    height: 55px;
                    outline: none;
                    font-size: 16px;
                    @media (max-width:993px) {
                        padding: 0;
                        height: 40px;
                    }
                }::placeholder {
                    font-size: 16px;
                    font-family: "Noto Sans", "Noto Sans KR";
                    font-weight: 400;
                    color: #B7B8B7;
                }
                button{
                    width: 50px;
                    height: 55px;
                    color: #fff;
                    background: #DA343C;
                    font-size: 15px;
                    @media (max-width:993px) {
                     height: 40px;       
                    }
                }
                p{
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        top: -18px;
                        left: -20px;
                        width: 21px;
                        height: 27px;
                        background-color: #fff;
                        transform: skew(-40deg);
                        @media (max-width:993px) {
                            top: -14px;
                        }
                    }
                }
            }
    }
    
}
`,zF=()=>{const t=Gt(),[e,n]=E.useState(""),r=i=>{i.preventDefault(),t(EO(e)),console.log(e)};return u.jsx(LF,{children:u.jsx("form",{onSubmit:r,children:u.jsxs("div",{className:"search_wrap",children:[u.jsx("h2",{children:"소식"}),u.jsx("div",{className:"search_container",children:u.jsxs("div",{className:"test",children:[u.jsx("input",{type:"text",placeholder:"검색어를 입력해주세요",onChange:i=>n(i.target.value)}),u.jsx("button",{type:"submit",children:u.jsx("p",{children:"검색"})})]})})]})})})},FF=H.div`
background: #f7f7f7;
width: 100%;
padding: 50px 0 130px;
    .container{
        display: flex;
        flex-wrap: wrap;
        max-width: 1250px;
        margin: 0 auto;
        
        .news {
            flex: 0 0 25%;
            padding: 10px; 10px;
            @media (max-width: 993px) {
                flex: 0 0 50%;
              }
            .newsWrap {
                display: flex;
                flex-direction: column;
                height: 100%;
                transition: all 0.3s;
                cursor: pointer;
                &:hover{
                    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, .3);
                }
                .thum{
                    width: 100%;
                    background: #fff;
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .badge{
                        position: absolute;
                        top:0;
                        left: 0;
                        z-index: 9999;
                        width: 59px;
                        height: 59px;
                    }
                }
                .text {
                    background: #fff;
                    height: 100%;
                    min-height: 157px;
                    padding: 20px;
                    border-bottom: 4px solid #0080FF;
                    position: relative;
                    font-weight: 500;
                    
                    h3 {
                        font-size: 20px;
                        font-weight: 500;
                        min-height: 56px;
                        max-height: 2.858em;
                        word-spacing: 0.1rem;
                        letter-spacing: -0.1em;
                        margin-bottom: 40px;
                        display: -webkit-box;
                        overflow: hidden;
                        line-height: 1.429em;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-wrap: break-word;
                        word-break: keep-all;
                        white-space: normal;
                    }
                    .detail {
                        position: absolute;
                        left: 20px;
                        bottom: 20px;
                        font-size: 14px;
                        color: #666666;
                        font-weight: 500;
                    }
                }
            }
        }
    }
    .no_result {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        gap: 15px;
        h3 {
            font-size: 28px;
            font-weight: 600;
        }
        p {
            font-size: 16px;
            font-weight:400;
        }
    }
`,BF=()=>{const t=ve(r=>r.news.title),e=Cp.filter(r=>r.title.toLowerCase().includes(t.toLowerCase()));let n;return t&&e.length>0?n=e.map((r,i)=>u.jsx("div",{className:"news",children:u.jsxs("div",{className:"newsWrap",children:[u.jsxs("div",{className:"thum",children:[u.jsx("img",{src:r.img,alt:r.title}),r.badge&&u.jsx("img",{className:"badge",src:"/assets/image/badge_tri_gradient.png"})]}),u.jsxs("div",{className:"text",children:[u.jsx("h3",{children:r.title}),u.jsxs("div",{className:"detail",children:[u.jsx("span",{children:r.type}),"  |  ",u.jsx("span",{children:r.date})]})]})]})},i)):t&&!e.length?n=u.jsxs("div",{className:"no_result",children:[u.jsx("div",{children:u.jsx("img",{src:"/assets/image/no_result2.png",alt:""})}),u.jsx("h3",{children:"검색결과가 없습니다."}),u.jsx("p",{children:"다른 키워드로 검색해주세요"})]}):n=Cp.map((r,i)=>u.jsx("div",{className:"news",children:u.jsxs("div",{className:"newsWrap",children:[u.jsxs("div",{className:"thum",children:[u.jsx("img",{src:r.img,alt:r.title}),r.badge&&u.jsx("img",{className:"badge",src:"/assets/image/badge_tri_gradient.png"})]}),u.jsxs("div",{className:"text",children:[u.jsx("h3",{children:r.title}),u.jsxs("div",{className:"detail",children:[u.jsx("span",{children:r.type}),u.jsx("span",{children:r.date})]})]})]})},i)),u.jsx(FF,{children:u.jsx("div",{className:"container",children:n})})},UF=H.div`
display: flex;
flex-direction: column;
align-items: center;
`,$F=()=>u.jsxs(UF,{children:[u.jsx(zF,{}),u.jsx(BF,{})]}),WF=H.div`
    text-align:center; margin-top:30px; 
    button { margin:20px; width:100px; height:40px; 
        &.on {  background:#eb3690; color:#fff; }
    }
`,HF=()=>{const t=Gt(),e=ve(r=>r.boards.type),n=["관리자","유저"];return u.jsx(WF,{children:n.map((r,i)=>u.jsx("button",{onClick:()=>t(np(r)),className:e==r&&"on",children:r},i))})};var TC={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(go,function(){var n=1e3,r=6e4,i=36e5,s="millisecond",o="second",a="minute",l="hour",c="day",f="week",d="month",h="quarter",g="year",m="date",_="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var z=["th","st","nd","rd"],j=A%100;return"["+A+(z[(j-20)%10]||z[j]||z[0])+"]"}},y=function(A,z,j){var B=String(A);return!B||B.length>=z?A:""+Array(z+1-B.length).join(j)+A},x={s:y,z:function(A){var z=-A.utcOffset(),j=Math.abs(z),B=Math.floor(j/60),k=j%60;return(z<=0?"+":"-")+y(B,2,"0")+":"+y(k,2,"0")},m:function A(z,j){if(z.date()<j.date())return-A(j,z);var B=12*(j.year()-z.year())+(j.month()-z.month()),k=z.clone().add(B,d),P=j-k<0,M=z.clone().add(B+(P?-1:1),d);return+(-(B+(j-k)/(P?k-M:M-k))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:d,y:g,w:f,d:c,D:m,h:l,m:a,s:o,ms:s,Q:h}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},b="en",S={};S[b]=p;var C="$isDayjsObject",R=function(A){return A instanceof W||!(!A||!A[C])},N=function A(z,j,B){var k;if(!z)return b;if(typeof z=="string"){var P=z.toLowerCase();S[P]&&(k=P),j&&(S[P]=j,k=P);var M=z.split("-");if(!k&&M.length>1)return A(M[0])}else{var $=z.name;S[$]=z,k=$}return!B&&k&&(b=k),k||!B&&b},T=function(A,z){if(R(A))return A.clone();var j=typeof z=="object"?z:{};return j.date=A,j.args=arguments,new W(j)},L=x;L.l=N,L.i=R,L.w=function(A,z){return T(A,{locale:z.$L,utc:z.$u,x:z.$x,$offset:z.$offset})};var W=function(){function A(j){this.$L=N(j.locale,null,!0),this.parse(j),this.$x=this.$x||j.x||{},this[C]=!0}var z=A.prototype;return z.parse=function(j){this.$d=function(B){var k=B.date,P=B.utc;if(k===null)return new Date(NaN);if(L.u(k))return new Date;if(k instanceof Date)return new Date(k);if(typeof k=="string"&&!/Z$/i.test(k)){var M=k.match(w);if(M){var $=M[2]-1||0,q=(M[7]||"0").substring(0,3);return P?new Date(Date.UTC(M[1],$,M[3]||1,M[4]||0,M[5]||0,M[6]||0,q)):new Date(M[1],$,M[3]||1,M[4]||0,M[5]||0,M[6]||0,q)}}return new Date(k)}(j),this.init()},z.init=function(){var j=this.$d;this.$y=j.getFullYear(),this.$M=j.getMonth(),this.$D=j.getDate(),this.$W=j.getDay(),this.$H=j.getHours(),this.$m=j.getMinutes(),this.$s=j.getSeconds(),this.$ms=j.getMilliseconds()},z.$utils=function(){return L},z.isValid=function(){return this.$d.toString()!==_},z.isSame=function(j,B){var k=T(j);return this.startOf(B)<=k&&k<=this.endOf(B)},z.isAfter=function(j,B){return T(j)<this.startOf(B)},z.isBefore=function(j,B){return this.endOf(B)<T(j)},z.$g=function(j,B,k){return L.u(j)?this[B]:this.set(k,j)},z.unix=function(){return Math.floor(this.valueOf()/1e3)},z.valueOf=function(){return this.$d.getTime()},z.startOf=function(j,B){var k=this,P=!!L.u(B)||B,M=L.p(j),$=function(ft,He){var Mt=L.w(k.$u?Date.UTC(k.$y,He,ft):new Date(k.$y,He,ft),k);return P?Mt:Mt.endOf(c)},q=function(ft,He){return L.w(k.toDate()[ft].apply(k.toDate("s"),(P?[0,0,0,0]:[23,59,59,999]).slice(He)),k)},re=this.$W,le=this.$M,fe=this.$D,Le="set"+(this.$u?"UTC":"");switch(M){case g:return P?$(1,0):$(31,11);case d:return P?$(1,le):$(0,le+1);case f:var et=this.$locale().weekStart||0,hn=(re<et?re+7:re)-et;return $(P?fe-hn:fe+(6-hn),le);case c:case m:return q(Le+"Hours",0);case l:return q(Le+"Minutes",1);case a:return q(Le+"Seconds",2);case o:return q(Le+"Milliseconds",3);default:return this.clone()}},z.endOf=function(j){return this.startOf(j,!1)},z.$set=function(j,B){var k,P=L.p(j),M="set"+(this.$u?"UTC":""),$=(k={},k[c]=M+"Date",k[m]=M+"Date",k[d]=M+"Month",k[g]=M+"FullYear",k[l]=M+"Hours",k[a]=M+"Minutes",k[o]=M+"Seconds",k[s]=M+"Milliseconds",k)[P],q=P===c?this.$D+(B-this.$W):B;if(P===d||P===g){var re=this.clone().set(m,1);re.$d[$](q),re.init(),this.$d=re.set(m,Math.min(this.$D,re.daysInMonth())).$d}else $&&this.$d[$](q);return this.init(),this},z.set=function(j,B){return this.clone().$set(j,B)},z.get=function(j){return this[L.p(j)]()},z.add=function(j,B){var k,P=this;j=Number(j);var M=L.p(B),$=function(le){var fe=T(P);return L.w(fe.date(fe.date()+Math.round(le*j)),P)};if(M===d)return this.set(d,this.$M+j);if(M===g)return this.set(g,this.$y+j);if(M===c)return $(1);if(M===f)return $(7);var q=(k={},k[a]=r,k[l]=i,k[o]=n,k)[M]||1,re=this.$d.getTime()+j*q;return L.w(re,this)},z.subtract=function(j,B){return this.add(-1*j,B)},z.format=function(j){var B=this,k=this.$locale();if(!this.isValid())return k.invalidDate||_;var P=j||"YYYY-MM-DDTHH:mm:ssZ",M=L.z(this),$=this.$H,q=this.$m,re=this.$M,le=k.weekdays,fe=k.months,Le=k.meridiem,et=function(He,Mt,St,Ka){return He&&(He[Mt]||He(B,P))||St[Mt].slice(0,Ka)},hn=function(He){return L.s($%12||12,He,"0")},ft=Le||function(He,Mt,St){var Ka=He<12?"AM":"PM";return St?Ka.toLowerCase():Ka};return P.replace(v,function(He,Mt){return Mt||function(St){switch(St){case"YY":return String(B.$y).slice(-2);case"YYYY":return L.s(B.$y,4,"0");case"M":return re+1;case"MM":return L.s(re+1,2,"0");case"MMM":return et(k.monthsShort,re,fe,3);case"MMMM":return et(fe,re);case"D":return B.$D;case"DD":return L.s(B.$D,2,"0");case"d":return String(B.$W);case"dd":return et(k.weekdaysMin,B.$W,le,2);case"ddd":return et(k.weekdaysShort,B.$W,le,3);case"dddd":return le[B.$W];case"H":return String($);case"HH":return L.s($,2,"0");case"h":return hn(1);case"hh":return hn(2);case"a":return ft($,q,!0);case"A":return ft($,q,!1);case"m":return String(q);case"mm":return L.s(q,2,"0");case"s":return String(B.$s);case"ss":return L.s(B.$s,2,"0");case"SSS":return L.s(B.$ms,3,"0");case"Z":return M}return null}(He)||M.replace(":","")})},z.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},z.diff=function(j,B,k){var P,M=this,$=L.p(B),q=T(j),re=(q.utcOffset()-this.utcOffset())*r,le=this-q,fe=function(){return L.m(M,q)};switch($){case g:P=fe()/12;break;case d:P=fe();break;case h:P=fe()/3;break;case f:P=(le-re)/6048e5;break;case c:P=(le-re)/864e5;break;case l:P=le/i;break;case a:P=le/r;break;case o:P=le/n;break;default:P=le}return k?P:L.a(P)},z.daysInMonth=function(){return this.endOf(d).$D},z.$locale=function(){return S[this.$L]},z.locale=function(j,B){if(!j)return this.$L;var k=this.clone(),P=N(j,B,!0);return P&&(k.$L=P),k},z.clone=function(){return L.w(this.$d,this)},z.toDate=function(){return new Date(this.valueOf())},z.toJSON=function(){return this.isValid()?this.toISOString():null},z.toISOString=function(){return this.$d.toISOString()},z.toString=function(){return this.$d.toUTCString()},A}(),V=W.prototype;return T.prototype=V,[["$ms",s],["$s",o],["$m",a],["$H",l],["$W",c],["$M",d],["$y",g],["$D",m]].forEach(function(A){V[A[1]]=function(z){return this.$g(z,A[0],A[1])}}),T.extend=function(A,z){return A.$i||(A(z,W,T),A.$i=!0),T},T.locale=N,T.isDayjs=R,T.unix=function(A){return T(1e3*A)},T.en=S[b],T.Ls=S,T.p={},T})})(TC);var VF=TC.exports;const qF=$s(VF),KF=H.div`
    margin: 0px 0 50px; 
    .application__type {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #000;
        margin-bottom: 50px;
        li{ 
            list-style:none;
        a {
            text-align: center;
            width: 300px;
            font-size: 25px;
            margin: 0 100px;
            padding-bottom: 15px;
            background: #fff;
            border-bottom: 0px solid #000;
            &.on {
                background: #fff;
                color: #ffa70e;
                border-bottom: 5px solid #ffa70e;
                font-weight: 700;
            }
        }
    }
    }
    .tg{
        margin-top:50px; 
        text-align: center;
        background:#5dcf02;
        color:#fff;
        padding:15px;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
    }
    .tg2{
        text-align: center;
        background:#04a6e2;
        color:#fff;
        padding:15px;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
    }
    .tg3{
        text-align: center;
        background:#ff3636;
        color:#fff;
        padding:15px;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        border: 2px solid #ccc;
        background-color: #f9f9f9;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
   
    
    th {
        width: 100%;
        color: #fff;
        font-weight: bold;
        border-bottom: 3px solid #ccc;
        padding: 10px;
        text-align: center;
        font-family: 'Arial', sans-serif;
        display: table-cell; /* 테이블 셀로 표시 */
    }
      td {
            padding: 10px;
            text-align: center;
            font-family: 'Arial', sans-serif;
            width: 25%; /* 각 셀이 화면의 25%를 차지하도록 설정 */
             font-weight:600;

           &:nth-child(4) a{
                background-color: #FFDE00;
                padding: 9px 22px;
                border-radius:30px;
            }
        }
      
    
    tbody tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tbody tr:hover {
        background-color: #e9e9e9;
        transition: background-color 0.3s ease;
    }
    .btn {
        text-align: center;
        margin: 40px 0; 
        a {
            padding: 10px 20px;
            background: #000;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        a:hover {
            background: #ffa70e;
        }




       
       
    }
    @media (max-width:768px) {
        margin: 0px 0 50px; 
        .application__type {
            margin-top:34px;
            display: flex;
            justify-content: center;
            border-bottom:1px solid #000;
            li{list-style:none;
              width:49%;
              
            a {
         
              width:95%;
              font-size:25px;
              margin:0 5px;
              padding-bottom: 10px;
            
              background:#fff;
              border-bottom:0px solid #000;
              &.on {
                  background:#fff;
                  color:#ffa70e;
                  border-bottom:5px solid #ffa70e;
                  font-weight:700;
                 
              }
          }
            }
        }
        .tg{
            margin-top:50px; 
            text-align: center;
            background:#5dcf02;
            color:#fff;
            padding:15px;
            font-family: 'Arial', sans-serif;
            font-weight: bold;
        }
        .tg2{
            text-align: center;
            background:#04a6e2;
            color:#fff;
            padding:15px;
            font-family: 'Arial', sans-serif;
            font-weight: bold;
        }
        .tg3{
            text-align: center;
            background:#ff3636;
            color:#fff;
            padding:15px;
            font-family: 'Arial', sans-serif;
            font-weight: bold;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            border: 2px solid #ccc;
            background-color: #f9f9f9;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
       
        
        th {
            width: 100%;
            color: #fff;
            font-weight: bold;
            border-bottom: 3px solid #ccc;
            padding: 10px;
            text-align: center;
            font-family: 'Arial', sans-serif;
            display: table-cell; /* 테이블 셀로 표시 */
        }
        tr{
            
          td {
                padding: 5px;
                text-align: center;
                font-family: 'Arial', sans-serif;
                width: 0%; /* 각 셀이 화면의 25%를 차지하도록 설정 */
                 font-weight:600;
                 font-size: 13px;

                 &:nth-child(2) {
                    text-align: left;
                }
                &:nth-child(3) {
                    text-align: left;
                }
                &:nth-child(4) {
                    text-align: right;
                }
    
               &:nth-child(4) a{
                    background-color: #FFDE00;
                    padding: 9px 6px;
                    border-radius:30px;
                }
            }
        }
        
        tbody tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tbody tr:hover {
            background-color: #e9e9e9;
            transition: background-color 0.3s ease;
        }
        .btn {
            text-align: center;
            margin: 40px 0; 
            a {
                padding: 10px 20px;
                background: #000;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            }
            a:hover {
                background: #ffa70e;
            }
    
    
    
    
           
           
        }  
    }
`,YF=()=>{const[t,e]=E.useState(1),n=h=>{e(h)},r=[{menu:"대회안내",id:0},{menu:"플레이어즈",id:1}],i=Gt(),s=ve(h=>h.boards.list),o=ve(h=>h.boards.type),a=ve(h=>h.members.user),[l,c]=E.useState([]),[f,d]=E.useState([]);return E.useEffect(()=>{o=="관리자"?(i(np("관리자")),i(VS())):(i(np("유저")),i(qS()),c(s.filter(h=>h.birthday>=2010)),d(s.filter(h=>h.birthday<2010)))},[o,i,s]),u.jsx(KF,{children:u.jsxs("div",{className:"application__wrap",children:[u.jsx("div",{className:"application__type",children:r.map(h=>u.jsx("li",{children:u.jsx(Ee,{to:h.id===0?"/application":"/boardList",className:t===h.id?"on":"",onClick:()=>n(h.id),children:h.menu},h.id)}))}),o=="관리자"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"tg3",children:"관리자 작성"}),u.jsx("table",{children:u.jsx("tbody",{children:s.length>0&&s.map((h,g)=>u.jsxs("tr",{children:[u.jsx("td",{children:s.length-g}),u.jsx("td",{children:u.jsx(Ee,{to:`/boardDetail/${h.subject}`,state:{post:h},children:h.subject})}),u.jsx("td",{children:h.content}),u.jsx("td",{children:qF(h.date).format("YYYY-MM-DD")})]},g))})})]}),o=="유저"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"tg",children:"코리안리그 주니어 부문"}),u.jsx("table",{children:u.jsx("tbody",{children:l.length>0&&l.map((h,g)=>u.jsxs("tr",{children:[u.jsx("td",{children:l.length-g}),u.jsx("td",{children:u.jsx(Ee,{to:`/boardDetail/${h.subject}`,state:{post:h},children:h.subject})}),u.jsx("td",{children:h.writer}),u.jsx("td",{className:"deck-link",children:u.jsxs(Ee,{to:`/deck/${h.subject}`,state:{post:h},children:[h.subject,"덱보기"]})})]},g))})})]}),o=="유저"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"tg2",children:"코리안리그 시니어 부문"}),u.jsx("table",{children:u.jsx("tbody",{children:f.length>0&&f.map((h,g)=>u.jsxs("tr",{children:[u.jsx("td",{children:f.length-g}),u.jsx("td",{children:u.jsx(Ee,{to:`/boardDetail/${h.subject}`,state:{post:h},children:h.subject})}),u.jsx("td",{children:h.writer}),u.jsx("td",{className:"deck-link",children:u.jsxs(Ee,{to:`/deck/${h.subject}`,state:{post:h},children:[h.subject,"덱보기"]})})]},g))})})]}),o==="관리자"&&a&&a.userId==="tsalt@hanmail.net"&&u.jsx("div",{className:"btn",children:u.jsx(Ee,{to:"/boardWrite",children:"작성하기"})}),o==="유저"&&a&&u.jsx("div",{className:"btn",children:u.jsx(Ee,{to:"/boardWrite",children:"신청하기"})})]})})},GF=()=>u.jsxs("div",{className:"row",children:[u.jsx(Jr,{title:"플레이어즈"}),u.jsx(HF,{}),u.jsx(YF,{})]}),QF=H.div`
    max-width:600px; margin:0 auto 50px; 
    table {
        col:nth-child(1) { width:100px; }
        col:nth-child(2) { width:auto; }
        td { padding:5px;
            input { width:100%; border:1px solid #ddd; height:30px; padding:5px; }
            textarea { width:100%; border:1px solid #ddd; padding:5px; height:200px }
        }
    }
    .btn { text-align:center; margin-top:20px;
        button, a { margin:0 10px; padding:10px 20px; background:#ddd;
            font-size:14px }
    }
`,XF=({type:t})=>{const e=Mi(),n=ve(a=>a.members.user),[r,i]=E.useState({subject:"",content:"",birthday:""}),s=a=>{const{value:l,name:c}=a.target;i(f=>({...f,[c]:l}))},o=a=>{a.preventDefault();const l=new Date().toISOString();t=="관리자"?Os.push({subject:r.subject,content:r.content,writer:n.userId,hit:0,date:l}):t=="유저"&&Ns.push({subject:r.subject,content:r.content,birthday:r.birthday,writer:n.userId,hit:0,date:l}),e("/boardList")};return u.jsx(QF,{children:u.jsxs("form",{onSubmit:o,children:[u.jsxs("table",{border:"1",children:[u.jsxs("colgroup",{children:[u.jsx("col",{}),u.jsx("col",{})]}),u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx("td",{children:"이메일"}),u.jsx("td",{children:u.jsx("input",{type:"text",name:"writer",value:n.userId,disabled:!0})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"이름"}),u.jsx("td",{children:u.jsx("input",{type:"text",name:"subject",value:r.subject,onChange:s})})]}),t=="유저"&&u.jsxs("tr",{children:[u.jsx("td",{children:"생년"}),u.jsx("td",{children:u.jsx("input",{type:"text",name:"birthday",value:r.birthday,onChange:s})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"RP"}),u.jsx("td",{children:u.jsx("textarea",{name:"content",value:r.content,onChange:s})})]})]})]}),u.jsxs("div",{class:"btn",children:[u.jsx("button",{type:"submit",children:"작성"}),u.jsx(Ee,{to:"/boardList",children:"목록"})]})]})})},JF=H.div`
    h2 { 
        font-size:30px; text-align:center; margin:30px 0; 
    }
`,ZF=()=>{const t=ve(e=>e.boards.type);return u.jsxs(JF,{className:"row",children:[u.jsxs("h2",{children:[" ",t," "]}),u.jsx(XF,{type:t})]})},e8=H.div`

max-width:600px; margin:0 auto 50px; 
table {
    col:nth-child(1) { width:100px; }
    col:nth-child(2) { width:auto; }
    td { padding:5px;
        input { width:100%; border:1px solid #ddd; height:30px; padding:5px; }
        textarea { width:100%; border:1px solid #ddd; padding:5px; height:200px }
    }
}
.btn { text-align:center; margin-top:20px;
    button, a { margin:0 10px; padding:10px 20px; background:#ddd;
        font-size:14px }
}


`,t8=({post:t})=>{const e=Mi(),n=ve(a=>a.boards.type),[r,i]=E.useState({subject:t.subject,content:t.content}),s=a=>{const{value:l,name:c}=a.target;i(f=>({...f,[c]:l}))},o=a=>{a.preventDefault(),n=="관리자"?Os.child(t.key).update({subject:r.subject,content:r.content}):n=="유저"&&Ns.child(t.key).update({subject:r.subject,content:r.content}),e("/boardList")};return u.jsx(e8,{children:u.jsxs("form",{onSubmit:o,children:[u.jsxs("table",{border:"1",children:[u.jsxs("colgroup",{children:[u.jsx("col",{}),u.jsx("col",{})]}),u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx("td",{children:"이메일"}),u.jsx("td",{children:u.jsx("input",{type:"text",name:"writer",value:t.writer,disabled:!0})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"이름"}),u.jsx("td",{children:u.jsx("input",{type:"text",name:"subject",value:r.subject,onChange:s})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"내용"}),u.jsx("td",{children:u.jsx("textarea",{name:"content",value:r.content,onChange:s})})]})]})]}),u.jsxs("div",{class:"btn",children:[u.jsx("button",{type:"submit",children:"글수정"}),u.jsx(Ee,{to:"/boardList",children:"목록"})]})]})})},n8=H.div`
h2{ font-size:30px; text-align:center; margin:30px 0;}
`,r8=()=>{const t=ar(),{post:e}=t.state,n=ve(r=>r.boards.type);return u.jsxs(n8,{className:"row",children:[u.jsx("h2",{children:n}),u.jsx(t8,{post:e})]})},i8=H.div`
max-width:600px; margin:0 auto 50px; 
table {
    col:nth-child(1) { width:100px; }
    col:nth-child(2) { width:auto; }
    td { padding:5px;
        input { width:100%; border:1px solid #ddd; height:30px; padding:5px; }
        textarea { width:100%; border:1px solid #ddd; padding:5px; height:200px }
    }
}
.btn { text-align:center; margin-top:20px;
    a { margin:0 10px; padding:10px 20px; background:#ddd;
        font-size:14px }
}

`,s8=({post:t})=>{const e=ve(s=>s.members.user),n=ve(s=>s.boards.type),r=Mi(),i=s=>{s.preventDefault(),n=="관리자"?Os.child(t.key).remove():n=="유저"&&Ns.child(t.key).remove(),r("/boardList")};return E.useEffect(()=>{n=="관리자"?Os.child(t.key).update({hit:t.hit+1}):Ns.child(t.key).update({hit:t.hit+1})},[]),u.jsxs(i8,{children:[u.jsxs("table",{border:"1",children:[u.jsxs("colgroup",{children:[u.jsx("col",{}),u.jsx("col",{})]}),u.jsxs("tbody",{children:[u.jsxs("tr",{children:[u.jsx("td",{children:"이메일"}),u.jsx("td",{children:u.jsx("input",{type:"text",name:"writer",value:t.writer,disabled:!0})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"이름"}),u.jsx("td",{children:u.jsx("input",{type:"text",name:"subject",value:t.subject,disabled:!0})})]}),u.jsxs("tr",{children:[u.jsx("td",{children:"RP"}),u.jsx("td",{children:u.jsx("textarea",{name:"content",value:t.content,disabled:!0})})]})]})]}),u.jsxs("div",{class:"btn",children:[e&&t.writer==e.userId&&u.jsxs(u.Fragment,{children:[u.jsx(Ee,{to:`/boardModify/${t.subject}`,state:{post:t},children:"수정"}),u.jsx("a",{href:"#",onClick:i,children:"삭제"})]}),u.jsx(Ee,{to:"/boardList",children:"목록"})]})]})},o8=H.div`
h2{ font-size:30px; text-align:center; margin:30px 0;}
`,a8=()=>{const t=ar(),{post:e}=t.state,n=ve(r=>r.boards.type);return u.jsxs(o8,{className:"row",children:[u.jsx("h2",{children:n}),u.jsx(s8,{post:e})]})},l8=H.div`
  .deck__wrap {
    margin: 0 auto;
    text-align: center;
    .pak {
      text-align: center;
      img {
        width: 55%;
      }
    }
    .dackcv {
      margin: 40px;
     .deck-link{
      font-size:27px;
      font-weight:800;
      color:#9b43ff;
     
     }

     
    }
    .btn {
      display: none;
      text-align: center;
      margin-top: 20px;
      a {
        margin: 0 10px;
        padding: 20px 0;
        background: #ddd;
        font-size: 14px;
      }
    }
  }
  .no{
    margin-top:40px;
    max-width:1200px; 
    background:#f7f7f7;
    border:1px solid #ddd;
    margin:auto;
    padding:30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    li{
      flex:0 0 13%;
      margin:10px -10px;
      img{width:100%;}
     
    }
  }
  .kang{
    margin-top:40px;
    max-width:1200px; 
    background:#f7f7f7;
    border:1px solid #ddd;
    margin:auto;
    padding:30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    li{
      flex:0 0 13%;
      margin:10px -10px;
      img{width:100%;}
     
    }
  }
  .no li, .kang li {
    flex: 0 0 13%;
    margin: 10px -10px;
    padding: 10px;
    transition: background-color 0.3s, transform 0.3s; /* 마우스 호버 효과 */
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  }
  
  .no li:hover, .kang li:hover {
    background-color: #9b43ff; /* 배경색 변경 */
    transform: scale(1.1); /* 크기 변환 */
  }

  .no li:hover {
    animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
  }
  
  
  .kang li:hover {
    animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
  }
  
  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .no li img, .kang li img {
    width: 100%;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3)); /* 그림자 효과 */
  }
  
  .deck-link {
    font-size: 27px;
    font-weight: 800;
    color: #9b43ff;
    text-decoration: none;
    transition: transform 0.3s; /* 텍스트 효과 */
  }
  
  .deck-link:hover {
    transform: translateY(-3px); /* 텍스트 위로 이동 */
  }
  @media (max-width:768px) {
    .deck__wrap {
      margin: 0 auto;
      text-align: center;
      .pak {
        text-align: center;
        img {
          width: 80%;
        }
      }
      .dackcv {
        margin: 40px;
       .deck-link{
        font-size:22px;
        font-weight:800;
        color:#9b43ff;
       
       }
  
       
      }
      .btn {
        display: none;
        text-align: center;
        margin-top: 20px;
        a {
          margin: 0 10px;
          padding: 20px 0;
          background: #ddd;
          font-size: 14px;
        }
      }
    }
    .no{
      margin-top:40px;
      max-width:1200px; 
      background:#f7f7f7;
      border:1px solid #ddd;
      margin:auto;
      padding:30px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap:wrap;
      li{
        flex:0 0 13%;
        margin:10px -10px;
        img{width:100%;}
       
      }
    }
    .kang{
      margin-top:40px;
      max-width:1200px; 
      background:#f7f7f7;
      border:1px solid #ddd;
      margin:auto;
      padding:30px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap:wrap;
      li{
        flex:0 0 13%;
        margin:10px -10px;
        img{width:100%;}
       
      }
    }
    .no li, .kang li {
      flex: 0 0 33.33%;
      margin: 10px -25px;
      padding: 10px;
      transition: background-color 0.3s, transform 0.3s; /* 마우스 호버 효과 */
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    }
    
    .no li:hover, .kang li:hover {
      background-color: #9b43ff; /* 배경색 변경 */
      transform: scale(1.1); /* 크기 변환 */
    }
  
    .no li:hover {
      animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
    }
    
    
    .kang li:hover {
      animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
    }
    
    @keyframes rotateAnimation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    .no li img, .kang li img {
      width: 100%;
      filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3)); /* 그림자 효과 */
    }
    
    .deck-link {
      font-size: 27px;
      font-weight: 800;
      color: #9b43ff;
      text-decoration: none;
      transition: transform 0.3s; /* 텍스트 효과 */
    }
    
    .deck-link:hover {
      transform: translateY(-3px); /* 텍스트 위로 이동 */
    }
}

@media (max-width:699px) {
  .no{
    margin-top:40px;
    max-width:1200px; 
    background:#f7f7f7;
    border:1px solid #ddd;
    margin:auto;
    padding:30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    li{
      flex:0 42.33%;
      margin:10px 1px;
      img{width:100%;}
     
    }
  }
  .kang{
    margin-top:40px;
    max-width:1200px; 
    background:#f7f7f7;
    border:1px solid #ddd;
    margin:auto;
    padding:30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    li{
      flex:0 0 42.33%;
      margin:10px 1px;
      img{width:100%;}
     
    }
  }
  .no li, .kang li {
    flex: 0 0 42.33%;
    margin: 10px 1px;
    padding: 10px;
    transition: background-color 0.3s, transform 0.3s; /* 마우스 호버 효과 */
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  }
  
  .no li:hover, .kang li:hover {
    background-color: #9b43ff; /* 배경색 변경 */
    transform: scale(1.1); /* 크기 변환 */
  }

  .no li:hover {
    animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
  }
  
  
  .kang li:hover {
    animation: rotateAnimation 0.5s infinite linear; /* 애니메이션 효과 */
  }
  
  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .no li img, .kang li img {
    width: 100%;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3)); /* 그림자 효과 */
  }
  
  .deck-link {
    font-size: 27px;
    font-weight: 800;
    color: #9b43ff;
    text-decoration: none;
    transition: transform 0.3s; /* 텍스트 효과 */
  }
  
  .deck-link:hover {
    transform: translateY(-3px); /* 텍스트 위로 이동 */
  }
}
}
}
}
`,c8=({post:t})=>{const e=ve(o=>o.members.user),n=ve(o=>o.boards.type),r=Mi(),i=o=>{o.preventDefault(),n==="관리자"?Os.child(t.key).remove():n==="유저"&&Ns.child(t.key).remove(),r("/boardList")},s=()=>t.subject==="노경현"?u.jsxs("ul",{className:"no",children:[u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S1W_001.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_024.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S9a_006.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_033.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S9a_006_m.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_042.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S9a_007_m.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_051.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S9a_068.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_052.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV4a_025.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5M_030.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV4a_055.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5M_036.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV4a_210.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5M_051.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV4a_236.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5M_052.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_012.png",alt:"노경현"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SVG_014.png",alt:"노경현"})})]}):t.subject==="강명수"?u.jsxs("ul",{className:"kang",children:[u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV4a_025.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5M_030.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV4a_055.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5M_036.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV4a_210.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5M_051.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV4a_236.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5M_052.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_012.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SVG_014.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S1W_001.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_024.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S9a_006.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_033.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S9a_006_m.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_042.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S9a_007_m.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_051.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/S9a_068.png",alt:"강명수"})}),u.jsx("li",{children:u.jsx("img",{src:"/assets/image/SV5K_052.png",alt:"강명수"})})]}):null;return u.jsx(l8,{children:u.jsxs("div",{className:"deck__wrap",children:[u.jsx("div",{className:"pak",children:u.jsx("img",{src:"/assets/image/dack2.jpg",alt:"","data-aos":"flip-left","data-aos-delay":"100","data-aos-duration":"500"})}),u.jsxs("div",{className:"dackcv",children:[u.jsx("td",{className:"deck-link",children:u.jsxs(Ee,{to:`/deck/${t.subject}`,state:{post:t},children:[t.subject,"선수 / 로스트존덱"]})}),s()]}),u.jsxs("div",{className:"btn",children:[e&&t.writer===e.userId&&u.jsxs(u.Fragment,{children:[u.jsx(Ee,{to:`/boardModify/${t.subject}`,state:{post:t},children:"수정"}),u.jsx("a",{href:"#",onClick:i,children:"삭제"})]}),u.jsx(Ee,{to:"/boardList",children:"목록"})]})]})})},u8=H.div`
.sub{
       border-bottom:2px solid #000;
       height:76px;
       margin-bottom:28px;
h2{
    font-size:35px;
    text-align:left;
    margin:50px 0;
    font-weight: 700;

    img{
        width:3%;
       
    }

    @media (max-width:768px) {
        font-size:22px;
        text-align:center;
        margin:60px 0;

        img{
            width:5%;
           
        }
    }

}
}
`,d8=()=>{const t=ar(),{post:e}=t.state;return u.jsxs(u8,{className:"row",children:[u.jsxs("div",{className:"sub",children:["   ",u.jsxs("h2",{children:[" ",u.jsx("img",{src:"/assets/image/sub-boll.png",alt:""}),"  2024 코리안리그 시즌3 덱 레시피 "]})]}),u.jsx(c8,{post:e})]})},f8=()=>{const t=ar();return E.useEffect(()=>{window.scrollTo(0,0)},[t.pathname]),u.jsx(l3,{children:u.jsxs(Ve,{path:"/",element:u.jsx(kL,{}),children:[u.jsx(Ve,{index:!0,element:u.jsx($z,{})}),u.jsx(Ve,{path:"/news",element:u.jsx($F,{})}),u.jsx(Ve,{path:"/product",element:u.jsx(Xz,{})}),u.jsx(Ve,{path:"/cart",element:u.jsx(tF,{})}),u.jsx(Ve,{path:"/search",element:u.jsx(MF,{})}),u.jsx(Ve,{path:"/event",element:u.jsx(xF,{})}),u.jsx(Ve,{path:"/login",element:u.jsx(iF,{})}),u.jsx(Ve,{path:"/join",element:u.jsx(aF,{})}),u.jsx(Ve,{path:"/memberModify",element:u.jsx(cF,{})}),u.jsx(Ve,{path:"/application",element:u.jsx(CF,{})}),u.jsx(Ve,{path:"/play",element:u.jsx(OF,{})}),u.jsx(Ve,{path:"/boardList",element:u.jsx(GF,{})}),u.jsx(Ve,{path:"/boardWrite",element:u.jsx(ZF,{})}),u.jsx(Ve,{path:"/boardModify/:subject",element:u.jsx(r8,{})}),u.jsx(Ve,{path:"/boardDetail/:subject",element:u.jsx(a8,{})}),u.jsx(Ve,{path:"/deck/:subject",element:u.jsx(d8,{})})]})})};kg.dispatch(VS());kg.dispatch(qS());Ef.createRoot(document.getElementById("root")).render(u.jsx(_t.StrictMode,{children:u.jsx(wR,{store:kg,children:u.jsx(g3,{children:u.jsx(f8,{})})})}));
