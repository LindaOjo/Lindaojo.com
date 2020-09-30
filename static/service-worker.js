!function(){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class r extends n{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class a{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:r}=this.findMatchingRoute({url:s,request:e,event:t});let a,o=r&&r.handler;if(!o&&this._defaultHandler&&(o=this._defaultHandler),o){try{a=o.handle({url:s,request:e,event:t,params:n})}catch(e){a=Promise.reject(e)}return a instanceof Promise&&this._catchHandler&&(a=a.catch((n=>this._catchHandler.handle({url:s,request:e,event:t})))),a}}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const r of n){let n;const a=r.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=s(e)}setCatchHandler(e){this._catchHandler=s(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let o;const i=()=>(o||(o=new a,o.addFetchListener(),o.addCacheListener()),o);function c(e,s,a){let o;if("string"==typeof e){const t=new URL(e,location.href);o=new n((({url:e})=>e.href===t.href),s,a)}else if(e instanceof RegExp)o=new r(e,s,a);else if("function"==typeof e)o=new n(e,s,a);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});o=e}return i().registerRoute(o),o}const l={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[l.prefix,e,l.suffix].filter((e=>e&&e.length>0)).join("-"),h=e=>e||u(l.runtime),p=new Set;const f=(e,t)=>e.filter((e=>t in e)),d=async({request:e,mode:t,plugins:s=[]})=>{const n=f(s,"cacheKeyWillBeUsed");let r=e;for(const e of n)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},w=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:r=[]})=>{const a=await self.caches.open(e),o=await d({plugins:r,request:t,mode:"read"});let i=await a.match(o,n);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;i=await r.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:i,request:o})}return i},g=async({cacheName:e,request:s,response:n,event:r,plugins:a=[],matchOptions:o})=>{const i=await d({plugins:a,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:(c=i.url,new URL(String(c),location.href).href.replace(new RegExp("^"+location.origin),""))});var c;const l=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let r=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(r=await n.call(t,{request:e,response:r,event:s}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:r,plugins:a,response:n,request:i});if(!l)return;const u=await self.caches.open(e),h=f(a,"cacheDidUpdate"),g=h.length>0?await w({cacheName:e,matchOptions:o,request:i}):null;try{await u.put(i,l)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of p)await e()}(),e}for(const t of h)await t.cacheDidUpdate.call(t,{cacheName:e,event:r,oldResponse:g,newResponse:l,request:i})},m=w,v=async({request:e,fetchOptions:s,event:n,plugins:r=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const a=f(r,"fetchDidFail"),o=a.length>0?e.clone():null;try{for(const t of r)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const i=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of r)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:i,response:t}));return t}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:o.clone(),request:i.clone()});throw e}};try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}const y={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};const q={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(q))for(const e of t);try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}self.addEventListener("activate",(()=>self.clients.claim())),self.addEventListener("install",(()=>self.skipWaiting()));var R=new class{constructor(e={}){if(this._cacheName=h(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some((e=>!!e.cacheWillUpdate));this._plugins=t?e.plugins:[y,...e.plugins]}else this._plugins=[y];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:s}){"string"==typeof s&&(s=new Request(s));const n=this._getFromNetwork({request:s,event:e});let r,a=await m({cacheName:this._cacheName,request:s,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(a){if(e)try{e.waitUntil(n)}catch(r){}}else try{a=await n}catch(e){r=e}if(!a)throw new t("no-response",{url:s.url,error:r});return a}async _getFromNetwork({request:e,event:t}){const s=await v({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=g({cacheName:this._cacheName,request:e,response:s.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(n)}catch(e){}return s}}({cacheName:"swr-v1"});c((function(e){var t=e.url;return"/assets/js/service-worker.js"!==t.pathname&&"/service-worker.js"!==t.pathname&&"/"===t.pathname}),R),c((function(e){var t=e.url;return"/assets/js/service-worker.js"!==t.pathname&&"/service-worker.js"!==t.pathname&&"/contact"===t.pathname}),R),c((function(e){var t=e.url;return"/assets/js/service-worker.js"!==t.pathname&&"/service-worker.js"!==t.pathname&&"/blog"===t.pathname}),R),c((function(e){var t=e.request,s=e.url;return"/assets/js/service-worker.js"!==s.pathname&&"/service-worker.js"!==s.pathname&&["document","script","style","image"].includes(t.destination)}),R)}();
