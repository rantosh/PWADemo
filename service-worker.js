const CACHE_NAME = 'sample-app-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/192.png',
  './icons/512.png'
  // Add more assets if needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
