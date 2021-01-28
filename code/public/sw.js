const FILE_CACHE_NAME = "files";
const FILE_CACHE_VERSION = "3";
const FILE_CACHE_HANDLE = `${FILE_CACHE_NAME}-${FILE_CACHE_VERSION}`;
const appShell = [
    '/',
    '/index.html',
    '/icons/maskable_icon_x1.png',
    '../src/index.js',
    '../src/index.css',
    '../src/App.js',
    '../src/App.scss',
    '../src/pages/login.js',
    '../src/pages/Account.js',
    '../src/pages/CreateGames.js',
    '../src/pages/Forgot-password.js',
    '../src/pages/ModifyPassword.js',
    '../src/pages/SeachGame.js',
    '../src/pages/Signup.js',
    '../src/scss/classic.scss',
    '../src/scss/inputs.scss',
    '../src/components/Logout.js',
    '../src/components/Menu.js',
    '../src/context/auth.js',
    '../src/context/PrivateRoute.js',
    '../src/observers/CreateGameStore.js',
    '../src/observers/SearchGameStore.js',

];
const cacheFiles = async() => {
    const fileCache = await caches.open(FILE_CACHE_HANDLE);
    await fileCache.addAll(appShell);
};
const getResponse = async(req) => {
    if (!navigator.onLine && req.url === "http://localhost:3000/login") {
        const responseBody = { status: "success" };
        return new Response(JSON.stringify(responseBody));
    }
    const response = await caches.match(req);
    console.log(response);
    console.log("offline")
    if (response) {
        return response;
    } else {
        return fetch(req);
    }
}
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
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(function(response) { return response || fetch(event.request); }));


});