if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-59f4d326"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"App.js",revision:"aa461331669e03e15336f21f6a60926c"},{url:"App.scss",revision:"7d67f420a8e0ab9949ee47ec964418e8"},{url:"App.test.js",revision:"83ca979af0e840672a4aa673b0c7be01"},{url:"components/ForgotPasswordForm.js",revision:"1671e67b86b3b62ee1676645cc1fd87c"},{url:"components/Logout.js",revision:"bc5627f479b24a0a6645ea5941b5b74e"},{url:"components/Menu.js",revision:"43cf2efcfc071cc8b87ea54fab91cc44"},{url:"context/auth.js",revision:"5230fdbdfd97034f9a5a1373a6812151"},{url:"context/PrivateRoute.js",revision:"8de83b48c9a624ff75b29c85d96aef99"},{url:"data/data.json",revision:"eccea341b654cae99edb92af0d0e490a"},{url:"index.css",revision:"7386d27f653921d6b5c3b54e0cd9d67d"},{url:"index.js",revision:"3279a40d5f722c44aa2084aadf04ff93"},{url:"logo.svg",revision:"ee7cd8ed2dcec943251eb2763684fc6f"},{url:"observers/CreateGameStore.js",revision:"09c75234a6ff1fa7bb89191161afff42"},{url:"observers/SearchGameStore.js",revision:"698b03cb12470357877f1a9e93b671e9"},{url:"pages/Account.js",revision:"be86c698940ae563216a49f32fbca317"},{url:"pages/CreateGame.js",revision:"397844bc97558ba1b870dfc0f209677b"},{url:"pages/CurrentGames.js",revision:"d9b40afe2146b551df76b1d5d458ea24"},{url:"pages/Forgot-password.js",revision:"428cc8647514affa9e7494fa301371ad"},{url:"pages/Login.js",revision:"5b907990d669e05ab04ad02c2e1b930b"},{url:"pages/ModifyPassword.js",revision:"dee02cd5cb35b39829dc48b65aef15a1"},{url:"pages/SearchGame.js",revision:"952cfab293b459b7f3b40801129f7252"},{url:"pages/Signup.js",revision:"e161ed34efc2166b18babe0fb64d0cb5"},{url:"reportWebVitals.js",revision:"b528fd380de9b503eb5c84973639cca4"},{url:"scss/classic.scss",revision:"a3ad33bd37926765e4526bfb8338111b"},{url:"scss/inputs.scss",revision:"803b6b19ffd593b3297cb9aced0e8be0"},{url:"setupTests.js",revision:"72158175c4ba432ede32a7c2ca4143e0"}],{})}));
//# sourceMappingURL=sw.js.map
