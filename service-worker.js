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
    "revision": "b00e45583b7f9581897247c695667a87"
  },
  {
    "url": "assets/css/0.styles.baf51bb8.css",
    "revision": "5e4ea3b755f14136496070e173bfc164"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.247b1d4a.js",
    "revision": "cfcb2e24416e66b540392fd03cf7c5aa"
  },
  {
    "url": "assets/js/11.ffb23cd6.js",
    "revision": "605aa53cdb7bfc5e6401143b53265c79"
  },
  {
    "url": "assets/js/12.b9692616.js",
    "revision": "157b82f86ce341fe4306c250b64b3de6"
  },
  {
    "url": "assets/js/13.a060d4a7.js",
    "revision": "b7a17741c4915ed032b7ff2de433a500"
  },
  {
    "url": "assets/js/14.1055566d.js",
    "revision": "225cd591b3bc4c0f8949d0e3b857a00a"
  },
  {
    "url": "assets/js/15.a5edacd3.js",
    "revision": "578edff44fde7455fd72112d56a16b04"
  },
  {
    "url": "assets/js/16.8be0e105.js",
    "revision": "565a9626a38ea1b56fd8cfccc4e3fba1"
  },
  {
    "url": "assets/js/17.4ac3179e.js",
    "revision": "67ff6ec88ff4eff04188417f69efd109"
  },
  {
    "url": "assets/js/18.89820416.js",
    "revision": "f5292d851fc605811d91a94f2673aa37"
  },
  {
    "url": "assets/js/19.0bf70a57.js",
    "revision": "84d3a21e4ac2d357535bbef6d127ab43"
  },
  {
    "url": "assets/js/2.86ae35bc.js",
    "revision": "4db6a334f65a7f760bc9ccbe265e61ac"
  },
  {
    "url": "assets/js/20.d22eacb4.js",
    "revision": "859c32ac842257d1c744a725965eff89"
  },
  {
    "url": "assets/js/21.87fd872c.js",
    "revision": "071181c5f14bf09696578623ca8fa894"
  },
  {
    "url": "assets/js/22.cd2faa57.js",
    "revision": "ee606b3ed224f705b193d4dd700478ee"
  },
  {
    "url": "assets/js/23.bc99d202.js",
    "revision": "0cb0117cfd0efa1d87cbdea6f4b0e8f8"
  },
  {
    "url": "assets/js/3.86caa5d5.js",
    "revision": "d11e124ffe7bf3fd6d3f747fa1fb9f70"
  },
  {
    "url": "assets/js/4.a8754342.js",
    "revision": "243c26ecd2221e0b5d5c3255ccce12f3"
  },
  {
    "url": "assets/js/5.354bc998.js",
    "revision": "95806dbb373ea24d56e05d1f2294e42d"
  },
  {
    "url": "assets/js/6.6a82d5a9.js",
    "revision": "544db45b7659204f15d54805f5fafcdf"
  },
  {
    "url": "assets/js/7.2149415d.js",
    "revision": "73a032ea33510c4685ee5ec1c2d359ad"
  },
  {
    "url": "assets/js/8.4f73a697.js",
    "revision": "9e68cb1ae9f0ac6c7c2b51f1e62d3ec7"
  },
  {
    "url": "assets/js/9.8db955b0.js",
    "revision": "d9ba59ff0704196cace620d4b583a07c"
  },
  {
    "url": "assets/js/app.1650f810.js",
    "revision": "dfbf636d94c2cba65605d3e179ef8ebf"
  },
  {
    "url": "content-001-Soft/index.html",
    "revision": "aefef4adc060b9f910893718f1921786"
  },
  {
    "url": "content-001-Soft/title-001-Window/index.html",
    "revision": "60dbd34c6c913c566fb0260288de65b0"
  },
  {
    "url": "content-001-Soft/title-001-Window/record-001.html",
    "revision": "d05acd70fdc7f8ed3d25e59746078504"
  },
  {
    "url": "content-001-Soft/title-001-Window/record-002.html",
    "revision": "f9d17b254efd8f8e24badfafc97679f6"
  },
  {
    "url": "content-002-Seek/index.html",
    "revision": "9ec2b1a0ed44e0c537cf88cb6b7ced78"
  },
  {
    "url": "content-002-Seek/title-001-Markdown/index.html",
    "revision": "ee05a271a5f5f8a6db041bfb90c9079b"
  },
  {
    "url": "content-002-Seek/title-001-Markdown/record-001.html",
    "revision": "be72d686cc9f3bd6482d98dd7a8b5707"
  },
  {
    "url": "content-002-Seek/title-001-Markdown/record-002.html",
    "revision": "ca21d33f94ebc39d71e5d7c0dcacf184"
  },
  {
    "url": "content-002-Seek/title-002-Git/index.html",
    "revision": "5f63a647c2d18b7311b848baab1ad870"
  },
  {
    "url": "content-002-Seek/title-002-Git/record-001.html",
    "revision": "580e600f826c34731d7564cddb649991"
  },
  {
    "url": "content-002-Seek/title-002-Git/record-002.html",
    "revision": "af510c2aa18f8281e4874f2553aa29c3"
  },
  {
    "url": "content-002-Seek/title-002-Linux/index.html",
    "revision": "1aa21707a04d847dcb5b344747dfdea2"
  },
  {
    "url": "content-002-Seek/title-002-Linux/record-001.html",
    "revision": "b9864242672b4727ce86e8d939c163ef"
  },
  {
    "url": "content-002-Seek/title-002-Linux/record-002.html",
    "revision": "00a7b35266015cc97eb96dde01c895c4"
  },
  {
    "url": "guide/index.html",
    "revision": "f20bf4aca199867c758763d9855ade52"
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
    "revision": "7068ba1d4afa0a45ce978973ce894d2f"
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
