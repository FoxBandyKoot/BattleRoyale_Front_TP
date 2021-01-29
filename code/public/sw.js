const FILE_CACHE_NAME = "files";
const FILE_CACHE_VERSION = "3";
const FILE_CACHE_HANDLE = `${FILE_CACHE_NAME}-${FILE_CACHE_VERSION}`;
const appShell = [
    "/login",


];

const cacheFiles = async() => {
    const fileCache = await caches.open(FILE_CACHE_HANDLE);
    await fileCache.addAll(appShell);
};
/*
const getResponse = async(req) => {
    const response = await caches.match(req);
    if (response) {
        return response;
    } else {
        return fetch(req);
    }
}*/
const clearUnusedCaches = async() => {
    const keys = await caches.keys();
    const promises = [];
    const cachesInUse = [FILE_CACHE_HANDLE];
    for (const key of keys) {
        if (!cachesInUse.includes(key)) {
            promises.push(caches.delete(key));
        }
    }
    await Promise.all(promises);
};
/*self.addEventListener('Installing', function(e) {
    e.waitUntil(caches.open('BattleRoyale')
        .then(function(cache) {
            return cache.addAll(appShell);
        }));
});
*/
self.addEventListener("install", (event) => {
    event.waitUntil(cacheFiles())
});
self.addEventListener("activate", (event) => {
    event.waitUntil(clearUnusedCaches());
})

self.addEventListener('fetch', function(event) {

    event.respondWith(caches.match(event.request).then(function(response) {
        if (response) {
            return response;
        }
        if (navigator.onLine) {
            return fetch(event.request).catch(error => caches.match("OFFLINE_PAGE_URL"));
        }
        return "caches.match()";
        // return response || fetch(event.request).catch(error => caches.match("OFFLINE_PAGE_URL"));
    }));

});

self.addEventListener('push', function(e) {
    var options = {
        body: 'It\'s your turn !',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
    };
    e.waitUntil(
        self.registration.showNotification('Battle-royal', options)
    );
});