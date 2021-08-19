const staticCache = "static-site-v3";
const dynamicCache = "dynamic-cache-v3";
const assets = [
  "images/adidas.svg",
  "images/axe.svg",
  "images/blue.jpg",
  "images/facebook.svg",
  "images/instagram.svg",
  "images/icon.png",
  "images/microsoft.svg",
  "images/nivea.svg",
  "images/samsung.svg",
  "images/twitter.svg",
  "images/up-arrow.svg",
  "/",
];
self.addEventListener("install", (event) => {
  console.log("service worker installed");
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log("caching");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (event) => {
  // console.log('service worker activated')
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCache && key !== dynamicCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  // console.log("service worker fetch", event.request.url);
  if (!(event.request.url.indexOf("http") === 0)) return;
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(event.request).then((fetchRes) => {
          return caches
            .open(dynamicCache)

            .then((cache) => {
              cache.put(event.request.url, fetchRes.clone());
              return fetchRes;
            });
        })
      );
    })
    //   .catch((err) => {
    //     return caches.match("/offline");
    //   })
  );
});
