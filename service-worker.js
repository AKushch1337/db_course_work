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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "073a88ffba562deea32f65a3e9763b85"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.19d30654.css",
    "revision": "356f9620c5efc4f3d09603a9a1635264"
  },
  {
    "url": "assets/img/relscheme.20f4bef6.png",
    "revision": "20f4bef68d64bf57625c3b91cc2d2821"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SourceDeleteQuery.bbdf996f.png",
    "revision": "bbdf996f13713200a9e59bfb9bf238d1"
  },
  {
    "url": "assets/img/SourceDeleteResult.db6b2978.png",
    "revision": "db6b2978935fc79f5d24a8f866ae742e"
  },
  {
    "url": "assets/img/SourceGetAll.295138d4.png",
    "revision": "295138d4ba2e273e66d5df12a2e42dca"
  },
  {
    "url": "assets/img/SourceGetByID.7537716b.png",
    "revision": "7537716b2a7d3df35a3c94144a44e407"
  },
  {
    "url": "assets/img/SourcePostQuery.182bf0dc.png",
    "revision": "182bf0dcdb7fa0c85d77428fefa0ac19"
  },
  {
    "url": "assets/img/SourcePostResult.032a80f6.png",
    "revision": "032a80f6ce6c76ec2e85aaf127ac8dfb"
  },
  {
    "url": "assets/img/SourcePutQuery.a62433a4.png",
    "revision": "a62433a45cd2c0c10378ca1bfba02632"
  },
  {
    "url": "assets/img/SourcePutResult.af7ecaa6.png",
    "revision": "af7ecaa63f158e9afcf5e959e1ca7e5f"
  },
  {
    "url": "assets/img/UserDeleteQuery.f8094219.png",
    "revision": "f80942191214954b260bbd07d1879135"
  },
  {
    "url": "assets/img/UserDeleteResult.6c5fcc64.png",
    "revision": "6c5fcc644bdac7e7d88e12bbc952587e"
  },
  {
    "url": "assets/img/UserGETAll.3de90fd7.png",
    "revision": "3de90fd70b3119b66c51f10f5f50c114"
  },
  {
    "url": "assets/img/UserGetByID.c025d86b.png",
    "revision": "c025d86b19c134bf7eba7c7c3f425ed7"
  },
  {
    "url": "assets/img/UserGetError.0816d8b1.png",
    "revision": "0816d8b12a2e35bdd6bd739fe71a986b"
  },
  {
    "url": "assets/img/UserPostQuery1.1cda87b7.png",
    "revision": "1cda87b7ab7b4b74efdfc01d1b2c5c7f"
  },
  {
    "url": "assets/img/UserPostResult.df887599.png",
    "revision": "df887599b9c3efe2768f2a68cbd26b5f"
  },
  {
    "url": "assets/img/UserPutQuery.19beff46.png",
    "revision": "19beff469eaf4ecf552b04ad28d43302"
  },
  {
    "url": "assets/img/UserPutResult.bcfb8ac1.png",
    "revision": "bcfb8ac193916e05485d01f261c867cd"
  },
  {
    "url": "assets/js/10.75b440dc.js",
    "revision": "843ca06b6324c73e1faccac31f7e18db"
  },
  {
    "url": "assets/js/11.4cb60fa0.js",
    "revision": "a3916bea359c7c37f9584953c18baf01"
  },
  {
    "url": "assets/js/12.9caeee7d.js",
    "revision": "1b7d8ae0eec01831821302aef129ea12"
  },
  {
    "url": "assets/js/13.14cc7b02.js",
    "revision": "c659fde7c5a0ef621e4bae6324777471"
  },
  {
    "url": "assets/js/14.94c3075b.js",
    "revision": "0bdc358ed53c8a5b6a0115da08305ea2"
  },
  {
    "url": "assets/js/15.78199be7.js",
    "revision": "534f082029119ff57cbc26f9f6af74cc"
  },
  {
    "url": "assets/js/16.f284de56.js",
    "revision": "7d9735acd7925338ab808448a8ee5583"
  },
  {
    "url": "assets/js/17.d9397b72.js",
    "revision": "2bc54c2445fa07b8de81c4534c6f1a8d"
  },
  {
    "url": "assets/js/18.0103d044.js",
    "revision": "19d79c4015791eabf9dadd5898cdb88f"
  },
  {
    "url": "assets/js/19.8d8d0aad.js",
    "revision": "23466e221f3d46124848621474cf94cb"
  },
  {
    "url": "assets/js/2.87444649.js",
    "revision": "2d5c35d4acf684f20323db5cd5d30c7f"
  },
  {
    "url": "assets/js/20.45de409d.js",
    "revision": "05ab032e9255292ad95dea44de78dd80"
  },
  {
    "url": "assets/js/21.9cb76a54.js",
    "revision": "971074fc933ce0fa1632b7bd469e6c20"
  },
  {
    "url": "assets/js/22.2bae490a.js",
    "revision": "e960bd67aa92ea75e843b5f42e0c0efc"
  },
  {
    "url": "assets/js/23.167ebf7c.js",
    "revision": "5cf9d6ab9b6aa9d7aaf8cd2dfa615aef"
  },
  {
    "url": "assets/js/24.97ae0f3c.js",
    "revision": "3c8f16debb566b5e7f6fe2a5c8006662"
  },
  {
    "url": "assets/js/26.41d20dc7.js",
    "revision": "058d1850acc933be9709b88b2a9aa2e0"
  },
  {
    "url": "assets/js/3.0587a9bf.js",
    "revision": "c453b2a7d5c85a16a2694a4604399fdf"
  },
  {
    "url": "assets/js/4.a970c66f.js",
    "revision": "745bbbe08fa1beca6773cd916e9163c8"
  },
  {
    "url": "assets/js/5.1756f276.js",
    "revision": "d791bb535293cdb0bbddc1c179c4e741"
  },
  {
    "url": "assets/js/6.dcb4e63c.js",
    "revision": "093b31cc0efeb3196e9a360fe20b75db"
  },
  {
    "url": "assets/js/7.e6fa9c08.js",
    "revision": "963e7c0e51c2872fc164cbe617ca4810"
  },
  {
    "url": "assets/js/8.bdeeed4e.js",
    "revision": "37aea7381d3d8f866addcbfe33ecf15d"
  },
  {
    "url": "assets/js/9.00b28d5e.js",
    "revision": "80eaede25a264341a3d93b1da1b9d829"
  },
  {
    "url": "assets/js/app.5fc13658.js",
    "revision": "f8fbfa36e4ad14f87c41fd2ec1f1d5d2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8973bd5e7ef45feac8d2574da606a00e"
  },
  {
    "url": "design/index.html",
    "revision": "002de7defeef8de03ae6480869f19ace"
  },
  {
    "url": "index.html",
    "revision": "3d5001be3f66a7718f6622926608283e"
  },
  {
    "url": "intro/index.html",
    "revision": "c87a53019a71c9104146a82927e4090f"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8612e874855ffe824df3de0de2a0e99f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "66197bf31ff15785a73a31e7497d768c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b9a3a662605def98cfd714abc9e16961"
  },
  {
    "url": "software/index.html",
    "revision": "1fca169d9711d80fe2391c2bb3327a10"
  },
  {
    "url": "test/index.html",
    "revision": "277f1c245ff2101d11ea6dfef5b301ff"
  },
  {
    "url": "use cases/index.html",
    "revision": "0fef765b46d7746001644cc13ec91f77"
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
