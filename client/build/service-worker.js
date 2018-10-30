"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","8b52cc19973854aa2849ac777f321b03"],["/static/css/main.c9c6f2d4.css","f73253358a77f11a67894600008e2e61"],["/static/js/main.09fb112f.js","e29603bd609fc12e29f75fe665d03f31"],["/static/media/burgereater.cdee944c.jpg","cdee944c39906aff4326608b52c1776b"],["/static/media/expressjs.d638bd34.png","d638bd34b425dec39792d4a81189eddf"],["/static/media/hangman.b380af4c.jpg","b380af4c23f7f5c66f61a6a597698f97"],["/static/media/jobcards.ef34415e.jpg","ef34415efca72f617a68b98c9390f08c"],["/static/media/jquery.a3af0655.png","a3af0655fc9a481401550b5be0e86cab"],["/static/media/me.ea7b86bb.png","ea7b86bbe0212769066d35937c13aa24"],["/static/media/memorygame.0b71d031.jpg","0b71d031e5f3d73bd6637077c042ba8a"],["/static/media/mongodb.3851cc04.png","3851cc047b9284b97c521cc1a7d8a512"],["/static/media/nodejs.d42672d4.png","d42672d4d185739d26257ed5c653c740"],["/static/media/weatherstyle.b2ff7a89.jpg","b2ff7a89c6ab8130faaa278b4824d68e"],["/static/media/webventeer.d91f815a.jpg","d91f815abdaa5f6b4ddf2e807314e038"],["/static/media/what2wear.c40a8e84.jpg","c40a8e843a0e09de2967d092cd674962"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});