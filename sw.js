if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-81b571e3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"asset-manifest.json",revision:"3cce0347473240304352498f4a724616"},{url:"icons/maskable_icon_x1.png",revision:"5224121eb5cde5be10ef49938d28f971"},{url:"icons/maskable_icon_x128.png",revision:"a081116f4d5bb695e65bc7798b12f97e"},{url:"icons/maskable_icon_x144.png",revision:"495b44a4ad705f819961d0a2ff09fffa"},{url:"icons/maskable_icon_x152.png",revision:"67d4c11516fadf060c409e690ba4636b"},{url:"icons/maskable_icon_x384.png",revision:"16a55fb712018d296a2bacde943a510b"},{url:"icons/maskable_icon_x512.png",revision:"41ec8fb0e72b3bc5261bf83a3e327b65"},{url:"icons/maskable_icon_x72.png",revision:"e8690b0cd5abee8aebcfc3db4e963714"},{url:"icons/maskable_icon_x96.png",revision:"b45de35ad55dcb125c49732c24cc4667"},{url:"maskable_icon_x1.png",revision:"5224121eb5cde5be10ef49938d28f971"},{url:"static/css/2.3613e071.chunk.css",revision:"787d55e962d0f9386bf9833cd08e0579"},{url:"static/css/main.82f381bb.chunk.css",revision:"4f60aa228a50973f06e497b994958c10"},{url:"static/js/2.9474503b.chunk.js",revision:"598be3195364578d63d3cb6132879a43"},{url:"static/js/main.5af0591c.chunk.js",revision:"1225508e6826c23eb894d42b6e3d6fd2"},{url:"static/js/runtime-main.02cc3544.js",revision:"e85adde2f529594bab44406cde2f1235"}],{})}));
//# sourceMappingURL=sw.js.map
