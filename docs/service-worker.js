if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise(async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()})),r.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},r=(r,c)=>{Promise.all(r.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(r)};self.define=(r,i,s)=>{c[r]||(c[r]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return c;case"module":return n;default:return e(r)}})).then(e=>{const r=s(...e);return c.default||(c.default=r),c})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"eda2090b0e15bccd9bd10ea6d60176fc"},{url:"3a8ca398e6a5c3b83f4de7c60843a9a0.png",revision:"3a8ca398e6a5c3b83f4de7c60843a9a0"},{url:"icon.png",revision:"3a8ca398e6a5c3b83f4de7c60843a9a0"},{url:"main.98e27480ee3d5b8772cc.css",revision:"ebdaedab0c4e6413bc75b23ec4b5e321"},{url:"main.b09ab99c0fe0aec0c603.js",revision:"797db51ce942050b93b4406a4474a7eb"}],{})}));
