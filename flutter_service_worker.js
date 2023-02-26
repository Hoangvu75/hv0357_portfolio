'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "62487bf48fd0393e80752f0067ce39c4",
"assets/assets/fonts/SVN-Gilroy-Bold.otf": "83a4e50a248e2b9da6b2e6802834646d",
"assets/assets/fonts/SVN-Gilroy-Medium.otf": "1ae06bc5340fe8ecc9689f7435f4d57e",
"assets/assets/fonts/SVN-Gilroy-Regular.otf": "6655e711b71fad445f2fc2e071ea6f5b",
"assets/assets/fonts/SVN-Gilroy-SemiBold.otf": "82e5334b9753f83c1a97ac8419ee3c71",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/facebook.svg": "58282a443c7a222f7b57aeea001af9f0",
"assets/assets/icons/fb.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/android.jpg": "cdbdbc97b96b95e920d63d975996da64",
"assets/assets/images/android_label.jpg": "b2ec9cf3914f7057391d5a77b738982d",
"assets/assets/images/backend_dev.png": "8a797b321f4871a2525279c1ac670891",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/chat_background.png": "0bdd550b19406ca218fda7b37b059fce",
"assets/assets/images/dart_logo.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/flutter.png": "d744440971931f937269e060e720f5a7",
"assets/assets/images/flutter_label.jpg": "e6d4e8ad4b921afcf80cd2515852505b",
"assets/assets/images/hoangvu_techblog_background.png": "54e7428919f3e99348c85a01f937e0b2",
"assets/assets/images/java_logo.png": "578630e16a651d39d5788e0509c498d3",
"assets/assets/images/js_logo.png": "f00708cb380288f97a3fbfa72862ce1b",
"assets/assets/images/kotlin_logo.png": "2cf9a4b79c73281bfa2bd18d4c590f0b",
"assets/assets/images/mobile_dev.jpg": "708ab73ef4febb38253bd752f49a01ed",
"assets/assets/images/movie_background.jpg": "720b5293f9e316f1398fce14e9d0417a",
"assets/assets/images/nodejs_label.png": "75ff9fc7267035db276f1c373f96df4e",
"assets/assets/images/python_logo.png": "c5af10fd4bfb9142f3a75e92dd743aa0",
"assets/assets/images/social_network_background.jpg": "bb0f0dc6374c0189a2d8b307e682a72a",
"assets/assets/images/student_manager_background.png": "78e64479a1dd21b7233d1e4f8a7ceb89",
"assets/assets/images/techday_background.jpg": "781574f2806ab8e6e2fba0ddfdd983d8",
"assets/assets/images/ts_logo.png": "2909cc6b65ff2f5f85326741ba018245",
"assets/assets/images/vhh.jpg": "c4fbc8235838540c2a282b4d36e7eccd",
"assets/assets/images/vhh_2.jpg": "0fc607db00b7a1943625757735ba7357",
"assets/assets/images/vhh_ava.jpg": "c5e9760114c336f90d1119f69b991d19",
"assets/assets/images/weather_background.jpg": "587c5471eb188d3cda2179f4b6a496d7",
"assets/assets/images/web_dev.jpg": "6c62814e3caa70956ac8a6989edf8c85",
"assets/assets/images/xinhxinh_background.png": "c65095bf4fe5770f8798870880f24f33",
"assets/assets/pdf/CV_Vuhuyhoang.pdf": "a7ecc303e66986b9b1d9b23dabc6478c",
"assets/FontManifest.json": "39df9c41cd501f3ad6ccf732d69a581d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a914ba2f83ee0a5c939d67a4b38beb5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "03f84fe0bbf484569fa6515cab4c8a50",
"/": "03f84fe0bbf484569fa6515cab4c8a50",
"main.dart.js": "0ca88772640b63971e861a909d52ca2f",
"manifest.json": "0898e1a0ebb4e54fa60499f524b97931",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
