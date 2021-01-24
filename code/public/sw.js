//importScripts('/cache-polyfill.js');
self.addEventListener('Installing', function (e) {
    e.waitUntil(caches.open('battle')
        .then(function (cache) {
            return cache.addAll(['/', '/index.html']);
        }));
});


self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(function (response) { return response || fetch(event.request); }));


});