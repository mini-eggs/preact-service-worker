!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var n=t.slice(1),r=e[t[0]];return function(e,t,o){r.apply(this,[e,t,o].concat(n))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,n){n(10),e.exports=n(5)},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,t){if(t)for(var n in t)void 0!==t[n]&&(e[n]=t[n]);return e}function r(e){return n({},e)}function o(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function i(e,t){return[].slice.call(e,t)}function s(e){return"function"==typeof e}function a(e){return"string"==typeof e}function u(e){return void 0===e||null===e}function c(e){return e===!1||u(e)}function f(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function l(e,n,r){var o,i,u,p=arguments.length;if(p>2){var d=typeof r;if(3===p&&"object"!==d&&"function"!==d)c(r)||(o=[String(r)]);else{o=[];for(var h=2;h<p;h++){var y=arguments[h];if(!c(y)){y.join?i=y:(i=Y)[0]=y;for(var m=0;m<i.length;m++){var v=i[m],b=!(c(v)||s(v)||v instanceof t);b&&!a(v)&&(v=String(v)),b&&u?o[o.length-1]+=v:c(v)||(o.push(v),u=b)}}}}}else if(n&&n.children)return l(e,n,n.children);n&&(n.children&&delete n.children,s(e)||("className"in n&&(n.class=n.className,delete n.className),u=n.class,u&&!a(u)&&(n.class=f(u))));var _=new t(e,n||void 0,o);return $.vnode&&$.vnode(_),_}function p(e,t){return l(e.nodeName,n(r(e.attributes),t),arguments.length>2?i(arguments,2):e.children)}function d(e,t,n){var r=t.split("."),i=r[0];return function(t){var c,f,l,p=t&&t.currentTarget||this,d=e.state,h=d;if(a(n)?(f=o(t,n),u(f)&&(p=p._component)&&(f=o(p,n))):f=p.nodeName?(p.nodeName+p.type).match(/^input(check|rad)/i)?p.checked:p.value:t,s(f)&&(f=f.call(p)),r.length>1){for(l=0;l<r.length-1;l++)h=h[r[l]]||(h[r[l]]={});h[r[l]]=f,f=d[i]}e.setState((c={},c[i]=f,c))}}function h(e){1===ne.push(e)&&($.debounceRendering||Q)(y)}function y(){if(ne.length){var e,t=ne;for(ne=re,re=t;e=t.pop();)e._dirty&&q(e)}}function m(e){var t=e&&e.nodeName;return t&&s(t)&&!(t.prototype&&t.prototype.render)}function v(e,t){return e.nodeName(O(e),t||Z)}function b(e,t){return e[ee]||(e[ee]=t||{})}function _(e){return e instanceof Text?3:e instanceof Element?1:0}function w(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n,r,o){if(b(e)[t]=n,"key"!==t&&"children"!==t&&"innerHTML"!==t)if("class"!==t||o)if("style"===t){if((!n||a(n)||a(r))&&(e.style.cssText=n||""),n&&"object"==typeof n){if(!a(r))for(var i in r)i in n||(e.style[i]="");for(var i in n)e.style[i]="number"!=typeof n[i]||te[i]?n[i]:n[i]+"px"}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html);else if(t.match(/^on/i)){var f=e._listeners||(e._listeners={});t=J(t.substring(2)),n?f[t]||e.addEventListener(t,T):f[t]&&e.removeEventListener(t,T),f[t]=n}else if("type"!==t&&!o&&t in e)x(e,t,u(n)?"":n),c(n)&&e.removeAttribute(t);else{var l=o&&t.match(/^xlink\:?(.+)/);c(n)?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",J(l[1])):e.removeAttribute(t):"object"==typeof n||s(n)||(l?e.setAttributeNS("http://www.w3.org/1999/xlink",J(l[1]),n):e.setAttribute(t,n))}else e.className=n||""}function x(e,t,n){try{e[t]=n}catch(r){}}function T(e){return this._listeners[e.type]($.event&&$.event(e)||e)}function P(e){for(var t={},n=e.attributes.length;n--;)t[e.attributes[n].name]=e.attributes[n].value;return t}function N(e,t){return a(t)?3===_(e):a(t.nodeName)?E(e,t.nodeName):s(t.nodeName)?e._componentConstructor===t.nodeName||m(t):void 0}function E(e,t){return e.normalizedNodeName===t||J(e.nodeName)===J(t)}function O(e){var t=e.nodeName.defaultProps,o=r(t||e.attributes);return t&&n(o,e.attributes),e.children&&(o.children=e.children),o}function j(e){k(e);var t=J(e.nodeName),n=oe[t];n?n.push(e):oe[t]=[e]}function C(e,t){var n=J(e),r=oe[n]&&oe[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return b(r),r.normalizedNodeName=n,r}function k(e){w(e),1===_(e)&&(b(e,P(e)),e._component=e._componentConstructor=null)}function S(){for(var e;e=ie.pop();)e.componentDidMount&&e.componentDidMount()}function R(e,t,n,r,o,i,s){se++;var a=U(e,t,n,r,i);return o&&a.parentNode!==o&&o.insertBefore(a,s||null),--se||S(),a}function U(e,t,n,r,o){for(var i=t&&t.attributes;m(t);)t=v(t,n);if(u(t)&&(t="",o)){if(e){if(8===e.nodeType)return e;j(e)}return document.createComment(t)}if(a(t)){if(e){if(3===_(e)&&e.parentNode)return e.nodeValue=t,e;j(e)}return document.createTextNode(t)}var c,f=e,l=t.nodeName;if(s(l))return W(e,t,n,r);if(a(l)||(l=String(l)),c="svg"===J(l),c&&(ae=!0),e){if(!E(e,l)){for(f=C(l,ae);e.firstChild;)f.appendChild(e.firstChild);A(e)}}else f=C(l,ae);return t.children&&1===t.children.length&&"string"==typeof t.children[0]&&1===f.childNodes.length&&f.firstChild instanceof Text?f.firstChild.nodeValue=t.children[0]:(t.children||f.firstChild)&&B(f,t.children,n,r),D(f,t.attributes),i&&i.ref&&(f[ee].ref=i.ref)(f),c&&(ae=!1),f}function B(e,t,n,r){var o,i,s,a,c=e.childNodes,f=[],l={},p=0,d=0,h=c.length,y=0,m=t&&t.length;if(h)for(var v=0;v<h;v++){var b=c[v],_=m?(i=b._component)?i.__key:(i=b[ee])?i.key:null:null;_||0===_?(p++,l[_]=b):f[y++]=b}if(m)for(var v=0;v<m;v++){if(s=t[v],a=null,p&&s.attributes){var _=s.key;!u(_)&&_ in l&&(a=l[_],l[_]=void 0,p--)}if(!a&&d<y)for(o=d;o<y;o++)if(i=f[o],i&&N(i,s)){a=i,f[o]=void 0,o===y-1&&y--,o===d&&d++;break}a=U(a,s,n,r),a!==c[v]&&e.insertBefore(a,c[v]||null)}if(p)for(var v in l)l[v]&&(f[d=y++]=l[v]);d<y&&I(f)}function I(e,t){for(var n=e.length;n--;){var r=e[n];r&&A(r,t)}}function A(e,t){var n=e._component;n?G(n,!t):(e[ee]&&e[ee].ref&&e[ee].ref(null),t||j(e),e.childNodes&&e.childNodes.length&&I(e.childNodes,t))}function D(e,t){var n=e[ee]||P(e);for(var r in n)t&&r in t||g(e,r,null,n[r],ae);if(t)for(var o in t)o in n&&t[o]==n[o]&&("value"!==o&&"checked"!==o||t[o]==e[o])||g(e,o,t[o],n[o],ae)}function F(e){var t=e.constructor.name,n=ue[t];n?n.push(e):ue[t]=[e]}function H(e,t,n){var r=new e(t,n),o=ue[e.name];if(r.props=t,r.context=n,o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function L(e){e._dirty||(e._dirty=!0,h(e))}function M(e,t,n,r,o){var i=e.base;e._disableRendering||(e._disableRendering=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,u(i)||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disableRendering=!1,0!==n&&(1!==n&&$.syncComponentUpdates===!1&&i?L(e):q(e,1,o)),e.__ref&&e.__ref(e))}function q(e,t,o){if(!e._disableRendering){var i,a,u=e.props,c=e.state,f=e.context,l=e.prevProps||u,p=e.prevState||c,d=e.prevContext||f,h=e.base,y=h||e.nextBase,b=y&&y.parentNode,_=y&&y._component,w=e._component;if(h&&(e.props=l,e.state=p,e.context=d,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(u,c,f)===!1?i=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,f),e.props=u,e.state=c,e.context=f),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!i){for(e.render&&(a=e.render(u,c,f)),e.getChildContext&&(f=n(r(f),e.getChildContext()));m(a);)a=v(a,f);var g,x,T=a&&a.nodeName;if(s(T)&&T.prototype.render){var P=w,N=O(a);P&&P.constructor===T?M(P,N,1,f):(g=P,P=H(T,N,f),P._parentComponent=e,e._component=P,M(P,N,0,f),q(P,1)),x=P.base}else{var E=y;g=w,g&&(E=e._component=null),(y||1===t)&&(E&&(E._component=null),x=R(E,a,f,o||!h,b,!0,y&&y.nextSibling))}if(y&&x!==y&&(g||_!==e||w||!y.parentNode||(y._component=null,A(y))),g&&G(g,!0),e.base=x,x){for(var j=e,C=e;C=C._parentComponent;)j=C;x._component=j,x._componentConstructor=j.constructor}}!h||o?(ie.unshift(e),se||S()):!i&&e.componentDidUpdate&&e.componentDidUpdate(l,p,d);var k,U=e._renderCallbacks;if(U)for(;k=U.pop();)k.call(e);return a}}function W(e,t,n,r){for(var o=e&&e._component,i=e,s=o&&e._componentConstructor===t.nodeName,a=s,u=O(t);o&&!a&&(o=o._parentComponent);)a=o.constructor===t.nodeName;return!a||r&&!o._component?(o&&!s&&(G(o,!0),e=i=null),o=H(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e),M(o,u,1,n,r),e=o.base,i&&e!==i&&(i._component=null,A(i))):(M(o,u,3,n,r),e=o.base),e}function G(e,t){var n=e.base;e._disableRendering=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?G(r,t):n&&(n[ee]&&n[ee].ref&&n[ee].ref(null),e.nextBase=n,t&&(w(n),F(e)),I(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function z(e,t){this._dirty=!0,this._disableRendering=!1,this.prevState=this.prevProps=this.prevContext=this.base=this.nextBase=this._parentComponent=this._component=this.__ref=this.__key=this._linkedStates=this._renderCallbacks=null,this.context=t,this.props=e,this.state=this.getInitialState&&this.getInitialState()||{}}function X(e,t,n){return R(n,e,{},!1,t)}var V={},J=function(e){return V[e]||(V[e]=e.toLowerCase())},K="undefined"!=typeof Promise&&Promise.resolve(),Q=K?function(e){K.then(e)}:setTimeout,$={vnode:u},Y=[],Z={},ee="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",te={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},ne=[],re=[],oe={},ie=[],se=0,ae=!1,ue={};n(z.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={}),r=e+"|"+t;return n[r]||(n[r]=d(this,e,t))},setState:function(e,t){var o=this.state;this.prevState||(this.prevState=r(o)),n(o,s(e)?e(o,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),L(this)},forceUpdate:function(){q(this,2)},render:function(){return null}}),e.h=l,e.cloneElement=p,e.Component=z,e.render=X,e.rerender=y,e.options=$})},function(e,t,n){"use strict";function r(){}function o(e){try{return e.then}catch(t){return v=t,b}}function i(e,t){try{return e(t)}catch(n){return v=n,b}}function s(e,t,n){try{e(t,n)}catch(r){return v=r,b}}function a(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._45=0,this._81=0,this._65=null,this._54=null,e!==r&&y(e,this)}function u(e,t,n){return new e.constructor(function(o,i){var s=new a(r);s.then(o,i),c(e,new h(t,n,s))})}function c(e,t){for(;3===e._81;)e=e._65;return a._10&&a._10(e),0===e._81?0===e._45?(e._45=1,void(e._54=t)):1===e._45?(e._45=2,void(e._54=[e._54,t])):void e._54.push(t):void f(e,t)}function f(e,t){m(function(){var n=1===e._81?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._81?l(t.promise,e._65):p(t.promise,e._65));var r=i(n,e._65);r===b?p(t.promise,v):l(t.promise,r)})}function l(e,t){if(t===e)return p(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var n=o(t);if(n===b)return p(e,v);if(n===e.then&&t instanceof a)return e._81=3,e._65=t,void d(e);if("function"==typeof n)return void y(n.bind(t),e)}e._81=1,e._65=t,d(e)}function p(e,t){e._81=2,e._65=t,a._97&&a._97(e,t),d(e)}function d(e){if(1===e._45&&(c(e,e._54),e._54=null),2===e._45){for(var t=0;t<e._54.length;t++)c(e,e._54[t]);e._54=null}}function h(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function y(e,t){var n=!1,r=s(e,function(e){n||(n=!0,l(t,e))},function(e){n||(n=!0,p(t,e))});n||r!==b||(n=!0,p(t,v))}var m=n(3),v=null,b={};e.exports=a,a._10=null,a._97=null,a._61=r,a.prototype.then=function(e,t){if(this.constructor!==a)return u(this,e,t);var n=new a(r);return c(this,new h(e,t,n)),n}},function(e,t){(function(t){"use strict";function n(e){a.length||(s(),u=!0),a[a.length]=e}function r(){for(;c<a.length;){var e=c;if(c+=1,a[e].call(),c>f){for(var t=0,n=a.length-c;t<n;t++)a[t]=a[t+c];a.length-=c,c=0}}a.length=0,c=0,u=!1}function o(e){var t=1,n=new p(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}function i(e){return function(){function t(){clearTimeout(n),clearInterval(r),e()}var n=setTimeout(t,0),r=setInterval(t,50)}}e.exports=n;var s,a=[],u=!1,c=0,f=1024,l="undefined"!=typeof t?t:self,p=l.MutationObserver||l.WebKitMutationObserver;s="function"==typeof p?o(r):i(r),n.requestFlush=s,n.makeRequestCallFromTimer=i}).call(t,function(){return this}())},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=n(8),f=r(c);n(6);var l=(0,u.h)("div",{className:"App"},(0,u.h)("div",{className:"App-header"},(0,u.h)("img",{src:f.default,className:"App-logo",alt:"logo"}),(0,u.h)("h2",null,"Welcome to the Preact w/ Service Worker Quickstart")),(0,u.h)("p",{className:"App-intro"},"To get started, edit ",(0,u.h)("code",null,"src/App.js")," and save to reload.")),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){return l}}]),t}(u.Component);t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=n(4),s=r(i);n(7),(0,o.render)((0,o.h)(s.default,null),document.getElementById("root"))},function(e,t){},6,function(e,t,n){e.exports=n.p+"preact-service-worker/static/media/logo.5d5d9eef.svg"},function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}}var o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,s,a=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var c in r)o.call(r,c)&&(a[c]=r[c]);if(Object.getOwnPropertySymbols){s=Object.getOwnPropertySymbols(r);for(var f=0;f<s.length;f++)i.call(r,s[f])&&(a[s[f]]=r[s[f]])}}return a}},function(e,t,n){"undefined"==typeof Promise&&(n(12).enable(),window.Promise=n(11)),n(13),Object.assign=n(9)},function(e,t,n){"use strict";function r(e){var t=new o(o._61);return t._81=1,t._65=e,t}var o=n(2);e.exports=o;var i=r(!0),s=r(!1),a=r(null),u=r(void 0),c=r(0),f=r("");o.resolve=function(e){if(e instanceof o)return e;if(null===e)return a;if(void 0===e)return u;if(e===!0)return i;if(e===!1)return s;if(0===e)return c;if(""===e)return f;if("object"==typeof e||"function"==typeof e)try{var t=e.then;if("function"==typeof t)return new o(t.bind(e))}catch(n){return new o(function(e,t){t(n)})}return r(e)},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(s,a){if(a&&("object"==typeof a||"function"==typeof a)){if(a instanceof o&&a.then===o.prototype.then){for(;3===a._81;)a=a._65;return 1===a._81?r(s,a._65):(2===a._81&&n(a._65),void a.then(function(e){r(s,e)},n))}var u=a.then;if("function"==typeof u){var c=new o(u.bind(a));return void c.then(function(e){r(s,e)},n)}}t[s]=a,0===--i&&e(t)}if(0===t.length)return e([]);for(var i=t.length,s=0;s<t.length;s++)r(s,t[s])})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){e.forEach(function(e){o.resolve(e).then(t,n)})})},o.prototype.catch=function(e){return this.then(null,e)}},function(e,t,n){"use strict";function r(){c=!1,a._10=null,a._97=null}function o(e){function t(t){(e.allRejections||s(l[t].error,e.whitelist||u))&&(l[t].displayId=f++,e.onUnhandled?(l[t].logged=!0,e.onUnhandled(l[t].displayId,l[t].error)):(l[t].logged=!0,i(l[t].displayId,l[t].error)))}function n(t){l[t].logged&&(e.onHandled?e.onHandled(l[t].displayId,l[t].error):l[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+l[t].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+l[t].displayId+".")))}e=e||{},c&&r(),c=!0;var o=0,f=0,l={};a._10=function(e){2===e._81&&l[e._72]&&(l[e._72].logged?n(e._72):clearTimeout(l[e._72].timeout),delete l[e._72])},a._97=function(e,n){0===e._45&&(e._72=o++,l[e._72]={displayId:null,error:n,timeout:setTimeout(t.bind(null,e._72),s(n,u)?100:2e3),logged:!1})}}function i(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):");var n=(t&&(t.stack||t))+"";n.split("\n").forEach(function(e){console.warn("  "+e)})}function s(e,t){return t.some(function(t){return e instanceof t})}var a=n(2),u=[ReferenceError,TypeError,RangeError],c=!1;t.disable=r,t.enable=o},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return y.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function s(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function a(e){var t=new FileReader;return t.readAsArrayBuffer(e),s(t)}function u(e){var t=new FileReader;return t.readAsText(e),s(t)}function c(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(y.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(y.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(e){if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob?(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var e=i(this);return e?e:Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e){var t=e.toUpperCase();return m.indexOf(t)>-1?t:e}function l(e,t){t=t||{};var n=t.body;if(l.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=f(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function d(e){var t=new o,n=(e.getAllResponseHeaders()||"").trim().split("\n");return n.forEach(function(e){var n=e.trim().split(":"),r=n.shift().trim(),o=n.join(":").trim();t.append(r,o)}),t}function h(e,t){t||(t={}),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof o?t.headers:new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var y={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];o||(o=[],this.map[e]=o),o.push(r)},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){var n=this.map[t(e)];return n?n[0]:null},o.prototype.getAll=function(e){return this.map[t(e)]||[]},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=[n(r)]},o.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){e.call(t,r,n,this)},this)},this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},y.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this)},c.call(l.prototype),c.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var v=[301,302,303,307,308];h.redirect=function(e,t){if(v.indexOf(t)===-1)throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=l,e.Response=h,e.fetch=function(e,t){return new Promise(function(n,r){function o(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var i;i=l.prototype.isPrototypeOf(e)&&!t?e:new l(e,t);var s=new XMLHttpRequest;s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:d(s),url:o()},t="response"in s?s.response:s.responseText;n(new h(t,e))},s.onerror=function(){r(new TypeError("Network request failed"))},s.ontimeout=function(){r(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&y.blob&&(s.responseType="blob"),i.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),s.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}]));
//# sourceMappingURL=main.46c27405.js.map