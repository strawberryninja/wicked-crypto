"use strict";var precacheConfig=[["/wicked-crypto/index.html","6d0b492420bb70340bc4fcc7f56becc9"],["/wicked-crypto/static/css/main.441a9f15.css","8b2338a86ec3318f1fd96a99b3cfe41c"],["/wicked-crypto/static/js/main.e4b6257b.js","55f99884edf79729357ca3068dc1b7cc"],["/wicked-crypto/static/media/bitwage.10c194b4.png","10c194b4001325c38e48aa74539b99f6"],["/wicked-crypto/static/media/facebook-icon.cdd386d4.png","cdd386d40a054b505caee2a2e966aa40"],["/wicked-crypto/static/media/forbes.72a37ca6.png","72a37ca6de7bce06362d1d86e55ec0bc"],["/wicked-crypto/static/media/graphic-wizzard.9995601b.png","9995601b6672bc24f8736a90fd22a5ab"],["/wicked-crypto/static/media/meetup-icon.32ce95cd.png","32ce95cd7556fd1f83504a95c5655f28"],["/wicked-crypto/static/media/meetup-white.a2e16f3d.png","a2e16f3d2144d38b72c0a2fbdf6062a6"],["/wicked-crypto/static/media/paris.d09ed6eb.jpg","d09ed6eb6b2121fff22782c86fea214f"],["/wicked-crypto/static/media/przemek.29f8c70a.png","29f8c70a8db8519ada2219b4ffcbf3f3"],["/wicked-crypto/static/media/qr-code.6c6fab6e.png","6c6fab6ef24ecc7045abf671f3146daf"],["/wicked-crypto/static/media/sonia.fe045b0a.png","fe045b0a5bd78745e35e79dd46f50988"],["/wicked-crypto/static/media/spindle.77ce217a.png","77ce217a0791f5bfe307d53c00d6ccdf"],["/wicked-crypto/static/media/twitter-icon.59771e5f.png","59771e5fc6414b2f40f68daa28e0f714"],["/wicked-crypto/static/media/twitter-white.2dee48b5.png","2dee48b5fda8f0754e1c8c864d139241"],["/wicked-crypto/static/media/warsaw.05a78e74.jpg","05a78e7410f0fd5c8c2841ac684e0423"],["/wicked-crypto/static/media/web-dev.0545d300.png","0545d30020932f975272699e8eedf0ff"],["/wicked-crypto/static/media/wicked-logo.fe2004db.png","fe2004db3434bbad80df9fd2c567643d"],["/wicked-crypto/static/media/wicked-photo.e463f60f.png","e463f60fe08f4e72a69016294bcdf4d5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return c.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,c=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,a),e=urlsToCacheKeys.has(c));var n="/wicked-crypto/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});