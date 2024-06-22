/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0ee298457735daa7ce31faf963adc9e2"
  },
  {
    "url": "assets/css/0.styles.6f25b17e.css",
    "revision": "af6f0be3bdb6c33ef55456b77f0239e0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4c6021ea.js",
    "revision": "dff13b5ca06d3fbaa6d30bf62e900523"
  },
  {
    "url": "assets/js/10.5c917925.js",
    "revision": "553adb9a052e0db4808e53a3bc8449b4"
  },
  {
    "url": "assets/js/11.1892ff75.js",
    "revision": "feeeabbadced45a6c3a2e0a15372ba49"
  },
  {
    "url": "assets/js/12.c87e8553.js",
    "revision": "cddb84f975bf62fbe8fde65455815e57"
  },
  {
    "url": "assets/js/13.0bc7a252.js",
    "revision": "ae10ab03b0473e91ff750b89f1427b08"
  },
  {
    "url": "assets/js/14.69302f64.js",
    "revision": "1e13bb04e232d7cbc395f72a747db9b0"
  },
  {
    "url": "assets/js/15.83f3456b.js",
    "revision": "1083bdaa60a0aad25c1d8a56a139ef50"
  },
  {
    "url": "assets/js/16.8e859efe.js",
    "revision": "b4c41e7fddb91b76ac6ad3b73de5a9ca"
  },
  {
    "url": "assets/js/17.86819af8.js",
    "revision": "ce8be007a358549ce057c907c570e740"
  },
  {
    "url": "assets/js/18.e21bcf54.js",
    "revision": "a1bb98320373a3bf24828f58e546ccdd"
  },
  {
    "url": "assets/js/19.aefb35c1.js",
    "revision": "a9e22a657fdd3ace564caa825c7bfb2b"
  },
  {
    "url": "assets/js/2.cec2e642.js",
    "revision": "676513dcc16b27bd94e64d502e13e6d9"
  },
  {
    "url": "assets/js/20.e698c6e5.js",
    "revision": "95bbbf76e4e8941f349049552b25b63e"
  },
  {
    "url": "assets/js/21.cd9bbb59.js",
    "revision": "04d86e9ea1b14e7bed9a21edfd0d7212"
  },
  {
    "url": "assets/js/22.a9e85ac1.js",
    "revision": "86d87542157ca225e04b4ba0a3695fa9"
  },
  {
    "url": "assets/js/23.c44118a2.js",
    "revision": "2ae4b87c2aba30022cda6eb93deb0eb5"
  },
  {
    "url": "assets/js/24.412a072a.js",
    "revision": "84a1a5818eafcbc9ba9f8674ac1220e9"
  },
  {
    "url": "assets/js/25.d12ea22f.js",
    "revision": "ab5b5debe68ec003337951a1512e12b1"
  },
  {
    "url": "assets/js/26.5a0e963a.js",
    "revision": "a8f00192010c1882c22ea295e9db716d"
  },
  {
    "url": "assets/js/27.83ff90a6.js",
    "revision": "e0d4612205b056687a10787b59d4f865"
  },
  {
    "url": "assets/js/28.d894e2f1.js",
    "revision": "73e09c1a1bd7234e3c74405972c3ffa3"
  },
  {
    "url": "assets/js/29.1b24cec9.js",
    "revision": "c7d1ea40df4bc654c3a85de47a687b10"
  },
  {
    "url": "assets/js/3.e883c01a.js",
    "revision": "1d0133839c158a54af56c1fcca7c9cb7"
  },
  {
    "url": "assets/js/30.50f79578.js",
    "revision": "f91ae9b7021996d4823e7229428b8ddf"
  },
  {
    "url": "assets/js/31.109c66ab.js",
    "revision": "2d9e5a982711d77182a85d41a14670e3"
  },
  {
    "url": "assets/js/4.33b55c48.js",
    "revision": "6972f058ecea22c860e6237f0130b633"
  },
  {
    "url": "assets/js/5.522713a2.js",
    "revision": "26072b7c3b606cfa26ea494fb3302bc1"
  },
  {
    "url": "assets/js/6.458e58a4.js",
    "revision": "0f0cc704169b55f0622186858277bf59"
  },
  {
    "url": "assets/js/7.2493ba3a.js",
    "revision": "b40340533de1c12731239fa3e543170c"
  },
  {
    "url": "assets/js/app.525bb3fc.js",
    "revision": "b4c2795db3fa96b0aac2bc289b3763bd"
  },
  {
    "url": "assets/js/vendors~docsearch.e8a5b9f6.js",
    "revision": "da7c5bb2fcc24cbd05b612f365de94ed"
  },
  {
    "url": "content-001-Soft/index.html",
    "revision": "d10aef651eb6b33baf1a40c38d97cb9c"
  },
  {
    "url": "content-001-Soft/title-001-Window/index.html",
    "revision": "dd6446af1aac6008f5a8974e42920ede"
  },
  {
    "url": "content-001-Soft/title-001-Window/record-001.html",
    "revision": "b02baf3bf72a0c527714cb220310fefc"
  },
  {
    "url": "content-001-Soft/title-001-Window/record-002.html",
    "revision": "3ce657215609f2c44a721dcf857a5642"
  },
  {
    "url": "content-002-Knowledge/index.html",
    "revision": "1ddcff92aeaca460732b7270f2bb3cc0"
  },
  {
    "url": "content-002-Knowledge/title-001-Git/index.html",
    "revision": "b94239e611890f2abc2c109a9fb825ca"
  },
  {
    "url": "content-002-Knowledge/title-001-Git/record-001.html",
    "revision": "e6aa2ff0dcf79bd431e5c82ead4833e3"
  },
  {
    "url": "guide/index.html",
    "revision": "e301fc6045dfec544c5e0f349c809292"
  },
  {
    "url": "icons/android-chrome-128x128.png",
    "revision": "9c03d203f891417a59febd6c337a9f96"
  },
  {
    "url": "icons/apple-touch-icon-128x128.png",
    "revision": "9c03d203f891417a59febd6c337a9f96"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "4efd2e4de9258c9214331f38db052dd3"
  },
  {
    "url": "index.html",
    "revision": "91ee409beeecd576fa529fdf52c1b234"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
