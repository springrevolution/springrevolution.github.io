'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3045a0560582256a230d8195b99dabee",
"index.html": "6fb5f0546bc88f685f83446511495b8b",
"/": "6fb5f0546bc88f685f83446511495b8b",
"styles.css": "01ddf5811b8593a3d721ede630e064d4",
"main.dart.js": "a5920e0d39a59fe5b658e90b0e6ed97d",
"img/spring_revolution.png": "ccee62a5ed8c79374417ede042605d8e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b265d13b5878a5989b7486ff87fdc0ed",
".git/config": "8daa81aa79524303e5e0280262b0e4f7",
".git/objects/59/495e7224100c56babc09ace9a88f29b6dc574f": "3b4ec89ce09bb4d7fe70af7f7ad4291d",
".git/objects/66/61bffa806f2bfe2e018dda9cd3759c836cd378": "51fd34a9ba30c302b6e1724e4522f9a2",
".git/objects/57/48a6a909bac09b7154e9d7887e072111faae5f": "7308e6af99e89e14357af2ccab6954cc",
".git/objects/0b/4d0b47664357af26dfb082e62d280339c52dc5": "7bcaa6aa493c4fab9cc1029486c59625",
".git/objects/34/3cce7778cd4417d6ac7eb6ab021edb02b260ec": "4b4f34e52cdd02b6d3ebbb4acf736a2e",
".git/objects/5a/574873098cdb5c905e534e54111f5d74d09cba": "baa3f5a4348dec8d3333e96b1f9fef8b",
".git/objects/05/3fbf3dbc447015421850ff0ec418cc64d3d0a8": "1984ccc37f9f7a2ec94ddd6345515b4c",
".git/objects/9c/30a924f2c6abe5ebcb45e3b9653f4585accea0": "6ba9848a3e1d6748b78d1807966a9157",
".git/objects/9c/040af77d57ee1a0320a46d92430c583cafba23": "605a5a876f6dd2f8449bc2dd905fe97d",
".git/objects/ad/d633acbc92c8b27532954784e4ccd07233686c": "525d7efc5b2f19b399e94b433e60548a",
".git/objects/d1/54103493a8bee40ccd89b1f19a5dc9f9b06e24": "6c9f9b1782372477c6df0431713373f2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ca/4448c43ffb050af400a82492bea2c95b73b6b5": "55a19dedefee30bb0667fa4ba1324e2f",
".git/objects/c8/7fd14630458879238c58ce7c1ca4c646179e2f": "fc454267b9c6740d254cf01c624c0051",
".git/objects/c1/3c4046617e4741aa9966cbc8dbdcfafc093900": "816794e475bcbf8a8b58b830ff4bab36",
".git/objects/c1/dba375e426b3760c45130611fda6eb7e2ac9a8": "2eabf887029bc4df31936367688d2985",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/148aa0fc7805f05a143f2adf8cd50b1d4d9e89": "de930de5a0878423af853964f736e583",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/e31b3222c687720a5e15bfa3e4adff2e29a878": "d3437d7617d419ba699d62bb25568a59",
".git/objects/7c/75701cd1aaff69f8458dfbae27075660b03ced": "baca60c847c495d1c0754652e9d7cc5f",
".git/objects/1f/c07ebcc864c977032867d6e15836fcfee101a1": "ac32938be639d72680d8b94d8db72061",
".git/objects/87/501853a42b539526bd6214d388713929f7a9ec": "7d822ca827288c410dc0c9cbfc2f48a7",
".git/objects/74/4a1a22c1895c7cc03b2dc1b3e5ccd6a6863523": "29c65c5912676b95f3e8d21214e2a3f6",
".git/objects/8f/0b18831e5ca06d1c553cf6f1f2d4c2d35e2c67": "3306a9d89bdf3a2a895efe1dee75815e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/19bc2613e1da4bf31ad538b21a61d6d387b513": "56b49b2ba0c2da87e2d15d783e15d5e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/0fdf91e22ce561a4e50dc0dd6c565d05263cab": "23815a6109683feccb422fc3f4661023",
".git/objects/09/c9aac7d15977b823581dbd7d9b8017304b8ec3": "d2f39efdc5b007ae66443ae66e8f0ae2",
".git/objects/08/170cb8286a0ecbbc633e0e47be0e358ae275c5": "53bec71bf949a254460b3fcf80737145",
".git/objects/55/64656524233ee989e5fff5510b2b32252c39b3": "c19e9c4dd9f23e3af5e1f1442c67d469",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/913199852bf1dc5270264f49d6d9e4290db742": "adca159241d34c48c8d557b85b9f249f",
".git/objects/f9/dabe3f8f34979fda4de12c66003f77be27db92": "07d2dba4d849e2f93c4a8f7dd50a0dd6",
".git/objects/fa/08bc82c580a1ad87c2f4b388bf6b8aace363ff": "d21ea344114cfa193ac2316ee2fed0cb",
".git/objects/ff/76644e0f4e66cbfbcb5c384dfa2f75fd4041fd": "e68d46ffd32a1065381419e423251ccb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/08200801a656b96a0bfb627ee1795fb368e8d3": "7de385dea8b97093bd67b494f48b2955",
".git/objects/4a/bad298e8625878878856aad4e72b9d993a7644": "2dfa9466427d73523343ad3509d890f9",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/85/36c95d2487552247078ba51c51f677e19f4d1b": "7ff11f716d565ab29eee0d25e3ed1c73",
".git/objects/1c/c81a58ebcc3ee3208261fbd0326f1909be1b81": "20374e1da2b5ed77231ba1517bcc25ce",
".git/objects/40/1068943920e2dafdaff3e0c42dd8e802654f6c": "7700cb2454fc0961e0f6c96b1d3e975a",
".git/objects/8b/01fe10b1ad233ab79966d32bfba9678a0f7071": "de9ce050c4592b0570624e0d5c06d43f",
".git/objects/13/b96e9efad9018cda75c4c69042c01c0b4cc5b2": "9ddd84c9a723109b380c2a35f9c79399",
".git/objects/14/2cfbe27338aa5fa68bb6d8ee734a6bdbfd3487": "d6a5393e24f4f48fcfb04d6a5af057a1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65f6f8d2cc1ae70fa1a5023e1c8ef782",
".git/logs/refs/heads/main": "828d7a630d6c7e2ba8361aead490e91b",
".git/logs/refs/remotes/origin/main": "0a5a299d96ef65b07c3503d1d3e6f5f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "75ee26cad1cb0b249b65770a2a637692",
".git/refs/remotes/origin/main": "75ee26cad1cb0b249b65770a2a637692",
".git/index": "10d70214da69e48b7d5bc22e268044af",
".git/COMMIT_EDITMSG": "9f275d51245f0883263adc080f33db5f",
"assets/AssetManifest.json": "272407226d04d374380c05f0ba212b74",
"assets/NOTICES": "2ebc690f8814b59df6d631e14957d107",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/spring_revolution.png": "ccee62a5ed8c79374417ede042605d8e",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/photography.jpg": "1437c475526d0d3f47f38aa0a6304b64",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/trekking.jpg": "a6f134370a145366af83dc811752d4d0",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/cover.jpg": "2e59406eee55f6efea493734eb7f7119",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/cover1.jpg": "4d03274f6b914d2fa3ad439a86b1f82e",
"assets/assets/images/cover2.jpg": "3c0d3fbf45ce48e010eff841f325f688",
"assets/assets/images/people.jpg": "0dba975899ecf0d26e29eb5b21c5db2c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
