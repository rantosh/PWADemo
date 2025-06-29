const CACHE_NAME = 'sample-app-cache-v1';
const urlsToCache = [
  './',
  'https://rantosh.github.io/PWADemo/index.html',
  'https://rantosh.github.io/PWADemo/manifest.json',
  'https://rantosh.github.io/PWADemo/icons/192.png',
  'https://rantosh.github.io/PWADemo/icons/512.png'
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
