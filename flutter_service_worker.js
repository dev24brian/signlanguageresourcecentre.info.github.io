'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6a568383d188fa082124c0c2b03315cd",
"assets/AssetManifest.bin.json": "df8e46b942c95dd46ee26875abc031b2",
"assets/AssetManifest.json": "00c964d13389f957e198049ab13c730c",
"assets/assets/icon%25201.jpg": "fba79d2c7eba59ca75b41fb6de1860e3",
"assets/assets/icon%25204.jpg": "c82b8159c5fbe65ad82e204ac279c55e",
"assets/assets/icon%25206.png": "ad87cd746e0066968c30e55b705ec468",
"assets/assets/icon%25207.png": "eef835e665ab4c33e663fc97654bf9b8",
"assets/assets/icon3.jpg": "0550563705bfaf8e11100c677115d70b",
"assets/assets/icon5.png": "a1cc6d6c04cfd12be95b4d13cd881bfe",
"assets/assets/image1.JPG": "7659cb463399f338da9283dc71915c3b",
"assets/assets/image10.JPG": "2d05a2cb93be68c044c0f4fe9fdec35f",
"assets/assets/image11.JPG": "45a4e81f8c02509177739da51aa37b45",
"assets/assets/image12.JPG": "1eaa362786e9a34837d658f7ed5f9f50",
"assets/assets/image13.JPG": "80c0b7d59b764cfb80c7ea1a0f01a388",
"assets/assets/image14.JPG": "52c12cc3183a0727674024e57dff2303",
"assets/assets/image15.jpg": "a0ff3ad777f61f8c8f82854b92c2805d",
"assets/assets/image16.jpg": "52b95a25c1318967648e31c2c01ee129",
"assets/assets/image17.jpg": "854baa22142cb49b37f06cc6b4a2cad0",
"assets/assets/image18.jpg": "ac3fe0c82c123a4280bbed7369642efe",
"assets/assets/image19.jpg": "afafbd853c38034924d2c311035150c1",
"assets/assets/image2.JPG": "df07338198c963e7d44ec80765cecb8b",
"assets/assets/image20.jpg": "a221e162c45779b877c659967c6c1f41",
"assets/assets/image21.jpg": "b8cd3f630485eb59b668c66914062b5d",
"assets/assets/image22.jpg": "30f662ca47ca749ad44ec1fadf54900b",
"assets/assets/image23.jpg": "0534cac5fedb60fd91ed2b0af40738b9",
"assets/assets/image24.jpg": "ef5e609976f9c8755d9a398afac7e493",
"assets/assets/image25.jpg": "3bf9e669e757116749144f398a575470",
"assets/assets/image26.jpg": "5eae328f1ab323ebc165658a67f81578",
"assets/assets/image27.jpg": "59bdb575113fb88424e0b3f911cda291",
"assets/assets/image28.jpg": "ad312b827de94f45633b53c6f3e6df16",
"assets/assets/image29.jpg": "911ca4e28a0ef09ae0c75855da84826b",
"assets/assets/image3.JPG": "da09da61027a001a037dd731bbb70107",
"assets/assets/image30.jpg": "fd88c96d767bdcf8b51b6ae43849f3c4",
"assets/assets/image31.jpg": "422639f6415214719c116f125a090afb",
"assets/assets/image32.jpg": "1bdace4fcbd96c8ae0b3055bdec825f6",
"assets/assets/image33.jpg": "a1c7ac27f3b8a0559079fe5bf4a11a71",
"assets/assets/image34.jpg": "32f6a70f62920edc46ccc5449c0e65b1",
"assets/assets/image35.jpg": "800b2c8c70f139f6bc740a3b4f545f66",
"assets/assets/image36.jpg": "493c28773f105a1c1437a72d0b8a222a",
"assets/assets/image37.jpg": "274b1e01cf23636060e798dd465f7c98",
"assets/assets/image38.jpg": "07a723ec4091c792f18b7bc475952ac3",
"assets/assets/image39.jpg": "8191402d98bd23f926e4036f0e84dd32",
"assets/assets/image4.JPG": "0b356d575f181e3f3e783b861393eab6",
"assets/assets/image40.jpg": "dc75d3dd63c2c2cc05cd86281b91c253",
"assets/assets/image41.jpg": "0beb4c99a65d6cba026b1335be036af5",
"assets/assets/image42.jpg": "854baa22142cb49b37f06cc6b4a2cad0",
"assets/assets/image43.jpg": "c103ae518bed884f35c7004632099f85",
"assets/assets/image44.jpg": "ac3fe0c82c123a4280bbed7369642efe",
"assets/assets/image45.jpg": "afafbd853c38034924d2c311035150c1",
"assets/assets/image46.jpg": "a0ff3ad777f61f8c8f82854b92c2805d",
"assets/assets/image47.jpg": "52b95a25c1318967648e31c2c01ee129",
"assets/assets/image5.JPG": "f373d5b9166aa750bf64e2d826d1b76d",
"assets/assets/image6.JPG": "c60a1314cb3c457c107353b48edc8bc1",
"assets/assets/image7.JPG": "7279801e541e5c0f694e64855ce26d13",
"assets/assets/image8.JPG": "0b356d575f181e3f3e783b861393eab6",
"assets/assets/image9.JPG": "a45148715ade9d66025120b4be0988f2",
"assets/assets/logo.jpg": "43a4de213ea6fe554cdb3c9c81b31e75",
"assets/assets/logo2.png": "a5fdfd78b92412ed02fc1ea8ef7a5143",
"assets/assets/logo3.png": "17edb48e6174385f49b0f671ac5bb214",
"assets/assets/logo4.png": "a3c111469af3792c652bca58910d2472",
"assets/assets/logo5.png": "a3c111469af3792c652bca58910d2472",
"assets/assets/logo6.png": "9ddb49c5e6141b79d7a08847c1cdc498",
"assets/assets/profile1.jpg": "43c2bf60b2f927ae4cc0bd70c7304497",
"assets/assets/profile2.jpg": "bcbffbeadd66c71433fdb58217a01da4",
"assets/assets/profile3.jpg": "2ab6bb3dbb5ecf6d081de54e500e4fb3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "2fcbe95e2c63afdd59d1bbaf89bb45f2",
"assets/NOTICES": "3f14228c7b01f04e0da316fbeca1b698",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5e28745829ffc477b3e134e126d7d9b7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0b183d295566322099f32c6f777e3775",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fc86ad62aa56ac2d78b0cbbaff39f12b",
"/": "fc86ad62aa56ac2d78b0cbbaff39f12b",
"main.dart.js": "c590ca66c77b3483de593b4df8278894",
"manifest.json": "b41cc0146a41a447f3169faa3556c87a",
"version.json": "74afca642f949a99672722820f59c05a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
