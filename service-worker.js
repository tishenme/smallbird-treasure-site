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
    "revision": "0341da16113c63b3c772c5e47bbe7820"
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
    "url": "assets/js/23.534671ce.js",
    "revision": "4220ac4eaad0c8998903b6b011d34309"
  },
  {
    "url": "assets/js/24.cfe0bb5a.js",
    "revision": "1c477316bd1b52d27d800f271ccef7d0"
  },
  {
    "url": "assets/js/25.0fd733f7.js",
    "revision": "3433d5abc32e5e1eb044713464550f37"
  },
  {
    "url": "assets/js/26.43c91c3f.js",
    "revision": "6d6c191d7dbecedc52c85f73d414b237"
  },
  {
    "url": "assets/js/27.353fe24d.js",
    "revision": "a4aca9cf14ddce967ee77e25929cec08"
  },
  {
    "url": "assets/js/28.aaa96260.js",
    "revision": "76affa24e9953967794e5ec2a9d8bb01"
  },
  {
    "url": "assets/js/29.115dada4.js",
    "revision": "fe6a6ee2330ef3be6d4c8825e498590c"
  },
  {
    "url": "assets/js/3.e883c01a.js",
    "revision": "1d0133839c158a54af56c1fcca7c9cb7"
  },
  {
    "url": "assets/js/30.825b7754.js",
    "revision": "c99a4ca3067c54177c84bcbb4152f333"
  },
  {
    "url": "assets/js/31.4bb7141a.js",
    "revision": "a94c93454156f813267f1144203f9762"
  },
  {
    "url": "assets/js/32.20fa9c56.js",
    "revision": "e6037028b08fe1666ae719d4660553a9"
  },
  {
    "url": "assets/js/33.980d6fc6.js",
    "revision": "dbc1ab47e856bef3f8120a8884cdfe33"
  },
  {
    "url": "assets/js/34.0a029cfd.js",
    "revision": "52eccb3b5942bbff861ae5f9a796b15e"
  },
  {
    "url": "assets/js/35.4d584373.js",
    "revision": "4983dd8b200901b074a60985baf980d2"
  },
  {
    "url": "assets/js/36.025904b8.js",
    "revision": "5aa916ab5ef01f30e66a4402ad186165"
  },
  {
    "url": "assets/js/37.1ef23a59.js",
    "revision": "58d0ee9a19780188b47c09f08ed1bd29"
  },
  {
    "url": "assets/js/38.d70cfcd8.js",
    "revision": "f85c1da635dd9ef8fee17699068841ba"
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
    "url": "assets/js/app.535dead9.js",
    "revision": "b3b55e80f65d57412ce16860c0bb7dbe"
  },
  {
    "url": "assets/js/vendors~docsearch.e8a5b9f6.js",
    "revision": "da7c5bb2fcc24cbd05b612f365de94ed"
  },
  {
    "url": "content-001-Soft/index.html",
    "revision": "476fca5c8dda16ba35d2fe6bd961feae"
  },
  {
    "url": "content-001-Soft/title-001-Window/index.html",
    "revision": "967efcd3c10f59b92aad1dd37f8d6b6a"
  },
  {
    "url": "content-001-Soft/title-001-Window/record-001.html",
    "revision": "a05c3166a3545ef8f2df2760a97fde78"
  },
  {
    "url": "content-001-Soft/title-001-Window/record-002.html",
    "revision": "f6e88ff68a59476114aaaed3881617b7"
  },
  {
    "url": "content-002-Seek/index.html",
    "revision": "40d0ffb1829441a9141b86c1e3994915"
  },
  {
    "url": "content-002-Seek/title-001-Markdown/index.html",
    "revision": "938271e7a3f5ccbc6017a4a1851e4a3e"
  },
  {
    "url": "content-002-Seek/title-001-Markdown/record-001.html",
    "revision": "b449aa902cb39c14eed3549e986a93f0"
  },
  {
    "url": "content-002-Seek/title-001-Markdown/record-002.html",
    "revision": "1c7b2f56a5552ba97718a2ec0ea139ca"
  },
  {
    "url": "content-002-Seek/title-002-Git/index.html",
    "revision": "8e88291f1a7a36ebd1cd0e9e8e26c747"
  },
  {
    "url": "content-002-Seek/title-002-Git/record-001.html",
    "revision": "7c1fb79e05e157d7c7dbce0b8bb3c68b"
  },
  {
    "url": "content-002-Seek/title-002-Git/record-002.html",
    "revision": "7926783c6bf0f4670774cc3152c8e482"
  },
  {
    "url": "content-002-Seek/title-002-Linux/index.html",
    "revision": "e902cd2ef72e412f6d87a5783fcdd32a"
  },
  {
    "url": "content-002-Seek/title-002-Linux/record-001.html",
    "revision": "b7bc3536dba826c95becfd3f98cef2d4"
  },
  {
    "url": "content-002-Seek/title-002-Linux/record-002.html",
    "revision": "c6b110e1e32d25be4fbe09b811a37fc3"
  },
  {
    "url": "guide/index.html",
    "revision": "0380081cbbe0c8a98dfaf1c7b41fd99e"
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
    "revision": "187c65db54b3a6312d4e89f5191ce494"
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
