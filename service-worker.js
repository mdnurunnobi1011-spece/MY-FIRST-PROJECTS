const CACHE_NAME = "my-first-project-v1";

const FILES_TO_CACHE = [
  "/MY-FIRST-PROJECTS/",
  "/MY-FIRST-PROJECTS/index.html",
  "/MY-FIRST-PROJECTS/style.css",
  "/MY-FIRST-PROJECTS/app.js",
  "/MY-FIRST-PROJECTS/manifest.json",
  "/MY-FIRST-PROJECTS/icon-192.png",
  "/MY-FIRST-PROJECTS/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
