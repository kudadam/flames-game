import { build, files, version } from '$service-worker';

const ASSETS = build.concat(files);
const CACHE = `CACHE-${version}`;
const DYNAMIC_CACHE = `DYNAMIC-CACHE-${version}`;
console.log(ASSETS);
self.addEventListener("install", event=>{
    self.skipWaiting();
    console.log("[service worker] installing");
    event.waitUntil(
        caches.open(CACHE)
        .then(cache=>{
            cache.addAll(ASSETS);
        })
    )
})

self.addEventListener("activate", event =>{
    event.waitUntil(
        caches.keys()
        .then(keys=>{
            keys.filter(key => key !== CACHE && key !== DYNAMIC_CACHE)
            .map(key => caches.delete(key))
        })
    )
    console.log("[service worker] activated");
    return self.clients.claim();
});

self.addEventListener("fetch", event=>{
    if (event.request.method !== "GET" || event.request.headers.has("range"))
        return;

    try {
        return caches.match(event.request)
        .then(cacheResponse=>{
            if (cacheResponse)
                return cacheResponse
            return fetch(event.request)
            .then(fetchResponse=>{
                if (fetchResponse){
                    let cachedFetchedResponse = fetchResponse.clone();
                    caches.open(DYNAMIC_CACHE)
                    .then(cache=>{
                        cache.put(event.request, cachedFetchedResponse);
                    });
                    return fetchResponse;
                }
            })
        })
    } catch (err) {
        return 
    }

})