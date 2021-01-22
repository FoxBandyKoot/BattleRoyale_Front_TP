console.log('Hello from sw.js');


self.addEventListener("install", (event) => {
    console.log("Installing");
    event.waitUntil(console.log('Hello from sw.js'))
});

self.addEventListener("fetch", (event) => {
    event.respondWith(getResponse(event.request));
});