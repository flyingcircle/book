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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b349dd32995501e2777fc8d81ef78c5f"
  },
  {
    "url": "assets/css/10.styles.10cb9212.css",
    "revision": "6b045288626bde1df27f741addd7595f"
  },
  {
    "url": "assets/css/11.styles.24ddf39a.css",
    "revision": "f1ff0c6676ff5c97b054ecc7fdec470b"
  },
  {
    "url": "assets/css/12.styles.968d98ae.css",
    "revision": "625d915614c1be386e6e5b93da3c6842"
  },
  {
    "url": "assets/css/13.styles.1c25cc96.css",
    "revision": "13011f5938ae3d59d206d9f9f18af3f6"
  },
  {
    "url": "assets/css/14.styles.1efa1adb.css",
    "revision": "3dc9c06b053a03dc7daf10694dee1a30"
  },
  {
    "url": "assets/css/15.styles.1fd41f0e.css",
    "revision": "de34a0eed87ffa9d2407ee4c2cc7f9bd"
  },
  {
    "url": "assets/css/2.styles.ec2d77e2.css",
    "revision": "39cdb0e25e7fb01e598402b7d3e54a97"
  },
  {
    "url": "assets/css/3.styles.25656891.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/4.styles.51fff030.css",
    "revision": "f73378291fd49fd98de618de54c2d451"
  },
  {
    "url": "assets/css/5.styles.3e458acc.css",
    "revision": "2be6dfb22b9887d2a7cbfe4c44431be0"
  },
  {
    "url": "assets/css/7.styles.98a7772a.css",
    "revision": "f8b497d7a3eb0bb6e807d9d7ead7620f"
  },
  {
    "url": "assets/css/8.styles.0beb5e7f.css",
    "revision": "1d134b7cb372db327faabea7a2a82191"
  },
  {
    "url": "assets/css/9.styles.b74aafbd.css",
    "revision": "3f434d54d1f0d726a05c1cca6c9ddbb9"
  },
  {
    "url": "assets/css/styles.cdb3fd7c.css",
    "revision": "d4e4aeb67da93cfdc8acd1e35ace9b85"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.8e0c4c5b.js",
    "revision": "87dca2fa60624a2350bc1ffe0f9192ca"
  },
  {
    "url": "assets/js/10.10cb9212.js",
    "revision": "19af3fe7c4ea49066300ecf0ce6da887"
  },
  {
    "url": "assets/js/11.24ddf39a.js",
    "revision": "d0ad49588b1c52491a4d3ca0db2ccd14"
  },
  {
    "url": "assets/js/12.968d98ae.js",
    "revision": "dc789e73834b9a02a5a8af27ac7d71cc"
  },
  {
    "url": "assets/js/13.1c25cc96.js",
    "revision": "c521c3205a4948110b7f6cf241ac0df8"
  },
  {
    "url": "assets/js/14.1efa1adb.js",
    "revision": "ab6392ff03536a95e909d8363f71a867"
  },
  {
    "url": "assets/js/15.1fd41f0e.js",
    "revision": "49d3200148d8bde22200194ad3312add"
  },
  {
    "url": "assets/js/16.1553eb9a.js",
    "revision": "ab772c2df0321290fc4dbf542b701aa7"
  },
  {
    "url": "assets/js/17.a88ea9cf.js",
    "revision": "7d10b52bb5c05a3e6e2513963c0acc76"
  },
  {
    "url": "assets/js/18.4fb65c59.js",
    "revision": "46d27f41570a256792040b63b9dbfdc3"
  },
  {
    "url": "assets/js/19.208c6957.js",
    "revision": "278c0f4e0043bdc2ea69d48ede065b02"
  },
  {
    "url": "assets/js/2.ec2d77e2.js",
    "revision": "dbb29a32dc7d5175b14a0c5e6254b19c"
  },
  {
    "url": "assets/js/20.667944a2.js",
    "revision": "2d40d96a02046f6c0951145324cb4586"
  },
  {
    "url": "assets/js/21.7293fc20.js",
    "revision": "8a19635b23aae6fdd466b2cc5ccbb6e6"
  },
  {
    "url": "assets/js/22.8890423c.js",
    "revision": "6bc0439cc088f82b644dd2b1f8f10ad4"
  },
  {
    "url": "assets/js/23.9aadf583.js",
    "revision": "77da648588fa77d9aadde34ecc8899df"
  },
  {
    "url": "assets/js/24.9335c8ca.js",
    "revision": "5009419ae4f7aa4cfb1f17895db8d5e5"
  },
  {
    "url": "assets/js/25.17080a90.js",
    "revision": "c55559a081cbe9eb27c6aa33a79b3ce5"
  },
  {
    "url": "assets/js/26.8a546e0e.js",
    "revision": "0e419d68086e9108e3924f107fa6646a"
  },
  {
    "url": "assets/js/27.c4751c7e.js",
    "revision": "d5666323964f7aa61d2d249720c1de0d"
  },
  {
    "url": "assets/js/28.32244480.js",
    "revision": "4c9451f44d271fafb30e6cc3323409ba"
  },
  {
    "url": "assets/js/29.cfc917d5.js",
    "revision": "e3a9ea8bc276d8683fd405c29489d750"
  },
  {
    "url": "assets/js/3.25656891.js",
    "revision": "cabce569f23adfffeb47726d6402f010"
  },
  {
    "url": "assets/js/30.b1bf7029.js",
    "revision": "9a3610cbf89b766e1add0ac3ac11e2c1"
  },
  {
    "url": "assets/js/31.3d1d53cd.js",
    "revision": "c2b014942ee7330f4a3be0ccc2bed6cd"
  },
  {
    "url": "assets/js/4.51fff030.js",
    "revision": "81f67cd6d43ddf52f61b0a286b486671"
  },
  {
    "url": "assets/js/5.3e458acc.js",
    "revision": "a968e82931921bbe8f5b3f1512b5799a"
  },
  {
    "url": "assets/js/6.3a0a4f94.js",
    "revision": "4a0cd4832f6d6e657e4271e841d9c5e9"
  },
  {
    "url": "assets/js/7.98a7772a.js",
    "revision": "72ff81e3d744375aa52bb96dee7c6442"
  },
  {
    "url": "assets/js/8.0beb5e7f.js",
    "revision": "fc774d8a6ffc224089dfbc290fca6a55"
  },
  {
    "url": "assets/js/9.b74aafbd.js",
    "revision": "4598020c463f6aad66af6e22816b8425"
  },
  {
    "url": "assets/js/app.cdb3fd7c.js",
    "revision": "91a8e6604fc062b4dee15cc9dd9fb1a2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "efd1cb89709e39046478477fcec3fa28"
  },
  {
    "url": "dedication/index.html",
    "revision": "21d0c38012aba4778a38b803e801c7d3"
  },
  {
    "url": "errors/index.html",
    "revision": "f34606b1211576a41b1234b58afb3f55"
  },
  {
    "url": "flood/index.html",
    "revision": "97af985077b40080cc83d86ae605fb7c"
  },
  {
    "url": "gospels/index.html",
    "revision": "da647ce180016339c17af12c552d7d75"
  },
  {
    "url": "images/candle-icon.png",
    "revision": "2a1da753bd9e19fd620cf1e39ecbff91"
  },
  {
    "url": "images/dendrochronology.jpg",
    "revision": "cbb139c6b1f6186ad65061491231f7cb"
  },
  {
    "url": "images/isaiah_stats.png",
    "revision": "99776e5588d13dadbd55cd9e16bb01b7"
  },
  {
    "url": "images/Paul_Hapax_Legomena.png",
    "revision": "46bb30162e6d56667884ab311d976ace"
  },
  {
    "url": "images/Paul_Unique_Words.png",
    "revision": "0c578b070f72c3cdd22801586a5c8e8b"
  },
  {
    "url": "images/Tree.ring.arp.jpg",
    "revision": "72a18c9a5a2cc671c67c265a36d461b1"
  },
  {
    "url": "index.html",
    "revision": "c824049e824e5922c8565ac34bdb53ce"
  },
  {
    "url": "introduction/index.html",
    "revision": "c0375aca9ba2bea844997b70c82133e4"
  },
  {
    "url": "nt/index.html",
    "revision": "3074be1302afec28c9c0133047f71903"
  },
  {
    "url": "ot/index.html",
    "revision": "2955fb1c5d7e2dc5f73a12fcc4d0fa2f"
  },
  {
    "url": "other/index.html",
    "revision": "5b4475b2bd8cfe35747239dff99214e0"
  },
  {
    "url": "paul/index.html",
    "revision": "044b7b14ce7c3f5fc8c43d8e79d16812"
  },
  {
    "url": "peter/index.html",
    "revision": "c6ac8cdb3b2f351b0bd430e6aa68e4a5"
  },
  {
    "url": "preface/index.html",
    "revision": "95762288dca574d13bba1bc29eabea3d"
  },
  {
    "url": "prophecies/index.html",
    "revision": "43b1f6c23267888416c6877b85f66645"
  },
  {
    "url": "q&a/index.html",
    "revision": "1584e2cd3644b8435c4473b4e3038e57"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
