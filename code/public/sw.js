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
self.addEventListener('Installing', function(e) {
    e.waitUntil(caches.open('BattleRoyale')
        .then(function(cache) {
            return cache.addAll(appShell);
        }));
});


self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(function(response) { return response || fetch(event.request); }));


});
self.addEventListener('push', (event) => {
    const message = event.data.json();
    self.registration.showNotification(message.battle, { body: "The app has barked at you!", icon: "./icons/maskable_icon_x1.png", badge: "/assets/logo.svg", actions: [{ "action": "action1", "title": "Action 1" }, { "action": "action2", "title": "Action 2" }] });
});

self.addEventListener("notificationclick", (event) => {
    event.preventDefault();
    event.notification.close();
    if (event.action) {
        event.waitUntil(self.clients.openWindow(`/?origin=${event.action}`));
    } else {
        event.waitUntil(self.clients.openWindow("/?origin=noaction"));
    }

});